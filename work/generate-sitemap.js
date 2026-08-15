const fs = require("fs");
const path = require("path");

const BASE_URL = "https://recommendation-letters.com";
const publicDir = path.join(__dirname, "..", "public");
const outputPath = path.join(publicDir, "sitemap.xml");

// Files/dirs to skip
const SKIP_FILES = new Set([
  "sitemap.xml", "robots.txt", "styles.css", "app.js", "template-page.js",
  "letter-of-recommendation-template-prd.md",
]);
const SKIP_DIRS = new Set(["pages"]);

const urls = [];

// 1. Root index.html → /
urls.push({ loc: `${BASE_URL}/`, priority: "1.0", changefreq: "weekly" });

// 2. Top-level .html files (skip index.html, skip files in SKIP_FILES)
const topLevel = fs.readdirSync(publicDir).filter(
  (f) => f.endsWith(".html") && f !== "index.html" && !SKIP_FILES.has(f)
);
for (const f of topLevel) {
  const slug = f; // e.g. blog.html
  urls.push({ loc: `${BASE_URL}/${slug}`, priority: "0.7", changefreq: "monthly" });
}

// 3. /pages/ directory — .html files
const pagesDir = path.join(publicDir, "pages");
if (fs.existsSync(pagesDir)) {
  for (const f of fs.readdirSync(pagesDir).filter((f) => f.endsWith(".html"))) {
    urls.push({ loc: `${BASE_URL}/pages/${f}`, priority: "0.5", changefreq: "yearly" });
  }
}

// 4. Walk subdirectories looking for index.html → pretty URL
function walkDir(dir, relBase) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (SKIP_DIRS.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    const relPath = relBase ? `${relBase}/${entry.name}` : entry.name;
    const indexPath = path.join(fullPath, "index.html");
    if (fs.existsSync(indexPath)) {
      // Assign priority by section
      let priority = "0.6";
      let changefreq = "monthly";
      if (relPath.startsWith("medical-schools/") || relPath.startsWith("schools/")) {
        priority = "0.8";
      } else if (relPath.startsWith("blog/")) {
        priority = "0.7";
      } else if (relPath === "recommendation-letter-faq") {
        priority = "0.7";
      }
      urls.push({ loc: `${BASE_URL}/${relPath}/`, priority, changefreq });
    }
    // Recurse
    walkDir(fullPath, relPath);
  }
}

walkDir(publicDir, "");

// Build XML
const urlEntries = urls.map(
  ({ loc, priority, changefreq }) =>
    `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
).join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

fs.writeFileSync(outputPath, xml);
console.log(`Sitemap generated: ${urls.length} URLs → ${outputPath}`);

// Summary by section
const sections = {};
for (const { loc } of urls) {
  const u = loc.replace(BASE_URL + "/", "");
  const section = u.split("/")[0] || "home";
  sections[section] = (sections[section] || 0) + 1;
}
for (const [s, count] of Object.entries(sections).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${s}: ${count}`);
}
