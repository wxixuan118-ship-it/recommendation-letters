const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "outputs");
const GA_SNIPPET = `    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-DQYZ36HTRY"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-DQYZ36HTRY');
    </script>
`;

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

const htmlFiles = walk(outDir).filter((file) => file.endsWith(".html"));
let updated = 0;

htmlFiles.forEach((file) => {
  const html = fs.readFileSync(file, "utf8");
  if (html.includes("G-DQYZ36HTRY")) return;
  if (!html.includes("</head>")) return;
  fs.writeFileSync(file, html.replace("  </head>", `${GA_SNIPPET}  </head>`));
  updated += 1;
});

console.log(`Applied Google Analytics to ${updated} HTML files.`);
