const fs = require("fs");
const path = require("path");
const { clusters, pages } = require("./keyword-silo-data");

const BASE_URL = "https://recommendation-letters.com";
const outputRoot = path.join(__dirname, "..", "outputs");
const indexPath = path.join(outputRoot, "index.html");
const generatedClusters = new Set(["core", "audience", "recommender", "application", "writing"]);
const categoryClusters = new Set(["audience", "recommender", "application"]);
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
  const upper = new Set(["mba", "pdf"]);
  return value
    .split(" ")
    .map((word, index) => {
      if (upper.has(word.toLowerCase())) return word.toUpperCase();
      if (word.toLowerCase() === "i") return "I";
      if (["a", "an", "and", "for", "from", "in", "of", "the", "to", "via"].includes(word.toLowerCase()) && index > 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function metaTitle(page) {
  const title = titleCase(page.keyword);
  if (page.slug === "difference-between-reference-letter-and-recommendation-letter") {
    return "Reference Letter vs Recommendation Letter | Differences";
  }
  return title.length <= 47 ? `${title} | 2026 Guide` : title;
}

function metaDescription(page) {
  const start = `Use this ${page.keyword} to ${page.goal}.`;
  const end = ` Includes a sample, writing guidance, FAQs, and editable templates.`;
  const combined = `${start}${end}`;
  return combined.length <= 158
    ? combined
    : `Explore a practical ${page.keyword} with a sample, writing guidance, FAQs, and editable 2026 templates.`;
}

function wordCount(text) {
  return text.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
}

function articleParagraphs(page) {
  const keyword = page.keyword;
  return [
    `A ${keyword} is most useful when it helps ${page.audience} ${page.goal}. The page should do more than provide polished wording. It should show the writer what information belongs in the letter, which details make the endorsement credible, and how the final document should be adjusted for a particular reader. The strongest starting point is a clear purpose: understand the opportunity, identify what the recipient needs to evaluate, and decide which observations the recommender can honestly support. That preparation keeps the letter focused and makes later editing much faster.`,
    `The recommender matters as much as the format. For this purpose, the writer is usually ${page.writer}. A useful writer has direct knowledge, enough recent contact to recall meaningful details, and a perspective that fits the application. A famous title cannot replace firsthand evidence. Before drafting, confirm the deadline, submission method, confidentiality expectations, and any instructions from the school, employer, scholarship committee, government office, or organization. If the requested writer cannot provide relevant examples or a genuinely positive endorsement, another qualified person may be a better choice.`,
    `A well-planned ${keyword} normally begins by stating the recommendation and explaining the relationship. The opening should identify the applicant or subject, name the opportunity when appropriate, and tell the reader how long and in what capacity the writer has known the person. The middle should concentrate on ${page.focus}. This context gives the evidence meaning. Readers should not have to guess whether the writer supervised the candidate, taught one course, worked as a peer, or knew the person through a community role. Clear relationship language establishes the limits and value of the writer's perspective.`,
    `Evidence is the part that turns a template into a persuasive letter. A relevant example could be ${page.evidence}. The writer should briefly describe the situation, the candidate's actions, and the result or lesson. Numbers can help when they are accurate, but a thoughtful qualitative observation can be just as valuable. The example should connect to the decision at hand rather than appearing as an unrelated success story. One developed example and one shorter supporting observation are usually stronger than a long list of adjectives with no explanation.`,
    `Tone should be positive, professional, and proportionate to what the writer can verify. A ${keyword} can express genuine enthusiasm without sounding exaggerated. Specific verbs and precise nouns are more persuasive than repeated superlatives. The writer should also avoid ${page.pitfall}. When a limitation matters, it is usually better to choose evidence that presents the candidate fairly than to add defensive language. Confidential or sensitive details should be included only when relevant, permitted, and appropriate for the recipient.`,
    `For document preparation, use a ${page.format} with readable typography, conventional margins, and enough space for the signature and contact information. Replace every bracketed field, check names and pronouns, and verify dates, programs, organizations, job titles, and deadlines. The final recommendation should normally fit on one page, although complex academic, medical, legal, executive, or immigration contexts may require more detail. Follow the recipient's instructions whenever they specify a word limit, file type, letterhead requirement, portal, or signature method.`,
    `Revision should test both content and credibility. Read the opening and closing together: they should express a consistent level of support. Then review each paragraph and ask whether it adds new information. Remove repeated praise, vague filler, and details already obvious from a resume or transcript unless the writer adds meaningful context. A useful ${keyword} makes the reader understand something that application forms cannot show on their own. It also sounds like the real recommender, not like a collection of stock phrases.`,
    `Before submission, the writer should proofread the final file, confirm the recipient and filename, and retain a copy when appropriate. Applicants can make the process easier by providing a resume, application description, deadline, submission instructions, and reminders of shared work, but the recommender should review and own the final endorsement. Use the related pages on this site to compare formats and situations, then open the online template editor to personalize the text, font, color, and layout. The result should be accurate, relevant, and ready for the specific opportunity rather than merely complete.`
  ];
}

function sampleBody(page) {
  const subject = page.cluster === "questions" || page.cluster === "writing" ? "Applicant" : "Candidate";
  return [
    "Dear [Recipient Name or Committee],",
    `I am pleased to recommend [${subject} Name] for [Opportunity, Program, or Role]. I have known [${subject} Name] for [Length of Time] as [Relationship or Role], which has allowed me to observe [Relevant Strength or Quality] directly.`,
    `One example that demonstrates [${subject} Name]'s strengths is [Specific Example]. In that situation, [he/she/they] [Action Taken], resulting in [Outcome or Contribution]. This experience reflects [Strength 1] and [Strength 2], both of which are relevant to [Opportunity].`,
    `Based on my experience, I believe [${subject} Name] is well prepared for [Next Step]. I recommend [him/her/them] with [Level of Confidence] and would be happy to provide additional information.`,
    "Sincerely,\n[Recommender Name]\n[Title and Organization]\n[Email and Phone]"
  ];
}

function relatedPages(page) {
  const activePages = pages.filter((item) => generatedClusters.has(item.cluster));
  const sameCluster = activePages.filter((item) => item.cluster === page.cluster && item.slug !== page.slug);
  const core = activePages.filter((item) => item.cluster === "core" && item.slug !== page.slug);
  const adjacent = activePages.filter(
    (item) => ![page.cluster, "core"].includes(item.cluster) && item.slug !== page.slug
  );
  return [...sameCluster.slice(0, 5), ...core.slice(0, 3), ...adjacent.slice(0, 4)]
    .filter((item, index, list) => list.findIndex((candidate) => candidate.slug === item.slug) === index)
    .slice(0, 8);
}

function footerArticles() {
  return `<nav class="footer-articles" aria-label="Blog articles">
        <strong class="footer-heading">Blog articles</strong>
        <div class="footer-article-grid">
          <a href="../blog/albany-medical-college-letters-of-recommendation.html">Albany Medical College recommendation guide</a>
          <a href="../blog/what-is-a-notarized-letter.html">What is a notarized letter?</a>
          <a href="../blog/how-to-write-an-email-asking-for-a-letter-of-recommendation.html">Write a recommendation request email</a>
          <a href="../blog/how-to-ask-someone-to-write-a-letter-of-recommendation.html">Ask someone for a recommendation</a>
          <a href="../blog/how-to-ask-for-a-letter-of-recommendation-via-email.html">Ask for a recommendation via email</a>
          <a href="../blog/law-school-letter-of-recommendation-sample.html">Law school recommendation sample</a>
        </div>
        <a class="footer-all-articles" href="../blog.html">All articles</a>
      </nav>`;
}

function faqItems(page) {
  return [
    {
      question: `What is a ${page.keyword}?`,
      answer: `It is a ${page.format} designed to help ${page.audience} ${page.goal}. It should be personalized with accurate relationship details and relevant evidence.`
    },
    {
      question: `Who should use this ${page.keyword}?`,
      answer: `It is intended for ${page.audience}. The final letter should be reviewed and owned by ${page.writer}.`
    },
    {
      question: "Can I edit and download the template?",
      answer: "Yes. Open the online editor to change the wording, font, color, and layout, then finish and download a Word-compatible document."
    }
  ];
}

function categoryTemplateDirectory(page, editorUrl) {
  if (!categoryClusters.has(page.cluster)) return "";
  const title = titleCase(page.keyword);
  const variants = [
    ["Standard", "A balanced one-page structure for most applications."],
    ["Detailed", "An expanded version with room for two evidence examples."],
    ["Short", "A concise recommendation for portals and quick references."],
    ["Formal", "A traditional business-letter format for committees and employers."],
    ["Warm", "A more personal tone that still keeps evidence and structure clear."],
    ["Results-focused", "A template emphasizing measurable outcomes and contribution."]
  ];
  return `<section class="category-template-section" aria-labelledby="categoryTemplatesTitle">
        <header class="results-head">
          <div>
            <p class="eyebrow">Related templates</p>
            <h2 id="categoryTemplatesTitle">${escapeHtml(title)} templates</h2>
            <p class="template-intro">Choose a format, preview the sample, then open the editor to personalize the wording and design.</p>
          </div>
        </header>
        <div class="template-directory category-template-directory">
          ${variants.map(([name, description]) => `<article class="directory-card">
            <div class="tag-row"><span class="tag">${escapeHtml(clusters[page.cluster].shortTitle)}</span><span class="tag alt">${escapeHtml(name)}</span></div>
            <h3>${escapeHtml(title)} - ${escapeHtml(name)}</h3>
            <p>${escapeHtml(description)}</p>
            <div class="directory-actions">
              <a class="button secondary" href="#sample">Preview</a>
              <a class="button primary" href="${editorUrl}">Edit Online</a>
            </div>
          </article>`).join("\n          ")}
        </div>
      </section>`;
}

function templateSearchTerm(page) {
  const terms = {
    "letter-of-recommendation-template-for-student": "student",
    "recommendation-letter-for-employee-template": "employee",
    "academic-letter-of-recommendation-template": "academic",
    "professional-recommendation-letter-sample": "professional",
    "personal-recommendation-letter-template": "personal",
    "letter-of-recommendation-template-for-college-application": "college",
    "graduate-school-recommendation-letter-sample": "graduate",
    "letter-of-recommendation-template-for-scholarship": "scholarship",
    "recommendation-letter-from-employer-sample": "employee",
    "character-reference-letter-template": "character",
    "teacher-recommendation-letter-template": "teacher",
    "professor-recommendation-letter-sample": "professor",
    "manager-recommendation-letter-template": "manager",
    "coworker-recommendation-letter-example": "coworker",
    "internship-recommendation-letter-template": "internship",
    "university-application-recommendation-letter": "college",
    "mba-recommendation-letter-sample": "mba",
    "law-school-recommendation-letter-template": "law school",
    "medical-school-recommendation-letter-sample": "medical school",
    "visa-recommendation-letter-template": "professional",
    "job-application-recommendation-letter-sample": "job"
  };
  return terms[page.slug] || page.keyword;
}

function pageHtml(page) {
  const title = titleCase(page.keyword);
  const description = metaDescription(page);
  const paragraphs = articleParagraphs(page);
  const faqs = faqItems(page);
  const sample = sampleBody(page);
  const related = relatedPages(page);
  const editorUrl = page.editorId
    ? `../index.html?edit=${encodeURIComponent(page.editorId)}#templates`
    : `../index.html?search=${encodeURIComponent(templateSearchTerm(page))}#templates`;
  const canonical = `${BASE_URL}/${page.slug}/`;
  const article = paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n          ");
  const visibleWords = wordCount(`${article} ${sample.join(" ")} ${faqs.map((item) => item.answer).join(" ")}`);
  if (visibleWords < 650) throw new Error(`${page.slug} has only ${visibleWords} words`);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: clusters[page.cluster].shortTitle, item: page.cluster === "writing" ? `${BASE_URL}/blog.html` : `${BASE_URL}/#templates` },
      { "@type": "ListItem", position: 3, name: title, item: canonical }
    ]
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": page.cluster === "questions" || page.cluster === "writing" ? "Article" : "CreativeWork",
    name: title,
    headline: title,
    description,
    url: canonical,
    isAccessibleForFree: true,
    about: page.keyword,
    inLanguage: "en"
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="keywords" content="${escapeHtml(`${page.keyword}, ${clusters[page.cluster].shortTitle.toLowerCase()}, free recommendation letter template, editable recommendation letter template, 2026 recommendation letter`)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${canonical}" />
    <title>${escapeHtml(metaTitle(page))}</title>
    <link rel="canonical" href="${canonical}" />
    <link rel="stylesheet" href="../styles.css" />
    <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(articleSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
${GA_SNIPPET}
  </head>
  <body>
    <header class="topbar">
      <a class="brand" href="../index.html" aria-label="Recommendation Templates home">
        <span class="brand-mark" aria-hidden="true">LR</span>
        <span>Recommendation Templates</span>
      </a>
      <nav class="topnav" aria-label="Primary navigation">
        <a href="../index.html#templates" aria-current="page">Letters of Recommendation</a>
        <a href="../cover-letter.html">Cover Letter</a>
        <a href="../resignation.html">Resignation</a>
      </nav>
    </header>

    <main>
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="../index.html">Home</a>
        <span aria-hidden="true">/</span>
        <a href="${page.cluster === "writing" ? "../blog.html" : "../index.html#templates"}">${escapeHtml(clusters[page.cluster].shortTitle)}</a>
        <span aria-hidden="true">/</span>
        <span>${escapeHtml(title)}</span>
      </nav>

      <section class="template-page-hero keyword-page-hero">
        <p class="eyebrow">${escapeHtml(clusters[page.cluster].shortTitle)}</p>
        <h1>${escapeHtml(title)}</h1>
        <p>Use this resource to ${escapeHtml(page.goal)}. It includes an editable sample, practical writing guidance, FAQs, and related recommendation letter resources.</p>
        <div class="hero-actions">
          <a class="button primary" href="${editorUrl}">Edit a Template</a>
          <a class="button secondary" href="#sample">View Sample</a>
          <a class="button secondary" href="#guide">Read Guide</a>
        </div>
      </section>

      <section class="keyword-summary" aria-label="Page summary">
        <div><span>Best for</span><strong>${escapeHtml(page.audience)}</strong></div>
        <div><span>Recommended writer</span><strong>${escapeHtml(page.writer)}</strong></div>
        <div><span>Format</span><strong>${escapeHtml(page.format)}</strong></div>
      </section>

      ${categoryTemplateDirectory(page, editorUrl)}

      <section class="detail-shell keyword-sample" id="sample">
        <aside class="detail-meta">
          <p class="eyebrow">Editable sample</p>
          <h2>${escapeHtml(title)} sample</h2>
          <p>Replace every bracketed field with accurate details and use evidence the recommender personally observed.</p>
          <a class="button primary" href="${editorUrl}">Customize Online</a>
        </aside>
        <article class="letter-preview">
          <h3>${escapeHtml(title)}</h3>
          ${sample.map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, "<br />").replace(/\[([^\]]+)\]/g, '<span class="field">[$1]</span>')}</p>`).join("\n          ")}
        </article>
      </section>

      <article class="seo-copy keyword-article" id="guide">
        <p class="eyebrow">2026 writing guide</p>
        <h2>How to use a ${escapeHtml(page.keyword)}</h2>
        ${article}

        <section class="keyword-checklist">
          <h2>Final review checklist</h2>
          <ul>
            <li>The relationship and purpose are clear in the opening.</li>
            <li>At least one specific, relevant example supports the recommendation.</li>
            <li>Names, pronouns, dates, organizations, titles, and contact details are correct.</li>
            <li>The level of enthusiasm matches what the writer can honestly verify.</li>
            <li>All bracketed fields and drafting instructions have been removed.</li>
          </ul>
        </section>

        <section class="keyword-faq">
          <h2>Frequently asked questions</h2>
          ${faqs.map((item) => `<details><summary>${escapeHtml(item.question)}</summary><p>${escapeHtml(item.answer)}</p></details>`).join("\n          ")}
        </section>
      </article>

      <section class="related-resources">
        <p class="eyebrow">Related resources</p>
        <h2>Continue with the right recommendation letter page</h2>
        <div class="related-link-grid">
          ${related.map((item) => `<a href="../${item.slug}/">${escapeHtml(titleCase(item.keyword))}</a>`).join("\n          ")}
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div>
        <a class="brand footer-brand" href="../index.html" aria-label="Recommendation Templates home">
          <span class="brand-mark" aria-hidden="true">LR</span>
          <span>Recommendation Templates</span>
        </a>
        <p>Free editable recommendation letter templates, samples, examples, and writing guides for 2026.</p>
      </div>
      ${footerArticles()}
      <nav class="footer-links" aria-label="Footer navigation">
        <a href="../privacy.html">Privacy</a>
        <a href="../partners.html">Partners</a>
        <a href="../blog.html">Blog</a>
      </nav>
    </footer>
  </body>
</html>`;
}

for (const page of pages.filter((item) => generatedClusters.has(item.cluster))) {
  const dir = path.join(outputRoot, page.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), pageHtml(page));
}

const indexHtml = fs.readFileSync(indexPath, "utf8");
const startMarker = "<!-- KEYWORD_SILO_START -->";
const endMarker = "<!-- KEYWORD_SILO_END -->";
const updatedIndex = indexHtml.includes(startMarker) && indexHtml.includes(endMarker)
  ? indexHtml.replace(new RegExp(`\\s*${startMarker}[\\s\\S]*?${endMarker}\\s*`), "\n\n      ")
  : indexHtml;
fs.writeFileSync(indexPath, updatedIndex);

console.log(`Generated ${pages.filter((item) => generatedClusters.has(item.cluster)).length} focused keyword pages and removed the homepage resource center.`);
