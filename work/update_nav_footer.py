#!/usr/bin/env python3
"""Update navigation and footer on the 10 new keyword pages."""

import os

SLUGS = [
    'immigration-recommendation-letter-template',
    'landlord-letter-of-recommendation-template',
    'landlord-recommendation-letter-template',
    'medical-residency-letter-of-recommendation-template',
    'residency-letter-of-recommendation-template',
    'army-letter-of-recommendation-template',
    'ask-for-a-letter-of-recommendation-template',
    'letter-of-recommendation-for-immigration-template',
    'letter-of-recommendation-residency-template',
    'recommendation-letter-template-for-scholarship',
]

PUBLIC_DIR = '/Users/w118/Documents/recommendation-letters/public'

# New nav block (uses ../ prefix for subdirectory pages)
NEW_NAV = '''      <nav class="topnav" aria-label="Primary navigation">
        <details class="nav-dropdown">
          <summary>Templates</summary>
          <div class="nav-mega">
            <div class="nav-mega-col">
              <div class="nav-mega-title">Popular</div>
              <a href="../letter-of-recommendation-template/">Letter of Rec Template</a>
              <a href="../recommendation-letter-template/">Recommendation Template</a>
              <a href="../reference-letter-template/">Reference Letter Template</a>
              <a href="../letter-of-recommendation-sample/">Letter of Rec Sample</a>
              <a href="../free-recommendation-letter-template/">Free Template</a>
            </div>
            <div class="nav-mega-col">
              <div class="nav-mega-title">For Students</div>
              <a href="../letter-of-recommendation-template-for-student/">Student Recommendation</a>
              <a href="../graduate-school-recommendation-letter-sample/">Graduate School</a>
              <a href="../letter-of-recommendation-template-for-college-application/">College Application</a>
              <a href="../letter-of-recommendation-template-for-scholarship/">Scholarship</a>
              <a href="../professor-recommendation-letter-sample/">Professor Letter</a>
              <a href="../teacher-recommendation-letter-template/">Teacher Letter</a>
            </div>
            <div class="nav-mega-col">
              <div class="nav-mega-title">For Work</div>
              <a href="../recommendation-letter-for-employee-template/">Employee Recommendation</a>
              <a href="../manager-recommendation-letter-template/">Manager Letter</a>
              <a href="../professional-recommendation-letter-sample/">Professional Sample</a>
              <a href="../coworker-recommendation-letter-example/">Coworker Letter</a>
              <a href="../job-application-recommendation-letter-sample/">Job Application</a>
              <a href="../internship-recommendation-letter-template/">Internship</a>
            </div>
            <div class="nav-mega-col">
              <div class="nav-mega-title">Specialized</div>
              <a href="../immigration-recommendation-letter-template/">Immigration</a>
              <a href="../landlord-recommendation-letter-template/">Landlord</a>
              <a href="../medical-residency-letter-of-recommendation-template/">Medical Residency</a>
              <a href="../law-school-recommendation-letter-template/">Law School</a>
              <a href="../army-letter-of-recommendation-template/">Army / Military</a>
              <a href="../personal-recommendation-letter-template/">Personal / Character</a>
            </div>
          </div>
        </details>
        <details class="nav-dropdown">
          <summary>Blog</summary>
          <div class="nav-menu">
            <a href="../medical-schools/">School Requirements</a>
            <a href="../blog.html">All Articles</a>
          </div>
        </details>
        <a href="../recommendation-letter-faq/">FAQ</a>
        <a href="../cover-letter.html">Cover Letter</a>
        <a href="../resignation.html">Resignation</a>
      </nav>'''

# Old nav pattern to find (from the generated pages)
OLD_NAV_START = '      <nav class="topnav" aria-label="Primary navigation">'
OLD_NAV_END = '      </nav>'

# New footer templates + blog section
NEW_FOOTER_ARTICLES = '''      <nav class="footer-articles" aria-label="Templates and articles">
        <strong class="footer-heading">Templates</strong>
        <div class="footer-template-grid">
          <a href="../letter-of-recommendation-template/">Letter of Rec Template</a>
          <a href="../recommendation-letter-template/">Recommendation Template</a>
          <a href="../reference-letter-template/">Reference Letter</a>
          <a href="../letter-of-recommendation-sample/">Sample Letters</a>
          <a href="../letter-of-recommendation-template-for-student/">Student</a>
          <a href="../recommendation-letter-for-employee-template/">Employee</a>
          <a href="../graduate-school-recommendation-letter-sample/">Graduate School</a>
          <a href="../letter-of-recommendation-template-for-scholarship/">Scholarship</a>
          <a href="../immigration-recommendation-letter-template/">Immigration</a>
          <a href="../medical-residency-letter-of-recommendation-template/">Medical Residency</a>
          <a href="../law-school-recommendation-letter-template/">Law School</a>
          <a href="../free-recommendation-letter-template/">Free Templates</a>
        </div>
        <a class="footer-all-articles" href="../index.html#templates">Browse all templates</a>

        <strong class="footer-heading" style="margin-top: 24px;">Blog articles</strong>
        <div class="footer-article-grid">
          <a href="../blog/albany-medical-college-letters-of-recommendation.html">Albany Medical College guide</a>
          <a href="../blog/what-is-a-notarized-letter.html">What is a notarized letter?</a>
          <a href="../blog/how-to-write-an-email-asking-for-a-letter-of-recommendation.html">Request email guide</a>
          <a href="../blog/how-to-ask-someone-to-write-a-letter-of-recommendation.html">Ask for a rec letter</a>
          <a href="../blog/how-to-ask-for-a-letter-of-recommendation-via-email.html">Ask via email</a>
          <a href="../blog/law-school-recommendation-letter-sample.html">Law school sample</a>
        </div>
        <a class="footer-all-articles" href="../blog.html">All articles</a>
      </nav>'''


def update_page(slug):
    filepath = os.path.join(PUBLIC_DIR, slug, 'index.html')
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    # --- Update nav ---
    # Find the old nav block (starts with topnav, ends with </nav>)
    nav_start = html.find(OLD_NAV_START)
    if nav_start == -1:
        print(f"  WARN: nav not found in {slug}")
        return False

    # Find the </nav> that closes the topnav
    nav_end_marker = '      </nav>'
    # Find from nav_start, look for first </nav> after the nav tag
    rest = html[nav_start:]
    nav_end_rel = rest.find(nav_end_marker) + len(nav_end_marker)
    nav_end = nav_start + nav_end_rel

    old_nav = html[nav_start:nav_end]
    html = html[:nav_start] + NEW_NAV + html[nav_end:]

    # --- Update footer articles ---
    # Find old footer-articles block
    footer_start = html.find('<nav class="footer-articles"')
    if footer_start == -1:
        print(f"  WARN: footer-articles not found in {slug}")
        return False

    # Find the closing </nav> for footer-articles
    footer_rest = html[footer_start:]
    # Find the matching </nav> - it's the first one after "All articles"
    all_articles_idx = footer_rest.find('All articles')
    if all_articles_idx == -1:
        all_articles_idx = 0
    nav_close_idx = footer_rest.find('</nav>', all_articles_idx)
    if nav_close_idx == -1:
        print(f"  WARN: footer nav close not found in {slug}")
        return False
    footer_end = footer_start + nav_close_idx + len('</nav>')

    html = html[:footer_start] + NEW_FOOTER_ARTICLES + html[footer_end:]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)

    return True


def main():
    updated = 0
    for slug in SLUGS:
        ok = update_page(slug)
        if ok:
            updated += 1
            print(f"  ✓ {slug}")
        else:
            print(f"  ✗ {slug}")

    print(f"\nUpdated: {updated}/{len(SLUGS)} pages")


if __name__ == '__main__':
    main()
