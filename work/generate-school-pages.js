const fs = require("fs");
const path = require("path");
const { medicalSchools, undergradSchools } = require("./school-data");

const BASE_URL = "https://recommendation-letters.com";
const outDir = path.join(__dirname, "..", "outputs");
const medDir = path.join(outDir, "schools", "med");
const undergradDir = path.join(outDir, "schools");
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

function nav(prefix) {
  return `<nav class="topnav" aria-label="Primary navigation">
        <a href="${prefix}index.html#templates">Letters of Recommendation</a>
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
        <p>Editable recommendation letter templates for school, scholarship, work, and personal references.</p>
      </div>
      <nav class="footer-links" aria-label="Footer navigation">
        <a href="${prefix}about.html">About Us</a>
        <a href="${prefix}recommendation-letter-faq/">FAQ</a>
        <a href="${prefix}privacy.html">Privacy</a>
        <a href="${prefix}blog.html">Blog</a>
        <a href="${prefix}medical-school-recommendation-letter-sample/">Medical School Templates</a>
      </nav>
    </footer>`;
}

function medSchoolHtml(school) {
  const canonicalUrl = `${BASE_URL}/schools/med/${school.slug}/`;
  const depth = "../../..";
  const prefix = "../../../";

  const committeeYes = school.committeeNote.toLowerCase().includes("required") &&
    !school.committeeNote.toLowerCase().includes("not required");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How many letters of recommendation does ${school.name} require?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${school.name} typically requires a minimum of ${school.minLetters} letters and accepts up to ${school.maxLetters} letters through the AMCAS Letter Service. ${school.committeeNote}.`
        }
      },
      {
        "@type": "Question",
        name: `Does ${school.name} require a committee letter?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: school.committeeNote
        }
      },
      {
        "@type": "Question",
        name: `Who should write letters of recommendation for ${school.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Most applicants submit ${school.scienceLetters} science faculty letters and at least ${school.nonScienceLetters} letter from a clinical, research, or service supervisor. ${school.content.whoShouldWrite.split(".")[0]}.`
        }
      },
      {
        "@type": "Question",
        name: `How do I submit letters of recommendation to ${school.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: school.submissionNote + ". Applicants assign letters to individual school applications after uploading to AMCAS."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Medical Schools", item: `${BASE_URL}/schools/med/` },
      { "@type": "ListItem", position: 3, name: school.name, item: canonicalUrl }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${school.name} Letters of Recommendation Requirements`,
    description: school.description,
    mainEntityOfPage: canonicalUrl,
    author: { "@type": "Organization", name: "Recommendation Templates" }
  };

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(school.description)}" />
    <meta name="keywords" content="${escapeHtml(school.keywords)}" />
    <meta property="og:title" content="${escapeHtml(school.name)} Letters of Recommendation Requirements" />
    <meta property="og:description" content="${escapeHtml(school.description)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${canonicalUrl}" />
    <title>${escapeHtml(school.name)} Letters of Recommendation Requirements</title>
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="stylesheet" href="${depth}/styles.css" />
    <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(articleSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
${GA_SNIPPET}
  </head>
  <body>
    <header class="topbar">
      <a class="brand" href="${prefix}index.html" aria-label="Recommendation Templates home">
        <span class="brand-mark" aria-hidden="true">LR</span>
        <span>Recommendation Templates</span>
      </a>
      ${nav(prefix)}
    </header>
    <main>
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="${prefix}index.html">Home</a>
        <span aria-hidden="true">/</span>
        <a href="${prefix}schools/med/">Medical Schools</a>
        <span aria-hidden="true">/</span>
        <span>${escapeHtml(school.name)}</span>
      </nav>

      <section class="template-page-hero keyword-page-hero">
        <p class="eyebrow">Medical school — ${escapeHtml(school.state)}</p>
        <h1>${escapeHtml(school.name)} Letters of Recommendation Requirements</h1>
        <p>${escapeHtml(school.content.intro.split(".")[0] + ".")} This guide covers how many letters are required, who should write them, and how to submit through AMCAS.</p>
        <div class="hero-actions">
          <a class="button primary" href="${prefix}medical-school-recommendation-letter-sample/">View Medical School Templates</a>
          <a class="button secondary" href="#requirements">View Requirements</a>
          <a class="button secondary" href="#faq">FAQ</a>
        </div>
      </section>

      <section class="keyword-summary" aria-label="Requirements summary" id="requirements">
        <div><span>Minimum letters</span><strong>${school.minLetters}</strong></div>
        <div><span>Maximum letters</span><strong>${school.maxLetters}</strong></div>
        <div><span>Science letters</span><strong>${school.scienceLetters} recommended</strong></div>
        <div><span>Committee letter</span><strong>${committeeYes ? "Required" : "Preferred / Optional"}</strong></div>
        <div><span>Submission</span><strong>AMCAS Letter Service</strong></div>
      </section>

      <article class="blog-article">
        <section>
          <h2>Letter of Recommendation Requirements</h2>
          <p>${escapeHtml(school.content.requirementsDetail)}</p>
        </section>

        <section>
          <h2>Who Should Write Your Letters</h2>
          <p>${escapeHtml(school.content.whoShouldWrite)}</p>
        </section>

        <section>
          <h2>How to Submit Letters to ${escapeHtml(school.name)}</h2>
          <p>${escapeHtml(school.content.howToSubmit)}</p>
        </section>

        <section>
          <h2>Tips for a Strong Letter Package</h2>
          <p>${escapeHtml(school.content.tips)}</p>
        </section>

        <section class="disclaimer-note">
          <p><strong>Verify current requirements:</strong> Medical school admission requirements change by cycle. Always confirm letter requirements directly on ${escapeHtml(school.name)}'s official admissions website and through the current AMCAS instructions before submitting your application.</p>
        </section>
      </article>

      <section class="seo-copy" id="faq">
        <p class="eyebrow">Common questions</p>
        <h2>${escapeHtml(school.name)} Recommendation Letter FAQ</h2>
        <div class="faq-list">
          <details>
            <summary>How many letters of recommendation does ${escapeHtml(school.name)} require?</summary>
            <p>${escapeHtml(school.name)} typically requires a minimum of ${school.minLetters} letters and accepts up to ${school.maxLetters} letters through AMCAS. ${escapeHtml(school.committeeNote)}.</p>
          </details>
          <details>
            <summary>Does ${escapeHtml(school.name)} require a committee letter?</summary>
            <p>${escapeHtml(school.committeeNote)}. If your undergraduate school does not have a pre-medical advisory committee, submit the required number of individual letters instead.</p>
          </details>
          <details>
            <summary>Who should write my letters for ${escapeHtml(school.name)}?</summary>
            <p>Most applicants submit ${school.scienceLetters} letters from science faculty and at least ${school.nonScienceLetters} letter from a clinical, research, or service supervisor who can speak to qualities beyond academic performance.</p>
          </details>
          <details>
            <summary>How do I submit letters to ${escapeHtml(school.name)}?</summary>
            <p>${escapeHtml(school.submissionNote)}. Recommenders upload letters through a unique link provided by AMCAS, and applicants then assign letters to each school application.</p>
          </details>
          <details>
            <summary>When should I ask for letters of recommendation?</summary>
            <p>Ask recommenders three to four months before the application opens. Provide each recommender with your personal statement draft, activities list, transcript, and a few reminders of work you completed together. Follow up with a thank-you after submission.</p>
          </details>
        </div>
      </section>

      <section class="seo-copy">
        <p class="eyebrow">Related resources</p>
        <h2>Medical School Recommendation Letter Templates</h2>
        <p>Use these resources to prepare your recommendation letters for ${escapeHtml(school.name)} and other medical school applications.</p>
        <div class="related-link-grid">
          <a href="${prefix}medical-school-recommendation-letter-sample/">Medical school recommendation letter sample</a>
          <a href="${prefix}letter-of-recommendation-template/">Free letter of recommendation template</a>
          <a href="${prefix}how-to-ask-for-a-recommendation-letter/">How to ask for a letter of recommendation</a>
          <a href="${prefix}blog/how-to-write-an-email-asking-for-a-letter-of-recommendation.html">How to write a recommendation request email</a>
          <a href="${prefix}blog/albany-medical-college-letters-of-recommendation.html">Albany Medical College letters of recommendation guide</a>
          <a href="${prefix}graduate-school-recommendation-letter-sample/">Graduate school recommendation letter sample</a>
          <a href="${prefix}recommendation-letter-faq/">Recommendation letter FAQ</a>
        </div>
      </section>
    </main>
    ${footer(prefix)}
  </body>
</html>`;
}

function undergradSchoolHtml(school) {
  const canonicalUrl = `${BASE_URL}/schools/${school.slug}-letters-of-recommendation/`;
  const depth = "../..";
  const prefix = "../../";

  const requiresText = school.requiresLOR
    ? `Yes — ${school.displayName} requires ${school.requiredCount === 0 ? "at least one" : school.requiredCount} recommendation letter${school.requiredCount !== 1 ? "s" : ""}.`
    : `No — ${school.displayName} does not require letters of recommendation for standard freshman admission.`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Does ${school.name} require letters of recommendation?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: requiresText + " " + school.notes
        }
      },
      {
        "@type": "Question",
        name: `How many letters of recommendation does ${school.name} require?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: school.requiresLOR
            ? `${school.displayName} requires ${school.counselorRequired ? "one counselor recommendation and " : ""}${school.teacherRequired} teacher recommendation${school.teacherRequired !== 1 ? "s" : ""}${school.optionalAdditional > 0 ? `. Up to ${school.optionalAdditional} optional additional recommendation${school.optionalAdditional !== 1 ? "s are" : " is"} also accepted.` : "."}`
            : `${school.displayName} does not require letters of recommendation for standard freshman admission.`
        }
      },
      {
        "@type": "Question",
        name: `How do I submit letters of recommendation to ${school.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: school.requiresLOR
            ? `Letters are submitted through ${school.platform}. Teachers and counselors submit letters directly through the application portal.`
            : `${school.displayName} does not require letters of recommendation. The application is submitted through ${school.platform}.`
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Schools", item: `${BASE_URL}/schools/` },
      { "@type": "ListItem", position: 3, name: school.name, item: canonicalUrl }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Does ${school.name} Require Letters of Recommendation?`,
    description: school.description,
    mainEntityOfPage: canonicalUrl,
    author: { "@type": "Organization", name: "Recommendation Templates" }
  };

  const reqSummary = school.requiresLOR
    ? [
        { label: "Required", value: "Yes" },
        { label: "Counselor letter", value: school.counselorRequired ? "Required" : "Not required" },
        { label: "Teacher letters", value: school.teacherRequired > 0 ? `${school.teacherRequired} required` : "Not required" },
        { label: "Optional additional", value: school.optionalAdditional > 0 ? `Up to ${school.optionalAdditional}` : "Not accepted" },
        { label: "Platform", value: school.platform }
      ]
    : [
        { label: "Required", value: "No" },
        { label: "Platform", value: school.platform },
        { label: "Instead submits", value: "Essays and transcripts" }
      ];

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(school.description)}" />
    <meta name="keywords" content="${escapeHtml(school.keywords)}" />
    <meta property="og:title" content="Does ${escapeHtml(school.name)} Require Letters of Recommendation?" />
    <meta property="og:description" content="${escapeHtml(school.description)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${canonicalUrl}" />
    <title>Does ${escapeHtml(school.name)} Require Letters of Recommendation?</title>
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="stylesheet" href="${depth}/styles.css" />
    <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(articleSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
${GA_SNIPPET}
  </head>
  <body>
    <header class="topbar">
      <a class="brand" href="${prefix}index.html" aria-label="Recommendation Templates home">
        <span class="brand-mark" aria-hidden="true">LR</span>
        <span>Recommendation Templates</span>
      </a>
      ${nav(prefix)}
    </header>
    <main>
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="${prefix}index.html">Home</a>
        <span aria-hidden="true">/</span>
        <a href="${prefix}schools/">Schools</a>
        <span aria-hidden="true">/</span>
        <span>${escapeHtml(school.name)}</span>
      </nav>

      <section class="template-page-hero keyword-page-hero">
        <p class="eyebrow">${escapeHtml(school.state)} — Undergraduate admission</p>
        <h1>Does ${escapeHtml(school.name)} Require Letters of Recommendation?</h1>
        <p>${escapeHtml(requiresText)} ${school.requiresLOR ? `Here is what the ${school.platform} requires and who should write the letters.` : `Here is what the ${school.platform} does require and how the application works.`}</p>
        <div class="hero-actions">
          ${school.requiresLOR ? `<a class="button primary" href="${prefix}letter-of-recommendation-template/">Get a Free Template</a>` : `<a class="button primary" href="${prefix}index.html#templates">Browse Templates</a>`}
          <a class="button secondary" href="#requirements">View Requirements</a>
          <a class="button secondary" href="#faq">FAQ</a>
        </div>
      </section>

      <section class="keyword-summary" aria-label="Requirements summary" id="requirements">
        ${reqSummary.map(item => `<div><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong></div>`).join("\n        ")}
      </section>

      <article class="blog-article">
        <section>
          <h2>${escapeHtml(school.requiresLOR ? `${school.displayName} Letter of Recommendation Requirements` : `Does ${school.displayName} Require Letters of Recommendation?`)}</h2>
          <p>${escapeHtml(school.notes)}</p>
        </section>

        ${school.requiresLOR ? `
        <section>
          <h2>Who Should Write the Letters</h2>
          <p>${school.counselorRequired ? `A school counselor or guidance counselor must submit the counselor recommendation through ${escapeHtml(school.platform)}. The counselor's report typically includes context about the school's curriculum, the student's class rank or standing, and a personal evaluation of the student's character and contributions.` : ""}</p>
          ${school.teacherRequired > 0 ? `<p>Teacher recommendations should come from instructors in academic subjects, ideally from 11th or 12th grade, who can speak to the student's intellectual engagement, work habits, and classroom contributions. For STEM-focused programs, at least one letter from a math or science teacher is often most relevant. For humanities programs, an English or social studies teacher may provide the best perspective.</p>` : ""}
          ${school.optionalAdditional > 0 ? `<p>The optional additional recommendation can come from a coach, employer, mentor, community leader, or research supervisor who knows the student in a context different from the classroom. Optional letters add value only if they present new, meaningful information that is not already evident in the main application.</p>` : ""}
        </section>

        <section>
          <h2>How to Submit Letters Through ${escapeHtml(school.platform)}</h2>
          <p>Once the student submits the application through ${escapeHtml(school.platform)}, the system sends automatic requests to each designated recommender. Recommenders submit letters directly through the portal and do not send paper copies. Students should notify recommenders before adding their contact information to the application and should provide ample time — ideally four to six weeks — for the letter to be written and submitted before the deadline.</p>
        </section>` : `
        <section>
          <h2>What ${escapeHtml(school.displayName)} Uses Instead of Recommendation Letters</h2>
          <p>Because ${escapeHtml(school.displayName)} does not require letters of recommendation, the application relies primarily on other materials to evaluate candidates. These typically include high school transcripts, course rigor and grades, standardized test scores if submitted, and personal essays or short-answer responses. Some applicants find this format more straightforward, while others prefer the opportunity to have a recommender add outside context. The essays, in particular, carry significant weight in the absence of letters.</p>
        </section>
        <section>
          <h2>Scholarship and Honors Program Exceptions</h2>
          <p>While ${escapeHtml(school.displayName)}'s standard admission process does not require letters, scholarship programs, honors colleges, and specific major tracks may have different requirements. If you are applying to any of these programs at ${escapeHtml(school.displayName)}, review their separate application materials carefully, as letters of recommendation may be required or strongly recommended.</p>
        </section>`}

        <section class="disclaimer-note">
          <p><strong>Verify current requirements:</strong> Admission requirements can change from year to year. Always confirm letter of recommendation policies directly on ${escapeHtml(school.name)}'s official admissions website before completing your application.</p>
        </section>
      </article>

      <section class="seo-copy" id="faq">
        <p class="eyebrow">Common questions</p>
        <h2>${escapeHtml(school.name)} Recommendation Letter FAQ</h2>
        <div class="faq-list">
          <details>
            <summary>Does ${escapeHtml(school.name)} require letters of recommendation?</summary>
            <p>${escapeHtml(requiresText)} ${escapeHtml(school.notes)}</p>
          </details>
          <details>
            <summary>How many letters does ${escapeHtml(school.name)} require?</summary>
            <p>${school.requiresLOR
              ? escapeHtml(`${school.displayName} requires ${school.counselorRequired ? "one counselor recommendation" : ""}${school.counselorRequired && school.teacherRequired > 0 ? " and " : ""}${school.teacherRequired > 0 ? `${school.teacherRequired} teacher recommendation${school.teacherRequired !== 1 ? "s" : ""}` : ""}${school.optionalAdditional > 0 ? `. Up to ${school.optionalAdditional} optional additional recommendation${school.optionalAdditional !== 1 ? "s are" : " is"} accepted.` : "."}`)
              : escapeHtml(`${school.displayName} does not require letters of recommendation for standard freshman admission.`)}</p>
          </details>
          <details>
            <summary>Who should write the letters for ${escapeHtml(school.name)}?</summary>
            <p>${school.requiresLOR
              ? escapeHtml(`Teacher recommendations from 11th or 12th grade academic teachers work best. ${school.counselorRequired ? "The school counselor recommendation is handled by your guidance counselor. " : ""}${school.optionalAdditional > 0 ? "For the optional letter, choose someone who knows you in a distinct setting — a coach, employer, mentor, or community supervisor." : ""}`)
              : escapeHtml(`${school.displayName} does not require letters of recommendation, so this question does not apply to the standard application. For scholarship or honors programs, check their specific requirements.`)}</p>
          </details>
          <details>
            <summary>How do I request letters for ${escapeHtml(school.name)}?</summary>
            <p>${school.requiresLOR
              ? escapeHtml(`Ask your recommenders four to six weeks before the deadline. Provide them with a copy of your essays, activities list, and a short note reminding them of your work together. The ${school.platform} system sends recommenders a link to upload their letters directly.`)
              : escapeHtml(`${school.displayName} does not require letters of recommendation for standard admission. If a scholarship program requires letters, follow their specific request timeline and instructions.`)}</p>
          </details>
        </div>
      </section>

      <section class="seo-copy">
        <p class="eyebrow">Related resources</p>
        <h2>Recommendation Letter Templates and Guides</h2>
        <div class="related-link-grid">
          <a href="${prefix}letter-of-recommendation-template/">Free letter of recommendation template</a>
          <a href="${prefix}letter-of-recommendation-template-for-college-application/">College application recommendation letter</a>
          <a href="${prefix}how-to-ask-for-a-recommendation-letter/">How to ask for a letter of recommendation</a>
          <a href="${prefix}blog/how-to-write-an-email-asking-for-a-letter-of-recommendation.html">How to write a recommendation request email</a>
          <a href="${prefix}teacher-recommendation-letter-template/">Teacher recommendation letter template</a>
          <a href="${prefix}recommendation-letter-faq/">Recommendation letter FAQ</a>
        </div>
      </section>
    </main>
    ${footer(prefix)}
  </body>
</html>`;
}

function medIndexHtml(schools) {
  const canonicalUrl = `${BASE_URL}/schools/med/`;
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Medical School Letters of Recommendation Requirements",
    itemListElement: schools.map((school, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${school.name} Letters of Recommendation Requirements`,
      url: `${BASE_URL}/schools/med/${school.slug}/`
    }))
  };
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Find letter of recommendation requirements for top medical schools. Learn how many letters are required, whether a committee letter is needed, and how to submit through AMCAS." />
    <meta name="keywords" content="medical school letters of recommendation requirements, medical school lor requirements, AMCAS letters of recommendation, med school recommendation letter guide" />
    <meta property="og:title" content="Medical School Letters of Recommendation Requirements" />
    <meta property="og:description" content="Find letter of recommendation requirements for top medical schools. Learn how many letters each school requires and how to submit through AMCAS." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <title>Medical School Letters of Recommendation Requirements</title>
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="stylesheet" href="../../styles.css" />
    <script type="application/ld+json">${JSON.stringify(itemList)}</script>
${GA_SNIPPET}
  </head>
  <body>
    <header class="topbar">
      <a class="brand" href="../../index.html" aria-label="Recommendation Templates home">
        <span class="brand-mark" aria-hidden="true">LR</span>
        <span>Recommendation Templates</span>
      </a>
      ${nav("../../")}
    </header>
    <main>
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="../../index.html">Home</a>
        <span aria-hidden="true">/</span>
        <span>Medical Schools</span>
      </nav>
      <section class="template-page-hero">
        <p class="eyebrow">Medical school admissions</p>
        <h1>Medical School Letters of Recommendation Requirements</h1>
        <p>Find letter of recommendation requirements for top U.S. medical schools. Each guide covers how many letters are needed, whether a committee letter is required, who should write the letters, and how to submit through AMCAS.</p>
      </section>
      <section class="seo-copy">
        <p class="eyebrow">School guides</p>
        <h2>Letters of Recommendation by Medical School</h2>
        <div class="blog-grid">
          ${schools.map(school => `<article class="blog-card">
            <p class="eyebrow">${escapeHtml(school.state)}</p>
            <h3><a href="./${school.slug}/">${escapeHtml(school.name)}</a></h3>
            <p>${escapeHtml(school.description)}</p>
            <a class="button secondary article-link" href="./${school.slug}/">View requirements</a>
          </article>`).join("\n          ")}
        </div>
      </section>
    </main>
    ${footer("../../")}
  </body>
</html>`;
}

function undergradIndexHtml(schools) {
  const canonicalUrl = `${BASE_URL}/schools/`;
  const requireYes = schools.filter(s => s.requiresLOR);
  const requireNo = schools.filter(s => !s.requiresLOR);
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Find out whether your college requires letters of recommendation. Browse undergraduate school guides covering Common App, UC Application, and more." />
    <meta name="keywords" content="does college require letters of recommendation, undergraduate letters of recommendation requirements, college recommendation letter requirements, does university require lor" />
    <meta property="og:title" content="Does Your College Require Letters of Recommendation?" />
    <meta property="og:description" content="Browse undergraduate school guides to find out whether your college requires letters of recommendation and how many are needed." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <title>Does Your College Require Letters of Recommendation?</title>
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="stylesheet" href="../styles.css" />
${GA_SNIPPET}
  </head>
  <body>
    <header class="topbar">
      <a class="brand" href="../index.html" aria-label="Recommendation Templates home">
        <span class="brand-mark" aria-hidden="true">LR</span>
        <span>Recommendation Templates</span>
      </a>
      ${nav("../")}
    </header>
    <main>
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="../index.html">Home</a>
        <span aria-hidden="true">/</span>
        <span>Schools</span>
      </nav>
      <section class="template-page-hero">
        <p class="eyebrow">Undergraduate admission</p>
        <h1>Does Your College Require Letters of Recommendation?</h1>
        <p>Not every college requires letters of recommendation. Browse by school to find out how many letters are needed, who should write them, and how they are submitted. Verified for the current application cycle.</p>
      </section>
      <section class="seo-copy">
        <p class="eyebrow">Requires letters of recommendation</p>
        <h2>Schools That Require Letters of Recommendation</h2>
        <div class="blog-grid">
          ${requireYes.map(school => `<article class="blog-card">
            <p class="eyebrow">${escapeHtml(school.state)}</p>
            <h3><a href="./${school.slug}-letters-of-recommendation/">Does ${escapeHtml(school.name)} require letters?</a></h3>
            <p>${escapeHtml(school.description)}</p>
            <a class="button secondary article-link" href="./${school.slug}-letters-of-recommendation/">View requirements</a>
          </article>`).join("\n          ")}
        </div>
      </section>
      <section class="seo-copy">
        <p class="eyebrow">Does not require letters</p>
        <h2>Schools That Do Not Require Letters of Recommendation</h2>
        <div class="blog-grid">
          ${requireNo.map(school => `<article class="blog-card">
            <p class="eyebrow">${escapeHtml(school.state)}</p>
            <h3><a href="./${school.slug}-letters-of-recommendation/">Does ${escapeHtml(school.name)} require letters?</a></h3>
            <p>${escapeHtml(school.description)}</p>
            <a class="button secondary article-link" href="./${school.slug}-letters-of-recommendation/">Learn more</a>
          </article>`).join("\n          ")}
        </div>
      </section>
    </main>
    ${footer("../")}
  </body>
</html>`;
}

// Generate pages
fs.mkdirSync(medDir, { recursive: true });
medicalSchools.forEach(school => {
  const dir = path.join(medDir, school.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), medSchoolHtml(school));
  console.log(`Generated: /schools/med/${school.slug}/`);
});

fs.writeFileSync(path.join(medDir, "index.html"), medIndexHtml(medicalSchools));
console.log("Generated: /schools/med/");

fs.mkdirSync(undergradDir, { recursive: true });
undergradSchools.forEach(school => {
  const dir = path.join(undergradDir, `${school.slug}-letters-of-recommendation`);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), undergradSchoolHtml(school));
  console.log(`Generated: /schools/${school.slug}-letters-of-recommendation/`);
});

fs.writeFileSync(path.join(undergradDir, "index.html"), undergradIndexHtml(undergradSchools));
console.log("Generated: /schools/");

// Collect new URLs for sitemap
const newUrls = [
  `${BASE_URL}/schools/`,
  `${BASE_URL}/schools/med/`,
  ...medicalSchools.map(s => `${BASE_URL}/schools/med/${s.slug}/`),
  ...undergradSchools.map(s => `${BASE_URL}/schools/${s.slug}-letters-of-recommendation/`)
];
console.log(`\nTotal new URLs generated: ${newUrls.length}`);
console.log(newUrls.join("\n"));
