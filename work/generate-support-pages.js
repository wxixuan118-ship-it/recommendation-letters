const fs = require("fs");
const path = require("path");
const { pages } = require("./keyword-silo-data");

const BASE_URL = "https://recommendation-letters.com";
const outputRoot = path.join(__dirname, "..", "outputs");
const formatPages = pages.filter((page) => page.cluster === "format");
const questionPages = pages.filter((page) => page.cluster === "questions");
const writingPages = pages.filter((page) => page.cluster === "writing");
const GA_SNIPPET = `    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-DQYZ36HTRY"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-DQYZ36HTRY');
    </script>`;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function titleCase(value) {
  return value
    .split(" ")
    .map((word, index) => {
      if (["pdf"].includes(word.toLowerCase())) return word.toUpperCase();
      if (word.toLowerCase() === "i") return "I";
      if (["a", "an", "and", "for", "from", "in", "of", "the", "to", "via"].includes(word.toLowerCase()) && index > 0) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function nav(prefix) {
  return `<nav class="topnav" aria-label="Primary navigation">
        <a href="${prefix}index.html#templates" aria-current="page">Letters of Recommendation</a>
        <a href="${prefix}cover-letter.html">Cover Letter</a>
        <a href="${prefix}resignation.html">Resignation</a>
      </nav>`;
}

function footer(prefix) {
  return `<footer class="site-footer">
      <div>
        <a class="brand footer-brand" href="${prefix}index.html" aria-label="Recommendation Templates home">
          <span class="brand-mark" aria-hidden="true">LR</span>
          <span>Recommendation Templates</span>
        </a>
        <p>Free editable recommendation letter templates, samples, examples, and writing guides for 2026.</p>
      </div>
      <nav class="footer-articles" aria-label="Writing resources">
        <strong class="footer-heading">Writing resources</strong>
        <div class="footer-article-grid">
          ${writingPages.slice(0, 6).map((page) => `<a href="${prefix}${page.slug}/">${escapeHtml(titleCase(page.keyword))}</a>`).join("\n          ")}
        </div>
        <a class="footer-all-articles" href="${prefix}blog.html">All articles</a>
      </nav>
      <nav class="footer-links" aria-label="Footer navigation">
        <a href="${prefix}about.html">About Us</a>
        <a href="${prefix}recommendation-letter-faq/">FAQ</a>
        <a href="${prefix}privacy.html">Privacy</a>
        <a href="${prefix}partners.html">Partners</a>
        <a href="${prefix}blog.html">Blog</a>
      </nav>
    </footer>`;
}

function aboutHtml() {
  const formatSections = formatPages
    .map(
      (page) => `<section class="format-guide-section" id="${page.slug}">
          <h2>${escapeHtml(titleCase(page.keyword))}</h2>
          <p>A ${escapeHtml(page.keyword)} is designed for ${escapeHtml(page.audience)}. Its purpose is to ${escapeHtml(page.goal)}. The most useful version keeps the content editable until the writer has verified names, dates, roles, examples, and contact details.</p>
          <p>Focus on ${escapeHtml(page.focus)}. Use ${escapeHtml(page.evidence)} as the basis for personalization, and avoid ${escapeHtml(page.pitfall)}. The online editor supports Word-compatible downloads, multiple fonts, color choices, and document styles.</p>
          <a href="./index.html#templates">Browse editable templates</a>
        </section>`
    )
    .join("\n        ");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Learn about Recommendation Templates and compare free, editable, Word, PDF, downloadable, and fill-in-the-blank recommendation letter formats." />
    <meta name="keywords" content="${formatPages.map((page) => page.keyword).join(", ")}, about recommendation templates" />
    <meta property="og:title" content="About Us & Recommendation Letter Formats" />
    <meta property="og:description" content="About our free recommendation letter resources and the editable formats available for Word, PDF, and online use." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${BASE_URL}/about.html" />
    <title>About Us & Recommendation Letter Formats</title>
    <link rel="canonical" href="${BASE_URL}/about.html" />
    <link rel="stylesheet" href="./styles.css" />
${GA_SNIPPET}
  </head>
  <body>
    <header class="topbar">
      <a class="brand" href="./index.html"><span class="brand-mark" aria-hidden="true">LR</span><span>Recommendation Templates</span></a>
      ${nav("./")}
    </header>
    <main>
      <section class="template-page-hero">
        <p class="eyebrow">About us</p>
        <h1>Free, editable recommendation letter resources</h1>
        <p>Recommendation Templates helps students, professionals, recommenders, and applicants find practical letter structures, edit them online, and download a finished document.</p>
        <div class="hero-actions">
          <a class="button primary" href="./index.html#templates">Browse Templates</a>
          <a class="button secondary" href="#formats">Compare Formats</a>
        </div>
      </section>
      <article class="seo-copy about-content">
        <h2>About Recommendation Templates</h2>
        <p>Our goal is to make recommendation letter drafting clearer without pretending that one generic letter fits every situation. The library combines editable templates with focused examples for academic applications, employment, scholarships, professional programs, internships, character references, and recommendation requests. Each resource is intended as a starting structure. The recommender should replace placeholders, verify facts, add firsthand evidence, and approve the final wording.</p>
        <p>The online editor allows users to change the document text, font, color, and visual style before downloading a Word-compatible file. Templates remain useful outside the editor as well: writers can preview paragraph structure, compare tones, and select a format that matches the recipient's instructions. The site also publishes writing guides and answers common questions about recommendation length, evidence, recommenders, and submission.</p>
        <p>We favor readable layouts, direct language, accurate claims, and practical internal linking. A strong recommendation is not created by decoration alone. It becomes persuasive when a credible writer explains the relationship, gives relevant examples, and clearly supports the candidate for a particular opportunity.</p>
      </article>
      <section class="format-guide" id="formats">
        <p class="eyebrow">Document formats</p>
        <h2>Choose the right recommendation letter format</h2>
        <p class="template-intro">The six common format searches are consolidated here so users can compare them in one place.</p>
        ${formatSections}
      </section>
    </main>
    ${footer("./")}
  </body>
</html>`;
}

function faqAnswer(page) {
  return [
    `The practical answer to "${page.keyword}" depends on the application rules, the relationship, and the evidence available. In most situations, the best approach is to ${page.goal}. Focus on ${page.focus}. A decision should be based on what the recipient requests and what the recommender can honestly verify.`,
    `A useful example is ${page.evidence}. Avoid ${page.pitfall}. Applicants can provide deadlines, instructions, resumes, and reminders of shared work, but the final letter should remain accurate and should be reviewed by ${page.writer}. When a school, employer, court, government agency, or application platform gives specific instructions, those requirements take priority over general guidance.`
  ];
}

function faqHtml() {
  const items = questionPages.map((page) => ({
    question: titleCase(page.keyword),
    answer: faqAnswer(page)
  }));
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer.join(" ") }
    }))
  };
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Answers to common recommendation letter questions about writers, length, self-drafting, strong letters, and reference letter differences." />
    <meta name="keywords" content="${questionPages.map((page) => page.keyword).join(", ")}" />
    <meta property="og:title" content="Recommendation Letter FAQ" />
    <meta property="og:description" content="Clear answers to common recommendation letter questions, plus related templates and writing guides." />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${BASE_URL}/recommendation-letter-faq/" />
    <title>Recommendation Letter FAQ | Common Questions Answered</title>
    <link rel="canonical" href="${BASE_URL}/recommendation-letter-faq/" />
    <link rel="stylesheet" href="../styles.css" />
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
${GA_SNIPPET}
  </head>
  <body>
    <header class="topbar">
      <a class="brand" href="../index.html"><span class="brand-mark" aria-hidden="true">LR</span><span>Recommendation Templates</span></a>
      ${nav("../")}
    </header>
    <main>
      <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="../index.html">Home</a><span>/</span><span>FAQ</span></nav>
      <section class="template-page-hero">
        <p class="eyebrow">Recommendation letter FAQ</p>
        <h1>Common recommendation letter questions</h1>
        <p>Find direct answers about who should write a recommendation, ideal length, ethical self-drafting, strong evidence, and the difference between references and recommendations.</p>
      </section>
      <article class="faq-page">
        ${items.map((item, index) => `<section id="${questionPages[index].slug}">
          <h2>${escapeHtml(item.question)}</h2>
          ${item.answer.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n          ")}
        </section>`).join("\n        ")}
      </article>
      <section class="related-resources">
        <p class="eyebrow">Writing guides</p>
        <h2>Continue reading</h2>
        <div class="related-link-grid">
          ${writingPages.map((page) => `<a href="../${page.slug}/">${escapeHtml(titleCase(page.keyword))}</a>`).join("\n          ")}
        </div>
      </section>
    </main>
    ${footer("../")}
  </body>
</html>`;
}

fs.writeFileSync(path.join(outputRoot, "about.html"), aboutHtml());
const faqDir = path.join(outputRoot, "recommendation-letter-faq");
fs.mkdirSync(faqDir, { recursive: true });
fs.writeFileSync(path.join(faqDir, "index.html"), faqHtml());

console.log("Generated About Us formats page and recommendation letter FAQ.");
