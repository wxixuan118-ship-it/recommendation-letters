const fs = require("fs");
const path = require("path");
const BASE_URL = "https://recommendation-letters.com";
const GA_SNIPPET = `    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-DQYZ36HTRY"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-DQYZ36HTRY');
    </script>
`;

function recommendationExampleGuide(keyword, audience, recommender, situation) {
  return [
    `A ${keyword} is useful when the writer needs a practical model rather than a blank format. A good example shows how to introduce the relationship, explain the context, give evidence, and close with a clear recommendation. For ${audience}, the best letter is specific enough to feel credible but flexible enough to adapt to different applications. The example should not sound like a generic compliment copied from a template. It should describe what the recommender actually observed, how long the recommender has known the person, and why those observations matter for the opportunity.`,
    `The opening paragraph should answer the reader's first questions quickly. Who is writing the letter? How does the recommender know the applicant? What is the purpose of the recommendation? In a ${keyword}, the writer can begin with a direct sentence such as, "I am pleased to recommend [Name] for [Opportunity]." The next sentence should explain the relationship, such as a ${recommender} relationship, classroom relationship, workplace relationship, mentoring relationship, or peer relationship. This gives the reader a reason to trust the comments that follow.`,
    `The strongest middle section focuses on examples. Instead of writing only that the applicant is hardworking, reliable, kind, mature, or talented, the recommender should show those qualities through a real moment. For ${situation}, useful evidence might include a project completed under pressure, a thoughtful contribution to a team, consistent academic improvement, careful communication, leadership during a challenge, or support for others. Specific examples make the recommendation easier to believe and more memorable for the person reviewing the application.`,
    `Tone matters. A ${keyword} should sound warm, professional, and balanced. Overstated praise can feel less credible, especially when it is not supported by evidence. A strong letter can be enthusiastic without exaggeration. The recommender should choose two or three main strengths and develop them well. For example, a letter might focus on communication, responsibility, and growth. Another letter might focus on leadership, judgment, and technical skill. Trying to include every possible positive quality can make the letter less focused.`,
    `The format should stay simple. Use a greeting, an introduction, one or two evidence paragraphs, a closing recommendation, and the recommender's signature details. If the letter is for a school, scholarship, job, internship, promotion, or formal application, the writer should mention the exact opportunity when possible. If the exact reader is unknown, "To Whom It May Concern" can work, but a more specific greeting is better when available. The example should also include contact information if the recipient may need verification.`,
    `Before using a ${keyword}, replace every placeholder with accurate details. Names, roles, dates, organizations, program titles, job titles, and examples should be checked carefully. The recommender should avoid private information that the applicant has not agreed to share. The final version should read like a real letter written for one person, not a mass-produced sample. This is why examples are best used as structure and inspiration rather than copied word for word.`,
    `A final review should ask three questions. Does the letter explain how the recommender knows the applicant? Does it provide at least one concrete example? Does it end with a clear recommendation? If the answer to all three is yes, the letter is likely more useful than a vague note of support. A ${keyword} can save time, but the strength of the final letter still depends on honest details, relevant evidence, and a tone that matches the application.`
  ];
}

const pages = [
  {
    slug: "letter-of-recommendation-template-word",
    title: "Letter of Recommendation Template Word",
    description:
      "Edit a letter of recommendation template online, customize its font, color, and style, then download a polished editable Word document.",
    h1: "Letter of Recommendation Template Word",
    editorTemplateId: "word-template",
    intent: "Users searching this term usually want a downloadable and editable Word recommendation letter format.",
    bestFor: ["Academic recommendations", "Employee references", "Personal references", "Reusable editable files"],
    sampleTitle: "Editable Word Recommendation Letter Sample",
    body: [
      "Dear [Recipient Name],",
      "I am pleased to recommend [Applicant Name] for [Opportunity, Program, or Role]. I have known [Applicant Name] for [Length of Time] as [Relationship or Role], and I can confidently speak to [his/her/their] abilities and character.",
      "[Applicant Name] has consistently shown [Strength 1], [Strength 2], and [Strength 3]. One example is [Specific Example], where [he/she/they] demonstrated excellent judgment and dependable follow-through.",
      "I believe [Applicant Name] would be a strong fit for [Opportunity] and recommend [him/her/them] without hesitation.",
      "Sincerely,\n[Recommender Name]\n[Title]\n[Contact Information]"
    ]
  },
  {
    slug: "sample-recommendation-letter-for-employee",
    title: "Sample Recommendation Letter for Employee",
    description:
      "Preview and download a sample recommendation letter for employee references, manager endorsements, job applications, and professional opportunities.",
    h1: "Sample Recommendation Letter for Employee",
    intent: "This page targets users who need a workplace recommendation sample that explains performance, reliability, and measurable impact.",
    bestFor: ["Job applications", "Internal transfers", "Promotion packets", "Professional references"],
    sampleTitle: "Employee Recommendation Letter Sample",
    body: [
      "Dear Hiring Manager,",
      "I am pleased to recommend [Employee Name], who worked with me at [Company Name] as [Job Title]. During [his/her/their] time on my team, [Employee Name] proved to be reliable, professional, and highly capable.",
      "[Employee Name] was responsible for [Responsibilities] and consistently delivered quality work. In particular, [Specific Example] showed [his/her/their] ability to solve problems, communicate clearly, and collaborate with others.",
      "I believe [Employee Name] would be a valuable addition to any organization seeking someone with [Skill 1], [Skill 2], and strong professional judgment.",
      "Sincerely,\n[Manager Name]\n[Title]\n[Company]"
    ]
  },
  {
    slug: "letter-of-recommendation-example-for-employee",
    title: "Letter of Recommendation Example for Employee",
    description:
      "Preview a letter of recommendation example for employee applications, manager references, internal promotions, transfers, and professional job opportunities.",
    h1: "Letter of Recommendation Example for Employee",
    intent:
      "This page helps managers and supervisors write a practical employee recommendation example with performance details, workplace strengths, and measurable impact.",
    bestFor: ["Employee job references", "Manager recommendations", "Promotion support", "Professional applications"],
    sampleTitle: "Employee Letter of Recommendation Example",
    body: [
      "Dear Hiring Manager,",
      "I am pleased to recommend [Employee Name] for [Role, Program, or Opportunity]. I supervised [Employee Name] at [Company Name], where [he/she/they] worked as [Job Title] from [Start Date] to [End Date or Present].",
      "During this time, [Employee Name] consistently demonstrated [Strength 1], [Strength 2], and [Strength 3]. One example was [Specific Project or Responsibility], where [he/she/they] helped [Result, Improvement, or Outcome].",
      "[Employee Name] communicates clearly, follows through on commitments, and contributes positively to team goals. I believe [he/she/they] would bring the same professionalism and reliability to [Opportunity].",
      "Sincerely,\n[Manager Name]\n[Title]\n[Company]\n[Contact Information]"
    ],
    longIntro: recommendationExampleGuide(
      "letter of recommendation example for employee",
      "an employee or former employee",
      "manager or supervisor",
      "workplace recommendations, job applications, promotions, and internal transfers"
    )
  },
  {
    slug: "sample-recommendation-letter-for-student",
    title: "Sample Recommendation Letter for Student",
    description:
      "Use this sample recommendation letter for student applications, school programs, internships, scholarships, and academic opportunities.",
    h1: "Sample Recommendation Letter for Student",
    intent: "This page supports teachers, counselors, and advisors writing a student recommendation letter.",
    bestFor: ["College applications", "Scholarships", "Internships", "Academic programs"],
    sampleTitle: "Student Recommendation Letter Sample",
    body: [
      "Dear [Recipient Name],",
      "I am happy to recommend [Student Name], whom I have taught in [Class or Program]. [Student Name] is a thoughtful and motivated student who brings curiosity and steady effort to [his/her/their] work.",
      "A strong example of [Student Name]'s character is [Specific Example]. This showed [his/her/their] persistence, academic interest, and ability to work well with others.",
      "I believe [Student Name] will continue to grow and contribute positively to [School, Program, or Opportunity].",
      "Sincerely,\n[Teacher Name]\n[School]"
    ],
    longIntro: recommendationExampleGuide(
      "sample recommendation letter for student",
      "a student applicant",
      "teacher, counselor, advisor, or mentor",
      "school applications, scholarships, academic programs, internships, and student awards"
    )
  },
  {
    slug: "letter-of-recommendation-template-google-docs",
    title: "Letter of Recommendation Template Google Docs",
    description:
      "Find a Google Docs recommendation letter template that is easy to copy, edit online, share, and customize for common reference letter needs.",
    h1: "Letter of Recommendation Template Google Docs",
    intent: "Users searching this phrase usually want a copy-ready recommendation letter they can edit and share online.",
    bestFor: ["Online editing", "Sharing with recommenders", "Quick customization", "Collaborative review"],
    sampleTitle: "Google Docs Recommendation Letter Template",
    body: [
      "Dear [Recipient Name],",
      "I am writing to recommend [Applicant Name] for [Opportunity]. This Google Docs recommendation letter template is designed for quick copying, editing, and sharing.",
      "In my experience with [Applicant Name], [he/she/they] has shown [Key Trait] and [Key Skill]. For example, [Specific Example] demonstrates [his/her/their] ability to contribute with care and consistency.",
      "I recommend [Applicant Name] and believe [he/she/they] would be a strong fit for [Opportunity].",
      "Best regards,\n[Recommender Name]\n[Title]"
    ]
  },
  {
    slug: "letter-of-recommendation-template-for-graduate-school",
    title: "Letter of Recommendation Template for Graduate School",
    description:
      "Preview a graduate school recommendation letter template for professors, advisors, research mentors, and academic admissions applications.",
    h1: "Letter of Recommendation Template for Graduate School",
    intent: "This page targets applicants and recommenders who need an academic letter for graduate admissions.",
    bestFor: ["Master's applications", "PhD applications", "Research programs", "Academic admissions"],
    sampleTitle: "Graduate School Recommendation Letter Template",
    body: [
      "To the Admissions Committee,",
      "I am pleased to recommend [Applicant Name] for admission to [Program Name]. I have worked with [Applicant Name] as [his/her/their] professor in [Course or Department], where [he/she/they] demonstrated intellectual curiosity and strong analytical ability.",
      "[Applicant Name] stood out through [Specific Academic Example]. [He/She/They] approached complex questions carefully and contributed meaningfully to class or research discussions.",
      "I believe [Applicant Name] has the preparation, maturity, and motivation to succeed in graduate study.",
      "Sincerely,\n[Professor Name]\n[Institution]"
    ]
  },
  {
    slug: "letter-of-recommendation-template-for-scholarship",
    title: "Letter of Recommendation Template for Scholarship",
    description:
      "Use this scholarship recommendation letter template to highlight merit, leadership, financial need, service, and future potential.",
    h1: "Letter of Recommendation Template for Scholarship",
    intent: "This page helps users write recommendation letters for scholarship committees and award applications.",
    bestFor: ["Merit scholarships", "Need-based scholarships", "Leadership awards", "International scholarships"],
    sampleTitle: "Scholarship Recommendation Letter Template",
    body: [
      "Dear Scholarship Committee,",
      "I am honored to recommend [Applicant Name] for the [Scholarship Name]. [Applicant Name] has shown exceptional dedication to [Field, Community, or Goal].",
      "What distinguishes [Applicant Name] is [Specific Achievement or Trait]. Through [Project, Class, or Role], [he/she/they] demonstrated leadership, resilience, and a clear commitment to making a meaningful contribution.",
      "This scholarship would help [Applicant Name] continue [his/her/their] education and expand the impact [he/she/they] has already begun to make.",
      "Respectfully,\n[Recommender Name]\n[Title]"
    ]
  },
  {
    slug: "letter-of-recommendation-template-for-coworker",
    title: "Letter of Recommendation Template for Coworker",
    description:
      "Download a coworker recommendation letter template for peer references, job applications, LinkedIn requests, and team-based professional endorsements.",
    h1: "Letter of Recommendation Template for Coworker",
    intent: "This page serves users who need a peer reference rather than a manager-written recommendation.",
    bestFor: ["Peer references", "Coworker endorsements", "LinkedIn recommendations", "Team collaboration examples"],
    sampleTitle: "Coworker Recommendation Letter Template",
    body: [
      "Dear [Recipient Name],",
      "I am pleased to recommend [Coworker Name], with whom I worked at [Company Name] on [Team or Project]. As a coworker, I saw [his/her/their] professionalism, collaboration, and reliability firsthand.",
      "[Coworker Name] contributed to [Project or Responsibility] by [Specific Contribution]. [He/She/They] communicated clearly, supported teammates, and helped the group deliver strong work.",
      "I would gladly work with [Coworker Name] again and recommend [him/her/them] for [Role or Opportunity].",
      "Sincerely,\n[Your Name]\n[Title]"
    ]
  },
  {
    slug: "letter-of-recommendation-example-for-coworker",
    title: "Letter of Recommendation Example for Coworker",
    description:
      "Use this letter of recommendation example for coworker references, peer endorsements, LinkedIn recommendations, job applications, and team-based professional support.",
    h1: "Letter of Recommendation Example for Coworker",
    intent:
      "This page supports coworkers who need to write a peer recommendation that highlights collaboration, reliability, communication, and team impact.",
    bestFor: ["Coworker references", "Peer recommendations", "LinkedIn endorsements", "Team collaboration examples"],
    sampleTitle: "Coworker Letter of Recommendation Example",
    body: [
      "Dear [Recipient Name],",
      "I am pleased to recommend [Coworker Name], with whom I worked at [Company Name] on [Team, Department, or Project]. As a coworker, I had the opportunity to see [his/her/their] collaboration, communication, and professionalism in daily work.",
      "[Coworker Name] contributed meaningfully to [Project or Responsibility]. One example was [Specific Example], where [he/she/they] helped the team [Result or Outcome].",
      "I would gladly work with [Coworker Name] again and believe [he/she/they] would be a strong addition to [Role, Organization, or Opportunity].",
      "Sincerely,\n[Your Name]\n[Title]\n[Contact Information]"
    ],
    longIntro: recommendationExampleGuide(
      "letter of recommendation example for coworker",
      "a coworker, teammate, or peer",
      "coworker or peer colleague",
      "peer references, workplace endorsements, LinkedIn recommendations, and job applications"
    )
  },
  {
    slug: "personal-letter-of-recommendation-template",
    title: "Personal Letter of Recommendation Template",
    description:
      "Use a personal letter of recommendation template for character references, community applications, volunteer roles, rentals, and general support letters.",
    h1: "Personal Letter of Recommendation Template",
    intent: "This page supports personal and character references where the recommender knows the applicant outside work or school.",
    bestFor: ["Character references", "Volunteer applications", "Community roles", "General personal support"],
    sampleTitle: "Personal Recommendation Letter Template",
    body: [
      "To Whom It May Concern,",
      "I am writing this personal letter of recommendation for [Applicant Name], whom I have known for [Length of Time]. I know [him/her/them] through [Relationship or Context].",
      "[Applicant Name] is [Trait 1], [Trait 2], and [Trait 3]. One example is [Specific Example], which reflects [his/her/their] character and dependability.",
      "I recommend [Applicant Name] with confidence and believe [he/she/they] would be a positive addition to [Opportunity or Organization].",
      "Sincerely,\n[Your Name]\n[Contact Information]"
    ]
  },
  {
    slug: "letter-of-recommendation-request-letter",
    title: "Letter of Recommendation Request Letter",
    description:
      "Use these letter of recommendation request letter templates to ask a professor, teacher, manager, mentor, or advisor for a recommendation politely and clearly.",
    h1: "Letter of Recommendation Request Letter",
    intent:
      "Users searching this keyword usually need a ready-to-send request letter or email that asks someone to write a recommendation before a specific deadline.",
    bestFor: ["Asking a professor", "Asking a manager", "Scholarship applications", "Short deadline requests"],
    sampleTitle: "Polite Letter of Recommendation Request Template",
    body: [
      "Subject: Request for a Letter of Recommendation",
      "Dear [Recommender Name],",
      "I hope you are doing well. I am applying for [Program, Scholarship, Job, or Opportunity] and wanted to ask whether you would feel comfortable writing a letter of recommendation for me.",
      "I thought of you because [Reason You Are Asking This Person], and I believe your perspective on my [Academic Work, Professional Skills, Character, or Leadership] would be especially meaningful.",
      "The deadline is [Deadline]. I can send my resume, application details, draft statement, transcript, or any points that would make the letter easier to prepare.",
      "Thank you very much for considering my request.",
      "Sincerely,\n[Your Name]"
    ],
    pageType: "request",
    requestTemplates: [
      {
        title: "Professor Recommendation Request Letter",
        bestUse: "Graduate school, research programs, academic fellowships",
        tone: "Respectful and specific",
        body: [
          "Subject: Recommendation Letter Request for [Program Name]",
          "Dear Professor [Last Name],",
          "I hope you are doing well. I am applying to [Program Name] at [University or Organization], and I wanted to ask whether you would be willing to write a letter of recommendation for my application.",
          "I especially valued your course in [Course Name] and the feedback you gave me on [Paper, Project, Research, or Presentation]. I believe your perspective on my academic work and growth would be very helpful to the committee.",
          "The recommendation is due on [Deadline]. If you are able to write the letter, I can send my resume, transcript, statement of purpose, program details, and a short summary of work I completed in your class.",
          "Thank you for considering my request. I completely understand if your schedule does not allow it.",
          "Sincerely,\n[Your Name]\n[Email]\n[Phone Number]"
        ]
      },
      {
        title: "Teacher Recommendation Request Letter for Student",
        bestUse: "College admission, student awards, summer programs",
        tone: "Warm and clear",
        body: [
          "Subject: Request for a Student Recommendation Letter",
          "Dear [Teacher Name],",
          "I hope you are doing well. I am applying for [College, Program, Scholarship, or Opportunity], and I wanted to ask if you would be comfortable writing a recommendation letter for me.",
          "I am asking because I learned a great deal in [Class Name], especially through [Project, Assignment, or Classroom Experience]. I think your view of my effort, growth, and participation would help support my application.",
          "The deadline is [Deadline]. I can provide my activities list, application instructions, draft essay, and any details that would make the process easier.",
          "Thank you very much for considering this.",
          "Best,\n[Student Name]"
        ]
      },
      {
        title: "Manager Recommendation Request Letter",
        bestUse: "Job applications, internal transfers, MBA applications",
        tone: "Professional and concise",
        body: [
          "Subject: Recommendation Letter Request",
          "Dear [Manager Name],",
          "I hope you are doing well. I am applying for [Role, Program, or Opportunity] and wanted to ask whether you would be willing to write a letter of recommendation for me.",
          "I thought of you because we worked closely on [Project, Team, or Responsibility], and your perspective on my [Skill, Leadership, Collaboration, or Results] would be especially relevant.",
          "The letter is due by [Deadline]. I can send the job description, my resume, application details, and a few notes on projects we worked on together.",
          "Thank you for considering my request. I appreciate your time and support.",
          "Sincerely,\n[Your Name]"
        ]
      },
      {
        title: "Scholarship Recommendation Request Letter",
        bestUse: "Merit scholarships, need-based awards, leadership grants",
        tone: "Grateful and mission-focused",
        body: [
          "Subject: Scholarship Recommendation Letter Request",
          "Dear [Recommender Name],",
          "I am applying for the [Scholarship Name], which supports students pursuing [Field, Goal, or Community Impact]. I wanted to ask whether you would be willing to write a recommendation letter for my application.",
          "I believe your perspective would be valuable because you have seen my work in [Class, Project, Volunteer Role, or Job]. The scholarship committee asks recommenders to comment on [Leadership, Academic Ability, Service, Character, or Potential].",
          "The deadline is [Deadline]. I can send the scholarship description, my resume, draft essay, and a few points about my goals.",
          "Thank you for considering my request and for your support.",
          "Sincerely,\n[Your Name]"
        ]
      },
      {
        title: "Short Recommendation Request Email",
        bestUse: "Quick but polite first ask",
        tone: "Brief and considerate",
        body: [
          "Subject: Recommendation Letter Request",
          "Dear [Recommender Name],",
          "I hope you are doing well. I am applying for [Opportunity] and wanted to ask whether you would feel comfortable writing a recommendation letter for me.",
          "The deadline is [Deadline]. I would be happy to send my resume, application details, and a short summary of points that may be helpful.",
          "Thank you for considering it.",
          "Best,\n[Your Name]"
        ]
      },
      {
        title: "Follow-Up Request Letter After No Response",
        bestUse: "Gentle reminder when the deadline is approaching",
        tone: "Polite and low-pressure",
        body: [
          "Subject: Following Up on Recommendation Letter Request",
          "Dear [Recommender Name],",
          "I hope you are doing well. I wanted to gently follow up on my request for a recommendation letter for [Opportunity]. The deadline is [Deadline].",
          "I completely understand if your schedule is too full. If you are still able to write the letter, I can send all supporting materials again and make the process as easy as possible.",
          "Thank you again for considering my request.",
          "Sincerely,\n[Your Name]"
        ]
      }
    ]
  }
];

const outDir = path.join(__dirname, "..", "public", "pages");
fs.mkdirSync(outDir, { recursive: true });

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatBody(lines) {
  return lines
    .map((line) => `<p>${escapeHtml(line).replace(/\n/g, "<br />").replace(/\[([^\]]+)\]/g, '<span class="field">[$1]</span>')}</p>`)
    .join("\n");
}

function pageHtml(page) {
  const metaKeywords = [
    page.title.toLowerCase(),
    page.h1.toLowerCase(),
    `${page.title.toLowerCase()} template`,
    "letter of recommendation template",
    "recommendation letter sample",
    "editable recommendation letter",
    ...page.bestFor.map((item) => item.toLowerCase())
  ].join(", ");
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is ${page.title}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: page.intent
        }
      },
      {
        "@type": "Question",
        name: "Can I edit this recommendation letter template?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            page.pageType === "request"
              ? "Yes. The request templates use replaceable fields such as recommender name, opportunity, deadline, supporting materials, and your name."
              : "Yes. The template uses replaceable fields such as applicant name, recommender name, opportunity, specific examples, title, and contact information."
        }
      }
    ]
  };
  const creativeWork = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: page.title,
    description: page.description,
    learningResourceType: "Template",
    about: page.pageType === "request" ? "Letter of recommendation request letter" : "Recommendation letter template",
    isAccessibleForFree: true,
    url: `${BASE_URL}/pages/${page.slug}.html`
  };
  const requestSamples = Array.isArray(page.requestTemplates) ? page.requestTemplates : [];
  const editorUrl = page.editorTemplateId
    ? `../index.html?edit=${page.editorTemplateId}#templates`
    : "../index.html#templates";
  const primaryAction = page.editorTemplateId ? "Edit Online" : "Browse All Templates";
  const titleSuffix = page.editorTemplateId ? "Edit Online" : "Free Editable Template";

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(page.description)}" />
    <meta name="keywords" content="${escapeHtml(metaKeywords)}" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${BASE_URL}/pages/${page.slug}.html" />
    <title>${escapeHtml(page.title)} | ${titleSuffix}</title>
    <link rel="canonical" href="${BASE_URL}/pages/${page.slug}.html" />
    <link rel="stylesheet" href="../styles.css" />
    <script type="application/ld+json">${JSON.stringify(faq)}</script>
    <script type="application/ld+json">${JSON.stringify(creativeWork)}</script>
${GA_SNIPPET}
  </head>
  <body>
    <header class="topbar">
      <a class="brand" href="../index.html">
        <span class="brand-mark" aria-hidden="true">LR</span>
        <span>Recommendation Templates</span>
      </a>
      <nav class="topnav" aria-label="Primary navigation">
        <a href="../index.html#templates">Letters of Recommendation</a>
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
      </nav>
    </header>
    <main>
      <section class="template-page-hero">
        <p class="eyebrow">SEO template page</p>
        <h1>${escapeHtml(page.h1)}</h1>
        <p>${escapeHtml(page.description)}</p>
        <div class="hero-actions">
          <a class="button primary" href="${editorUrl}">${primaryAction}</a>
          <a class="button secondary" href="#sample">Preview Sample</a>
          ${page.editorTemplateId ? '<a class="button secondary" href="../index.html#templates">Browse All Templates</a>' : ""}
        </div>
      </section>
      <section class="seo-copy">
        <p class="eyebrow">Search intent</p>
        <h2>What this template is for</h2>
        <p>${escapeHtml(page.intent)}</p>
        ${
          page.pageType === "request"
            ? `<p>A strong request letter should make the ask easy to answer: name the opportunity, explain why you are asking this recommender, include the deadline, and offer supporting materials such as a resume, transcript, statement, job description, or bullet points.</p>`
            : ""
        }
        <div class="seo-copy-grid">
          ${page.bestFor
            .map((item) => {
              const text =
                page.pageType === "request"
                  ? `Use this page when you need a clear, editable request letter for ${item.toLowerCase()}.`
                  : `Use this page when the recommendation letter needs to support ${item.toLowerCase()} with a clear, editable structure.`;
              return `<article><h3>${escapeHtml(item)}</h3><p>${escapeHtml(text)}</p></article>`;
            })
            .join("\n")}
        </div>
      </section>
      <section class="detail-shell" id="sample">
        <aside class="detail-meta">
          <p class="eyebrow">Template preview</p>
          <h2>${escapeHtml(page.sampleTitle)}</h2>
          <p>${page.pageType === "request" ? "Replace the highlighted fields with your recommender, deadline, opportunity, and supporting materials." : "Replace the highlighted fields with accurate names, achievements, dates, recommender details, and examples."}</p>
          <dl>
            <dt>Format</dt><dd>Word, PDF, text copy</dd>
            <dt>Best use</dt><dd>${escapeHtml(page.bestFor[0])}</dd>
            <dt>Editable fields</dt><dd>${page.pageType === "request" ? "Recommender, opportunity, deadline, materials, signature" : "Applicant, recommender, opportunity, examples, signature"}</dd>
          </dl>
          <a class="button primary" href="${editorUrl}">${page.editorTemplateId ? "Edit Online" : "Download from Library"}</a>
        </aside>
        <article class="letter-preview">
          <h3>${escapeHtml(page.sampleTitle)}</h3>
          ${formatBody(page.body)}
        </article>
      </section>
      <section class="seo-copy">
        <p class="eyebrow">Writing guidance</p>
        <h2>How to use this ${escapeHtml(page.title.toLowerCase())}</h2>
        <p>
          Start by replacing each highlighted field with accurate details. The strongest recommendation letters
          are specific, easy to verify, and matched to the opportunity. Instead of using general praise only,
          include the applicant's role, the relationship between recommender and applicant, the length of time
          they have known each other, and one or two concrete examples that show ability, character, or growth.
        </p>
        <p>
          Keep the tone appropriate for the audience. Academic committees usually value evidence of intellectual
          curiosity, writing ability, research potential, classroom contribution, and preparation for advanced
          study. Employers usually look for reliability, collaboration, ownership, communication, and measurable
          results. Scholarship committees often care about leadership, service, resilience, goals, and future
          impact. A personal or character reference should focus on trustworthiness, judgment, responsibility,
          and the context in which the recommender knows the applicant.
        </p>
        <p>
          Before sending or downloading the final version, check that names, dates, program names, job titles,
          school names, deadlines, and contact details are correct. Remove any placeholder text that does not
          apply. A concise one-page letter is usually enough for simple applications, while graduate school,
          fellowship, medical school, law school, or senior professional recommendations may need more detail.
          Use the related template links below when your situation is closer to another search intent.
        </p>
        <p>
          For best results, personalize the opening and closing paragraphs instead of leaving the template
          completely generic. Mention the exact program, scholarship, employer, department, or organization
          whenever possible. This helps the final letter feel intentional and improves the usefulness of the
          template for readers comparing many applications.
        </p>
        <div class="seo-copy-grid">
          <article>
            <h3>What to include</h3>
            <p>Include the recommender's relationship to the applicant, the target opportunity, specific strengths, examples, and a clear recommendation statement.</p>
          </article>
          <article>
            <h3>What to avoid</h3>
            <p>Avoid vague praise, exaggerated claims, missing deadlines, copied examples that are not true, and placeholders left in the final letter.</p>
          </article>
          <article>
            <h3>Best format</h3>
            <p>Use a clean letter format with greeting, introduction, evidence paragraphs, recommendation sentence, signature, title, and contact information.</p>
          </article>
        </div>
      </section>
      ${
        requestSamples.length
          ? `<section class="seo-copy">
        <p class="eyebrow">More request templates</p>
        <h2>Letter of recommendation request templates for common situations</h2>
        <p>Use these additional samples when you need a more specific request for a professor, teacher, manager, scholarship recommender, quick email, or follow-up reminder.</p>
        <div class="request-template-list">
          ${requestSamples
            .map(
              (sample) => `<section class="detail-shell">
            <aside class="detail-meta">
              <p class="eyebrow">Request template</p>
              <h2>${escapeHtml(sample.title)}</h2>
              <p>${escapeHtml(sample.bestUse)}</p>
              <dl>
                <dt>Tone</dt><dd>${escapeHtml(sample.tone)}</dd>
                <dt>Best use</dt><dd>${escapeHtml(sample.bestUse)}</dd>
                <dt>Keyword fit</dt><dd>letter of recommendation request letter</dd>
              </dl>
            </aside>
            <article class="letter-preview">
              <h3>${escapeHtml(sample.title)}</h3>
              ${formatBody(sample.body)}
            </article>
          </section>`
            )
            .join("\n")}
        </div>
      </section>`
          : ""
      }
      <section class="seo-copy">
        <p class="eyebrow">Related searches</p>
        <h2>More recommendation letter templates</h2>
        <div class="keyword-grid">
          ${pages
            .filter((other) => other.slug !== page.slug)
            .slice(0, 6)
            .map((other) => `<a href="./${other.slug}.html">${escapeHtml(other.title)}</a>`)
            .join("\n")}
        </div>
      </section>
      ${
        Array.isArray(page.longIntro)
          ? `<section class="seo-copy">
        <p class="eyebrow">Detailed guide</p>
        <h2>${escapeHtml(page.title)} writing guide</h2>
        <div class="article-body">
          ${page.longIntro.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n          ")}
        </div>
      </section>`
          : ""
      }
    </main>
    <footer class="site-footer">
      <div>
        <a class="brand footer-brand" href="../index.html" aria-label="Recommendation Templates home">
          <span class="brand-mark" aria-hidden="true">LR</span>
          <span>Recommendation Templates</span>
        </a>
        <p>Editable recommendation letter templates for school, scholarship, work, and personal references.</p>
      </div>
      <nav class="footer-articles" aria-label="Blog articles">
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
      </nav>
      <nav class="footer-links" aria-label="Footer navigation">
        <a href="../about.html">About Us</a>
        <a href="../recommendation-letter-faq/">FAQ</a>
        <a href="../privacy.html">Privacy</a>
        <a href="../partners.html">Partners</a>
        <a href="../blog.html">Blog</a>
      </nav>
    </footer>
  </body>
</html>`;
}

pages.forEach((page) => {
  fs.writeFileSync(path.join(outDir, `${page.slug}.html`), pageHtml(page));
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${BASE_URL}/</loc></url>
  <url><loc>${BASE_URL}/cover-letter.html</loc></url>
  <url><loc>${BASE_URL}/resignation.html</loc></url>
${pages.map((page) => `  <url><loc>${BASE_URL}/pages/${page.slug}.html</loc></url>`).join("\n")}
  <url><loc>${BASE_URL}/privacy.html</loc></url>
  <url><loc>${BASE_URL}/partners.html</loc></url>
  <url><loc>${BASE_URL}/blog.html</loc></url>
</urlset>
`;
fs.writeFileSync(path.join(__dirname, "..", "public", "sitemap.xml"), sitemap);

console.log(`Generated ${pages.length} SEO pages and sitemap in ${outDir}`);
