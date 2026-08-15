const templates = [
  {
    id: "graduate-school",
    title: "Graduate School Recommendation Letter",
    category: "Academic",
    description: "A detailed professor-written letter for graduate school applications.",
    audience: "Student applicant",
    role: "Professor",
    length: "Detailed",
    tone: "Formal",
    formats: ["DOC", "TXT"],
    tags: ["graduate school", "academic", "professor"],
    body: [
      "To the Admissions Committee,",
      "I am pleased to recommend [Applicant Name] for admission to [Program Name]. I have worked with [Applicant Name] as [his/her/their] professor in [Course or Department], where [he/she/they] consistently demonstrated intellectual curiosity, analytical discipline, and strong written communication.",
      "In my class, [Applicant Name] stood out for [Specific Strength or Example]. [He/She/They] approached complex problems with care, asked thoughtful questions, and contributed meaningfully to group discussions.",
      "I believe [Applicant Name] has the academic preparation, maturity, and motivation to succeed in your program. [His/Her/Their] record reflects both strong performance and genuine commitment to further study.",
      "I recommend [Applicant Name] with confidence and would be happy to provide additional information if needed.",
      "Sincerely,\n[Recommender Name]\n[Title]\n[Institution]"
    ]
  },
  {
    id: "college",
    title: "College Recommendation Letter",
    category: "Academic",
    description: "A warm teacher recommendation for undergraduate admission.",
    audience: "High school student",
    role: "Teacher",
    length: "Standard",
    tone: "Warm",
    formats: ["DOC", "TXT"],
    tags: ["college", "teacher", "student"],
    body: [
      "Dear Admissions Officer,",
      "I am delighted to recommend [Applicant Name] for admission to [College Name]. As [his/her/their] teacher in [Subject], I have seen [Applicant Name] grow into a thoughtful, responsible, and engaged student.",
      "[Applicant Name] brings steady effort and positive energy to the classroom. One example that captures [his/her/their] character is [Specific Example], which showed both persistence and care for others.",
      "Beyond academics, [Applicant Name] contributes to our school community through [Activity or Contribution]. [He/She/They] would bring the same curiosity and integrity to your campus.",
      "I strongly support [Applicant Name]'s application and recommend [him/her/them] without reservation.",
      "Sincerely,\n[Recommender Name]\n[School]"
    ]
  },
  {
    id: "scholarship",
    title: "Scholarship Recommendation Letter",
    category: "Scholarship",
    description: "A persuasive letter emphasizing merit, promise, and impact.",
    audience: "Scholarship applicant",
    role: "Mentor",
    length: "Standard",
    tone: "Strong",
    formats: ["DOC", "TXT"],
    tags: ["scholarship", "merit", "financial aid"],
    body: [
      "Dear Scholarship Committee,",
      "I am honored to recommend [Applicant Name] for the [Scholarship Name]. [Applicant Name] has shown exceptional dedication to [Field, Community, or Goal], and I believe [he/she/they] represents the values this scholarship is meant to support.",
      "What distinguishes [Applicant Name] is [Specific Achievement or Trait]. Through [Project, Class, or Role], [he/she/they] demonstrated leadership, resilience, and a clear commitment to making a meaningful contribution.",
      "This scholarship would help [Applicant Name] continue [his/her/their] education and expand the impact [he/she/they] has already begun to make.",
      "I strongly recommend [Applicant Name] for this award.",
      "Respectfully,\n[Recommender Name]\n[Title]"
    ]
  },
  {
    id: "employee",
    title: "Employee Recommendation Letter",
    category: "Professional",
    description: "A manager recommendation highlighting performance and reliability.",
    audience: "Employee",
    role: "Manager",
    length: "Standard",
    tone: "Formal",
    formats: ["DOC", "TXT"],
    tags: ["employee", "manager", "job"],
    body: [
      "Dear Hiring Manager,",
      "I am pleased to recommend [Applicant Name], who worked with me at [Company Name] as [Job Title]. During [his/her/their] time on my team, [Applicant Name] proved to be dependable, skilled, and highly professional.",
      "[Applicant Name] was responsible for [Key Responsibilities] and consistently delivered strong results. In particular, [Specific Example] demonstrated [his/her/their] ability to solve problems and collaborate effectively.",
      "I believe [Applicant Name] would be a valuable addition to any organization seeking someone with [Skill 1], [Skill 2], and strong work ethic.",
      "Please feel free to contact me with any questions.",
      "Sincerely,\n[Recommender Name]\n[Title]\n[Company]"
    ]
  },
  {
    id: "internship",
    title: "Internship Recommendation Letter",
    category: "Internship",
    description: "A concise template for student internship applications.",
    audience: "Student or early-career applicant",
    role: "Advisor",
    length: "Short",
    tone: "Concise",
    formats: ["DOC", "TXT"],
    tags: ["internship", "student", "advisor"],
    body: [
      "Dear Internship Coordinator,",
      "I am happy to recommend [Applicant Name] for the [Internship Name] opportunity. I know [Applicant Name] through [Course, Program, or Role], where [he/she/they] has shown strong initiative and a willingness to learn.",
      "[Applicant Name] is especially strong in [Skill or Area]. [He/She/They] has demonstrated this through [Specific Example], and I believe these qualities would translate well to your internship program.",
      "I recommend [Applicant Name] enthusiastically and believe [he/she/they] would contribute positively to your team.",
      "Sincerely,\n[Recommender Name]"
    ]
  },
  {
    id: "character-reference",
    title: "Character Reference Letter",
    category: "Character Reference",
    description: "A personal reference focused on trustworthiness and character.",
    audience: "Applicant",
    role: "Community Leader",
    length: "Standard",
    tone: "Warm",
    formats: ["DOC", "TXT"],
    tags: ["character", "personal", "community"],
    body: [
      "To Whom It May Concern,",
      "I am writing to recommend [Applicant Name], whom I have known for [Length of Time] through [Context]. In that time, I have come to know [him/her/them] as a person of integrity, responsibility, and kindness.",
      "[Applicant Name] has consistently shown [Positive Trait], especially when [Specific Example]. [His/Her/Their] actions reflect good judgment and genuine concern for others.",
      "I believe [Applicant Name] would be a trustworthy and positive presence in any setting.",
      "Sincerely,\n[Recommender Name]\n[Contact Information]"
    ]
  },
  {
    id: "mba",
    title: "MBA Recommendation Letter",
    category: "Academic",
    description: "A business school template emphasizing leadership and impact.",
    audience: "MBA applicant",
    role: "Manager",
    length: "Detailed",
    tone: "Strong",
    formats: ["DOC", "TXT"],
    tags: ["mba", "business school", "leadership"],
    body: [
      "Dear MBA Admissions Committee,",
      "I am pleased to recommend [Applicant Name] for admission to [Business School]. As [his/her/their] manager at [Company], I have observed [his/her/their] leadership, strategic thinking, and ability to bring people together around measurable goals.",
      "One project that illustrates [Applicant Name]'s strengths was [Project Name]. [He/She/They] led [Specific Action], resulting in [Outcome]. This work reflected both business judgment and empathy for team members.",
      "[Applicant Name] is ready for the rigor and collaboration of an MBA program, and I believe [he/she/they] will contribute actively to your learning community.",
      "I recommend [Applicant Name] with great confidence.",
      "Sincerely,\n[Recommender Name]\n[Title]"
    ]
  },
  {
    id: "volunteer",
    title: "Volunteer Recommendation Letter",
    category: "Character Reference",
    description: "A community-focused template for volunteer or service roles.",
    audience: "Volunteer",
    role: "Community Leader",
    length: "Short",
    tone: "Warm",
    formats: ["DOC", "TXT"],
    tags: ["volunteer", "community", "service"],
    body: [
      "Dear Selection Committee,",
      "I am pleased to recommend [Applicant Name], who has volunteered with [Organization] as [Role]. [He/She/They] has been reliable, compassionate, and committed to serving others.",
      "[Applicant Name] made a meaningful contribution by [Specific Contribution]. This showed [his/her/their] sense of responsibility and ability to work well with diverse groups.",
      "I believe [Applicant Name] would be an excellent fit for your opportunity.",
      "Sincerely,\n[Recommender Name]"
    ]
  },
  {
    id: "word-template",
    title: "Letter of Recommendation Template Word",
    category: "Format",
    description: "An editable Word-style recommendation letter template with standard business letter formatting.",
    audience: "Applicant",
    role: "Recommender",
    length: "Standard",
    tone: "Formal",
    formats: ["DOC", "TXT"],
    tags: ["letter of recommendation template word", "word template", "editable doc"],
    body: [
      "[Date]",
      "Dear [Recipient Name],",
      "I am pleased to recommend [Applicant Name] for [Opportunity, Program, or Role]. I have known [Applicant Name] for [Length of Time] in my capacity as [Recommender Role], and I can speak confidently about [his/her/their] strengths.",
      "[Applicant Name] has demonstrated [Strength 1], [Strength 2], and [Strength 3]. A clear example is [Specific Example], where [he/she/they] showed excellent judgment and follow-through.",
      "This Word recommendation letter template can be edited to fit academic, professional, or personal reference needs.",
      "Sincerely,\n[Recommender Name]\n[Title]\n[Contact Information]"
    ]
  },
  {
    id: "google-docs-template",
    title: "Letter of Recommendation Template Google Docs",
    category: "Format",
    description: "A Google Docs-friendly recommendation letter template for quick copying and online editing.",
    audience: "Applicant",
    role: "Recommender",
    length: "Standard",
    tone: "Concise",
    formats: ["DOC", "TXT"],
    tags: ["letter of recommendation template google docs", "google docs", "copy template"],
    body: [
      "Dear [Recipient Name],",
      "I am writing to recommend [Applicant Name] for [Opportunity]. This Google Docs recommendation letter template is structured so it can be copied, shared, and edited online.",
      "In my experience with [Applicant Name], [he/she/they] has shown [Key Trait] and [Key Skill]. For example, [Specific Example] demonstrates [his/her/their] ability to contribute with care and consistency.",
      "I believe [Applicant Name] would be a strong fit and am happy to recommend [him/her/them].",
      "Best regards,\n[Recommender Name]\n[Title]"
    ]
  },
  {
    id: "student-sample",
    title: "Sample Recommendation Letter for Student",
    category: "Academic",
    description: "A student recommendation sample for teachers, counselors, and academic advisors.",
    audience: "Student",
    role: "Teacher",
    length: "Standard",
    tone: "Warm",
    formats: ["DOC", "TXT"],
    tags: ["sample recommendation letter for student", "student reference", "teacher recommendation"],
    body: [
      "Dear [Recipient Name],",
      "I am happy to recommend [Student Name], a student I have taught in [Class or Program]. [Student Name] is thoughtful, prepared, and consistently engaged in learning.",
      "One moment that stands out is [Specific Example]. It showed [Student Name]'s persistence, curiosity, and ability to work well with classmates.",
      "I believe [Student Name] will continue to grow and contribute positively in [Program, School, or Opportunity].",
      "Sincerely,\n[Teacher Name]\n[School]"
    ]
  },
  {
    id: "coworker-template",
    title: "Letter of Recommendation Template for Coworker",
    category: "Professional",
    description: "A peer recommendation template focused on collaboration, reliability, and team impact.",
    audience: "Coworker",
    role: "Coworker",
    length: "Standard",
    tone: "Warm",
    formats: ["DOC", "TXT"],
    tags: ["letter of recommendation template for coworker", "coworker reference", "peer recommendation"],
    body: [
      "Dear [Recipient Name],",
      "I am pleased to recommend [Coworker Name], with whom I worked at [Company Name] on [Team or Project]. As a coworker, I saw [his/her/their] collaboration, reliability, and professionalism firsthand.",
      "[Coworker Name] contributed to [Project or Responsibility] by [Specific Contribution]. [He/She/They] communicated clearly, supported teammates, and helped the group deliver strong work.",
      "I would gladly work with [Coworker Name] again and recommend [him/her/them] for [Role or Opportunity].",
      "Sincerely,\n[Your Name]\n[Title]"
    ]
  },
  {
    id: "personal-template",
    title: "Personal Letter of Recommendation Template",
    category: "Character Reference",
    description: "A personal recommendation template for character references, community applications, and general support letters.",
    audience: "Applicant",
    role: "Personal Reference",
    length: "Short",
    tone: "Warm",
    formats: ["DOC", "TXT"],
    tags: ["personal letter of recommendation template", "personal reference", "character recommendation"],
    body: [
      "To Whom It May Concern,",
      "I am writing this personal letter of recommendation for [Applicant Name], whom I have known for [Length of Time]. I know [him/her/them] through [Relationship or Context].",
      "[Applicant Name] is [Trait 1], [Trait 2], and [Trait 3]. One example is [Specific Example], which reflects [his/her/their] character and dependability.",
      "I recommend [Applicant Name] with confidence and believe [he/she/they] would be a positive addition to [Opportunity or Organization].",
      "Sincerely,\n[Your Name]\n[Contact Information]"
    ]
  },
  {
    id: "request-letter",
    title: "Letter of Recommendation Request Letter",
    category: "Request",
    description: "A polite request letter template for asking a professor, teacher, manager, or mentor to write a recommendation.",
    audience: "Applicant",
    role: "Requester",
    length: "Standard",
    tone: "Polite",
    formats: ["DOC", "TXT"],
    tags: [
      "letter of recommendation request letter",
      "letter of recommendation request template",
      "request recommendation letter",
      "ask for recommendation letter",
      "recommendation request email"
    ],
    body: [
      "Subject: Request for a Letter of Recommendation",
      "Dear [Recommender Name],",
      "I hope you are doing well. I am applying for [Program, Scholarship, Job, or Opportunity] and wanted to ask whether you would feel comfortable writing a letter of recommendation for me.",
      "I thought of you because [Reason You Are Asking This Person], and I believe your perspective on my [Academic Work, Professional Skills, Character, or Leadership] would be especially meaningful.",
      "The deadline is [Deadline]. I can send my resume, application details, draft statement, and any points that would make the letter easier to prepare.",
      "Thank you very much for considering my request.",
      "Sincerely,\n[Your Name]"
    ]
  }
];

const expansionTemplates = [
  ["medical-school", "Medical School Recommendation Letter", "Academic", "Medical school applicant", "Professor", "Detailed", "Formal", "Highlights clinical judgment, science coursework, service, and readiness for medical training.", ["medical school", "pre med", "academic"]],
  ["law-school", "Law School Recommendation Letter", "Academic", "Law school applicant", "Professor", "Detailed", "Formal", "Focuses on reasoning, writing, ethics, and classroom discussion for law school admission.", ["law school", "pre law", "academic"]],
  ["phd-program", "PhD Recommendation Letter", "Academic", "Doctoral applicant", "Research Advisor", "Detailed", "Strong", "A research-centered template for doctoral programs and faculty admissions committees.", ["phd", "doctoral", "research"]],
  ["masters-program", "Master's Program Recommendation Letter", "Academic", "Master's applicant", "Professor", "Standard", "Formal", "A balanced academic recommendation for master's degree applications.", ["masters", "graduate", "academic"]],
  ["research-assistant", "Research Assistant Recommendation Letter", "Academic", "Research assistant", "Research Advisor", "Standard", "Strong", "Emphasizes research reliability, data handling, writing, and intellectual curiosity.", ["research assistant", "lab", "academic"]],
  ["academic-advisor", "Academic Advisor Recommendation Letter", "Academic", "Student applicant", "Advisor", "Standard", "Warm", "Written from an advisor's perspective for programs, scholarships, and academic opportunities.", ["academic advisor", "student", "advisor"]],
  ["teacher-for-student", "Teacher Recommendation Letter for Student", "Academic", "Student", "Teacher", "Standard", "Warm", "A teacher-written template for school, college, award, or program applications.", ["teacher", "student", "school"]],
  ["professor-for-student", "Professor Recommendation Letter for Student", "Academic", "College student", "Professor", "Standard", "Formal", "A professor's recommendation for academic programs, internships, and fellowships.", ["professor", "student", "college"]],
  ["college-transfer", "College Transfer Recommendation Letter", "Academic", "Transfer student", "Professor", "Standard", "Formal", "Supports students applying to transfer colleges or universities.", ["college transfer", "student", "academic"]],
  ["study-abroad", "Study Abroad Recommendation Letter", "Academic", "Study abroad applicant", "Teacher", "Short", "Warm", "A concise academic letter for study abroad programs and international exchanges.", ["study abroad", "exchange", "student"]],
  ["honors-program", "Honors Program Recommendation Letter", "Academic", "Honors applicant", "Teacher", "Standard", "Strong", "Highlights academic excellence, curiosity, and readiness for honors-level work.", ["honors", "student", "academic"]],
  ["fellowship", "Fellowship Recommendation Letter", "Academic", "Fellowship applicant", "Mentor", "Detailed", "Strong", "A strong recommendation for academic, research, policy, or leadership fellowships.", ["fellowship", "academic", "leadership"]],
  ["residency", "Residency Recommendation Letter", "Academic", "Residency applicant", "Supervisor", "Detailed", "Formal", "A clinical recommendation template for residency applications.", ["residency", "medical", "clinical"]],
  ["nursing-school", "Nursing School Recommendation Letter", "Academic", "Nursing applicant", "Instructor", "Standard", "Warm", "Supports nursing school applicants with patient care, reliability, and learning potential.", ["nursing", "healthcare", "student"]],
  ["dental-school", "Dental School Recommendation Letter", "Academic", "Dental school applicant", "Professor", "Detailed", "Formal", "Highlights science preparation, manual skill, service, and professionalism.", ["dental school", "pre dental", "academic"]],
  ["engineering-program", "Engineering Program Recommendation Letter", "Academic", "Engineering applicant", "Professor", "Standard", "Formal", "Focuses on technical ability, problem-solving, teamwork, and project execution.", ["engineering", "student", "technical"]],
  ["art-school", "Art School Recommendation Letter", "Academic", "Art applicant", "Teacher", "Standard", "Warm", "A creative-program recommendation for portfolios, discipline, and artistic voice.", ["art school", "portfolio", "creative"]],
  ["music-school", "Music School Recommendation Letter", "Academic", "Music applicant", "Instructor", "Standard", "Warm", "Supports music applicants through performance, practice discipline, and growth.", ["music school", "performance", "student"]],
  ["athletic-scholarship", "Athletic Scholarship Recommendation Letter", "Scholarship", "Student athlete", "Coach", "Standard", "Strong", "A coach-written scholarship letter for athletic performance, teamwork, and character.", ["athletic scholarship", "coach", "student athlete"]],
  ["leadership-scholarship", "Leadership Scholarship Recommendation Letter", "Scholarship", "Scholarship applicant", "Mentor", "Detailed", "Strong", "Highlights leadership, initiative, service, and measurable impact.", ["leadership scholarship", "award", "service"]],
  ["community-service-scholarship", "Community Service Scholarship Recommendation Letter", "Scholarship", "Scholarship applicant", "Community Leader", "Standard", "Warm", "Focuses on service, responsibility, and contribution to the community.", ["community service", "scholarship", "volunteer"]],
  ["need-based-scholarship", "Need-Based Scholarship Recommendation Letter", "Scholarship", "Scholarship applicant", "Counselor", "Standard", "Formal", "Supports scholarship applications with context, character, and educational goals.", ["need based", "scholarship", "financial aid"]],
  ["international-scholarship", "International Scholarship Recommendation Letter", "Scholarship", "International applicant", "Professor", "Detailed", "Formal", "A scholarship letter for global programs, exchange awards, and international study.", ["international scholarship", "global", "academic"]],
  ["merit-scholarship", "Merit Scholarship Recommendation Letter", "Scholarship", "Scholarship applicant", "Teacher", "Standard", "Strong", "Emphasizes academic excellence, achievement, and continued promise.", ["merit scholarship", "academic", "award"]],
  ["stem-scholarship", "STEM Scholarship Recommendation Letter", "Scholarship", "STEM applicant", "Professor", "Detailed", "Strong", "A STEM-focused recommendation for science, engineering, math, and technology awards.", ["stem", "scholarship", "science"]],
  ["graduate-scholarship", "Graduate Scholarship Recommendation Letter", "Scholarship", "Graduate applicant", "Advisor", "Detailed", "Formal", "Supports funding applications for master's, doctoral, and professional programs.", ["graduate scholarship", "funding", "academic"]],
  ["employee-promotion", "Employee Promotion Recommendation Letter", "Professional", "Employee", "Manager", "Standard", "Strong", "A manager letter for promotion packets and internal advancement.", ["promotion", "employee", "manager"]],
  ["job-candidate", "Job Candidate Recommendation Letter", "Professional", "Job candidate", "Manager", "Standard", "Formal", "A professional job reference template for external applications.", ["job candidate", "employment", "reference"]],
  ["former-employee", "Former Employee Recommendation Letter", "Professional", "Former employee", "Manager", "Standard", "Formal", "A recommendation for a past employee's future roles or opportunities.", ["former employee", "manager", "job"]],
  ["executive", "Executive Recommendation Letter", "Professional", "Executive candidate", "Board Member", "Detailed", "Formal", "Highlights strategic leadership, judgment, and organizational results.", ["executive", "leadership", "professional"]],
  ["manager-for-employee", "Manager Recommendation Letter for Employee", "Professional", "Employee", "Manager", "Standard", "Strong", "A direct manager's endorsement of performance, ownership, and collaboration.", ["manager", "employee", "professional"]],
  ["coworker-peer", "Peer Recommendation Letter", "Professional", "Coworker", "Coworker", "Short", "Warm", "A peer-focused recommendation for teamwork, communication, and reliability.", ["peer", "coworker", "professional"]],
  ["linkedin", "LinkedIn Recommendation Letter", "Professional", "Professional contact", "Coworker", "Short", "Concise", "A short recommendation format suitable for LinkedIn or public profiles.", ["linkedin", "short", "professional"]],
  ["contractor", "Contractor Recommendation Letter", "Professional", "Contractor", "Client", "Standard", "Formal", "A client reference for freelance, consulting, or contract work.", ["contractor", "client", "freelance"]],
  ["consultant", "Consultant Recommendation Letter", "Professional", "Consultant", "Client", "Standard", "Formal", "Highlights advisory skill, project outcomes, and client communication.", ["consultant", "client", "professional"]],
  ["sales", "Sales Employee Recommendation Letter", "Professional", "Sales professional", "Manager", "Standard", "Strong", "Focuses on revenue impact, customer relationships, and persistence.", ["sales", "employee", "business"]],
  ["software-engineer", "Software Engineer Recommendation Letter", "Professional", "Software engineer", "Engineering Manager", "Standard", "Formal", "A technical recommendation for engineering roles, ownership, and collaboration.", ["software engineer", "technical", "job"]],
  ["product-manager", "Product Manager Recommendation Letter", "Professional", "Product manager", "Manager", "Standard", "Strong", "Highlights product judgment, cross-functional leadership, and business impact.", ["product manager", "professional", "leadership"]],
  ["designer", "Designer Recommendation Letter", "Professional", "Designer", "Creative Director", "Standard", "Warm", "A creative professional reference for design thinking, craft, and collaboration.", ["designer", "creative", "professional"]],
  ["intern-to-employee", "Intern to Employee Recommendation Letter", "Internship", "Intern", "Manager", "Standard", "Strong", "Recommends an intern for a full-time role based on performance and growth.", ["intern", "employee", "full time"]],
  ["summer-internship", "Summer Internship Recommendation Letter", "Internship", "Student applicant", "Teacher", "Short", "Concise", "A concise letter for summer internship applications.", ["summer internship", "student", "internship"]],
  ["research-internship", "Research Internship Recommendation Letter", "Internship", "Research applicant", "Professor", "Standard", "Formal", "Supports research internship applicants with lab, writing, and analysis experience.", ["research internship", "lab", "student"]],
  ["engineering-internship", "Engineering Internship Recommendation Letter", "Internship", "Engineering student", "Professor", "Standard", "Formal", "A technical internship recommendation for engineering students.", ["engineering internship", "technical", "student"]],
  ["business-internship", "Business Internship Recommendation Letter", "Internship", "Business student", "Advisor", "Short", "Concise", "A business internship template focused on initiative and communication.", ["business internship", "student", "professional"]],
  ["nonprofit-internship", "Nonprofit Internship Recommendation Letter", "Internship", "Student applicant", "Community Leader", "Short", "Warm", "Supports nonprofit internship applications with service and mission fit.", ["nonprofit internship", "service", "student"]],
  ["character-court", "Character Reference Letter for Court", "Character Reference", "Individual", "Personal Reference", "Detailed", "Formal", "A formal character reference format for legal or court-related contexts.", ["court", "character", "personal reference"]],
  ["rental-reference", "Rental Reference Letter", "Character Reference", "Tenant applicant", "Landlord", "Short", "Formal", "A rental reference template for responsibility, payment history, and reliability.", ["rental", "tenant", "reference"]],
  ["adoption-reference", "Adoption Reference Letter", "Character Reference", "Adoption applicant", "Personal Reference", "Detailed", "Warm", "A personal reference for adoption applications and family readiness.", ["adoption", "personal", "family"]],
  ["immigration-support", "Immigration Recommendation Letter", "Character Reference", "Immigration applicant", "Community Leader", "Detailed", "Formal", "Supports immigration cases with character, community, and relationship context.", ["immigration", "visa", "support letter"]],
  ["visa-reference", "Visa Reference Letter", "Character Reference", "Visa applicant", "Employer", "Standard", "Formal", "A reference letter for visa applications, travel, or official support.", ["visa", "immigration", "reference"]],
  ["volunteer-character", "Volunteer Character Reference Letter", "Character Reference", "Volunteer", "Coordinator", "Short", "Warm", "Focuses on dependability, kindness, and community contribution.", ["volunteer", "character", "community"]],
  ["church-reference", "Church Recommendation Letter", "Character Reference", "Member", "Faith Leader", "Standard", "Warm", "A faith community reference for character, service, and trustworthiness.", ["church", "faith", "character"]],
  ["community-leader", "Community Leader Recommendation Letter", "Character Reference", "Applicant", "Community Leader", "Standard", "Warm", "A local leader's recommendation for civic, school, or service opportunities.", ["community leader", "service", "reference"]],
  ["request-professor", "Professor Recommendation Request Letter", "Request", "Student", "Requester", "Standard", "Polite", "A request template for asking a professor to write a recommendation.", ["professor request", "recommendation request", "academic"]],
  ["request-teacher", "Teacher Recommendation Request Letter", "Request", "Student", "Requester", "Short", "Polite", "A student-friendly request for asking a teacher for a recommendation.", ["teacher request", "student", "request letter"]],
  ["request-manager", "Manager Recommendation Request Letter", "Request", "Employee", "Requester", "Standard", "Polite", "A professional request for asking a manager or supervisor for a letter.", ["manager request", "employee", "request letter"]],
  ["request-mentor", "Mentor Recommendation Request Letter", "Request", "Mentee", "Requester", "Standard", "Warm", "A polite request for asking a mentor, coach, or advisor for support.", ["mentor request", "advisor", "request"]],
  ["request-scholarship", "Scholarship Recommendation Request Letter", "Request", "Scholarship applicant", "Requester", "Standard", "Polite", "A request letter tailored to scholarship recommendation deadlines.", ["scholarship request", "deadline", "request letter"]],
  ["request-follow-up", "Recommendation Request Follow-Up Email", "Request", "Applicant", "Requester", "Short", "Concise", "A gentle follow-up template when a recommender has not responded.", ["follow up", "request email", "deadline"]],
  ["request-last-minute", "Last-Minute Recommendation Request Letter", "Request", "Applicant", "Requester", "Short", "Polite", "A careful request format for short timelines and urgent deadlines.", ["last minute", "urgent", "request"]],
  ["request-common-app", "Common App Recommendation Request Letter", "Request", "College applicant", "Requester", "Standard", "Polite", "A request template for Common App teacher and counselor recommendations.", ["common app", "college", "request"]],
  ["pdf-template", "Letter of Recommendation Template PDF", "Format", "Applicant", "Recommender", "Standard", "Formal", "A printable recommendation letter format for review, sharing, and submission.", ["pdf", "printable", "format"]],
  ["google-docs-copy", "Google Docs Recommendation Letter Copy Template", "Format", "Applicant", "Recommender", "Standard", "Concise", "A copy-ready template for online editing and sharing.", ["google docs", "copy", "format"]],
  ["email-format", "Recommendation Letter Email Template", "Format", "Applicant", "Recommender", "Short", "Concise", "A short email-style recommendation letter format.", ["email", "short", "format"]],
  ["one-page", "One-Page Recommendation Letter Template", "Format", "Applicant", "Recommender", "Short", "Concise", "A compact one-page format for quick, readable recommendations.", ["one page", "short", "format"]],
  ["formal-business", "Formal Business Recommendation Letter Template", "Format", "Professional applicant", "Manager", "Standard", "Formal", "A business letter format with professional tone and clear structure.", ["business letter", "formal", "format"]],
  ["short-strong", "Short Strong Recommendation Letter", "Format", "Applicant", "Recommender", "Short", "Strong", "A brief but persuasive template for high-impact recommendations.", ["short", "strong", "template"]]
];

templates.push(
  ...expansionTemplates.map(([id, title, category, audience, role, length, tone, description, tags]) => ({
    id,
    title,
    category,
    description,
    audience,
    role,
    length,
    tone,
    formats: ["DOC", "TXT"],
    tags,
    body: [
      category === "Request" ? "Subject: Request for a Letter of Recommendation" : "Dear [Recipient Name],",
      category === "Request"
        ? "Dear [Recommender Name],"
        : `I am pleased to recommend [Applicant Name] for [Opportunity]. This ${title.toLowerCase()} is designed for ${audience.toLowerCase()} and can be customized for the exact application requirements.`,
      category === "Request"
        ? "I hope you are doing well. I am applying for [Opportunity] and wanted to ask whether you would feel comfortable writing a recommendation letter for me."
        : `[Applicant Name] has demonstrated [Strength 1], [Strength 2], and [Strength 3]. One example is [Specific Example], which shows [his/her/their] readiness and fit for this opportunity.`,
      category === "Request"
        ? "The deadline is [Deadline]. I can send my resume, application instructions, draft statement, and any bullet points that would make the letter easier to prepare."
        : `As [Recommender Role], I have seen [Applicant Name] bring ${tone.toLowerCase()} commitment, thoughtful judgment, and consistent follow-through to [Class, Team, Project, or Role].`,
      category === "Request"
        ? "Thank you very much for considering my request."
        : "I recommend [Applicant Name] with confidence and would be happy to provide additional information if needed.",
      category === "Request" ? "Sincerely,\n[Your Name]" : "Sincerely,\n[Recommender Name]\n[Title]\n[Organization]"
    ]
  }))
);

const categories = ["All", ...new Set(templates.map((template) => template.category))];
const roles = ["All", ...new Set(templates.map((template) => template.role))];
const lengths = ["All", ...new Set(templates.map((template) => template.length))];
const tones = ["All", ...new Set(templates.map((template) => template.tone))];

const state = {
  category: "All",
  role: "All",
  length: "All",
  tone: "All",
  search: "",
  selectedId: templates[0].id
};

const categoryPageGroups = [
  {
    label: "Templates by audience and situation",
    pages: [
      ["Student", "letter-of-recommendation-template-for-student"],
      ["Employee", "recommendation-letter-for-employee-template"],
      ["Academic", "academic-letter-of-recommendation-template"],
      ["Professional", "professional-recommendation-letter-sample"],
      ["Personal", "personal-recommendation-letter-template"],
      ["College application", "letter-of-recommendation-template-for-college-application"],
      ["Graduate school", "graduate-school-recommendation-letter-sample"],
      ["Scholarship", "letter-of-recommendation-template-for-scholarship"],
      ["From an employer", "recommendation-letter-from-employer-sample"],
      ["Character reference", "character-reference-letter-template"]
    ]
  },
  {
    label: "Templates by recommender",
    pages: [
      ["Teacher", "teacher-recommendation-letter-template"],
      ["Professor", "professor-recommendation-letter-sample"],
      ["Manager", "manager-recommendation-letter-template"],
      ["Coworker", "coworker-recommendation-letter-example"],
      ["Internship", "internship-recommendation-letter-template"],
      ["University application", "university-application-recommendation-letter"]
    ]
  },
  {
    label: "Templates by application type",
    pages: [
      ["MBA", "mba-recommendation-letter-sample"],
      ["Law school", "law-school-recommendation-letter-template"],
      ["Medical school", "medical-school-recommendation-letter-sample"],
      ["Visa", "visa-recommendation-letter-template"],
      ["Job application", "job-application-recommendation-letter-sample"]
    ]
  }
];

const categoryFilter = document.querySelector("#categoryFilter");
const roleFilter = document.querySelector("#roleFilter");
const lengthFilter = document.querySelector("#lengthFilter");
const toneFilter = document.querySelector("#toneFilter");
const searchInput = document.querySelector("#searchInput");
const categoryStrip = document.querySelector("#categories");
const templateGrid = document.querySelector("#templateGrid");
const emptyState = document.querySelector("#emptyState");
const resultTitle = document.querySelector("#resultTitle");
const toast = document.querySelector("#toast");
const leadModal = document.querySelector("#leadModal");
const leadForm = document.querySelector("#leadForm");
const leadClose = document.querySelector("#leadClose");
const leadError = document.querySelector("#leadError");
const leadName = document.querySelector("#leadName");
const leadEmail = document.querySelector("#leadEmail");
const leadUseCase = document.querySelector("#leadUseCase");
const leadTemplate = document.querySelector("#leadTemplate");
const leadFormat = document.querySelector("#leadFormat");
const leadCapturedAt = document.querySelector("#leadCapturedAt");
const editorModal = document.querySelector("#editorModal");
const editorClose = document.querySelector("#editorClose");
const editorPage = document.querySelector("#editorPage");
const editorTitle = document.querySelector("#editorTitle");
const editorBody = document.querySelector("#editorBody");
const editorFont = document.querySelector("#editorFont");
const editorStatus = document.querySelector("#editorStatus");
const finishEditing = document.querySelector("#finishEditing");
const keepEditing = document.querySelector("#keepEditing");
const downloadEdited = document.querySelector("#downloadEdited");
const leadStorageKey = "recommendationTemplateLead";
let pendingDownload = null;
let editorState = null;

function fillSelect(select, values) {
  select.innerHTML = values.map((value) => `<option value="${value}">${value}</option>`).join("");
}

function fillCategorySelect() {
  categoryFilter.innerHTML =
    categories.map((value) => `<option value="${value}">${value}</option>`).join("") +
    categoryPageGroups
      .map(
        (group) => `<optgroup label="${group.label}">
          ${group.pages.map(([label, slug]) => `<option value="page:${slug}">${label}</option>`).join("")}
        </optgroup>`
      )
      .join("");
}

function renderCategoryChips() {
  categoryStrip.innerHTML = categories
    .map(
      (category) =>
        `<button class="category-chip ${state.category === category ? "active" : ""}" type="button" data-category="${category}">${category}</button>`
    )
    .join("");
}

function matchesTemplate(template) {
  const search = state.search.trim().toLowerCase();
  const haystack = [
    template.title,
    template.category,
    template.description,
    template.audience,
    template.role,
    template.length,
    template.tone,
    ...template.tags
  ]
    .join(" ")
    .toLowerCase();

  return (
    (state.category === "All" || template.category === state.category) &&
    (state.role === "All" || template.role === state.role) &&
    (state.length === "All" || template.length === state.length) &&
    (state.tone === "All" || template.tone === state.tone) &&
    (!search || haystack.includes(search))
  );
}

function renderTemplates() {
  const filtered = templates.filter(matchesTemplate);

  resultTitle.textContent =
    state.category === "All"
      ? "All recommendation letter templates"
      : `${state.category} templates`;

  emptyState.classList.toggle("hidden", filtered.length > 0);
  templateGrid.innerHTML = filtered.map(renderCard).join("");

  if (!filtered.some((template) => template.id === state.selectedId) && filtered[0]) {
    state.selectedId = filtered[0].id;
    renderDetail(filtered[0]);
  }
}

function renderCard(template) {
  const pageUrl = getPageUrl(template);
  return `
    <article class="template-card">
      <div class="card-top">
        <div>
          <span class="tag">${template.category}</span>
          <span class="tag alt">${template.length}</span>
          <h3>${template.title}</h3>
          <p>${template.description}</p>
          ${pageUrl ? `<a class="guide-link" href="${pageUrl}">Read template guide</a>` : ""}
        </div>
        <div class="mini-doc" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
      </div>
      <div class="facts">
        <span class="fact"><b>Role</b>${template.role}</span>
        <span class="fact"><b>Tone</b>${template.tone}</span>
        <span class="fact"><b>For</b>${template.audience}</span>
      </div>
      <div class="card-actions">
        <button class="button secondary" type="button" data-preview="${template.id}">Preview</button>
        <button class="button primary" type="button" data-edit="${template.id}">Edit Online</button>
      </div>
    </article>
  `;
}

function getPageUrl(template) {
  const pages = {
    "word-template": "./about.html#word-recommendation-letter-template",
    employee: "./recommendation-letter-for-employee-template/",
    "student-sample": "./letter-of-recommendation-template-for-student/",
    "google-docs-template": "./about.html#editable-recommendation-letter-template",
    "graduate-school": "./graduate-school-recommendation-letter-sample/",
    scholarship: "./letter-of-recommendation-template-for-scholarship/",
    "coworker-template": "./coworker-recommendation-letter-example/",
    "personal-template": "./personal-recommendation-letter-template/",
    "request-letter": "./how-to-ask-for-a-recommendation-letter/"
  };
  return pages[template.id] || "";
}

function renderDetail(template) {
  document.querySelector("#detailTitle").textContent = template.title;
  document.querySelector("#detailDescription").textContent = template.description;
  const formats = getFormats(template);
  document.querySelector("#detailFacts").innerHTML = `
    <dt>Category</dt><dd>${template.category}</dd>
    <dt>Recommender</dt><dd>${template.role}</dd>
    <dt>Audience</dt><dd>${template.audience}</dd>
    <dt>Length</dt><dd>${template.length}</dd>
    <dt>Tone</dt><dd>${template.tone}</dd>
    <dt>Formats</dt><dd>${formats.join(", ")}</dd>
  `;
  document.querySelector("#detailDownloads").innerHTML =
    `<button class="button primary" type="button" data-edit="${template.id}">Edit Online</button>` +
    formats
      .map(
      (format) =>
        `<button class="button secondary" type="button" data-download="${template.id}" data-format="${format}">Download ${format}</button>`
      )
      .join("");

  document.querySelector("#letterPreview").innerHTML = `
    <h3>${template.title}</h3>
    ${template.body.map((paragraph) => `<p>${formatFields(paragraph)}</p>`).join("")}
  `;
}

function formatFields(text) {
  return text
    .replace(/\n/g, "<br />")
    .replace(/\[([^\]]+)\]/g, '<span class="field">[$1]</span>');
}

function plainText(template) {
  return `${template.title}\n\n${template.body.join("\n\n")}\n`;
}

function getFormats(template) {
  return [...new Set(["DOC", "PDF", ...template.formats])];
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function tintForColor(color) {
  const tints = {
    "#1f6f68": "#dceeea",
    "#315c8a": "#dce8f3",
    "#8a3f4d": "#f2dfe3",
    "#292929": "#e9e9e7"
  };
  return tints[color] || "#e7f0ef";
}

function docHtml(template, customization = null) {
  const title = customization?.title || template.title;
  const body = customization?.body || template.body;
  const font = customization?.font || "Georgia";
  const color = customization?.color || "#1f6f68";
  const style = customization?.style || "classic";
  const tint = tintForColor(color);
  const styleRules = {
    classic: `border-top: 8px solid ${color}; padding: 54px 62px; background: #fff;`,
    modern: `border-left: 14px solid ${color}; padding: 54px 62px; background: #fff;`,
    minimal: "padding: 54px 62px; background: #fff;",
    mint: `padding: 54px 62px; background: #fff;`,
    sky: `padding: 62px; background: ${tint};`,
    executive: `border-left: 38px solid ${color}; padding: 54px 62px; background: #fff;`,
    letterhead: `border-top: 24px solid ${color}; padding: 46px 62px 54px; background: #fff;`,
    serif: `padding: 58px 62px; background: ${tint};`,
    geometric: "padding: 40px 62px 54px; background: #fff;",
    corner: "padding: 46px 62px 54px; background: #fff;"
  };
  const titleRules = {
    classic: `color: ${color}; border-bottom: 1px solid ${color}; padding-bottom: 16px;`,
    modern: `color: ${color};`,
    minimal: "color: #292929; font-size: 22px;",
    mint: `color: #292929; border-top: 6px solid ${color}; padding-top: 28px;`,
    sky: "color: #202124; font-size: 42px; line-height: 1.05; max-width: 520px;",
    executive: `color: ${color}; text-transform: uppercase;`,
    letterhead: `color: #fff; background: ${color}; padding: 18px 22px;`,
    serif: "color: #202124; font-family: Georgia, 'Times New Roman', serif; font-size: 46px; line-height: 1.05;",
    geometric: "color: #202124; font-size: 42px; line-height: 1.05; margin-top: 28px;",
    corner: `color: ${color}; font-size: 30px;`
  };
  const decorationHtml = {
    geometric: `
      <table role="presentation" cellspacing="0" cellpadding="0" style="margin-left:auto; border-collapse:collapse;">
        <tr>
          <td style="width:54px;height:54px;background:${color};"></td>
          <td style="width:54px;height:54px;background:${tint};"></td>
          <td style="width:54px;height:54px;background:#f0c84a;"></td>
        </tr>
        <tr>
          <td style="width:54px;height:54px;background:#f0c84a;"></td>
          <td style="width:54px;height:54px;background:${color};"></td>
          <td style="width:54px;height:54px;background:${tint};"></td>
        </tr>
      </table>`,
    corner: `
      <table role="presentation" cellspacing="0" cellpadding="0" style="margin-left:auto; border-collapse:collapse;">
        <tr><td style="width:42px;height:42px;background:#f0f0f0;"></td><td style="width:42px;height:42px;background:#dedede;"></td><td style="width:42px;height:42px;background:${tint};"></td></tr>
        <tr><td style="width:42px;height:42px;background:#fafafa;"></td><td style="width:42px;height:42px;background:${color};"></td><td style="width:42px;height:42px;background:#d0d0d0;"></td></tr>
      </table>`
  };
  return `
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${escapeHtml(title)}</title>
        <style>
          body { margin: 0; font-family: "${font}", Arial, sans-serif; line-height: 1.65; color: #292929; background: #fff; }
          .page { max-width: 720px; min-height: 880px; margin: 32px auto; ${styleRules[style] || styleRules.classic} }
          h1 { margin: 0 0 32px; font-size: 26px; font-weight: 700; ${titleRules[style] || titleRules.classic} }
          p { margin: 0 0 16px; }
        </style>
      </head>
      <body>
        <div class="page">
          ${decorationHtml[style] || ""}
          <h1>${escapeHtml(title)}</h1>
          ${body.map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, "<br />")}</p>`).join("")}
        </div>
      </body>
    </html>
  `;
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function downloadTemplate(template, format, customization = null) {
  if (format === "PDF") {
    const blob = makePdf(template);
    saveBlob(blob, `${slugify(template.title)}-template.pdf`);
    showToast(`${template.title} downloaded as PDF.`);
    return;
  }

  const isDoc = format === "DOC";
  const content = isDoc ? docHtml(template, customization) : plainText(template);
  const type = isDoc ? "application/msword" : "text/plain";
  const extension = isDoc ? "doc" : "txt";
  const blob = new Blob([content], { type });
  saveBlob(blob, `${slugify(template.title)}-template.${extension}`);
  showToast(`${template.title} downloaded as ${format}.`);
}

function hasLeadAccess() {
  try {
    const lead = JSON.parse(localStorage.getItem(leadStorageKey) || "null");
    return Boolean(lead && lead.email && lead.name);
  } catch {
    return false;
  }
}

function requestDownload(template, format, customization = null) {
  if (hasLeadAccess()) {
    downloadTemplate(template, format, customization);
    return;
  }

  pendingDownload = { templateId: template.id, format, customization };
  openLeadModal(template);
}

function openEditor(template) {
  editorState = {
    templateId: template.id,
    font: "Georgia",
    color: "#1f6f68",
    style: "classic"
  };
  editorTitle.textContent = template.title;
  editorBody.innerHTML = template.body
    .map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, "<br />")}</p>`)
    .join("");
  editorFont.value = editorState.font;
  editorPage.style.setProperty("--editor-accent", editorState.color);
  editorPage.style.setProperty("--editor-tint", tintForColor(editorState.color));
  editorPage.style.setProperty("--editor-font", `"${editorState.font}"`);
  editorPage.dataset.style = editorState.style;
  editorModal.querySelectorAll("[data-editor-color]").forEach((button) => {
    button.classList.toggle("active", button.dataset.editorColor === editorState.color);
  });
  editorModal.querySelectorAll("[data-editor-style]").forEach((button) => {
    button.classList.toggle("active", button.dataset.editorStyle === editorState.style);
  });
  setEditorFinished(false);
  document.body.classList.add("modal-open");
  editorModal.classList.remove("hidden");
  window.setTimeout(() => editorBody.focus(), 0);
}

function closeEditor() {
  editorModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
  editorState = null;
}

function setEditorFinished(isFinished) {
  editorPage.classList.toggle("is-finished", isFinished);
  editorBody.contentEditable = String(!isFinished);
  editorTitle.contentEditable = String(!isFinished);
  editorStatus.textContent = isFinished ? "Ready to download" : "Draft";
  finishEditing.classList.toggle("hidden", isFinished);
  keepEditing.classList.toggle("hidden", !isFinished);
  downloadEdited.classList.toggle("hidden", !isFinished);
}

function editorCustomization() {
  const paragraphs = Array.from(editorBody.children)
    .map((element) => element.innerText.trim())
    .filter(Boolean);
  return {
    title: editorTitle.innerText.trim() || "Letter of Recommendation",
    body: paragraphs.length ? paragraphs : [editorBody.innerText.trim()],
    font: editorState.font,
    color: editorState.color,
    style: editorState.style
  };
}

function openLeadModal(template) {
  document.body.classList.add("modal-open");
  leadModal.classList.remove("hidden");
  leadError.textContent = "";
  document.querySelector("#leadModalTitle").textContent = `Download ${template.title}`;
  leadTemplate.value = template.title;
  leadFormat.value = pendingDownload?.format || "DOC";
  leadCapturedAt.value = new Date().toISOString();
  window.setTimeout(() => leadName.focus(), 0);
}

function closeLeadModal() {
  document.body.classList.remove("modal-open");
  leadModal.classList.add("hidden");
  leadError.textContent = "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function submitLead(event) {
  event.preventDefault();
  const name = leadName.value.trim();
  const email = leadEmail.value.trim();
  const useCase = leadUseCase.value;
  const templateName = leadTemplate.value;
  const format = leadFormat.value;
  const capturedAt = new Date().toISOString();

  if (!name) {
    leadError.textContent = "Please enter your name.";
    leadName.focus();
    return;
  }

  if (!isValidEmail(email)) {
    leadError.textContent = "Please enter a valid email address.";
    leadEmail.focus();
    return;
  }

  const lead = {
    name,
    email,
    useCase,
    template: templateName,
    format,
    capturedAt
  };

  leadCapturedAt.value = capturedAt;
  try {
    localStorage.setItem(leadStorageKey, JSON.stringify(lead));
  } catch {
    // If storage is unavailable, still allow the current download after form submission.
  }
  closeLeadModal();
  showToast("Contact saved. Your download is starting.");

  if (pendingDownload) {
    const template = templates.find((item) => item.id === pendingDownload.templateId);
    const downloadFormat = pendingDownload.format;
    const customization = pendingDownload.customization;
    pendingDownload = null;
    if (template) {
      window.setTimeout(() => downloadTemplate(template, downloadFormat, customization), 0);
    }
  }

  sendLeadToNetlify();
}

function sendLeadToNetlify() {
  try {
    const formData = new FormData(leadForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).catch(() => {
      // Local file previews cannot submit Netlify Forms; deployed Netlify pages will collect it.
    });
  } catch {
    // Never block the download if background lead capture is unavailable.
  }
}

function saveBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function makePdf(template) {
  const pageWidth = 612;
  const pageHeight = 792;
  const marginX = 72;
  const startY = 720;
  const lineHeight = 16;
  const maxChars = 82;
  const lines = [`${template.title}`, "", ...template.body.flatMap((paragraph) => wrapText(paragraph, maxChars).concat(""))];
  const visibleLines = lines.slice(0, 38);
  const textCommands = [
    "BT",
    "/F1 12 Tf",
    `${marginX} ${startY} Td`,
    "16 TL",
    ...visibleLines.map((line, index) => {
      const escaped = escapePdf(line);
      return index === 0 ? `(${escaped}) Tj` : `T* (${escaped}) Tj`;
    }),
    "ET"
  ].join("\n");
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Times-Roman >>",
    `<< /Length ${textCommands.length} >>\nstream\n${textCommands}\nendstream`
  ];
  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xrefAt = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefAt}\n%%EOF`;
  return new Blob([pdf], { type: "application/pdf" });
}

function wrapText(text, maxChars) {
  return text.split("\n").flatMap((line) => {
    const words = line.split(" ");
    const wrapped = [];
    let current = "";
    words.forEach((word) => {
      const candidate = current ? `${current} ${word}` : word;
      if (candidate.length > maxChars) {
        wrapped.push(current);
        current = word;
      } else {
        current = candidate;
      }
    });
    if (current) wrapped.push(current);
    return wrapped;
  });
}

function escapePdf(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function syncFilters() {
  categoryFilter.value = state.category;
  roleFilter.value = state.role;
  lengthFilter.value = state.length;
  toneFilter.value = state.tone;
  searchInput.value = state.search;
  renderCategoryChips();
  renderTemplates();
}

fillCategorySelect();
fillSelect(roleFilter, roles);
fillSelect(lengthFilter, lengths);
fillSelect(toneFilter, tones);
renderCategoryChips();
renderTemplates();
renderDetail(templates[0]);

categoryFilter.addEventListener("change", (event) => {
  if (event.target.value.startsWith("page:")) {
    const slug = event.target.value.slice(5);
    window.location.href = window.location.protocol === "file:" ? `./${slug}/index.html` : `./${slug}/`;
    return;
  }
  state.category = event.target.value;
  syncFilters();
});

roleFilter.addEventListener("change", (event) => {
  state.role = event.target.value;
  syncFilters();
});

lengthFilter.addEventListener("change", (event) => {
  state.length = event.target.value;
  syncFilters();
});

toneFilter.addEventListener("change", (event) => {
  state.tone = event.target.value;
  syncFilters();
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderTemplates();
});

categoryStrip.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  syncFilters();
});

document.addEventListener("click", (event) => {
  const previewButton = event.target.closest("[data-preview]");
  const downloadButton = event.target.closest("[data-download]");
  const editButton = event.target.closest("[data-edit]");

  if (previewButton) {
    const template = templates.find((item) => item.id === previewButton.dataset.preview);
    state.selectedId = template.id;
    renderDetail(template);
    document.querySelector("#details").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (downloadButton) {
    const template = templates.find((item) => item.id === downloadButton.dataset.download);
    requestDownload(template, downloadButton.dataset.format);
  }

  if (editButton) {
    const template = templates.find((item) => item.id === editButton.dataset.edit);
    if (template) openEditor(template);
  }
});

editorFont.addEventListener("change", (event) => {
  editorState.font = event.target.value;
  editorPage.style.setProperty("--editor-font", `"${editorState.font}"`);
});

editorModal.addEventListener("click", (event) => {
  const colorButton = event.target.closest("[data-editor-color]");
  const styleButton = event.target.closest("[data-editor-style]");

  if (colorButton) {
    editorState.color = colorButton.dataset.editorColor;
    editorPage.style.setProperty("--editor-accent", editorState.color);
    editorPage.style.setProperty("--editor-tint", tintForColor(editorState.color));
    editorModal.querySelectorAll("[data-editor-color]").forEach((button) => {
      button.classList.toggle("active", button === colorButton);
    });
  }

  if (styleButton) {
    editorState.style = styleButton.dataset.editorStyle;
    editorPage.dataset.style = editorState.style;
    editorModal.querySelectorAll("[data-editor-style]").forEach((button) => {
      button.classList.toggle("active", button === styleButton);
    });
  }
});

finishEditing.addEventListener("click", () => {
  setEditorFinished(true);
  showToast("Your Word template is ready.");
});

keepEditing.addEventListener("click", () => {
  setEditorFinished(false);
  editorBody.focus();
});

downloadEdited.addEventListener("click", () => {
  const template = templates.find((item) => item.id === editorState.templateId);
  const customization = editorCustomization();
  closeEditor();
  requestDownload(template, "DOC", customization);
});

editorClose.addEventListener("click", closeEditor);

leadForm.addEventListener("submit", submitLead);

leadClose.addEventListener("click", () => {
  pendingDownload = null;
  closeLeadModal();
});

leadModal.addEventListener("click", (event) => {
  if (event.target === leadModal) {
    pendingDownload = null;
    closeLeadModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !editorModal.classList.contains("hidden")) {
    closeEditor();
    return;
  }
  if (event.key === "Escape" && !leadModal.classList.contains("hidden")) {
    pendingDownload = null;
    closeLeadModal();
  }
});

document.querySelector("#resetFilters").addEventListener("click", () => {
  state.category = "All";
  state.role = "All";
  state.length = "All";
  state.tone = "All";
  state.search = "";
  syncFilters();
});

const requestedEditorTemplate = new URLSearchParams(window.location.search).get("edit");
const requestedSearch = new URLSearchParams(window.location.search).get("search");
if (requestedSearch) {
  state.search = requestedSearch;
  syncFilters();
}
if (requestedEditorTemplate) {
  const template = templates.find((item) => item.id === requestedEditorTemplate);
  if (template) openEditor(template);
}
