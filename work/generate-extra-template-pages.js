const fs = require("fs");
const path = require("path");

const BASE_URL = "https://recommendation-letters.com";
const outDir = path.join(__dirname, "..", "public");
const GA_SNIPPET = `    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-DQYZ36HTRY"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-DQYZ36HTRY');
    </script>
`;

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wordCount(value) {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const coverAudiences = [
  "Entry-Level",
  "Experienced Professional",
  "Career Change",
  "Internship",
  "Graduate",
  "Executive",
  "Remote Job",
  "Part-Time",
  "Freelance",
  "Return-to-Work"
];

const coverSituations = [
  "Administrative Assistant",
  "Customer Service",
  "Marketing",
  "Sales",
  "Software Engineer",
  "Data Analyst",
  "Project Manager",
  "Teacher",
  "Healthcare",
  "Finance"
];

const resignationAudiences = [
  "Two Weeks Notice",
  "Immediate",
  "Formal",
  "Short",
  "Email",
  "Relocation",
  "Career Change",
  "Retirement",
  "Part-Time Job",
  "Internship"
];

const resignationSituations = [
  "Manager",
  "HR Department",
  "Small Business",
  "Corporate Role",
  "Remote Position",
  "Hospitality Job",
  "Retail Job",
  "Healthcare Role",
  "Teaching Position",
  "Contract Role"
];

function buildTemplates(audiences, situations, type) {
  const templates = [];
  audiences.forEach((audience) => {
    situations.forEach((situation) => {
      const resignationLabel = audience.toLowerCase();
      const title =
        type === "cover"
          ? `${audience} Cover Letter Template for ${situation}`
          : `${audience} Resignation Letter Template for ${situation}`;
      const category =
        type === "cover"
          ? audience.includes("Entry") || audience.includes("Graduate") || audience.includes("Internship")
            ? "Early career"
            : audience.includes("Executive")
              ? "Leadership"
              : "Professional"
          : audience.includes("Immediate") || audience.includes("Short")
            ? "Concise"
            : audience.includes("Retirement") || audience.includes("Relocation")
              ? "Personal reason"
              : "Formal notice";
      const description =
        type === "cover"
          ? `A polished cover letter structure for ${audience.toLowerCase()} applicants targeting ${situation.toLowerCase()} roles, with space for achievements, fit, and next steps.`
          : `A clear resignation letter format for ${resignationLabel} in a ${situation.toLowerCase()} context, with a professional closing and transition support language.`;
      const body =
        type === "cover"
          ? [
              "[Your Name]",
              "[Your Email] | [Your Phone] | [City, State]",
              "[Date]",
              "Dear [Hiring Manager],",
              `I am writing to apply for the [Job Title] position. As a ${audience.toLowerCase()} candidate interested in ${situation.toLowerCase()} work, I am drawn to [Company Name] because of [Specific Reason].`,
              "In my previous experience with [Relevant Project, Class, Role, or Achievement], I developed strengths in [Skill 1], [Skill 2], and [Skill 3]. One example is [Specific Example], where I helped [Result or Impact].",
              "I would welcome the opportunity to bring this background to [Company Name] and contribute to [Team, Goal, or Business Need]. Thank you for your time and consideration.",
              "Sincerely,",
              "[Your Name]"
            ]
          : [
              "[Your Name]",
              "[Your Email] | [Your Phone]",
              "[Date]",
              "Dear [Manager Name],",
              `Please accept this letter as formal notice of my resignation from my position as [Job Title] with [Company Name]. My final working day will be [Final Working Day].`,
              `I appreciate the opportunities I have had while working in this ${situation.toLowerCase()} context. This ${audience.toLowerCase()} resignation is written to provide clear notice and support a smooth transition.`,
              "During my remaining time, I am happy to help document current work, organize handover notes, and support the transition where possible.",
              "Thank you again for the experience and support.",
              "Sincerely,",
              "[Your Name]"
            ];
      templates.push({
        id: slugify(title),
        title,
        category,
        situation,
        description,
        body
      });
    });
  });
  return templates.slice(0, 90);
}

const coverArticle = [
  "A strong cover letter template helps job seekers turn a resume into a more complete application story. While a resume lists experience, skills, education, and results, the cover letter explains why those details matter for a specific role. This page is designed as a cover letter template directory for applicants who want examples they can adapt quickly without sounding generic. The templates below cover entry-level applications, internships, career changes, remote roles, executive openings, part-time work, freelance proposals, and common fields such as marketing, sales, software engineering, customer service, education, healthcare, finance, administration, project management, and data analysis.",
  "When choosing a cover letter template, most applicants need three things: a clear structure, wording they can customize, and confidence that the format fits their situation. The safest structure is simple. Start with a direct opening that names the target role and company. Follow with one paragraph that connects your background to the job requirements. Add one paragraph with specific accomplishments, metrics, tools, coursework, certifications, or relevant projects. Close with a brief statement of interest and a professional call to action. This structure works because it keeps the letter focused on employer needs instead of repeating every line of the resume.",
  "The best cover letter template is not always the longest one. For many applications, three to five concise paragraphs are enough. Hiring managers are usually scanning for role fit, communication ability, motivation, and evidence that the applicant understands the job. A good template should make it easy to replace placeholder language with specific details. For example, an entry-level cover letter can emphasize coursework, internships, volunteer work, campus leadership, or transferable skills. A career change cover letter should explain the transition clearly and connect previous achievements to the new role. An executive cover letter should highlight leadership scope, business impact, team size, strategy, and measurable outcomes.",
  "Cover letters are also useful when the resume alone may not answer an obvious question. If you are relocating, returning to work after a break, applying for a remote position, moving from one industry to another, or applying without every listed requirement, a tailored letter can reduce uncertainty. It can explain your motivation, show that you have researched the company, and frame your background in a way that helps the reader understand your potential. The templates on this page include different audiences and job categories so you can begin from the closest match instead of rewriting a general sample from scratch.",
  "When customizing a cover letter template, avoid broad claims such as hard worker, team player, or fast learner unless you support them with evidence. Replace generic statements with examples: a campaign you improved, a customer issue you solved, a report you built, a system you maintained, a class project you completed, a team you led, or a process you made more efficient. Use numbers when they are accurate, but do not force metrics where they do not belong. A clear example is often more persuasive than a vague percentage.",
  "Formatting should stay clean. Use a readable font, consistent spacing, a standard greeting, and a short signature block. If you know the hiring manager's name, use it. If not, a professional greeting such as Dear Hiring Team is acceptable. Keep the tone confident but not exaggerated. The goal is to show fit, not to overstate experience. Before sending the letter, check the company name, role title, dates, contact details, and any copied placeholders. A small error in a cover letter can make a polished application feel careless.",
  "Use this cover letter template library as a starting point for building a stronger job application. A simple cover letter example can work well for direct applications, while an entry-level cover letter, internship cover letter, career change cover letter, remote job cover letter, or professional cover letter format may be better when your situation needs more context. The goal is to choose the closest match, preview the structure, download the template, and then replace every placeholder with accurate details."
].join("\n\n");

const resignationArticle = [
  "A resignation letter template gives employees a professional way to leave a role while protecting relationships, documenting notice, and reducing confusion about timing. Even when a conversation has already happened with a manager, a written resignation letter is useful because it confirms the final working day, states the decision clearly, and creates a simple record for HR. This page is designed as a resignation letter template directory for common situations, including two weeks notice, immediate resignation, formal resignation, short resignation emails, relocation, career changes, retirement, part-time jobs, internships, remote roles, retail, hospitality, healthcare, teaching, corporate work, small businesses, and contract roles.",
  "People searching for resignation letter templates usually want wording that is polite, concise, and easy to adapt. The most reliable structure has four parts. First, state that you are resigning from your position. Second, include the effective date or final working day. Third, express appreciation if appropriate. Fourth, offer transition support in a realistic way. This format works for most employees because it avoids unnecessary detail and keeps the tone respectful. A resignation letter does not need to explain every reason behind the decision. In many cases, a simple and professional note is better than a long explanation.",
  "The right resignation letter template depends on the context. A two weeks notice letter should be calm, formal, and clear about the final day. An immediate resignation letter should be brief and careful, especially if the situation is sensitive. A relocation resignation letter can mention the move without oversharing. A retirement resignation letter may be warmer and more reflective. A career change resignation letter can express appreciation while focusing on the next professional step. A short resignation email works well when company culture is less formal or when HR accepts email notices. The cards below give you many starting points so the wording matches the situation.",
  "A good resignation letter should avoid blame, emotional language, confidential details, threats, or negative comments about coworkers, managers, customers, or company decisions. Even if the departure is difficult, the written letter should remain professional. The employee may need a reference later, and the company may keep the letter in an employment file. For this reason, it is usually wise to keep the message focused on the decision, the date, gratitude, and transition help. Any complex issues can be handled through the proper HR process rather than placed inside a resignation note.",
  "When using a resignation letter template, check your employment contract, company handbook, local labor rules, and any notice period expectations before sending the final version. Some roles require more notice than two weeks. Some contract positions have specific terms. Some organizations ask employees to send the letter to both a manager and HR. If benefits, unused vacation, commissions, equipment returns, immigration status, or severance are involved, the resignation process may need additional documentation beyond the letter itself. The template should support the process, not replace official guidance.",
  "The strongest resignation letters are short but complete. They state the role, the company, the final day, and a professional closing. If you are willing to help with handover notes, training, documentation, or project transition, say so clearly. Do not promise more than you can actually deliver. If you are leaving immediately, acknowledge the short notice and keep the explanation minimal. If you are leaving on good terms, a sentence of thanks can preserve goodwill. If you are leaving after a difficult experience, neutral language is still usually the safest choice.",
  "This resignation letter library is organized around practical situations such as two weeks notice resignation letter, immediate resignation letter, short resignation email, resignation letter for personal reasons, resignation letter for new job, retirement resignation letter, internship resignation letter, and professional resignation letter template. Choose the template that matches your timing and relationship with the employer, preview the wording, download the file, and then adjust the details before sending it to your manager or HR contact."
].join("\n\n");

function navHtml(prefix = ".", activeTab = "recommendation") {
  return `<nav class="topnav" aria-label="Primary navigation">
        <a href="${prefix}/index.html#templates"${activeTab === "recommendation" ? ' aria-current="page"' : ""}>Letters of Recommendation</a>
        <details class="nav-dropdown">
          <summary>Blog</summary>
          <div class="nav-menu">
            <a href="${prefix}/medical-schools/">School Requirements</a>
            <a href="${prefix}/blog.html">All Articles</a>
          </div>
        </details>
        <a href="${prefix}/recommendation-letter-faq/"${activeTab === "faq" ? ' aria-current="page"' : ""}>FAQ</a>
        <a href="${prefix}/cover-letter.html"${activeTab === "cover-letter" ? ' aria-current="page"' : ""}>Cover Letter</a>
        <a href="${prefix}/resignation.html"${activeTab === "resignation" ? ' aria-current="page"' : ""}>Resignation</a>
      </nav>`;
}

function cardHtml(template) {
  return `<article class="directory-card">
          <div class="tag-row">
            <span class="tag">${escapeHtml(template.category)}</span>
            <span class="tag alt">${escapeHtml(template.situation)}</span>
          </div>
          <h3>${escapeHtml(template.title)}</h3>
          <p>${escapeHtml(template.description)}</p>
          <div class="directory-actions">
            <button class="button secondary" type="button" data-preview="${escapeHtml(template.id)}">Preview</button>
            <button class="button primary" type="button" data-download="${escapeHtml(template.id)}" data-format="DOC">Download DOC</button>
          </div>
        </article>`;
}

function formatBody(lines) {
  return lines
    .map((line) => `<p>${escapeHtml(line).replace(/\[([^\]]+)\]/g, '<span class="field">[$1]</span>')}</p>`)
    .join("\n");
}

function dataScript(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function pageHtml(config) {
  const templates = buildTemplates(config.audiences, config.situations, config.type);
  const articleWords = wordCount(config.article);
  if (articleWords < 600) {
    throw new Error(`${config.slug} article is only ${articleWords} words`);
  }
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: config.h1,
    numberOfItems: templates.length,
    itemListElement: templates.slice(0, 20).map((template, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: template.title
    }))
  };
  const firstTemplate = templates[0];

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(config.description)}" />
    <meta name="keywords" content="${escapeHtml(config.keywords)}" />
    <meta property="og:title" content="${escapeHtml(config.title)}" />
    <meta property="og:description" content="${escapeHtml(config.description)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${BASE_URL}/${config.slug}.html" />
    <title>${escapeHtml(config.title)}</title>
    <link rel="canonical" href="${BASE_URL}/${config.slug}.html" />
    <link rel="stylesheet" href="./styles.css" />
    <script type="application/ld+json">${JSON.stringify(itemList)}</script>
${GA_SNIPPET}
  </head>
  <body>
    <header class="topbar">
      <a class="brand" href="./index.html" aria-label="Recommendation Templates home">
        <span class="brand-mark" aria-hidden="true">LR</span>
        <span>Recommendation Templates</span>
      </a>
      ${navHtml(".", config.slug)}
    </header>

    <main>
      <section class="template-page-hero">
        <p class="eyebrow">${escapeHtml(config.eyebrow)}</p>
        <h1>${escapeHtml(config.h1)}</h1>
        <p>${escapeHtml(config.hero)}</p>
        <div class="hero-actions">
          <a class="button primary" href="#template-directory">Browse Templates</a>
          <a class="button secondary" href="#writing-guide">Read Guide</a>
        </div>
      </section>

      <section class="results-head" id="template-directory">
        <div>
          <p class="eyebrow">Template directory</p>
          <h2>${escapeHtml(config.directoryTitle)}</h2>
          <p class="template-intro">${escapeHtml(config.directoryIntro)}</p>
        </div>
      </section>

      <section class="template-directory" aria-label="${escapeHtml(config.directoryTitle)}">
        ${templates.map(cardHtml).join("\n        ")}
      </section>

      <section class="detail-shell template-page-preview" id="template-preview">
        <aside class="detail-meta">
          <p class="eyebrow">Template preview</p>
          <h2 id="previewTitle">${escapeHtml(firstTemplate.title)}</h2>
          <p id="previewDescription">${escapeHtml(firstTemplate.description)}</p>
          <dl>
            <dt>Category</dt><dd id="previewCategory">${escapeHtml(firstTemplate.category)}</dd>
            <dt>Best for</dt><dd id="previewSituation">${escapeHtml(firstTemplate.situation)}</dd>
            <dt>Format</dt><dd>DOC and text copy</dd>
          </dl>
          <div class="download-row">
            <button class="button primary" type="button" id="previewDownloadDoc">Download DOC</button>
            <button class="button secondary" type="button" id="previewDownloadTxt">Download TXT</button>
          </div>
        </aside>
        <article class="letter-preview" id="previewBody">
          <h3>${escapeHtml(firstTemplate.title)}</h3>
          ${formatBody(firstTemplate.body)}
        </article>
      </section>

      <section class="seo-copy" id="writing-guide">
        <p class="eyebrow">Writing guide</p>
        <h2>${escapeHtml(config.guideTitle)}</h2>
        <div class="article-body">
          ${config.article
            .split("\n\n")
            .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
            .join("\n          ")}
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div>
        <a class="brand footer-brand" href="./index.html" aria-label="Recommendation Templates home">
          <span class="brand-mark" aria-hidden="true">LR</span>
          <span>Recommendation Templates</span>
        </a>
        <p>Editable templates for recommendation letters, cover letters, resignation letters, and professional writing needs.</p>
      </div>
      <nav class="footer-articles" aria-label="Blog articles">
        <strong class="footer-heading">Blog articles</strong>
        <div class="footer-article-grid">
          <a href="./blog/albany-medical-college-letters-of-recommendation.html">Albany Medical College recommendation guide</a>
          <a href="./blog/what-is-a-notarized-letter.html">What is a notarized letter?</a>
          <a href="./blog/how-to-write-an-email-asking-for-a-letter-of-recommendation.html">Write a recommendation request email</a>
          <a href="./blog/how-to-ask-someone-to-write-a-letter-of-recommendation.html">Ask someone for a recommendation</a>
          <a href="./blog/how-to-ask-for-a-letter-of-recommendation-via-email.html">Ask for a recommendation via email</a>
          <a href="./blog/law-school-letter-of-recommendation-sample.html">Law school recommendation sample</a>
        </div>
        <a class="footer-all-articles" href="./blog.html">All articles</a>
      </nav>
      <nav class="footer-links" aria-label="Footer navigation">
        <a href="./about.html">About Us</a>
        <a href="./recommendation-letter-faq/">FAQ</a>
        <a href="./privacy.html">Privacy</a>
        <a href="./partners.html">Partners</a>
        <a href="./blog.html">Blog</a>
      </nav>
    </footer>

    <div class="lead-modal hidden" id="leadModal" role="dialog" aria-modal="true" aria-labelledby="leadModalTitle">
      <div class="lead-panel">
        <button class="modal-close" id="leadClose" type="button" aria-label="Close contact form">&times;</button>
        <p class="eyebrow">Template download</p>
        <h2 id="leadModalTitle">Leave your contact to download</h2>
        <p class="modal-copy">
          Enter your details once to unlock template downloads. We will use this contact only for
          template access and relevant updates.
        </p>
        <form
          id="leadForm"
          class="lead-form"
          name="template-download-leads"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="template-download-leads" />
          <p class="honeypot">
            <label>Do not fill this out: <input name="bot-field" /></label>
          </p>
          <label>
            Name
            <input id="leadName" name="name" autocomplete="name" required placeholder="Your name" />
          </label>
          <label>
            Email
            <input id="leadEmail" name="email" type="email" autocomplete="email" required placeholder="you@example.com" />
          </label>
          <label>
            Use case
            <select id="leadUseCase" name="useCase">
              <option value="Job application">Job application</option>
              <option value="Resignation">Resignation</option>
              <option value="Recommendation letter">Recommendation letter</option>
              <option value="HR document">HR document</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <input id="leadTemplate" name="template" type="hidden" />
          <input id="leadFormat" name="format" type="hidden" />
          <input id="leadCapturedAt" name="capturedAt" type="hidden" />
          <p class="form-error" id="leadError" role="alert"></p>
          <button class="button primary" type="submit">Log In and Download</button>
        </form>
      </div>
    </div>

    <div class="toast" id="toast" role="status" aria-live="polite"></div>
    <script>
      window.templatePageData = ${dataScript({ pageType: config.type, templates })};
    </script>
    <script src="./template-page.js"></script>
  </body>
</html>`;
}

const pages = [
  {
    slug: "cover-letter",
    type: "cover",
    title: "Cover Letter Templates | 80+ Job Application Examples",
    h1: "Cover Letter Templates",
    eyebrow: "Job application templates",
    description:
      "Browse 80+ cover letter templates for entry-level jobs, internships, career changes, remote work, executives, marketing, sales, software, healthcare, teaching, finance, and more.",
    keywords:
      "cover letter template, cover letter examples, job application cover letter, entry level cover letter, internship cover letter, career change cover letter, remote job cover letter, professional cover letter format",
    hero:
      "Use this cover letter template directory to find role-specific, editable structures for job applications, internships, remote jobs, career changes, and professional opportunities.",
    guideTitle: "How to choose and customize a cover letter template",
    directoryTitle: "Cover letter template library",
    directoryIntro:
      "Choose a template that matches your career stage, target role, and application situation. Each card can become a future downloadable DOC, PDF, or text template page.",
    article: coverArticle,
    audiences: coverAudiences,
    situations: coverSituations
  },
  {
    slug: "resignation",
    type: "resignation",
    title: "Resignation Letter Templates | 80+ Notice Letter Examples",
    h1: "Resignation Letter Templates",
    eyebrow: "Professional notice templates",
    description:
      "Browse 80+ resignation letter templates for two weeks notice, immediate resignation, formal letters, email notices, relocation, retirement, internships, part-time jobs, and more.",
    keywords:
      "resignation letter template, two weeks notice letter, immediate resignation letter, resignation email template, formal resignation letter, short resignation letter, retirement resignation letter",
    hero:
      "Find a professional resignation letter template for common notice situations, including two weeks notice, immediate resignation, relocation, retirement, internships, and part-time jobs.",
    guideTitle: "How to write a clear resignation letter",
    directoryTitle: "Resignation letter template library",
    directoryIntro:
      "Choose a resignation template based on notice timing, tone, role type, and reason for leaving. Each card gives you a focused starting point for a future downloadable template.",
    article: resignationArticle,
    audiences: resignationAudiences,
    situations: resignationSituations
  }
];

pages.forEach((page) => {
  fs.writeFileSync(path.join(outDir, `${page.slug}.html`), pageHtml(page));
});

console.log(`Generated ${pages.length} template directory pages in ${outDir}`);
