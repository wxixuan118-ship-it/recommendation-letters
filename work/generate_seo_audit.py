#!/usr/bin/env python3
"""Generate SEO On-Page Audit + Keywords Excel for 76 pages."""

import os
import re
import urllib.request
import pandas as pd
from bs4 import BeautifulSoup
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side, numbers
from openpyxl.utils import get_column_letter
from openpyxl.formatting.rule import ColorScaleRule, CellIsRule

# === Paths ===
PUBLIC_DIR = '/Users/w118/Documents/recommendation-letters/public'
COVERAGE_FILE = '/Users/w118/.trae-cn/attachments/6ab8a7bba22a7ef59254b19e/b7f24e1e-efe3-401b-ba34-002f36ea1cd6_efb1aacd-b438-4241-b9c6-3ef06060a559_recommendation-letters.com-Coverage-Valid-2026-09-27.xlsx'
GSC_FILE = '/Users/w118/.trae-cn/attachments/6ab8a7bba22a7ef59254b19e/60f2ba68-8033-40f2-9ca6-5647e99d100f_2a503b7f-49dc-4b84-b695-8157d2ddce22_recommendation-letters.com-Performance-on-Search-2026-09-27.xlsx'
OUTPUT_FILE = '/Users/w118/Documents/recommendation-letters/seo_audit_keywords.xlsx'

# === Load source data ===
df_coverage = pd.read_excel(COVERAGE_FILE, sheet_name='表格')
urls = df_coverage['网址'].tolist()
last_crawled = df_coverage['上次抓取日期'].tolist()

df_gsc_pages = pd.read_excel(GSC_FILE, sheet_name='网页')
df_gsc_queries = pd.read_excel(GSC_FILE, sheet_name='查询数')

# Build GSC page lookup
gsc_page_map = {}
for _, row in df_gsc_pages.iterrows():
    gsc_page_map[row['排名靠前的网页']] = {
        'clicks': row['点击次数'],
        'impressions': row['展示'],
        'ctr': row['点击率'],
        'position': row['排名']
    }

# === URL -> local file mapping ===
def url_to_local_path(url):
    path = url.replace('https://recommendation-letters.com/', '')
    if path == '' or path.endswith('/'):
        return os.path.join(PUBLIC_DIR, path, 'index.html')
    else:
        return os.path.join(PUBLIC_DIR, path)

def fetch_html(url):
    """Fetch HTML from live URL."""
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=15) as resp:
            return resp.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"  Failed to fetch {url}: {e}")
        return None

def get_html(url):
    """Get HTML from local file or fetch from web."""
    local_path = url_to_local_path(url)
    if os.path.exists(local_path):
        with open(local_path, 'r', encoding='utf-8', errors='ignore') as f:
            return f.read(), 'local'
    else:
        html = fetch_html(url)
        if html:
            return html, 'remote'
        return None, 'missing'

# === Keyword extraction from URL ===
def extract_keyword_from_url(url):
    """Extract primary keyword from URL slug."""
    path = url.replace('https://recommendation-letters.com/', '').rstrip('/')
    if not path:
        return 'free letter of recommendation template'  # homepage target kw
    # Get last segment
    slug = path.split('/')[-1]
    slug = slug.replace('.html', '')
    # Convert slug to readable phrase
    keyword = slug.replace('-', ' ')
    return keyword

# === On-Page Audit ===
def audit_page(url, html):
    """Perform on-page SEO audit and return scores + details."""
    soup = BeautifulSoup(html, 'html.parser')
    primary_kw = extract_keyword_from_url(url).lower()
    kw_words = set(primary_kw.split())
    
    result = {
        'url': url,
        'primary_keyword': primary_kw,
        'title': '',
        'title_length': 0,
        'title_score': 0,
        'meta_desc': '',
        'meta_desc_length': 0,
        'meta_desc_score': 0,
        'h1': '',
        'h1_count': 0,
        'h1_score': 0,
        'h2_count': 0,
        'h2_texts': [],
        'headings_score': 0,
        'word_count': 0,
        'content_score': 0,
        'img_count': 0,
        'img_with_alt': 0,
        'img_score': 0,
        'internal_links': 0,
        'external_links': 0,
        'internal_links_score': 0,
        'external_links_score': 0,
        'url_score': 0,
        'canonical': '',
        'canonical_score': 0,
        'schema_found': False,
        'schema_score': 0,
        'paragraph_count': 0,
        'readability_score': 0,
        'total_score': 0,
    }
    
    # Title
    title_tag = soup.find('title')
    title_text = title_tag.get_text(strip=True) if title_tag else ''
    result['title'] = title_text
    result['title_length'] = len(title_text)
    
    title_score = 0
    if title_text:
        title_score += 5
        if 30 <= len(title_text) <= 60:
            title_score += 5
        elif 25 <= len(title_text) <= 65:
            title_score += 3
        if primary_kw and any(w in title_text.lower() for w in kw_words if len(w) > 3):
            title_score += 5
    result['title_score'] = min(title_score, 15)
    
    # Meta description
    meta_desc = soup.find('meta', attrs={'name': 'description'})
    desc_text = meta_desc['content'] if meta_desc and meta_desc.get('content') else ''
    result['meta_desc'] = desc_text
    result['meta_desc_length'] = len(desc_text)
    
    desc_score = 0
    if desc_text:
        desc_score += 3
        if 120 <= len(desc_text) <= 160:
            desc_score += 4
        elif 100 <= len(desc_text) <= 170:
            desc_score += 2
        if primary_kw and any(w in desc_text.lower() for w in kw_words if len(w) > 3):
            desc_score += 3
    result['meta_desc_score'] = min(desc_score, 10)
    
    # H1
    h1s = soup.find_all('h1')
    result['h1_count'] = len(h1s)
    h1_text = h1s[0].get_text(strip=True) if h1s else ''
    result['h1'] = h1_text
    
    h1_score = 0
    if len(h1s) > 0:
        h1_score += 4
        if len(h1s) == 1:
            h1_score += 3
        if primary_kw and any(w in h1_text.lower() for w in kw_words if len(w) > 3):
            h1_score += 3
    result['h1_score'] = min(h1_score, 10)
    
    # H2-H6 headings
    h2s = soup.find_all('h2')
    result['h2_count'] = len(h2s)
    result['h2_texts'] = [h.get_text(strip=True)[:100] for h in h2s]
    
    headings_score = 0
    if len(h2s) >= 3:
        headings_score += 5
    elif len(h2s) >= 2:
        headings_score += 3
    elif len(h2s) >= 1:
        headings_score += 2
    
    h2_kw_match = any(
        any(w in h.get_text().lower() for w in kw_words if len(w) > 3)
        for h in h2s
    )
    if h2_kw_match:
        headings_score += 5
    elif len(h2s) > 0:
        headings_score += 2
    result['headings_score'] = min(headings_score, 10)
    
    # Word count
    text = soup.get_text(separator=' ', strip=True)
    words = re.findall(r'\b[a-zA-Z]{2,}\b', text)
    result['word_count'] = len(words)
    
    if len(words) >= 1500:
        result['content_score'] = 15
    elif len(words) >= 1000:
        result['content_score'] = 12
    elif len(words) >= 600:
        result['content_score'] = 9
    elif len(words) >= 300:
        result['content_score'] = 6
    elif len(words) >= 100:
        result['content_score'] = 3
    else:
        result['content_score'] = 0
    
    # Images
    imgs = soup.find_all('img')
    result['img_count'] = len(imgs)
    imgs_with_alt = [i for i in imgs if i.get('alt') and i['alt'].strip()]
    result['img_with_alt'] = len(imgs_with_alt)
    
    if len(imgs) == 0:
        result['img_score'] = 2  # neutral - no images
    elif len(imgs_with_alt) == len(imgs):
        result['img_score'] = 5
    elif len(imgs_with_alt) > len(imgs) / 2:
        result['img_score'] = 3
    else:
        result['img_score'] = 1
    
    # Links
    all_links = soup.find_all('a', href=True)
    internal = []
    external = []
    for a in all_links:
        href = a['href']
        if href.startswith('#') or href.startswith('javascript:') or href.startswith('mailto:'):
            continue
        if (href.startswith('/') or 
            href.startswith('./') or 
            href.startswith('../') or
            'recommendation-letters.com' in href or
            (not href.startswith('http') and not href.startswith('//'))):
            # relative path or absolute path or same domain
            internal.append(href)
        elif href.startswith('http'):
            external.append(href)
    
    result['internal_links'] = len(set(internal))
    result['external_links'] = len(set(external))
    
    il = result['internal_links']
    if il >= 15:
        result['internal_links_score'] = 10
    elif il >= 10:
        result['internal_links_score'] = 8
    elif il >= 5:
        result['internal_links_score'] = 6
    elif il >= 3:
        result['internal_links_score'] = 4
    elif il >= 1:
        result['internal_links_score'] = 2
    else:
        result['internal_links_score'] = 0
    
    el = result['external_links']
    if el >= 3:
        result['external_links_score'] = 5
    elif el >= 2:
        result['external_links_score'] = 4
    elif el >= 1:
        result['external_links_score'] = 3
    else:
        result['external_links_score'] = 0
    
    # URL structure
    path = url.replace('https://recommendation-letters.com/', '').rstrip('/')
    url_score = 0
    if primary_kw and len(primary_kw) > 3:
        # Check if keyword appears in URL path
        kw_in_path = any(w in path.lower().replace('-', ' ') for w in kw_words if len(w) > 4)
        # Also check domain for homepage
        domain = 'recommendation letters'
        kw_in_domain = any(w in domain for w in kw_words if len(w) > 4)
        if kw_in_path or kw_in_domain:
            url_score += 3
    if len(path.split('/')) <= 3:
        url_score += 2  # not too deep
    result['url_score'] = min(url_score, 5)
    
    # Canonical
    canon = soup.find('link', attrs={'rel': 'canonical'})
    canon_href = canon['href'] if canon and canon.get('href') else ''
    result['canonical'] = canon_href
    
    if canon_href:
        if canon_href.rstrip('/') == url.rstrip('/'):
            result['canonical_score'] = 5
        else:
            result['canonical_score'] = 2
    else:
        result['canonical_score'] = 0
    
    # Schema
    json_ld = soup.find('script', attrs={'type': 'application/ld+json'})
    result['schema_found'] = json_ld is not None
    if json_ld:
        result['schema_score'] = 5
    else:
        # Check for microdata
        microdata = soup.find(attrs={'itemtype': True})
        if microdata:
            result['schema_score'] = 3
        else:
            result['schema_score'] = 0
    
    # Readability - paragraph count
    paragraphs = soup.find_all('p')
    para_with_text = [p for p in paragraphs if len(p.get_text(strip=True)) > 20]
    result['paragraph_count'] = len(para_with_text)
    
    if len(para_with_text) >= 10:
        result['readability_score'] = 5
    elif len(para_with_text) >= 5:
        result['readability_score'] = 4
    elif len(para_with_text) >= 3:
        result['readability_score'] = 3
    elif len(para_with_text) >= 1:
        result['readability_score'] = 2
    else:
        result['readability_score'] = 0
    
    # Total
    result['total_score'] = sum([
        result['title_score'],
        result['meta_desc_score'],
        result['h1_score'],
        result['headings_score'],
        result['content_score'],
        result['img_score'],
        result['internal_links_score'],
        result['external_links_score'],
        result['url_score'],
        result['canonical_score'],
        result['schema_score'],
        result['readability_score'],
    ])
    
    return result

# === Find matching GSC queries for each page ===
def find_matching_queries(primary_kw, top_n=5):
    """Find GSC queries that match the primary keyword."""
    kw_lower = primary_kw.lower()
    kw_tokens = set(kw_lower.split())
    
    scored = []
    for _, row in df_gsc_queries.iterrows():
        query = row['热门查询'].lower()
        score = 0
        # Exact match bonus
        if kw_lower in query or query in kw_lower:
            score += 10
        # Token overlap
        q_tokens = set(query.split())
        overlap = len(kw_tokens & q_tokens)
        score += overlap * 2
        # Longer meaningful overlap bonus
        long_overlap = sum(1 for t in kw_tokens & q_tokens if len(t) > 3)
        score += long_overlap * 3
        
        if score > 0:
            scored.append((score, row['热门查询'], row['点击次数'], row['展示'], row['点击率'], row['排名']))
    
    scored.sort(key=lambda x: (-x[0], -x[3]))
    return scored[:top_n]

# === Process all 76 pages ===
print(f"Processing {len(urls)} pages...")
audit_results = []
keywords_by_page = []

for i, url in enumerate(urls, 1):
    print(f"  [{i}/{len(urls)}] {url[:80]}...")
    html, source = get_html(url)
    primary_kw = extract_keyword_from_url(url)
    
    if html is None:
        # Page not accessible (404) - create placeholder entry
        result = {
            'url': url,
            'primary_keyword': primary_kw,
            'title': 'N/A (404)',
            'title_length': 0,
            'title_score': 0,
            'meta_desc': 'N/A (404)',
            'meta_desc_length': 0,
            'meta_desc_score': 0,
            'h1': 'N/A (404)',
            'h1_count': 0,
            'h1_score': 0,
            'h2_count': 0,
            'h2_texts': [],
            'headings_score': 0,
            'word_count': 0,
            'content_score': 0,
            'img_count': 0,
            'img_with_alt': 0,
            'img_score': 0,
            'internal_links': 0,
            'external_links': 0,
            'internal_links_score': 0,
            'external_links_score': 0,
            'url_score': 0,
            'canonical': 'N/A (404)',
            'canonical_score': 0,
            'schema_found': False,
            'schema_score': 0,
            'paragraph_count': 0,
            'readability_score': 0,
            'total_score': None,
            'source': '404',
        }
    else:
        result = audit_page(url, html)
        result['source'] = source
    
    audit_results.append(result)
    
    # Keywords
    matching = find_matching_queries(primary_kw, top_n=5)
    keywords_by_page.append({
        'url': url,
        'primary_keyword': primary_kw,
        'gsc_matches': matching,
    })

audited_count = sum(1 for r in audit_results if r['source'] != '404')
notfound_count = sum(1 for r in audit_results if r['source'] == '404')
print(f"\nDone. Audited: {audited_count}, 404: {notfound_count}, Total: {len(audit_results)}")

# === Build Excel ===
print("\nBuilding Excel workbook...")
wb = Workbook()

# --- Styles ---
HEADER_FILL = PatternFill(fill_type="solid", fgColor="1F4E79")
HEADER_FONT = Font(name="Arial", bold=True, color="FFFFFF", size=11)
ZEBRA_FILL_1 = PatternFill(fill_type="solid", fgColor="FFFFFF")
ZEBRA_FILL_2 = PatternFill(fill_type="solid", fgColor="F7F9FC")
THIN_BORDER = Border(
    left=Side(style="thin", color="D9DEE7"),
    right=Side(style="thin", color="D9DEE7"),
    top=Side(style="thin", color="D9DEE7"),
    bottom=Side(style="thin", color="D9DEE7"),
)
GOOD_FILL = PatternFill(fill_type="solid", fgColor="E2EFDA")
WARN_FILL = PatternFill(fill_type="solid", fgColor="FFF2CC")
BAD_FILL = PatternFill(fill_type="solid", fgColor="FCE4D6")
KPI_FILL = PatternFill(fill_type="solid", fgColor="EAF2FF")

def style_header(ws, row, max_col):
    for c in range(1, max_col + 1):
        cell = ws.cell(row, c)
        cell.fill = HEADER_FILL
        cell.font = HEADER_FONT
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        cell.border = THIN_BORDER

def apply_zebra(ws, start_row, end_row, max_col):
    for r in range(start_row, end_row + 1):
        fill = ZEBRA_FILL_1 if (r - start_row) % 2 == 0 else ZEBRA_FILL_2
        for c in range(1, max_col + 1):
            ws.cell(r, c).fill = fill
            ws.cell(r, c).border = THIN_BORDER

def auto_width(ws, max_col, max_width=50):
    for c in range(1, max_col + 1):
        max_len = 0
        for r in range(1, ws.max_row + 1):
            val = str(ws.cell(r, c).value or '')
            max_len = max(max_len, min(len(val), max_width))
        ws.column_dimensions[get_column_letter(c)].width = min(max_len + 2, max_width)

# ============================================================
# Sheet 1: On-Page Audit
# ============================================================
ws1 = wb.active
ws1.title = "On-Page Audit"

headers = [
    "序号", "URL", "主关键词",
    "总分(100)",
    "Title(15)", "Title内容", "Title长度",
    "Meta描述(10)", "Meta描述内容", "描述长度",
    "H1(10)", "H1内容", "H1数量",
    "标题结构(10)", "H2数量",
    "内容长度(15)", "字数",
    "图片优化(5)", "图片数", "有Alt数",
    "内链(10)", "内链数",
    "外链(5)", "外链数",
    "URL结构(5)",
    "Canonical(5)", "Canonical URL",
    "Schema(5)",
    "可读性(5)", "段落数",
    "数据来源",
]

for c, h in enumerate(headers, 1):
    ws1.cell(1, c, h)
style_header(ws1, 1, len(headers))

for i, r in enumerate(audit_results, 2):
    row_data = [
        i - 1,
        r['url'],
        r['primary_keyword'],
        r['total_score'],
        r['title_score'],
        r['title'],
        r['title_length'],
        r['meta_desc_score'],
        r['meta_desc'],
        r['meta_desc_length'],
        r['h1_score'],
        r['h1'],
        r['h1_count'],
        r['headings_score'],
        r['h2_count'],
        r['content_score'],
        r['word_count'],
        r['img_score'],
        r['img_count'],
        r['img_with_alt'],
        r['internal_links_score'],
        r['internal_links'],
        r['external_links_score'],
        r['external_links'],
        r['url_score'],
        r['canonical_score'],
        r['canonical'],
        r['schema_score'],
        r['readability_score'],
        r['paragraph_count'],
        r['source'],
    ]
    for c, val in enumerate(row_data, 1):
        ws1.cell(i, c, val)

n_rows = len(audit_results) + 1
apply_zebra(ws1, 2, n_rows, len(headers))

# Highlight 404 rows with red tint
BAD_404_FILL = PatternFill(fill_type="solid", fgColor="FFE6E6")
for i, r in enumerate(audit_results, 2):
    if r['source'] == '404':
        for c in range(1, len(headers) + 1):
            ws1.cell(i, c).fill = BAD_404_FILL

# Conditional formatting for total score column (col 4) - only for numeric values
score_col = get_column_letter(4)
ws1.conditional_formatting.add(
    f"{score_col}2:{score_col}{n_rows}",
    ColorScaleRule(
        start_type='num', start_value=0, start_color='F8696B',
        mid_type='num', mid_value=50, mid_color='FFEB84',
        end_type='num', end_value=100, end_color='63BE7B'
    )
)

# Freeze panes
ws1.freeze_panes = 'D2'
auto_width(ws1, len(headers), max_width=45)
ws1.column_dimensions['B'].width = 60
ws1.column_dimensions['C'].width = 35
ws1.column_dimensions['F'].width = 45
ws1.column_dimensions['I'].width = 45
ws1.column_dimensions['L'].width = 40
ws1.column_dimensions['Z'].width = 45

# ============================================================
# Sheet 2: Keywords by Page
# ============================================================
ws2 = wb.create_sheet("Keywords by Page")

kw_headers = [
    "序号", "URL", "主关键词 (URL推断)",
    "GSC匹配关键词1", "点击1", "展示1", "CTR1", "排名1",
    "GSC匹配关键词2", "点击2", "展示2", "CTR2", "排名2",
    "GSC匹配关键词3", "点击3", "展示3", "CTR3", "排名3",
    "GSC匹配关键词4", "点击4", "展示4", "CTR4", "排名4",
    "GSC匹配关键词5", "点击5", "展示5", "CTR5", "排名5",
]

for c, h in enumerate(kw_headers, 1):
    ws2.cell(1, c, h)
style_header(ws2, 1, len(kw_headers))

for i, kp in enumerate(keywords_by_page, 2):
    row = [i - 1, kp['url'], kp['primary_keyword']]
    for j in range(5):
        if j < len(kp['gsc_matches']):
            match = kp['gsc_matches'][j]
            row.extend([match[1], match[2], match[3], match[4], match[5]])
        else:
            row.extend(["", "", "", "", ""])
    for c, val in enumerate(row, 1):
        ws2.cell(i, c, val)

n_kw = len(keywords_by_page) + 1
apply_zebra(ws2, 2, n_kw, len(kw_headers))
ws2.freeze_panes = 'D2'
auto_width(ws2, len(kw_headers), max_width=40)
ws2.column_dimensions['B'].width = 60
ws2.column_dimensions['C'].width = 35

# ============================================================
# Sheet 3: GSC Performance
# ============================================================
ws3 = wb.create_sheet("GSC Performance")

perf_headers = ["序号", "URL", "点击次数", "展示次数", "点击率", "平均排名", "是否在76页内"]
for c, h in enumerate(perf_headers, 1):
    ws3.cell(1, c, h)
style_header(ws3, 1, len(perf_headers))

url_set = set(urls)
for i, (page_url, perf) in enumerate(sorted(gsc_page_map.items(), key=lambda x: -x[1]['impressions']), 2):
    row = [
        i - 1,
        page_url,
        perf['clicks'],
        perf['impressions'],
        perf['ctr'],
        perf['position'],
        "是" if page_url in url_set else "否",
    ]
    for c, val in enumerate(row, 1):
        ws3.cell(i, c, val)
    # Format CTR as percentage
    ws3.cell(i, 5).number_format = '0.00%'

n_perf = len(gsc_page_map) + 1
apply_zebra(ws3, 2, n_perf, len(perf_headers))

# Highlight rows that are in the 76 pages
for r in range(2, n_perf + 1):
    if ws3.cell(r, 7).value == "是":
        for c in range(1, len(perf_headers) + 1):
            ws3.cell(r, c).fill = KPI_FILL

ws3.freeze_panes = 'B2'
auto_width(ws3, len(perf_headers), max_width=60)
ws3.column_dimensions['B'].width = 70

# ============================================================
# Sheet 4: All GSC Queries
# ============================================================
ws4 = wb.create_sheet("GSC Queries (全部)")

q_headers = ["序号", "查询词", "点击次数", "展示次数", "点击率", "平均排名"]
for c, h in enumerate(q_headers, 1):
    ws4.cell(1, c, h)
style_header(ws4, 1, len(q_headers))

for i, row in df_gsc_queries.iterrows():
    r = i + 2
    ws4.cell(r, 1, i + 1)
    ws4.cell(r, 2, row['热门查询'])
    ws4.cell(r, 3, row['点击次数'])
    ws4.cell(r, 4, row['展示'])
    ws4.cell(r, 5, row['点击率'])
    ws4.cell(r, 5).number_format = '0.00%'
    ws4.cell(r, 6, row['排名'])

n_queries = len(df_gsc_queries) + 1
apply_zebra(ws4, 2, n_queries, len(q_headers))
ws4.freeze_panes = 'B2'
auto_width(ws4, len(q_headers), max_width=45)
ws4.column_dimensions['B'].width = 45

# ============================================================
# Sheet 5: Summary Dashboard
# ============================================================
ws5 = wb.create_sheet("Summary", 0)  # Insert at beginning

audited = [r for r in audit_results if r['total_score'] is not None]
not_audited = [r for r in audit_results if r['total_score'] is None]
scores = [r['total_score'] for r in audited]
avg_score = sum(scores) / len(scores) if scores else 0
above_80 = sum(1 for s in scores if s >= 80)
above_60 = sum(1 for s in scores if s >= 60)
below_40 = sum(1 for s in scores if s < 40)

total_clicks = sum(p['clicks'] for p in gsc_page_map.values())
total_impressions = sum(p['impressions'] for p in gsc_page_map.values())
gsc_in_76 = sum(1 for u in urls if u in gsc_page_map)
notfound_in_gsc = sum(1 for r in not_audited if r['url'] in gsc_page_map)

summary_data = [
    ["SEO Audit 概览", ""],
    ["", ""],
    ["总页面数", len(audit_results)],
    ["已成功审计", len(audited)],
    ["404 无法访问", len(not_audited)],
    ["平均总分 (已审计)", round(avg_score, 1)],
    ["80分以上 (优秀)", above_80],
    ["60-79分 (良好)", above_60 - above_80],
    ["40-59分 (一般)", len(scores) - above_60 - below_40],
    ["40分以下 (需优化)", below_40],
    ["", ""],
    ["GSC 搜索表现 (过去3个月)", ""],
    ["总点击次数", total_clicks],
    ["总展示次数", total_impressions],
    ["有展示的页面数", len(gsc_page_map)],
    ["76页中有展示的数量", gsc_in_76],
    ["404页中仍有展示", notfound_in_gsc],
]

for r, (label, value) in enumerate(summary_data, 1):
    ws5.cell(r, 1, label)
    ws5.cell(r, 2, value)
    if r == 1 or r == 10:
        ws5.cell(r, 1).font = Font(name="Arial", bold=True, size=14, color="1F4E79")
        ws5.merge_cells(start_row=r, start_column=1, end_row=r, end_column=2)
    elif label and label not in [""]:
        ws5.cell(r, 1).font = Font(name="Arial", bold=True)
        ws5.cell(r, 1).fill = KPI_FILL
        ws5.cell(r, 2).fill = KPI_FILL

# Style summary
for r in range(1, len(summary_data) + 1):
    for c in range(1, 3):
        ws5.cell(r, c).border = THIN_BORDER

ws5.column_dimensions['A'].width = 30
ws5.column_dimensions['B'].width = 20

# === Save ===
wb.save(OUTPUT_FILE)
print(f"\nExcel saved to: {OUTPUT_FILE}")
print(f"Total pages audited: {len(audit_results)}")
print(f"Average score: {avg_score:.1f}/100")
