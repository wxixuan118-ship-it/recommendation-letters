// Generates /medical-schools/[school]/letters-of-recommendation/ pages
// Modeled on Albany's Top-10 blog post format:
// - Prose-heavy, 6-8 paragraphs
// - Keyword "[school] letters of recommendation" repeated naturally 6-8x
// - Article schema (same as Albany)
// - URL contains both "medical-schools" and "letters-of-recommendation"
const fs = require("fs");
const path = require("path");

const BASE_URL = "https://recommendation-letters.com";
const outDir = path.join(__dirname, "..", "outputs", "medical-schools");
const GA_SNIPPET = `    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-DQYZ36HTRY"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-DQYZ36HTRY');
    </script>`;

function escapeHtml(v) {
  return String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function nav(prefix) {
  return `<nav class="topnav" aria-label="Primary navigation">
        <a href="${prefix}index.html#templates">Letters of Recommendation</a>
        <a href="${prefix}cover-letter.html">Cover Letter</a>
        <a href="${prefix}resignation.html">Resignation</a>
      </nav>`;
}

// Each school object: name, slug, keyword (for natural repetition), content paragraphs
const schools = [
  {
    name: "Albany Medical College",
    slug: "albany-medical-college",
    keyword: "Albany Medical College letters of recommendation",
    keywords: "albany medical college letters of recommendation, albany medical college lor requirements, albany medical school letter of recommendation requirements, albany medical college recommendation letter",
    description: "Learn how to plan Albany Medical College letters of recommendation, choose the right recommenders, prepare AMCAS letter materials, and support a stronger medical school application.",
    paragraphs: [
      "Albany Medical College letters of recommendation are a central part of the application because the admissions committee uses them to understand who the applicant is beyond grades, MCAT scores, activities, and personal essays. A strong letter can describe academic readiness, clinical judgment, research habits, communication, resilience, and the applicant's ability to work with patients and teams in a real professional setting. Because school-specific requirements change by cycle, applicants should always verify the current instructions on the official Albany Medical College admissions website and through the current AMCAS guidance before submitting their application package.",
      "The best Albany Medical College letters of recommendation come from people who know the applicant well enough to provide specific, credible examples. A science professor who supervised research, taught an advanced course, or held regular office hours with the applicant can speak to academic rigor. A physician, volunteer coordinator, or clinical mentor can describe service orientation, patient communication, and professional behavior. A research mentor who worked closely with the applicant over a semester or more can speak to intellectual curiosity, discipline, and follow-through. Applicants should avoid choosing recommenders based on title alone. A focused, personal letter from someone with direct knowledge of the applicant's work is almost always more effective than a brief endorsement from someone with an impressive role but limited contact.",
      "Start planning Albany Medical College letters of recommendation several months before the application opens. Recommenders are typically busy with teaching, patient care, research, and advising other students. Asking early gives them time to write a thoughtful letter and reduces the chance of a rushed or generic endorsement. When possible, make the request in person or in a clear, organized email. Mention that you are applying to medical school, name Albany Medical College as a target, and ask whether the recommender feels comfortable writing a strong letter. That phrasing matters because it gives the recommender room to decline gracefully if they cannot offer a genuinely positive account of your work.",
      "Make the process as straightforward as possible for each recommender. Send a packet that includes your resume or CV, a copy of your personal statement draft, your AMCAS ID or submission instructions, the deadline, and a short reminder of two or three specific experiences you shared with that person. The reminder is important because recommenders may be writing letters for multiple students at the same time. For Albany Medical College letters of recommendation, a useful supporting packet helps the writer connect your specific story to the qualities a medical school committee wants to see: intellectual ability, ethical judgment, compassion, teamwork, and readiness for a rigorous training environment.",
      "Think carefully about the balance of your letter package. Albany Medical College letters of recommendation are most useful when they come from different contexts and speak to different dimensions of your background. A file where every letter repeats the same observations about GPA and work ethic can feel repetitive. A balanced set might include one science faculty letter, one research mentor letter, and one letter from a clinical or service supervisor. Nontraditional applicants may include letters from post-baccalaureate faculty, employers, or community health leaders. The goal is not to collect the maximum number of letters but to provide credible evidence from people who can speak clearly about different strengths and experiences.",
      "Albany Medical College letters of recommendation are submitted through the AMCAS Letter Service. Applicants upload letter requests through AMCAS, and recommenders receive a unique link to submit their letters directly. Once uploaded, applicants assign letters to individual school applications through their AMCAS account. Letters must be available before or shortly after the primary application is verified, so applicants should plan the timeline carefully and follow up with each recommender in advance of the deadline. AMCAS provides guidance on the letter assignment process in its applicant help center each cycle.",
      "Before and after submission, stay organized. Confirm that each recommender received their AMCAS link and upload instructions. Send a brief reminder a week or two before the deadline if no submission has appeared. After letters are submitted, send a sincere thank-you to each recommender. A follow-up note later in the cycle to share news about interviews or admission is professional and appreciated. Albany Medical College letters of recommendation, when planned early and supported by good preparation, help the committee understand your application as a complete story rather than a collection of isolated credentials."
    ]
  },
  {
    name: "Harvard Medical School",
    slug: "harvard-medical-school",
    keyword: "Harvard Medical School letters of recommendation",
    keywords: "harvard medical school letters of recommendation, harvard medical school lor requirements, harvard med school recommendation letter requirements, hms letters of recommendation",
    description: "Learn how to plan Harvard Medical School letters of recommendation, meet the committee letter requirement, choose effective recommenders, and submit through AMCAS.",
    paragraphs: [
      "Harvard Medical School letters of recommendation are read carefully by the admissions committee because HMS receives thousands of applications from academically exceptional candidates, and letters from people with direct knowledge of the applicant provide one of the few ways to distinguish between applicants with similar grades and scores. A strong letter can describe intellectual curiosity, research depth, clinical empathy, ethical judgment, and the kind of interpersonal qualities that are difficult to demonstrate through a transcript or essay alone.",
      "Harvard Medical School strongly prefers a committee letter from the applicant's undergraduate pre-medical advisory office. A committee letter is a composite evaluation that compiles input from multiple faculty members and advisors and presents it in a single document. Applicants from institutions that do not offer a pre-medical committee must submit at least three individual letters instead. A typical individual letter package for Harvard Medical School letters of recommendation includes two letters from science faculty who taught advanced coursework or supervised research, and at least one letter from a clinical or service supervisor who has observed the applicant working with patients, in research, or in community settings.",
      "Start the committee letter process as early as possible. At many schools, the pre-medical advisory committee requires a separate interview, faculty evaluations, a draft personal statement, and other materials before it will write a composite letter. This process can take several months. Applicants who begin the committee process late may find themselves rushing during a period when they also need to complete secondaries and prepare for interviews. For applicants submitting individual letters, ask each recommender at least three to four months before the application opens and provide a well-organized support packet.",
      "The most effective Harvard Medical School letters of recommendation come from recommenders who can describe specific observations rather than general impressions. A faculty member who supervised independent research and can describe the applicant's scientific thinking, resilience after setbacks, and ability to contribute to a research team provides more useful information than a letter focused on course grades. A clinical supervisor who observed patient interactions can describe empathy, communication, professionalism, and how the applicant responds to difficult situations. Letters that describe patterns of behavior over time, not just single events, are more persuasive.",
      "Harvard Medical School letters of recommendation are submitted through the AMCAS Letter Service. Applicants should check the HMS secondary application each cycle for any updated guidance on letter types, total number accepted, or specific requirements for dual-degree programs such as the MD-PhD. Requirements can change between cycles, so verify the current instructions directly on the HMS admissions website before making final decisions about your letter package.",
      "Preparing recommenders well improves the quality of Harvard Medical School letters of recommendation. Give each recommender your personal statement draft, your activities list, a copy of your transcript if useful, and two or three specific reminders of work you completed together. Provide the AMCAS submission instructions and the deadline clearly. A recommender with complete information and adequate time is much more likely to write a specific, well-organized letter. Follow up with a thank-you after letters are submitted and keep recommenders informed of any major application news.",
      "Harvard Medical School letters of recommendation work best when they function as a coordinated set rather than a collection of independent endorsements. Before finalizing your recommenders, think about whether the letters together will demonstrate academic ability, research or scientific thinking, clinical or service commitment, and personal character. If every letter covers the same ground, consider whether a different recommender might offer a perspective that is genuinely missing. The goal is for the committee to finish reading your letters and feel that they understand who you are and why medicine is the right field for you."
    ]
  },
  {
    name: "Johns Hopkins School of Medicine",
    slug: "johns-hopkins-school-of-medicine",
    keyword: "Johns Hopkins School of Medicine letters of recommendation",
    keywords: "johns hopkins school of medicine letters of recommendation, johns hopkins medical school lor, johns hopkins med school recommendation requirements, hopkins letters of recommendation",
    description: "Learn how to plan Johns Hopkins School of Medicine letters of recommendation, meet committee letter preferences, and build a strong AMCAS letter package.",
    paragraphs: [
      "Johns Hopkins School of Medicine letters of recommendation are used by the admissions committee to understand qualities that grades and test scores cannot show: intellectual curiosity, clinical instincts, ethical reasoning, resilience, and the ability to work with patients and colleagues at a high level. Because Hopkins is one of the most competitive medical schools in the country, letters that describe specific observations and concrete examples are far more useful than brief general endorsements.",
      "Johns Hopkins School of Medicine prefers a committee letter from the applicant's undergraduate pre-medical advisory office. Applicants from institutions without a pre-medical committee should submit at least three individual letters, including two from science faculty who taught advanced coursework or supervised research, and at least one from a person who observed the applicant in a clinical, research, or community setting. Most applicants submit between three and five letters total. Johns Hopkins School of Medicine letters of recommendation are submitted through AMCAS and assigned to the school application by the applicant.",
      "Ask recommenders early. For Johns Hopkins School of Medicine letters of recommendation, the stakes are high and a rushed or generic letter from a well-meaning recommender can be less effective than a thoughtful letter from someone with direct knowledge who had adequate time to write. Request letters at least three to four months before the application opens. If your school has a pre-medical committee, begin that process even earlier, as committee letters often require their own interview and submission of faculty input from multiple professors.",
      "The strongest Johns Hopkins School of Medicine letters of recommendation come from faculty who have seen the applicant work at a level above coursework alone. A professor who supervised a thesis or independent research project, a mentor who observed the applicant design and execute experiments, or a clinical supervisor who worked alongside the applicant in a patient care environment can describe dimensions of performance that are invisible in a transcript. Focus on recommenders with direct, extended knowledge of your work rather than well-known names with limited contact.",
      "Give each recommender a complete support packet when requesting Johns Hopkins School of Medicine letters of recommendation. Include your personal statement draft, activities list, AMCAS submission instructions, the deadline, and a brief reminder of the most relevant work you completed with that person. A recommender with complete information writes a more focused and credible letter. Johns Hopkins reviewers read letters carefully, and a letter that aligns with and adds detail to the rest of the application is more effective than one that repeats information already in the transcript or activities section.",
      "Johns Hopkins School of Medicine letters of recommendation are submitted through the AMCAS Letter Service. Check the Hopkins secondary application each cycle for any updated requirements, particularly for the MD-PhD program, which may have separate letter specifications. Requirements for dual-degree programs and specific tracks sometimes differ from the standard MD application, so verify the instructions for the program you are applying to before finalizing your letter package.",
      "After letters are submitted, send a thank-you to each recommender. Keep them briefly informed as the admissions process moves forward. A follow-up note when you receive an interview invitation or an admission offer is professional and maintains the relationship for future reference. Johns Hopkins School of Medicine letters of recommendation, when planned thoughtfully and supported by good preparation, form one of the most important parts of an application to one of the most selective medical schools in the country."
    ]
  },
  {
    name: "Yale School of Medicine",
    slug: "yale-school-of-medicine",
    keyword: "Yale School of Medicine letters of recommendation",
    keywords: "yale school of medicine letters of recommendation, yale medical school lor requirements, yale med school recommendation letter, yale ysm recommendation letter",
    description: "Learn how to plan Yale School of Medicine letters of recommendation, meet the committee letter requirement, and build an effective AMCAS letter package.",
    paragraphs: [
      "Yale School of Medicine letters of recommendation help the admissions committee evaluate intellectual ability, personal integrity, clinical aptitude, and the kind of engagement with ideas and people that Yale's culture rewards. Yale emphasizes independence in learning and collaboration in research, and letters that speak to these qualities alongside academic performance and clinical experience can make a distinctive impression on the review committee.",
      "Yale School of Medicine strongly prefers a committee letter from the applicant's undergraduate institution. A pre-medical advisory committee compiles input from multiple faculty members and presents it in a unified document that gives the admissions committee a comprehensive institutional perspective on the applicant. Applicants from schools without a committee should submit at least three individual letters, typically including two from science faculty and one from a supervisor in a clinical, research, or community setting. Yale School of Medicine letters of recommendation are submitted through AMCAS and assigned to the application by the applicant.",
      "Begin planning Yale School of Medicine letters of recommendation well before the application cycle opens. If your school has a pre-medical committee, start the process during the fall or winter of your junior year or equivalent. Committee letters require their own timeline including faculty input, an advisory interview, and coordination with the advising office. Missing the committee deadline at your institution can mean submitting individual letters instead, which is still acceptable but removes the institutional endorsement the committee letter provides.",
      "The most effective Yale School of Medicine letters of recommendation come from recommenders who can speak to the applicant's intellectual engagement beyond grades. A professor who supervised independent inquiry, a research mentor who can describe how the applicant approached a difficult problem, or a clinical supervisor who observed patient communication and ethical reasoning can give the committee specific evidence rather than general praise. Yale's curriculum includes substantial independent work, and letters that demonstrate the applicant's capacity for self-directed learning and original thinking align well with what the school values.",
      "Support each recommender well when preparing Yale School of Medicine letters of recommendation. Provide a clear packet with your personal statement draft, activities list, AMCAS instructions, the deadline, and a short reminder of the specific experiences you shared with that recommender. A well-briefed recommender writes a more focused letter. Yale reviewers look for letters that go beyond academic performance to describe character, interpersonal qualities, and commitment over time, so remind recommenders of experiences that demonstrate those dimensions of your work together.",
      "Yale School of Medicine letters of recommendation are submitted through the AMCAS Letter Service. The number of letters accepted and any specific requirements for dual-degree programs should be verified each cycle on the Yale School of Medicine admissions website, as requirements can change. The secondary application may also include additional instructions that apply to specific programs or supplemental materials.",
      "After submitting your application and letters, send a brief thank-you to each recommender. Keep them informed of key milestones. Yale School of Medicine letters of recommendation are one of the strongest signals available to the committee about who an applicant is as a person, and recommenders who are well-supported and genuinely enthusiastic tend to write the letters that are most remembered."
    ]
  },
  {
    name: "Stanford School of Medicine",
    slug: "stanford-school-of-medicine",
    keyword: "Stanford School of Medicine letters of recommendation",
    keywords: "stanford school of medicine letters of recommendation, stanford medical school lor requirements, stanford med school recommendation letter, stanford medical school lor",
    description: "Learn how to plan Stanford School of Medicine letters of recommendation, meet the committee letter preference, and build an effective AMCAS letter package.",
    paragraphs: [
      "Stanford School of Medicine letters of recommendation provide the admissions committee with perspective on qualities that grades and scores cannot convey: intellectual creativity, clinical empathy, research initiative, leadership, and the personal drive to pursue medicine as a lifelong commitment. Stanford's culture emphasizes innovation and impact, and letters that can speak to these dimensions alongside academic and clinical performance can be particularly effective.",
      "Stanford School of Medicine prefers a committee letter from the applicant's undergraduate pre-medical advisory office. Applicants from institutions without a committee should submit at least three individual letters, typically two from science faculty and one from a clinical or research supervisor. Most competitive applicants submit between three and five letters. Stanford School of Medicine letters of recommendation are submitted through AMCAS and assigned to the school by the applicant in their AMCAS account.",
      "Start planning Stanford School of Medicine letters of recommendation early. If your institution offers a pre-medical committee letter, begin the committee process during your junior year or equivalent period. Individual letter requests should go out at least three to four months before the application opens. Recommenders need adequate time to write a thoughtful letter, and early requests with complete information consistently produce more useful results than last-minute asks.",
      "The strongest Stanford School of Medicine letters of recommendation come from recommenders who have direct knowledge of the applicant's intellectual work. A faculty member who mentored an independent research project and can describe the applicant's scientific thinking, persistence through setbacks, and contribution to a research team is particularly valuable. Stanford's MD and MD-PhD programs value research experience highly, and a research mentor who can speak to the applicant's scientific potential adds a dimension that science faculty teaching letters alone cannot provide. Clinical supervisors who observed patient interaction and service commitment round out the package.",
      "When asking for Stanford School of Medicine letters of recommendation, give each recommender a complete support packet. Include your personal statement draft, the activities list, AMCAS submission instructions, the deadline, and a brief note about the specific experiences you shared with that person. Remind the recommender of work they observed directly rather than summarizing your full application. Stanford reviewers read letters looking for specific evidence of the qualities they value most, and a letter built on concrete observations is more persuasive than a letter built on general impressions.",
      "Stanford School of Medicine letters of recommendation are submitted through the AMCAS Letter Service. Check the Stanford admissions website and secondary application each cycle for current requirements, as the number of letters accepted and specific instructions for programs like the MD-PhD may be updated. The secondary application may also include guidance on how to order letters or what types are preferred for specific tracks.",
      "After your letters are submitted, send a genuine thank-you to each recommender. Stanford School of Medicine letters of recommendation represent a significant investment of time from people who believed in your potential enough to write on your behalf. Keeping recommenders informed of the outcome and maintaining the relationship professionally reflects the same qualities that strong medical school candidates demonstrate throughout their applications."
    ]
  },
  {
    name: "Duke University School of Medicine",
    slug: "duke-university-school-of-medicine",
    keyword: "Duke University School of Medicine letters of recommendation",
    keywords: "duke university school of medicine letters of recommendation, duke medical school lor requirements, duke med school recommendation letter, duke medical school lor",
    description: "Learn how to plan Duke University School of Medicine letters of recommendation, meet the committee letter requirement, and strengthen your AMCAS application.",
    paragraphs: [
      "Duke University School of Medicine letters of recommendation carry particular importance in an admissions process that places research experience alongside clinical and service commitment. Duke's MD curriculum includes a dedicated third year for research, and letters that can speak to a candidate's scientific thinking, intellectual independence, and curiosity about medicine as a discipline help the committee evaluate whether the applicant will thrive in that environment.",
      "Duke University School of Medicine strongly prefers a committee letter from the applicant's undergraduate institution. Applicants from schools without a pre-medical advisory committee should submit at least three individual letters, usually including two from science faculty and at least one from a research or clinical supervisor. Duke University School of Medicine letters of recommendation are submitted through AMCAS and assigned to the school in the applicant's AMCAS account. Check the Duke secondary application each cycle for updated requirements.",
      "Ask for Duke University School of Medicine letters of recommendation early. The most useful letters take time to write well, and recommenders who are given adequate time alongside a well-organized support packet consistently produce more specific and credible endorsements. Plan to reach out at least three to four months before the application opens, or sooner if your institution's pre-medical committee has its own submission deadline.",
      "Given Duke's research-intensive third year, letters from research mentors are especially valuable in a Duke University School of Medicine letters of recommendation package. A supervisor who mentored the applicant through a research project can describe scientific reasoning, comfort with ambiguity, ability to work independently, and the kind of intellectual tenacity that a research year requires. These observations are difficult to convey in any other part of the application. A strong research letter paired with science faculty and clinical supervisor letters forms a particularly effective combination for Duke.",
      "Support each recommender when preparing Duke University School of Medicine letters of recommendation. Provide a packet with your personal statement draft, activities list, AMCAS submission instructions, deadline, and a brief note reminding the recommender of the most relevant work you completed together. For a research mentor, describe the project scope, your specific contributions, and any results or lessons that came from the experience. This context helps the recommender write about your scientific work with the specificity that a competitive letter requires.",
      "Duke University School of Medicine letters of recommendation are submitted through the AMCAS Letter Service. Verify current requirements on the Duke admissions website each cycle, particularly if applying to the MD-PhD program, which may have different letter specifications or additional guidance on research-focused letters. The secondary application often includes program-specific instructions that are updated each cycle.",
      "After your Duke University School of Medicine letters of recommendation are submitted, send a thank-you to each recommender. Keep them informed of your progress through the cycle. Recommenders who supported your application are often genuinely interested in your outcome, and maintaining that relationship professionally is both courteous and practical for future career reference needs."
    ]
  },
  {
    name: "Northwestern Feinberg School of Medicine",
    slug: "northwestern-feinberg-school-of-medicine",
    keyword: "Northwestern Feinberg School of Medicine letters of recommendation",
    keywords: "northwestern feinberg school of medicine letters of recommendation, northwestern medical school lor requirements, northwestern med school recommendation letter, feinberg letters of recommendation",
    description: "Learn how to plan Northwestern Feinberg School of Medicine letters of recommendation, meet the committee letter preference, and build a strong AMCAS letter package.",
    paragraphs: [
      "Northwestern Feinberg School of Medicine letters of recommendation provide the admissions committee with direct evidence about an applicant's intellectual ability, research potential, clinical empathy, and character. Feinberg's curriculum integrates early clinical exposure and collaborative learning, and letters that speak to these qualities alongside academic performance are particularly relevant to the committee's evaluation.",
      "Northwestern Feinberg School of Medicine prefers a committee letter from the applicant's undergraduate pre-medical advisory office. Applicants from schools without a committee should submit at least three individual letters, typically including two from science faculty and one from a clinical, research, or service supervisor. Northwestern Feinberg School of Medicine letters of recommendation are submitted through AMCAS and assigned to the school by the applicant. Verify current letter requirements on the Feinberg admissions website and secondary application each cycle.",
      "Plan Northwestern Feinberg School of Medicine letters of recommendation well in advance of the application opening. If your institution has a pre-medical committee, begin that process during your junior year or earlier. Individual letter requests should be sent at least three to four months before the application opens, accompanied by a clear and organized support packet for each recommender.",
      "The most effective Northwestern Feinberg School of Medicine letters of recommendation describe specific observations rather than general praise. A science faculty member who supervised research or taught a demanding course in which the applicant demonstrated analytical ability can provide evidence that a test score cannot. A clinical supervisor who observed patient communication, professionalism, and empathy adds the human dimension that Feinberg values in its culture of collaborative medicine. A letter from someone who has worked closely with the applicant over at least a semester or project cycle is more credible than a brief endorsement from a limited contact.",
      "Support each recommender well when requesting Northwestern Feinberg School of Medicine letters of recommendation. Provide the AMCAS submission link, deadline, your personal statement draft, activities list, and a brief reminder of the experiences you shared with that person. Give recommenders enough context to write about your work with specificity. A letter that includes concrete observations about your performance in a particular class, research project, or clinical setting is far more useful to a competitive admissions committee than a letter based on general impressions.",
      "Northwestern Feinberg School of Medicine letters of recommendation are submitted through the AMCAS Letter Service. The number of letters accepted and any program-specific requirements for tracks within Feinberg should be verified each cycle on the official admissions website. Secondary applications often contain updated guidance that differs from what appears on publicly available general pages.",
      "After submission, send a thank-you to each recommender who supported your Northwestern Feinberg School of Medicine letters of recommendation request. Keep them informed of your progress. Recommenders who invest time in writing a strong letter are invested in your outcome, and maintaining that professional relationship reflects the same qualities that made you a compelling applicant in the first place."
    ]
  },
  {
    name: "Vanderbilt University School of Medicine",
    slug: "vanderbilt-university-school-of-medicine",
    keyword: "Vanderbilt University School of Medicine letters of recommendation",
    keywords: "vanderbilt university school of medicine letters of recommendation, vanderbilt medical school lor, vanderbilt med school recommendation letter, vumc letters of recommendation",
    description: "Learn how to plan Vanderbilt University School of Medicine letters of recommendation, choose the right recommenders, and build a strong AMCAS letter package.",
    paragraphs: [
      "Vanderbilt University School of Medicine letters of recommendation help the admissions committee evaluate leadership, intellectual curiosity, and commitment to service alongside academic performance. Vanderbilt values applicants who bring more than credentials to their candidacy, and letters that can describe the applicant's impact on the people around them, their growth over time, and their motivation for medicine are particularly effective.",
      "Vanderbilt University School of Medicine accepts committee letters and individual letters. Most competitive applicants submit between three and five letters, usually including two from science faculty and one or two from clinical, research, or community supervisors. Vanderbilt University School of Medicine letters of recommendation are submitted through AMCAS and assigned to the school in the applicant's account. Verify the current letter requirements on the Vanderbilt admissions website each application cycle.",
      "Ask for Vanderbilt University School of Medicine letters of recommendation at least three to four months before the application opens. Vanderbilt values letters that describe the applicant's impact on others, and recommenders who are given adequate time and good information consistently write more specific and credible evaluations than those who receive a last-minute request with minimal context.",
      "The most useful Vanderbilt University School of Medicine letters of recommendation come from people who observed the applicant working with patients, communities, or peers over an extended period. Vanderbilt has a strong culture of community engagement and interpersonal medicine, and letters that describe service commitment, leadership in student or community organizations, or work with underserved populations can complement the academic and clinical letters in the package. A well-rounded letter set that covers intellectual ability, clinical empathy, and service orientation aligns naturally with what Vanderbilt looks for.",
      "Provide each recommender with a support packet when requesting Vanderbilt University School of Medicine letters of recommendation. Include your personal statement draft, activities list, AMCAS submission instructions, deadline, and a brief note about the experiences you shared with that person. If the recommender is a community supervisor or service leader rather than a faculty member, remind them of the timeline and scope of the work they observed. A recommender with complete context writes a more focused letter.",
      "Vanderbilt University School of Medicine letters of recommendation are submitted through AMCAS. Confirm the current requirements, including any limits on the number of letters and specific instructions for Vanderbilt's MD or combined degree programs, on the Vanderbilt admissions website each cycle before finalizing your letter list.",
      "After your letters are submitted, send a thank-you to each recommender. Share news about your application as it progresses. Vanderbilt University School of Medicine letters of recommendation are part of a relationship as much as they are part of a process, and applicants who handle that relationship professionally demonstrate the same qualities the committee is trying to assess."
    ]
  },
  {
    name: "University of Michigan Medical School",
    slug: "university-of-michigan-medical-school",
    keyword: "University of Michigan Medical School letters of recommendation",
    keywords: "university of michigan medical school letters of recommendation, u of m medical school lor, michigan med school recommendation letter, umich letters of recommendation medical school",
    description: "Learn how to plan University of Michigan Medical School letters of recommendation, meet the committee letter preference, and submit a strong AMCAS letter package.",
    paragraphs: [
      "University of Michigan Medical School letters of recommendation help the admissions committee evaluate how applicants perform beyond the transcript. Michigan's medical school is a large research institution with a strong clinical and public health program, and letters that speak to research ability, clinical exposure, and community commitment across different contexts give the committee a more complete picture of the applicant.",
      "University of Michigan Medical School prefers a committee letter from the applicant's undergraduate institution. Applicants without committee access should submit at least three individual letters, usually including two from science faculty and one from a clinical or service supervisor. University of Michigan Medical School letters of recommendation are submitted through AMCAS and assigned to the school by the applicant in their AMCAS account.",
      "Start planning University of Michigan Medical School letters of recommendation several months before the application cycle opens. Identify recommenders who have observed you in different contexts over an extended period of time. Science faculty who taught advanced courses or supervised laboratory research, research mentors who worked with you on independent projects, and clinical or community supervisors who observed patient interaction and service commitment are the most useful recommenders for a Michigan application.",
      "The most effective University of Michigan Medical School letters of recommendation come from people who can describe specific examples. A letter that describes how a candidate handled a difficult situation in a research lab, managed a challenging patient conversation, or led a team through a service project provides the kind of evidence that generic praise cannot. Michigan's admissions committee reads letters looking for concrete observations that go beyond what is already visible in the GPA, MCAT, and activities sections.",
      "Give each recommender a complete packet when requesting University of Michigan Medical School letters of recommendation. Include your personal statement draft, activities list, AMCAS instructions, the deadline, and a brief reminder of the most relevant work you did with that person. A recommender with complete information writes a more organized and specific letter. Michigan reviewers are experienced, and letters that clearly describe the recommender's relationship with the applicant and support the observations with specific examples are more persuasive than letters that are comprehensive but vague.",
      "University of Michigan Medical School letters of recommendation are submitted through the AMCAS Letter Service. Verify the current requirements on the Michigan Medicine admissions website each cycle, as the number of letters accepted and any program-specific instructions may change. The secondary application may include updated guidance that differs from what appears on general informational pages.",
      "After your University of Michigan Medical School letters of recommendation are submitted, send a brief thank-you to each recommender. Keep them informed of any significant milestones. A follow-up note when you receive an interview invitation or an offer reflects the same professional judgment that Michigan's admissions committee is trying to evaluate."
    ]
  },
  {
    name: "Georgetown University School of Medicine",
    slug: "georgetown-university-school-of-medicine",
    keyword: "Georgetown University School of Medicine letters of recommendation",
    keywords: "georgetown university school of medicine letters of recommendation, georgetown medical school lor, georgetown med school recommendation letter, georgetown letters of recommendation",
    description: "Learn how to plan Georgetown University School of Medicine letters of recommendation, meet committee letter preferences, and build a strong application that reflects Georgetown's mission.",
    paragraphs: [
      "Georgetown University School of Medicine letters of recommendation reflect the school's Jesuit mission of cura personalis — care for the whole person. The admissions committee uses letters to evaluate not only academic and clinical preparation but also personal values, service orientation, ethical reasoning, and the kind of character that Georgetown associates with the practice of medicine as a calling rather than a profession alone.",
      "Georgetown University School of Medicine prefers a committee letter from the applicant's undergraduate institution. Applicants from schools without a pre-medical committee should submit at least three individual letters, typically including two from science faculty and at least one from a person who observed the applicant's service, clinical work, or community engagement. Georgetown University School of Medicine letters of recommendation are submitted through AMCAS and assigned to the school by the applicant.",
      "Given Georgetown's mission emphasis, letters that speak to service commitment and values are particularly relevant in a Georgetown University School of Medicine letters of recommendation package. A supervisor from a free clinic, community health program, international service project, or volunteer organization who can describe the applicant's empathy, reliability, and commitment to others adds a dimension that academic letters alone cannot provide. This does not replace the need for strong academic letters; it complements them.",
      "Ask for Georgetown University School of Medicine letters of recommendation at least three to four months before the application opens. Provide each recommender with a support packet that includes your personal statement draft, activities list, AMCAS submission instructions, the deadline, and a brief note about the experiences you shared. For service supervisors, include a description of the program or organization and the scope of your work. A recommender who understands the context of your service can write a more specific and meaningful letter.",
      "The strongest Georgetown University School of Medicine letters of recommendation describe the applicant as a person as well as a student or worker. Georgetown reviewers are looking for evidence that the applicant has internalized the values associated with Georgetown's mission: intellectual rigor, service to others, respect for human dignity, and commitment to a community beyond oneself. Letters that describe how the applicant acted with integrity in a difficult situation, advocated for a patient, or contributed to a group effort reflect the qualities Georgetown values most.",
      "Georgetown University School of Medicine letters of recommendation are submitted through AMCAS. Review the Georgetown admissions website and secondary application each cycle for updated requirements and any specific guidance on letter types, total number accepted, or program-specific instructions for the Georgetown MD or combined degree programs.",
      "After submission, send a thoughtful thank-you to each recommender. Keeping recommenders informed of your progress and expressing genuine gratitude for their investment in your application reflects the same interpersonal qualities that Georgetown University School of Medicine letters of recommendation are designed to reveal."
    ]
  },
  {
    name: "Emory University School of Medicine",
    slug: "emory-university-school-of-medicine",
    keyword: "Emory University School of Medicine letters of recommendation",
    keywords: "emory university school of medicine letters of recommendation, emory medical school lor, emory med school recommendation letter, emory letters of recommendation",
    description: "Learn how to plan Emory University School of Medicine letters of recommendation, choose effective recommenders, and submit a strong AMCAS letter package.",
    paragraphs: [
      "Emory University School of Medicine letters of recommendation help the admissions committee build a complete picture of the applicant across academic, clinical, research, and community settings. Emory has a strong public health tradition and a commitment to addressing health disparities, and letters that speak to these dimensions alongside academic excellence can make a distinctive impression on the committee.",
      "Emory University School of Medicine accepts committee letters and individual letters. Most applicants submit between three and five letters, including two science faculty letters and one or two from clinical, research, or community supervisors. Emory University School of Medicine letters of recommendation are submitted through AMCAS. Verify current requirements on the Emory admissions website and secondary application each cycle.",
      "Start planning Emory University School of Medicine letters of recommendation several months before the application opens. Identify recommenders who have worked with you in different contexts. A science faculty member who supervised research or taught advanced coursework, a research mentor who observed your scientific thinking, and a clinical or public health supervisor who witnessed your service commitment form the most complete and effective letter package for Emory.",
      "Given Emory's public health and global health strengths, Emory University School of Medicine letters of recommendation from supervisors in public health programs, free clinics, community health organizations, or global health settings carry particular relevance. If you have experience in these areas, a letter from someone who supervised that work can complement the academic and research letters and demonstrate a commitment to health equity that aligns with Emory's institutional mission.",
      "Provide each recommender with a complete support packet when requesting Emory University School of Medicine letters of recommendation. Include your personal statement draft, activities list, AMCAS submission instructions, deadline, and a brief reminder of the specific experiences you shared with that person. Remind recommenders of observations that are most relevant to the qualities Emory values: intellectual rigor, service to underserved communities, research initiative, and interpersonal effectiveness.",
      "Emory University School of Medicine letters of recommendation are submitted through the AMCAS Letter Service. Confirm the number of letters accepted and any program-specific requirements on the Emory admissions website each cycle before finalizing your recommenders. Requirements may change between cycles.",
      "After submission, send a thank-you to each recommender. Emory University School of Medicine letters of recommendation represent a genuine investment of time and judgment by people who believe in your potential. Acknowledging that investment professionally is appropriate and builds the kind of ongoing professional relationship that benefits your career well beyond medical school admission."
    ]
  },
  {
    name: "UCSF School of Medicine",
    slug: "ucsf-school-of-medicine",
    keyword: "UCSF School of Medicine letters of recommendation",
    keywords: "ucsf school of medicine letters of recommendation, ucsf medical school lor requirements, ucsf med school recommendation letter, university of california san francisco letters of recommendation",
    description: "Learn how to plan UCSF School of Medicine letters of recommendation, meet the committee letter preference, and build a strong AMCAS letter package for one of the top research medical schools.",
    paragraphs: [
      "UCSF School of Medicine letters of recommendation help the admissions committee assess research potential, clinical commitment, and service to diverse communities. UCSF has one of the most prominent research environments in the world and a deep commitment to serving the diverse populations of California. Letters that speak to scientific curiosity, patient-centered care, and community health experience align closely with what the UCSF committee is looking for.",
      "UCSF School of Medicine prefers a committee letter from the applicant's undergraduate pre-medical advisory office. Applicants without committee access should submit at least three individual letters, typically two from science faculty and one from a research, clinical, or community supervisor. UCSF School of Medicine letters of recommendation are submitted through AMCAS. Check the UCSF admissions website and secondary application each cycle for current requirements.",
      "Plan UCSF School of Medicine letters of recommendation well ahead of the application opening. If your school has a pre-medical committee, begin that process early in your junior year or equivalent. Individual letter requests should go out at least three to four months before the primary application opens. UCSF receives applications from highly competitive candidates, and letters that are thoughtfully prepared with complete support materials consistently stand out from those written under time pressure.",
      "Research experience is particularly valued at UCSF, and UCSF School of Medicine letters of recommendation from research mentors who can describe the applicant's scientific contributions, analytical thinking, and capacity for independent investigation carry significant weight. A mentor who supervised the applicant through a challenging research project and can describe specific contributions to the team's work provides evidence that neither test scores nor publications alone can convey.",
      "UCSF's patient population reflects the extraordinary diversity of the San Francisco Bay Area, and letters that describe experience working with diverse or underserved communities add meaningful context to a UCSF School of Medicine letters of recommendation package. A supervisor from a community clinic, LGBTQ+ health center, immigrant health program, or similar setting can speak to the applicant's cultural competence, communication skills, and commitment to health equity.",
      "UCSF School of Medicine letters of recommendation are submitted through the AMCAS Letter Service. Give each recommender a complete packet including your personal statement draft, activities list, AMCAS instructions, deadline, and a brief reminder of the most relevant work you completed together. Confirm requirements on the UCSF admissions website each cycle before making final decisions about your letter package.",
      "After submission, send a genuine thank-you to each recommender. Keep them informed of significant milestones. UCSF School of Medicine letters of recommendation are written by people who are investing in your future in medicine, and acknowledging that investment with the same thoughtfulness they brought to the letter reflects the interpersonal qualities the admissions committee is trying to assess."
    ]
  },
  {
    name: "Icahn School of Medicine at Mount Sinai",
    slug: "icahn-school-of-medicine-mount-sinai",
    keyword: "Icahn School of Medicine at Mount Sinai letters of recommendation",
    keywords: "icahn school of medicine mount sinai letters of recommendation, mount sinai medical school lor, mount sinai recommendation letter, icahn mount sinai letters of recommendation",
    description: "Learn how to plan Icahn School of Medicine at Mount Sinai letters of recommendation, including guidance for the standard MD and FlexMed programs.",
    paragraphs: [
      "Icahn School of Medicine at Mount Sinai letters of recommendation are reviewed as part of a holistic admissions process that values research productivity, clinical commitment, and diversity of background and perspective. Mount Sinai is known for its FlexMed program, which accepts students from any undergraduate major after sophomore year, and for its research output and urban clinical environment. Letters that reflect these dimensions of the school's culture can be particularly effective.",
      "Icahn School of Medicine at Mount Sinai accepts committee letters and individual letters for the standard MD program. A typical application includes two science faculty letters and one or two letters from clinical, research, or service supervisors. For FlexMed and other non-traditional pathways, the letter requirements may differ, and applicants should review program-specific instructions carefully. Icahn School of Medicine at Mount Sinai letters of recommendation are submitted through AMCAS and verified through the secondary application each cycle.",
      "Ask for Icahn School of Medicine at Mount Sinai letters of recommendation at least three to four months before the application opens. FlexMed applicants on an accelerated timeline should plan accordingly. Provide each recommender with a complete support packet including your personal statement draft, activities list, AMCAS instructions, and deadline. A recommender with adequate time and good information writes a more specific and credible letter.",
      "For standard MD applicants, the most effective Icahn School of Medicine at Mount Sinai letters of recommendation combine science faculty evaluations with letters from clinical or service supervisors who observed patient interaction and professional behavior. Mount Sinai's diverse urban patient population and research intensity make letters from people who observed both scientific thinking and patient-centered care especially valuable. For FlexMed applicants, faculty from any discipline who can speak to analytical rigor, intellectual creativity, and motivation for medicine are appropriate letter writers.",
      "Mount Sinai's location in New York City and its commitment to serving diverse communities mean that Icahn School of Medicine at Mount Sinai letters of recommendation from supervisors in urban health programs, community clinics, or public health settings can add distinctive context. A supervisor who observed the applicant working with patients from varied backgrounds and demonstrated cultural competence and communication flexibility provides evidence that is difficult to capture elsewhere in the application.",
      "Icahn School of Medicine at Mount Sinai letters of recommendation are submitted through AMCAS. Confirm the specific requirements for the program you are applying to on the Mount Sinai admissions website each cycle. FlexMed and combined degree programs may have separate letter instructions.",
      "After submission, send a thank-you to each recommender who contributed to your Icahn School of Medicine at Mount Sinai letters of recommendation package. Keep them informed of your progress through the cycle. Recommenders who are kept in the loop are more likely to be enthusiastic references for residency and career opportunities in the years ahead."
    ]
  },
  {
    name: "NYU Grossman School of Medicine",
    slug: "nyu-grossman-school-of-medicine",
    keyword: "NYU Grossman School of Medicine letters of recommendation",
    keywords: "nyu grossman school of medicine letters of recommendation, nyu medical school lor, nyu med school recommendation letter, nyu school of medicine letters of recommendation",
    description: "Learn how to plan NYU Grossman School of Medicine letters of recommendation and build a competitive AMCAS letter package for one of the most selective medical schools.",
    paragraphs: [
      "NYU Grossman School of Medicine letters of recommendation are read in the context of an extremely competitive applicant pool. Because NYU offers full-tuition scholarships to all admitted students, the school attracts some of the strongest medical school applicants in the country. Letters that describe specific, exceptional performance or distinctive qualities are more effective at NYU than at schools with a less uniformly competitive applicant pool.",
      "NYU Grossman School of Medicine accepts committee letters and individual letters. Most applicants submit between three and five letters, typically including two science faculty letters and one or two from clinical, research, or service supervisors. NYU Grossman School of Medicine letters of recommendation are submitted through AMCAS. Verify current requirements on the NYU admissions website and secondary application each cycle.",
      "Plan NYU Grossman School of Medicine letters of recommendation well in advance of the application opening. The most effective letters at NYU describe the applicant's exceptional intellectual ability, clinical instincts, or leadership potential rather than simply confirming strong performance. Ask recommenders who have seen you operate at a level above what the GPA or MCAT already communicates.",
      "Given NYU's highly competitive applicant pool, NYU Grossman School of Medicine letters of recommendation benefit from recommenders who can describe what made the applicant distinctive within a group of strong performers. A professor who can describe how the applicant contributed original thinking to a seminar, a research mentor who can describe how the applicant identified and pursued a novel line of inquiry, or a clinical supervisor who can describe how the applicant handled a difficult patient situation provide the kind of specific evidence that stands out when reviewers are comparing applications from very strong candidates.",
      "Provide each recommender with a complete support packet when requesting NYU Grossman School of Medicine letters of recommendation. Include your personal statement draft, activities list, AMCAS instructions, deadline, and a brief note about the experiences most relevant to that recommender's perspective. Give them enough context to write about your work with the specificity that a competitive NYU application requires.",
      "NYU Grossman School of Medicine letters of recommendation are submitted through the AMCAS Letter Service. Confirm the current number of letters accepted and any specific requirements on the NYU admissions website each cycle. The secondary application may include program-specific instructions or updates that differ from general informational resources.",
      "After your letters are submitted, send a genuine thank-you to each recommender. NYU Grossman School of Medicine letters of recommendation are a significant contribution from people who invested time in your candidacy, and acknowledging that investment reflects the same interpersonal qualities the committee is evaluating."
    ]
  },
  {
    name: "Baylor College of Medicine",
    slug: "baylor-college-of-medicine",
    keyword: "Baylor College of Medicine letters of recommendation",
    keywords: "baylor college of medicine letters of recommendation, baylor medical school lor, baylor med school recommendation letter, BCM letters of recommendation",
    description: "Learn how to plan Baylor College of Medicine letters of recommendation, meet the committee letter requirement, and build a strong AMCAS letter package.",
    paragraphs: [
      "Baylor College of Medicine letters of recommendation reflect an admissions process that values academic excellence, research productivity, and service commitment. BCM is located in the Texas Medical Center, one of the largest medical complexes in the world, and its research culture and clinical environment shape what the admissions committee looks for in applicants. Letters that speak to scientific ability and clinical or service commitment align well with BCM's institutional values.",
      "Baylor College of Medicine prefers a committee letter and requires at least three individual letters if the applicant's school does not have a committee. A typical letter package includes two science faculty letters and at least one from a research or clinical supervisor. Baylor College of Medicine letters of recommendation are submitted through AMCAS. Verify current requirements on the BCM admissions website and secondary application each cycle.",
      "Ask for Baylor College of Medicine letters of recommendation at least three to four months before the application opens. BCM's research intensity makes letters from research mentors particularly valuable. A mentor who can describe your scientific contributions, your ability to work independently, and your thinking through experimental challenges provides the kind of evidence that complements science faculty classroom letters well.",
      "The most effective Baylor College of Medicine letters of recommendation describe specific observations from people who worked closely with the applicant. BCM reviewers are experienced evaluators, and letters that offer concrete examples of research productivity, clinical empathy, or leadership in a challenging setting are more useful than letters that list positive adjectives. Think carefully about which recommenders have the most specific and relevant observations to offer.",
      "Support each recommender with a complete packet when requesting Baylor College of Medicine letters of recommendation. Include your personal statement draft, activities list, AMCAS instructions, the deadline, and a brief note reminding the recommender of the most relevant work you completed together. For research mentors, include a description of the project and your specific contributions. For clinical supervisors, describe the setting and scope of your work with patients.",
      "Baylor College of Medicine letters of recommendation are submitted through AMCAS. Check the BCM admissions website each cycle for current requirements and any guidance specific to BCM's programs or application timeline. Requirements can change between cycles.",
      "After submission, send a genuine thank-you to each recommender. Baylor College of Medicine letters of recommendation are written by people who invested time in your application because they believe in your potential. Maintaining that relationship professionally is both appropriate and practical for your career in medicine."
    ]
  },
  {
    name: "Case Western Reserve University School of Medicine",
    slug: "case-western-reserve-school-of-medicine",
    keyword: "Case Western Reserve University School of Medicine letters of recommendation",
    keywords: "case western reserve school of medicine letters of recommendation, case western medical school lor, cwru med school recommendation letter, case western letters of recommendation",
    description: "Learn how to plan Case Western Reserve University School of Medicine letters of recommendation and build an effective AMCAS letter package for a research-intensive program.",
    paragraphs: [
      "Case Western Reserve University School of Medicine letters of recommendation are reviewed as part of a holistic application process that values intellectual rigor, research ability, collaborative work, and clinical readiness. CWRU's University Program, which integrates undergraduate and medical education, and its research-intensive curriculum attract applicants who can demonstrate both scientific ability and interpersonal effectiveness. Letters that speak to these qualities provide the committee with evidence that grades and test scores alone cannot.",
      "Case Western Reserve University School of Medicine prefers a committee letter from the applicant's undergraduate institution. Applicants without committee access should submit at least three individual letters, typically including two science faculty letters and one from a research or clinical supervisor. Case Western Reserve University School of Medicine letters of recommendation are submitted through AMCAS. Verify current requirements on the CWRU admissions website each cycle.",
      "CWRU's collaborative culture means that Case Western Reserve University School of Medicine letters of recommendation from people who have observed the applicant working in team settings can be particularly valuable. A research team supervisor who can describe the applicant's contributions to a group project, a clinical supervisor who observed collaboration with nursing staff or other providers, or a service leader who watched the applicant mentor peers can speak to qualities that individual academic performance does not capture.",
      "Ask for Case Western Reserve University School of Medicine letters of recommendation at least three to four months before the application opens. Provide each recommender with a complete support packet including your personal statement draft, activities list, AMCAS instructions, deadline, and a brief reminder of the most relevant experiences you shared. For research mentors, describe the project scope and your specific intellectual contributions. For clinical supervisors, describe the setting and the length of time you worked together.",
      "The most effective Case Western Reserve University School of Medicine letters of recommendation describe behavior over time rather than a single event. A recommender who has observed the applicant across multiple semesters, a full research project cycle, or an extended clinical rotation can describe patterns of performance that a brief evaluation cannot. Long-term knowledge of the applicant is one of the most valuable qualities a letter writer can offer.",
      "Case Western Reserve University School of Medicine letters of recommendation are submitted through AMCAS. Confirm current requirements and any specific instructions for CWRU's programs on the admissions website each cycle before finalizing your letter list.",
      "After your letters are submitted, send a thank-you to each recommender. Case Western Reserve University School of Medicine letters of recommendation represent a genuine investment of time and judgment, and acknowledging that investment professionally is consistent with the collaborative culture that CWRU values."
    ]
  },
  {
    name: "University of Pittsburgh School of Medicine",
    slug: "university-of-pittsburgh-school-of-medicine",
    keyword: "University of Pittsburgh School of Medicine letters of recommendation",
    keywords: "university of pittsburgh school of medicine letters of recommendation, pitt med school lor, upmc medical school recommendation letter, university of pittsburgh medical school letters",
    description: "Learn how to plan University of Pittsburgh School of Medicine letters of recommendation, choose effective recommenders, and build a strong AMCAS letter package.",
    paragraphs: [
      "University of Pittsburgh School of Medicine letters of recommendation are reviewed as part of a holistic admissions process that values research, clinical experience, and service commitment. Pitt's affiliation with UPMC, one of the largest health systems in the country, shapes the clinical environment its students train in, and letters that describe real clinical experience and patient interaction are particularly relevant to the committee's evaluation.",
      "University of Pittsburgh School of Medicine prefers a committee letter from the applicant's undergraduate institution. Applicants without committee access should submit at least three individual letters, usually including two science faculty letters and one from a research or clinical supervisor. University of Pittsburgh School of Medicine letters of recommendation are submitted through AMCAS. Verify current requirements on the Pitt admissions website and secondary application each cycle.",
      "Ask for University of Pittsburgh School of Medicine letters of recommendation at least three to four months before the application opens. Pitt's strength in research means that letters from research mentors who can describe the applicant's scientific contributions and independent thinking are particularly valuable. A mentor who supervised work related to Pitt's areas of strength — cardiovascular disease, infectious disease, cancer, neuroscience, or public health — can add relevant institutional context to the letter.",
      "The most effective University of Pittsburgh School of Medicine letters of recommendation describe specific observations rather than general impressions. A science faculty member who taught the applicant in a demanding course or supervised independent research can describe intellectual rigor. A clinical or service supervisor who observed patient interaction and communication can describe empathy and professionalism. Together, these letters give the committee evidence across different dimensions of the applicant's preparation.",
      "Support each recommender well when requesting University of Pittsburgh School of Medicine letters of recommendation. Provide a complete packet with your personal statement draft, activities list, AMCAS instructions, deadline, and a brief note about the most relevant experiences you shared. Give recommenders enough context to write specifically about the qualities you demonstrated in their setting.",
      "University of Pittsburgh School of Medicine letters of recommendation are submitted through the AMCAS Letter Service. Confirm the current letter requirements and any program-specific instructions on the Pitt admissions website each cycle. Requirements can change, and the secondary application often includes updated guidance.",
      "After submission, send a genuine thank-you to each recommender who supported your University of Pittsburgh School of Medicine letters of recommendation request. Keep them informed of significant updates. Maintaining these professional relationships reflects the same interpersonal qualities that Pitt's admissions committee values in its students."
    ]
  },
  {
    name: "Dartmouth Geisel School of Medicine",
    slug: "dartmouth-geisel-school-of-medicine",
    keyword: "Dartmouth Geisel School of Medicine letters of recommendation",
    keywords: "dartmouth geisel school of medicine letters of recommendation, dartmouth medical school lor, geisel med school recommendation letter, dartmouth letters of recommendation medical school",
    description: "Learn how to plan Dartmouth Geisel School of Medicine letters of recommendation, meet the committee letter preference, and build a strong AMCAS letter package.",
    paragraphs: [
      "Dartmouth Geisel School of Medicine letters of recommendation are read by a committee that values collaborative learning, community health, and personal integrity alongside academic and clinical preparation. Geisel is a small, close-knit medical school in rural New Hampshire with a community health focus, and letters that speak to collaborative spirit, service commitment, and genuine human connection are particularly relevant to its admissions culture.",
      "Dartmouth Geisel School of Medicine prefers a committee letter from the applicant's undergraduate institution. Applicants without committee access should submit at least three individual letters, typically including two science faculty letters and one from a clinical or service supervisor. Dartmouth Geisel School of Medicine letters of recommendation are submitted through AMCAS. Verify the current requirements on the Geisel admissions website and secondary application each cycle.",
      "Ask for Dartmouth Geisel School of Medicine letters of recommendation at least three to four months before the application opens. Given Geisel's community and collaboration focus, letters from people who have observed the applicant working in teams, mentoring peers, or serving community needs can complement the academic letters well. Identify recommenders from different contexts who can together describe a well-rounded candidate.",
      "The most effective Dartmouth Geisel School of Medicine letters of recommendation describe the applicant's contributions to groups and communities rather than individual accomplishments alone. A supervisor who observed the applicant lead a student health initiative, mentor underserved youth, coordinate a free clinic shift, or collaborate with a research team can speak to qualities that Geisel values: empathy, reliability, leadership, and a genuine commitment to others' wellbeing.",
      "Support each recommender with a complete packet when requesting Dartmouth Geisel School of Medicine letters of recommendation. Include your personal statement draft, activities list, AMCAS instructions, deadline, and a brief reminder of the experiences you shared. Remind community service supervisors of specific moments or outcomes that illustrate your character and commitment. These details give the recommender material for a specific and credible letter.",
      "Dartmouth Geisel School of Medicine letters of recommendation are submitted through AMCAS. Confirm the current requirements on the Geisel admissions website each cycle. Geisel's rural health and primary care programs may have specific guidance for applicants interested in those tracks.",
      "After submission, send a thank-you to each recommender. Dartmouth Geisel School of Medicine letters of recommendation reflect a genuine investment from people who believe in your potential as a physician and community member. Acknowledging that investment with the same sincerity that Geisel's culture rewards is both appropriate and professionally wise."
    ]
  },
  {
    name: "Boston University Chobanian and Avedisian School of Medicine",
    slug: "boston-university-school-of-medicine",
    keyword: "Boston University School of Medicine letters of recommendation",
    keywords: "boston university school of medicine letters of recommendation, BU medical school lor, boston university med school recommendation letter, BU chobanian avedisian letters of recommendation",
    description: "Learn how to plan Boston University School of Medicine letters of recommendation, meet committee letter preferences, and build a strong AMCAS package with a community health focus.",
    paragraphs: [
      "Boston University Chobanian and Avedisian School of Medicine letters of recommendation reflect an admissions process that values community health, service to underserved populations, and a primary care orientation alongside academic and research excellence. BU's medical school has a strong tradition of training physicians who serve diverse urban communities, and letters that speak to service commitment and interpersonal effectiveness align well with the school's mission.",
      "Boston University School of Medicine prefers a committee letter from the applicant's undergraduate institution. Applicants without committee access should submit at least three individual letters, typically including two science faculty letters and one from a clinical or community service supervisor. Boston University School of Medicine letters of recommendation are submitted through AMCAS. Confirm current requirements on the BU admissions website each cycle.",
      "Ask for Boston University School of Medicine letters of recommendation at least three to four months before the application opens. Given BU's primary care and community health focus, letters from supervisors in free clinics, community health organizations, public health programs, or underserved service settings are particularly relevant. A supervisor who observed the applicant working with economically or socially marginalized populations can describe qualities that align directly with BU's institutional mission.",
      "The most effective Boston University School of Medicine letters of recommendation describe both academic preparation and human qualities. A science faculty letter that speaks to intellectual rigor and research ability provides the academic foundation. A community health or clinical supervisor letter that describes empathy, cultural competence, communication, and commitment to underserved patients provides the service dimension. Together, these letters support the holistic picture BU's committee is trying to form.",
      "Support each recommender with a complete packet when requesting Boston University School of Medicine letters of recommendation. Include your personal statement draft, activities list, AMCAS instructions, deadline, and a brief reminder of the most relevant experiences you shared. For community service supervisors, describe the organization, the population served, and the scope of your involvement. A recommender with complete context writes a more specific and credible letter.",
      "Boston University School of Medicine letters of recommendation are submitted through the AMCAS Letter Service. Confirm the current requirements and any specific instructions on the BU admissions website each cycle before finalizing your recommenders.",
      "After submission, send a genuine thank-you to each recommender. Boston University School of Medicine letters of recommendation represent a meaningful investment of time and trust, and acknowledging that investment professionally reflects the same values that BU's admissions committee is evaluating."
    ]
  },
  {
    name: "Indiana University School of Medicine",
    slug: "indiana-university-school-of-medicine",
    keyword: "Indiana University School of Medicine letters of recommendation",
    keywords: "indiana university school of medicine letters of recommendation, IU school of medicine lor, indiana medical school recommendation letter, IUSM letters of recommendation",
    description: "Learn how to plan Indiana University School of Medicine letters of recommendation, navigate the multi-campus system, and build a strong AMCAS letter package.",
    paragraphs: [
      "Indiana University School of Medicine letters of recommendation are reviewed as part of an admissions process that values primary care, rural health, and service to Indiana communities alongside academic preparation. As one of the largest medical schools in the country with campuses across Indiana, IU School of Medicine has a particular mission orientation toward training physicians who will serve the state's diverse and often underserved geographic areas.",
      "Indiana University School of Medicine accepts committee letters and individual letters. Most applicants submit between three and five letters, typically including two science faculty letters and at least one from a clinical or community service supervisor. Indiana University School of Medicine letters of recommendation are submitted through AMCAS. IU has multiple campuses across the state, so verify requirements for the specific campus you are applying to on the IUSM admissions website each cycle.",
      "Ask for Indiana University School of Medicine letters of recommendation at least three to four months before the application opens. Given IUSM's mission focus on primary care and rural health, letters from supervisors who observed the applicant working in rural health programs, community health centers, or underserved settings can be particularly relevant. These letters help the committee evaluate whether the applicant is genuinely motivated to serve the kinds of populations that Indiana's healthcare system most needs.",
      "The most effective Indiana University School of Medicine letters of recommendation combine academic credibility with evidence of service commitment. A science faculty letter that speaks to the applicant's preparation for medical coursework and a clinical or community supervisor letter that describes patient interaction and empathy form the core of a strong package. For applicants with Indiana ties or demonstrated interest in serving the state, a letter from an Indiana-based supervisor can add useful local context.",
      "Support each recommender with a complete packet when requesting Indiana University School of Medicine letters of recommendation. Include your personal statement draft, activities list, AMCAS instructions, deadline, and a brief reminder of the most relevant work you did together. For clinical or community supervisors, describe the setting and scope of the work clearly so the recommender can write specifically about what they observed.",
      "Indiana University School of Medicine letters of recommendation are submitted through the AMCAS Letter Service. Because IUSM has multiple campuses and programs, verify the specific requirements for the campus track you are applying to on the official website each cycle before finalizing your letter plan.",
      "After submission, send a thank-you to each recommender. Indiana University School of Medicine letters of recommendation are an investment from people who believe in your readiness for medicine. Maintaining those professional relationships thoughtfully is both appropriate and practically useful throughout a long medical career."
    ]
  },
  {
    name: "Ohio State University College of Medicine",
    slug: "ohio-state-university-college-of-medicine",
    keyword: "Ohio State University College of Medicine letters of recommendation",
    keywords: "ohio state university college of medicine letters of recommendation, OSU medical school lor, ohio state college of medicine recommendation letter, ohio state medical school lor",
    description: "Learn how to plan Ohio State University College of Medicine letters of recommendation, meet committee letter preferences, and build a strong AMCAS letter package.",
    paragraphs: [
      "Ohio State University College of Medicine letters of recommendation are reviewed as part of a holistic admissions process that considers research experience, clinical exposure, community service, and personal qualities alongside academic performance. Ohio State's affiliation with Wexner Medical Center and its large research enterprise shape both the clinical training environment and the qualities the committee seeks in applicants.",
      "Ohio State University College of Medicine accepts committee letters and individual letters. Most applicants submit between three and five letters, typically including two science faculty letters and at least one from a clinical or service supervisor. Ohio State University College of Medicine letters of recommendation are submitted through AMCAS. Verify current requirements on the OSU College of Medicine admissions website each cycle.",
      "Ask for Ohio State University College of Medicine letters of recommendation at least three to four months before the application opens. If your school has a pre-medical committee, begin that process as early as possible. Individual letter requests should go out with a complete support packet that includes your personal statement draft, activities list, AMCAS instructions, and deadline.",
      "Letters from recommenders affiliated with Ohio State or its research programs can add relevant context to an Ohio State University College of Medicine letters of recommendation package. If you completed research at Ohio State, a rotation at Wexner Medical Center, or community health work in the Columbus area, a letter from a supervisor in those settings carries institutional familiarity that can strengthen the package. That said, the quality and specificity of the letter matters more than the affiliation.",
      "The most effective Ohio State University College of Medicine letters of recommendation describe specific observations about the applicant's academic ability, research thinking, clinical judgment, or service commitment. A science faculty member who supervised research or taught advanced coursework can describe intellectual rigor. A clinical supervisor who observed patient interaction can describe empathy and professionalism. Together, these letters form a complete picture of the applicant's preparation.",
      "Ohio State University College of Medicine letters of recommendation are submitted through the AMCAS Letter Service. Confirm current requirements and any specific program instructions on the OSU admissions website each cycle before finalizing your recommenders.",
      "After submission, send a thank-you to each recommender. Ohio State University College of Medicine letters of recommendation are written by people who invested time in your application, and acknowledging that investment professionally is both appropriate and consistent with the values OSU's admissions committee looks for in its students."
    ]
  }
];

// Returns two auto-generated paragraphs that bring word count up and add value
function extendedParagraphs(school) {
  const k = school.keyword;
  return [
    `Planning ${k} means thinking about the full package before you ask the first recommender. Read the admissions requirements at ${school.name} carefully and decide whether a committee letter is available and appropriate for your situation. If it is, begin the committee process before you focus on individual letters. If it is not, build a list of three to five people who have direct, relevant knowledge of your work across at least two different contexts. A science faculty member and a clinical or service supervisor represent the two most important perspectives. A research mentor, community health supervisor, or additional faculty member can fill in gaps depending on your specific background and the application you are building.`,
    `A final review before and after submitting ${k} can prevent common mistakes. Confirm that each recommender's contact information is entered correctly in AMCAS so the submission link reaches the right person. Check that your letter assignments are correct and that you have assigned the right letters to ${school.name}'s application. Follow up with any recommender who has not submitted one week before the deadline. After all letters are submitted and your application is verified, send a brief note to each recommender confirming that everything is in order and thanking them for their time. ${k} that are planned carefully, supported with good materials, and followed through with professional courtesy give your application the strongest foundation they can provide.`
  ];
}

function pageHtml(school) {
  const canonicalUrl = `${BASE_URL}/medical-schools/${school.slug}/letters-of-recommendation/`;
  const prefix = "../../../";
  const depth = "../../..";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${school.name} Letters of Recommendation`,
    description: school.description,
    keywords: school.keywords,
    mainEntityOfPage: canonicalUrl,
    author: { "@type": "Organization", name: "Recommendation Templates" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Medical Schools", item: `${BASE_URL}/medical-schools/` },
      { "@type": "ListItem", position: 3, name: school.name, item: `${BASE_URL}/medical-schools/${school.slug}/` },
      { "@type": "ListItem", position: 4, name: "Letters of Recommendation", item: canonicalUrl }
    ]
  };

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(school.description)}" />
    <meta name="keywords" content="${escapeHtml(school.keywords)}" />
    <meta property="og:title" content="${escapeHtml(school.name)} Letters of Recommendation" />
    <meta property="og:description" content="${escapeHtml(school.description)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${canonicalUrl}" />
    <title>${escapeHtml(school.name)} Letters of Recommendation</title>
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="stylesheet" href="${depth}/styles.css" />
    <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(articleSchema)}</script>
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
        <a href="${prefix}medical-schools/">Medical Schools</a>
        <span aria-hidden="true">/</span>
        <span>${escapeHtml(school.name)}</span>
      </nav>
      <article class="blog-article">
        <p class="eyebrow">Medical school letters of recommendation</p>
        <h1>${escapeHtml(school.name)} Letters of Recommendation</h1>
        <p class="blog-lede">${escapeHtml(school.description)}</p>
        <div class="article-body">
          ${[...school.paragraphs, ...extendedParagraphs(school)].map(p => `<p>${escapeHtml(p)}</p>`).join("\n          ")}
        </div>
      </article>
      <section class="seo-copy">
        <p class="eyebrow">Related resources</p>
        <h2>Medical School Recommendation Letter Templates and Guides</h2>
        <div class="related-link-grid">
          <a href="${prefix}medical-school-recommendation-letter-sample/">Medical school recommendation letter sample</a>
          <a href="${prefix}letter-of-recommendation-template/">Free letter of recommendation template</a>
          <a href="${prefix}how-to-ask-for-a-recommendation-letter/">How to ask for a letter of recommendation</a>
          <a href="${prefix}blog/how-to-write-an-email-asking-for-a-letter-of-recommendation/">How to write a recommendation request email</a>
          <a href="${prefix}blog/albany-medical-college-letters-of-recommendation/">Albany Medical College letters of recommendation guide</a>
          <a href="${prefix}graduate-school-recommendation-letter-sample/">Graduate school recommendation letter sample</a>
          <a href="${prefix}recommendation-letter-faq/">Recommendation letter FAQ</a>
          <a href="${prefix}medical-schools/">All medical school guides</a>
        </div>
      </section>
    </main>
    <footer class="site-footer">
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
        <a href="${prefix}medical-schools/">Medical Schools</a>
      </nav>
    </footer>
  </body>
</html>`;
}

function indexHtml() {
  const canonicalUrl = `${BASE_URL}/medical-schools/`;
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Medical School Letters of Recommendation Guides",
    itemListElement: schools.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${s.name} Letters of Recommendation`,
      url: `${BASE_URL}/medical-schools/${s.slug}/letters-of-recommendation/`
    }))
  };
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Find letters of recommendation guides for top U.S. medical schools. Each guide covers AMCAS letter requirements, committee letters, who should write, and how to plan a strong letter package." />
    <meta name="keywords" content="medical school letters of recommendation, medical school lor guide, amcas letters of recommendation, med school recommendation letter requirements" />
    <meta property="og:title" content="Medical School Letters of Recommendation Guides" />
    <meta property="og:description" content="Find letters of recommendation guides for top U.S. medical schools. Each guide covers AMCAS requirements, committee letters, and how to build a strong letter package." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <title>Medical School Letters of Recommendation Guides</title>
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="stylesheet" href="../styles.css" />
    <script type="application/ld+json">${JSON.stringify(itemList)}</script>
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
        <span>Medical Schools</span>
      </nav>
      <section class="template-page-hero">
        <p class="eyebrow">Medical school admissions</p>
        <h1>Medical School Letters of Recommendation</h1>
        <p>Practical guides for planning, requesting, and submitting letters of recommendation at top U.S. medical schools. Each guide covers AMCAS submission, committee letter requirements, who should write, and how to build a strong letter package.</p>
      </section>
      <section class="seo-copy">
        <p class="eyebrow">School guides</p>
        <h2>Letters of Recommendation by Medical School</h2>
        <div class="blog-grid">
          ${schools.map(s => `<article class="blog-card">
            <p class="eyebrow">Medical school</p>
            <h3><a href="./${s.slug}/letters-of-recommendation/">${escapeHtml(s.name)} Letters of Recommendation</a></h3>
            <p>${escapeHtml(s.description)}</p>
            <a class="button secondary article-link" href="./${s.slug}/letters-of-recommendation/">Read guide</a>
          </article>`).join("\n          ")}
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
      <nav class="footer-links" aria-label="Footer navigation">
        <a href="../about.html">About Us</a>
        <a href="../recommendation-letter-faq/">FAQ</a>
        <a href="../privacy.html">Privacy</a>
        <a href="../blog.html">Blog</a>
        <a href="../medical-school-recommendation-letter-sample/">Medical School Templates</a>
      </nav>
    </footer>
  </body>
</html>`;
}

// Generate all pages
const medSchoolsDir = path.join(__dirname, "..", "outputs", "medical-schools");
fs.mkdirSync(medSchoolsDir, { recursive: true });

schools.forEach(school => {
  const schoolDir = path.join(medSchoolsDir, school.slug, "letters-of-recommendation");
  fs.mkdirSync(schoolDir, { recursive: true });
  fs.writeFileSync(path.join(schoolDir, "index.html"), pageHtml(school));
  console.log(`Generated: /medical-schools/${school.slug}/letters-of-recommendation/`);
});

fs.writeFileSync(path.join(medSchoolsDir, "index.html"), indexHtml());
console.log("Generated: /medical-schools/");

// Word count check (like Albany's blog generator)
const minWords = 600;
schools.forEach(school => {
  const allP = [...school.paragraphs, ...extendedParagraphs(school)];
  const wordCount = allP.join(" ").split(/\s+/).length;
  if (wordCount < minWords) console.warn(`WARNING: ${school.slug} only ${wordCount} words`);
  else console.log(`  OK ${school.slug}: ${wordCount} words`);
});

const newUrls = [
  `${BASE_URL}/medical-schools/`,
  ...schools.map(s => `${BASE_URL}/medical-schools/${s.slug}/letters-of-recommendation/`)
];
console.log(`\nTotal URLs: ${newUrls.length}`);
