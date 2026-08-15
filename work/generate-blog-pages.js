const fs = require("fs");
const path = require("path");
const { pages: keywordPages } = require("./keyword-silo-data");

const BASE_URL = "https://recommendation-letters.com";
const outDir = path.join(__dirname, "..", "public");
const blogDir = path.join(outDir, "blog");
const GA_SNIPPET = `    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-DQYZ36HTRY"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-DQYZ36HTRY');
    </script>
`;

const posts = [
  {
    slug: "albany-medical-college-letters-of-recommendation",
    keyword: "albany medical college letters of recommendation",
    title: "Albany Medical College Letters of Recommendation Guide",
    description:
      "Learn how to plan Albany Medical College letters of recommendation, choose recommenders, prepare AMCAS letter materials, and support a stronger medical school application.",
    keywords:
      "albany medical college letters of recommendation, Albany Medical College recommendation letters, medical school letters of recommendation, AMCAS letters, med school recommendation letter",
    category: "Medical school",
    intro:
      "A practical guide for applicants planning recommendation letters for Albany Medical College and similar medical school applications.",
    paragraphs: [
      "Albany medical college letters of recommendation are an important part of a medical school application because they help an admissions committee understand the applicant beyond grades, MCAT scores, activities, and essays. A strong letter can describe academic readiness, clinical maturity, service orientation, research habits, communication, resilience, professionalism, and the applicant's ability to work with patients and teams. Because school requirements can change by cycle, applicants should always verify current instructions on the official Albany Medical College admissions materials and AMCAS guidance before submitting. This guide focuses on how to plan, request, and organize Albany medical college letters of recommendation in a way that is clear, respectful, and useful to recommenders.",
      "The best Albany medical college letters of recommendation usually come from people who know the applicant well and can provide specific examples. A science professor may speak to academic rigor and readiness for medical coursework. A research mentor may describe curiosity, discipline, problem solving, and follow-through. A physician, supervisor, volunteer coordinator, or clinical mentor may speak to service, empathy, communication, and responsibility. Applicants should not choose a recommender only because of title. A detailed, personal letter from someone who supervised meaningful work is usually more helpful than a vague letter from someone with a famous role but little direct knowledge.",
      "Start early. For Albany medical college letters of recommendation, applicants should build a timeline several months before the application deadline. Recommenders are often balancing teaching, patient care, research, administration, and other students' requests. A polite early ask gives them time to write a thoughtful letter. When possible, ask in a short meeting or carefully written email. Explain that you are applying to medical school, mention Albany Medical College if it is one of your target schools, and ask whether the recommender feels comfortable writing a strong letter of recommendation. This wording gives the recommender space to decline if they cannot provide meaningful support.",
      "Make the process easy. Send your recommender a concise packet with your resume or CV, transcript if useful, personal statement draft, AMCAS ID or letter instructions, deadline, and a short note about why you are applying to medicine. Include two or three reminders of work you did with that recommender: a research project, class performance, patient-facing volunteer role, leadership responsibility, or service commitment. For Albany medical college letters of recommendation, the supporting packet should help the writer connect your story to qualities medical schools value: intellectual ability, ethical judgment, compassion, teamwork, communication, and readiness for a demanding training environment.",
      "Applicants should also think about balance. If every letter says the same thing, the file can feel repetitive. A balanced set may include one academic voice, one clinical or service voice, and one research or leadership voice. Not every applicant has the same background, so the right mix depends on the application. Nontraditional applicants may use supervisors, post-baccalaureate faculty, research mentors, or clinical leaders. Traditional applicants may rely more heavily on professors and campus advisors. The goal is not to collect the maximum number of letters; the goal is to provide credible evidence from people who can speak clearly about different strengths.",
      "Before submission, check names, deadlines, letter services, and school-specific requirements carefully. Applicants should avoid sending extra letters that do not add value. They should also waive access when appropriate, follow AMCAS instructions, and thank recommenders after submission. A brief thank-you note and later update on the outcome are professional and appreciated. Used well, Albany medical college letters of recommendation can help connect the applicant's academic record, service history, and motivation for medicine into a more complete admissions narrative."
      ,"A practical final check is to read your application as if the letters are part of one package. Your personal statement may explain why medicine, your activities may show service and exposure, and Albany medical college letters of recommendation should confirm those themes through outside voices. If a recommender can describe how you handled pressure, communicated with patients, improved after feedback, or showed integrity in a difficult setting, that evidence can be memorable. Keep the request organized, give each recommender enough context, and make sure every letter supports the larger story you want the admissions committee to understand."
    ]
  },
  {
    slug: "what-is-a-notarized-letter",
    keyword: "what is a notarized letter",
    title: "What Is a Notarized Letter? Meaning, Uses, and Format",
    description:
      "Understand what a notarized letter is, when notarization is used, what a notary verifies, and how to prepare a letter before signing.",
    keywords:
      "what is a notarized letter, notarized letter meaning, notarized letter example, notary letter format, notarized document",
    category: "Document basics",
    intro:
      "A plain-language explanation of notarized letters, common uses, and what to prepare before meeting a notary.",
    paragraphs: [
      "What is a notarized letter? A notarized letter is a written statement that has been signed in front of a notary public, or otherwise completed through an approved notarization process. The notary does not usually prove that every fact in the letter is true. Instead, the notary verifies identity, witnesses the signature, checks willingness to sign, and completes a notarial certificate according to applicable rules. This is why a notarized letter can carry more formal weight than an unsigned or privately signed note, especially when an organization needs confidence that the signer is the person named in the document.",
      "People ask what is a notarized letter because the phrase appears in many practical situations. A school, employer, court, landlord, bank, travel office, government agency, or medical provider may request a notarized letter when identity and consent matter. Common examples include a notarized letter of consent for a child to travel, a notarized residency letter, a notarized authorization letter, a notarized financial support letter, a notarized employment statement, or a notarized letter explaining permission for someone else to act on your behalf. The exact use depends on the organization requesting it.",
      "A notarized letter normally includes the date, the signer's full legal name, contact details if needed, a clear statement of facts or permission, and a signature area. The letter should be complete before signing, but the signer should not sign it until the notary instructs them to do so. The notary may add wording such as an acknowledgment or jurat, depending on the type of notarization. An acknowledgment confirms that the signer acknowledged signing the document. A jurat usually involves swearing or affirming that the statement is true. The requesting organization may specify which form is required.",
      "What is a notarized letter not meant to do? It is not a substitute for legal advice, and it does not automatically make an invalid agreement valid. It also does not mean the notary endorses the content. A notary is typically focused on the signing process: identity, awareness, willingness, and proper completion of the notarial act. If the document affects immigration, custody, real estate, court filings, financial authority, or medical decisions, the signer should consider whether professional legal guidance is needed before signing.",
      "To prepare for a notarized letter, bring acceptable identification, the unsigned document, any instructions from the requesting organization, and any required witnesses if the jurisdiction or document requires them. Some locations allow remote online notarization, while others require an in-person appointment. Rules vary by state and country, so the safest approach is to ask the receiving organization exactly what it needs. If they provide a sample or required wording, follow it closely.",
      "A simple notarized letter should be clear and direct. Avoid vague language, missing names, blank spaces, and unclear dates. If the letter authorizes action, name the person who is allowed to act, describe the specific permission, and include the effective period. If the letter confirms a fact, write the fact plainly and attach supporting documentation only if requested. Once notarized, keep a copy for your records and send the original only when the receiving organization requires it. Understanding what is a notarized letter helps you prepare a document that is easier for both the notary and the recipient to accept."
      ,"If you are still asking what is a notarized letter in your specific situation, the simplest next step is to contact the organization that requested it and ask for their required wording. Some offices need a short signed statement, while others need a specific certificate, original signature, witness, seal, or online notarization record. Do not assume every notarized letter works for every purpose. A travel consent letter, residency letter, financial support letter, and authorization letter may look similar, but the required details can be different. Clear instructions reduce the chance of rejection."
    ]
  },
  {
    slug: "how-to-write-an-email-asking-for-a-letter-of-recommendation",
    keyword: "how to write an email asking for a letter of recommendation",
    title: "How to Write an Email Asking for a Letter of Recommendation",
    description:
      "Learn how to write an email asking for a letter of recommendation with timing tips, structure, subject lines, and a polite request email sample.",
    keywords:
      "how to write an email asking for a letter of recommendation, recommendation letter request email, ask for recommendation email, letter of recommendation email sample",
    category: "Request letters",
    intro:
      "A step-by-step guide to writing a clear, respectful recommendation letter request email.",
    paragraphs: [
      "Knowing how to write an email asking for a letter of recommendation can make the process easier for both you and the person you are asking. A good email is polite, specific, and organized. It tells the recommender what you are applying for, why you are asking them, when the letter is due, and what supporting materials you can provide. The goal is not to pressure someone into saying yes. The goal is to make a thoughtful request and give the recommender enough information to write a strong letter if they are willing.",
      "Start with a clear subject line. Good subject lines include 'Recommendation Letter Request for Graduate School,' 'Request for Letter of Recommendation by [Deadline],' or 'Recommendation Request for [Program or Role].' When learning how to write an email asking for a letter of recommendation, remember that recommenders may receive many messages. A direct subject line helps them understand the request quickly and find the email later when they are ready to write.",
      "The opening should be warm but concise. If you have not spoken with the person recently, remind them who you are and how they know you. For a professor, mention the course, semester, paper, research project, or office hours conversation. For a manager, mention the team, project, responsibilities, or dates you worked together. Then explain the opportunity. For example, you might say that you are applying to a master's program, scholarship, internship, job, medical school, law school, fellowship, or leadership program.",
      "The most important sentence is the ask. Write something like: 'Would you feel comfortable writing a strong letter of recommendation for my application?' This wording matters because it allows the recommender to consider whether they can genuinely help. A lukewarm letter can hurt more than it helps. Asking whether they can write a strong letter is respectful and practical. It also gives them permission to decline if their schedule is too full or their knowledge of your work is limited.",
      "Next, provide the deadline and materials. A strong request email should offer your resume, transcript, personal statement, job description, program details, draft essay, writing sample, or bullet points that remind the recommender of your work. If the letter must be uploaded through a portal, say so. If there are special instructions, include them clearly. When deciding how to write an email asking for a letter of recommendation, think like the recommender: what would make this easier to complete accurately and on time?",
      "Close with gratitude and flexibility. Thank the person for considering your request and acknowledge that you understand if their schedule does not allow it. Avoid sounding entitled. If the deadline is soon, apologize for the short notice and make the request especially easy to answer. After they agree, send all materials in one organized message. A week before the deadline, send a gentle reminder. After submission, send a sincere thank-you note. A strong recommendation request email protects the relationship while giving the recommender what they need to write well."
      ,"Here is a simple structure to remember when deciding how to write an email asking for a letter of recommendation: greeting, reminder of the relationship, application goal, direct request, deadline, materials, and thank-you. For example, you can write, 'I am applying to [Program] and wanted to ask whether you would feel comfortable writing a strong letter of recommendation for me by [Date]. I can send my resume, draft essay, transcript, and a short summary of our work together.' This keeps the email respectful while giving the recommender a clear path to respond."
      ,"Before sending, proofread the email for the recommender's name, the program name, and the deadline. Small errors can make the request feel rushed. A clean email shows that you respect the recommender's time and understand the importance of the letter."
    ]
  },
  {
    slug: "how-to-ask-someone-to-write-a-letter-of-recommendation",
    keyword: "how to ask someone to write a letter of recommendation",
    title: "How to Ask Someone to Write a Letter of Recommendation",
    description:
      "A practical guide on how to ask someone to write a letter of recommendation, choose the right recommender, prepare materials, and follow up politely.",
    keywords:
      "how to ask someone to write a letter of recommendation, ask for a recommendation letter, recommendation letter request, how to request a letter of recommendation",
    category: "Request letters",
    intro:
      "How to choose the right recommender and make a clear, respectful recommendation letter request.",
    paragraphs: [
      "If you are wondering how to ask someone to write a letter of recommendation, the first step is choosing the right person. The best recommender is not always the person with the most impressive title. The best recommender is someone who knows your work, character, growth, and goals well enough to give specific examples. A professor who saw your research process, a manager who supervised your performance, a mentor who watched your leadership, or an advisor who knows your academic direction may be stronger than a famous person who barely knows you.",
      "Before you ask, make a short list of what the application needs. Are you applying to college, graduate school, medical school, law school, a scholarship, an internship, a job, or a fellowship? Does the letter need to discuss academic ability, leadership, service, clinical exposure, writing, teamwork, research, professional judgment, or character? Understanding the purpose will help you decide how to ask someone to write a letter of recommendation and what information to give them.",
      "Whenever possible, ask early. Three to six weeks is often more respectful than a last-minute request, though some situations require faster timing. If the relationship is close, asking in person or during a short meeting can be best. If email is more appropriate, write a clear message. Mention the opportunity, the deadline, why you are asking that person, and whether they would feel comfortable writing a strong recommendation. The word strong is useful because it helps avoid vague or reluctant letters.",
      "Once the person agrees, send a complete packet. Include your resume or CV, transcript if relevant, application description, deadline, submission instructions, personal statement or draft essay, and a few bullet points about work you did together. Do not expect the recommender to remember every detail. Help them by naming projects, papers, achievements, responsibilities, or moments that show your strengths. A good packet saves time and often leads to a more specific letter.",
      "Be careful with tone. How to ask someone to write a letter of recommendation is partly about respect. Do not demand, assume, or guilt the person. Do not write the entire letter for them unless they specifically ask for a draft, and even then, keep it honest and factual. Give them room to say no. A polite request protects the relationship and improves the chance of receiving a thoughtful answer.",
      "Follow up professionally. If the deadline is approaching and the letter has not been submitted, send a brief reminder with the deadline and submission link. After the letter is sent, thank the recommender. Later, update them on the outcome if appropriate. This final step matters because recommendation letters take time and care. When you ask well, prepare well, and show gratitude, you make the process easier and build a stronger professional relationship for the future."
      ,"A common mistake is asking too broadly. Instead of saying, 'Can you write me a recommendation?' explain what the letter is for and what the reader will care about. If you are applying for a scholarship, mention leadership, service, or academic promise. If you are applying for a job, mention skills, reliability, and results. If you are applying to graduate school, mention research, writing, and readiness for advanced study. Knowing how to ask someone to write a letter of recommendation means helping the recommender understand the audience and the purpose."
      ,"It also helps to prepare more than one possible recommender. If your first choice is unavailable, you will still have time to ask someone else without creating a rushed deadline. Good planning makes the request calmer, more professional, and easier for the writer to accept with confidence."
    ]
  },
  {
    slug: "how-to-ask-for-a-letter-of-recommendation-via-email",
    keyword: "how to ask for a letter of recommendation via email",
    title: "How to Ask for a Letter of Recommendation via Email",
    description:
      "Use this guide to ask for a letter of recommendation via email with a clear subject line, polite wording, supporting materials, and follow-up timing.",
    keywords:
      "how to ask for a letter of recommendation via email, letter of recommendation email request, recommendation request email template, ask professor for recommendation email",
    category: "Request emails",
    intro:
      "A focused email guide for requesting recommendation letters without sounding rushed or generic.",
    paragraphs: [
      "Learning how to ask for a letter of recommendation via email is useful when you cannot meet in person or when the recommender prefers written details. Email can be effective because it gives the recommender the deadline, application information, and supporting materials in one place. The key is to make the message personal enough to show respect and structured enough to be easy to answer. A rushed, vague email can create confusion. A clear email can help the recommender say yes and write a better letter.",
      "Use a specific subject line. Examples include 'Letter of Recommendation Request for [Program],' 'Recommendation Request - Due [Date],' or 'Request for Graduate School Recommendation.' The subject should make the purpose obvious. When deciding how to ask for a letter of recommendation via email, avoid casual subject lines such as 'Quick favor' or 'Need help.' A recommendation letter is a meaningful professional request, and the subject line should reflect that.",
      "Begin by greeting the person respectfully and reminding them of your connection. If you are writing to a professor, mention the class, semester, research project, thesis, or advising relationship. If you are writing to a manager, mention your role, team, project, or dates of employment. Then explain the opportunity in one or two sentences. The recommender should quickly understand whether the letter is for a scholarship, school application, job, internship, law school, medical school, or another program.",
      "Ask directly but politely. A strong sentence is: 'Would you feel comfortable writing a strong letter of recommendation for me?' This phrasing is better than simply asking whether they can write a letter because it focuses on the quality of support. If the person does not know you well enough, they can decline gracefully. A weak or generic letter may not help, so it is better to ask in a way that encourages honesty.",
      "Include the deadline and offer materials. The email should say when the letter is due, how it will be submitted, and what you can provide. Attach or offer your resume, transcript, personal statement, application instructions, job posting, program link, and bullet points about your work together. If the recommender agrees, send everything in a clean follow-up email. If the system will send them an upload link, tell them when to expect it.",
      "Close with gratitude and flexibility. Thank them for considering the request and say you understand if they are unavailable. If the deadline is short, acknowledge that and make it easy for them to decline. After they agree, send a reminder about one week before the deadline, unless the letter is already submitted. Afterward, send a thank-you note. Knowing how to ask for a letter of recommendation via email is really about making a respectful request that is easy to understand, easy to complete, and easy to answer."
      ,"A useful email can be short and still complete. Try this outline when asking for a letter of recommendation via email: subject line, greeting, context, request, deadline, materials, and thanks. You do not need to write a long personal history in the first message. Instead, tell the recommender that you can send supporting details if they are willing. This approach keeps the request easy to read and prevents the first email from feeling overwhelming. It also gives the recommender a clean way to reply yes, ask for more information, or decline."
      ,"If the recommender agrees, reply quickly with organized materials. Put the deadline, submission link, resume, and bullet points in one place so they do not have to search through several emails later. This simple step often improves both speed and quality for everyone involved."
    ]
  },
  {
    slug: "law-school-letter-of-recommendation-sample",
    keyword: "law school letter of recommendation sample",
    title: "Law School Letter of Recommendation Sample and Writing Guide",
    description:
      "Review a law school letter of recommendation sample with guidance on academic ability, writing, judgment, integrity, leadership, and recommender selection.",
    keywords:
      "law school letter of recommendation sample, law school recommendation letter, law school reference letter, law school LOR sample, recommendation letter for law school",
    category: "Law school",
    intro:
      "A sample-focused guide for applicants and recommenders preparing a law school recommendation letter.",
    paragraphs: [
      "A law school letter of recommendation sample can help applicants understand what a strong legal education reference should include. Law schools often value evidence of analytical ability, reading discipline, writing skill, intellectual curiosity, judgment, integrity, perseverance, and classroom engagement. A strong law school recommendation letter should not simply say that the applicant is smart. It should show how the recommender knows the applicant and provide examples that connect the applicant's work to the demands of legal study.",
      "The best recommender for a law school application is often a professor who evaluated substantial writing, discussion, research, or analytical work. A supervisor, attorney, judge, internship mentor, or employer may also be useful when they can speak to professional judgment, ethics, communication, responsibility, and attention to detail. When using a law school letter of recommendation sample, applicants should remember that the sample is only a structure. The final letter must be specific to the applicant and honest about the recommender's experience with them.",
      "A useful law school letter of recommendation sample might begin by identifying the recommender, the applicant, and the context of the relationship. For example: 'I am pleased to recommend [Applicant Name] for admission to law school. I taught [Applicant] in [Course Name], where I evaluated [his/her/their] legal analysis, written arguments, and class participation.' This opening establishes credibility. The next paragraph should provide evidence: a research paper, debate, seminar contribution, case analysis, internship assignment, leadership role, or project that required careful reasoning.",
      "The body of the letter should focus on qualities relevant to law school. Strong examples include precise writing, ability to revise, disciplined reading, respectful disagreement, ethical awareness, public speaking, research persistence, and the ability to synthesize complex material. A law school letter of recommendation sample should avoid vague praise such as 'excellent student' unless the writer explains what made the student excellent. Admissions readers benefit from concrete details: the difficulty of the course, the quality of the work, the applicant's growth, and how the applicant compared with peers if the comparison is fair and accurate.",
      "Here is a short sample paragraph: '[Applicant Name] produced one of the strongest final papers in my seminar, arguing [Topic] with careful attention to precedent, policy, and counterargument. What stood out was not only the final result but also the revision process. [Applicant] actively sought feedback, refined the thesis, strengthened the evidence, and responded thoughtfully to competing interpretations. This combination of intellectual humility and analytical discipline would serve [him/her/them] well in law school.' This kind of paragraph is more persuasive than a list of adjectives.",
      "The closing should make a clear recommendation. For example: 'I recommend [Applicant Name] with confidence for law school admission and believe [he/she/they] has the writing ability, judgment, and resilience to contribute meaningfully to a rigorous legal community.' Applicants should give recommenders enough time, provide a resume, transcript, personal statement, and details about target schools, and thank them afterward. A law school letter of recommendation sample is most useful when it helps the writer produce a letter that is specific, credible, and focused on legal academic readiness."
      ,"Applicants can also use a law school letter of recommendation sample to prepare a better recommender packet. Include your resume, transcript, draft personal statement, list of target schools, deadline, submission instructions, and a few bullet points about work you completed with the recommender. If the professor graded a major paper, include the title and a short reminder of the argument. If the supervisor observed client service, research, or writing, include those details. The easier it is for the recommender to remember concrete examples, the stronger and more credible the final law school recommendation letter can be."
    ]
  }
];

fs.mkdirSync(blogDir, { recursive: true });

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function words(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function keywordTitle(value) {
  return value
    .split(" ")
    .map((word, index) =>
      ["a", "an", "and", "for", "from", "in", "of", "the", "to", "via"].includes(word.toLowerCase()) && index > 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}

function nav(prefix) {
  return `<nav class="topnav" aria-label="Primary navigation">
        <a href="${prefix}index.html#templates">Letters of Recommendation</a>
        <details class="nav-dropdown">
          <summary>Blog</summary>
          <div class="nav-menu">
            <a href="${prefix}medical-schools/">School Requirements</a>
            <a href="${prefix}blog.html">All Articles</a>
          </div>
        </details>
        <a href="${prefix}recommendation-letter-faq/">FAQ</a>
        <a href="${prefix}cover-letter.html">Cover Letter</a>
        <a href="${prefix}resignation.html">Resignation</a>
      </nav>`;
}

function footerArticles(prefix) {
  return `<nav class="footer-articles" aria-label="Blog articles">
        <strong class="footer-heading">Blog articles</strong>
        <div class="footer-article-grid">
          <a href="${prefix}blog/albany-medical-college-letters-of-recommendation/">Albany Medical College recommendation guide</a>
          <a href="${prefix}blog/what-is-a-notarized-letter/">What is a notarized letter?</a>
          <a href="${prefix}blog/how-to-write-an-email-asking-for-a-letter-of-recommendation/">Write a recommendation request email</a>
          <a href="${prefix}blog/how-to-ask-someone-to-write-a-letter-of-recommendation/">Ask someone for a recommendation</a>
          <a href="${prefix}blog/how-to-ask-for-a-letter-of-recommendation-via-email/">Ask for a recommendation via email</a>
          <a href="${prefix}blog/law-school-letter-of-recommendation-sample/">Law school recommendation sample</a>
        </div>
        <a class="footer-all-articles" href="${prefix}blog.html">All articles</a>
      </nav>`;
}

function relatedLinks(currentSlug, prefix) {
  const postLinks = posts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => `<a href="${prefix}blog/${post.slug}/">${escapeHtml(post.title)}</a>`)
    .join("\n");
  return `${postLinks}
<a href="${prefix}pages/letter-of-recommendation-request-letter.html">Letter of recommendation request letter templates</a>
<a href="${prefix}index.html#templates">Browse recommendation letter templates</a>`;
}

function postHtml(post) {
  const articleText = post.paragraphs.join("\n\n");
  if (words(articleText) < 600) {
    throw new Error(`${post.slug} is under 600 words`);
  }
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    keywords: post.keywords,
    mainEntityOfPage: `${BASE_URL}/blog/${post.slug}/`,
    author: {
      "@type": "Organization",
      name: "Recommendation Templates"
    }
  };
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(post.description)}" />
    <meta name="keywords" content="${escapeHtml(post.keywords)}" />
    <meta property="og:title" content="${escapeHtml(post.title)}" />
    <meta property="og:description" content="${escapeHtml(post.description)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${BASE_URL}/blog/${post.slug}/" />
    <title>${escapeHtml(post.title)}</title>
    <link rel="canonical" href="${BASE_URL}/blog/${post.slug}/" />
    <link rel="stylesheet" href="../styles.css" />
    <script type="application/ld+json">${JSON.stringify(articleSchema)}</script>
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
      <article class="blog-article">
        <p class="eyebrow">${escapeHtml(post.category)}</p>
        <h1>${escapeHtml(post.title)}</h1>
        <p class="blog-lede">${escapeHtml(post.intro)}</p>
        <div class="article-body">
          ${post.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n          ")}
        </div>
      </article>
      <section class="seo-copy">
        <p class="eyebrow">Related resources</p>
        <h2>Keep reading</h2>
        <div class="related-link-grid">
          ${relatedLinks(post.slug, "../")}
        </div>
      </section>
    </main>
    <footer class="site-footer">
      <div>
        <a class="brand footer-brand" href="../index.html" aria-label="Recommendation Templates home">
          <span class="brand-mark" aria-hidden="true">LR</span>
          <span>Recommendation Templates</span>
        </a>
        <p>Editable recommendation letter templates for school, scholarship, work, and personal references.</p>
      </div>
      ${footerArticles("../")}
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

function blogIndexHtml() {
  const writingGuides = keywordPages
    .filter((page) => page.cluster === "writing")
    .map((page) => ({
      title: keywordTitle(page.keyword),
      description: `A practical guide to ${page.goal}, with examples, a checklist, and related recommendation letter templates.`,
      category: "Writing guide",
      href: `./${page.slug}/`,
      canonical: `${BASE_URL}/${page.slug}/`
    }));
  const blogEntries = [
    ...posts.map((post) => ({
      ...post,
      href: `./blog/${post.slug}/`,
      canonical: `${BASE_URL}/blog/${post.slug}/`
    })),
    ...writingGuides
  ];
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Recommendation letter blog posts",
    itemListElement: blogEntries.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: post.canonical
    }))
  };
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Recommendation Letters blog with guides for recommendation request emails, notarized letters, medical school references, law school recommendations, and template writing." />
    <meta name="keywords" content="recommendation letters blog, letter of recommendation guide, recommendation request email, law school recommendation letter, notarized letter, medical school letters of recommendation" />
    <meta property="og:title" content="Blog | Recommendation Letters" />
    <meta property="og:description" content="Guides for recommendation letters, request emails, notarized letters, medical school references, and law school recommendations." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${BASE_URL}/blog.html" />
    <title>Blog | Recommendation Letters</title>
    <link rel="canonical" href="${BASE_URL}/blog.html" />
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
      ${nav("./")}
    </header>
    <main>
      <section class="template-page-hero">
        <p class="eyebrow">Blog</p>
        <h1>Recommendation Letter Blog</h1>
        <p>Practical guides for recommendation request emails, school-specific letters, law school references, notarized letters, and template writing.</p>
      </section>
      <section class="seo-copy">
        <p class="eyebrow">Content hub</p>
        <h2>Recommendation letter guides</h2>
        <p>Use these guides to plan stronger recommendation letters, request emails, application materials, and formal documents. Each article links to related templates and supporting resources.</p>
        <div class="blog-grid">
          ${blogEntries
            .map(
              (post) => `<article class="blog-card">
            <p class="eyebrow">${escapeHtml(post.category)}</p>
            <h3><a href="${post.href}">${escapeHtml(post.title)}</a></h3>
            <p>${escapeHtml(post.description)}</p>
            <a class="button secondary article-link" href="${post.href}" aria-label="View the article: ${escapeHtml(post.title)}">View the article</a>
          </article>`
            )
            .join("\n")}
        </div>
      </section>
    </main>
    <footer class="site-footer">
      <div>
        <a class="brand footer-brand" href="./index.html" aria-label="Recommendation Templates home">
          <span class="brand-mark" aria-hidden="true">LR</span>
          <span>Recommendation Templates</span>
        </a>
        <p>Editable recommendation letter templates for school, scholarship, work, and personal references.</p>
      </div>
      ${footerArticles("./")}
      <nav class="footer-links" aria-label="Footer navigation">
        <a href="./about.html">About Us</a>
        <a href="./recommendation-letter-faq/">FAQ</a>
        <a href="./privacy.html">Privacy</a>
        <a href="./partners.html">Partners</a>
        <a href="./blog.html">Blog</a>
      </nav>
    </footer>
  </body>
</html>`;
}

posts.forEach((post) => {
  // Write directory-based pretty URL: /blog/slug/index.html → served at /blog/slug/
  const postDir = path.join(blogDir, post.slug);
  fs.mkdirSync(postDir, { recursive: true });
  fs.writeFileSync(path.join(postDir, "index.html"), postHtml(post));
  // Keep .html file for backwards compatibility (redirects handled in _redirects)
  fs.writeFileSync(path.join(blogDir, `${post.slug}.html`), postHtml(post));
});
fs.writeFileSync(path.join(outDir, "blog.html"), blogIndexHtml());

const { medicalSchools, undergradSchools } = require("./school-data");
const schoolUrls = [
  `${BASE_URL}/schools/`,
  `${BASE_URL}/schools/med/`,
  ...medicalSchools.map(s => `${BASE_URL}/schools/med/${s.slug}/`),
  ...undergradSchools.map(s => `${BASE_URL}/schools/${s.slug}-letters-of-recommendation/`)
];

const sitemapUrls = [
  `${BASE_URL}/`,
  `${BASE_URL}/cover-letter.html`,
  `${BASE_URL}/resignation.html`,
  ...keywordPages
    .filter((page) => ["core", "audience", "recommender", "application", "writing"].includes(page.cluster))
    .map((page) => `${BASE_URL}/${page.slug}/`),
  `${BASE_URL}/about.html`,
  `${BASE_URL}/recommendation-letter-faq/`,
  `${BASE_URL}/privacy.html`,
  `${BASE_URL}/partners.html`,
  `${BASE_URL}/blog.html`,
  ...posts.map((post) => `${BASE_URL}/blog/${post.slug}/`),
  ...schoolUrls
];

fs.writeFileSync(
  path.join(outDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`
);

console.log(`Generated ${posts.length} blog posts, blog index, and sitemap.`);
