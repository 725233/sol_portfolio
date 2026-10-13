/**
 * SITE CONFIGURATION
 * ------------------
 * Your name, intro, links and contact details live here.
 * Edit the values, save, and the whole site updates.
 *
 * Any link left as an empty string ("") is hidden automatically,
 * so visitors never see a broken button.
 */

export const site = {
  name: "Sol Andrew Domingo Jr.",
  shortName: "Sol",
  brandMark: "SOL",
  title: "Digital Solutions Specialist",
  focusAreas: ["Web Development", "E-Commerce", "AI Solutions"],
  location: "Dubai, UAE",

  hero: {
    headline: "Turning ideas into intelligent digital experiences.",
    // Keep this short: one or two sentences.
    intro: [
      "Creative Computing graduate with hands-on experience in IT support, web management and e-commerce, now applying it to AI and automation for everyday business work.",
    ],
    // Quick facts under the buttons. Only confirmed facts.
    proof: [
      { value: "3 yrs", label: "IT, e-commerce and support at Besomi" },
      { value: "AI", label: "developing specialisation" },
      { value: "BSc", label: "Creative Computing, Bath Spa University" },
    ],
  },

  // First line is shown large. Keep the rest to one short paragraph.
  about: [
    "I work where technology meets business: finding smarter ways to solve everyday problems.",
    "My background spans IT support, web management and e-commerce. My focus now is AI and automation that cut repetitive work, improve customer experiences and keep information organised. I'm learning by building.",
  ],

  contact: {
    email: "solandrew.domingo2@outlook.com",
    /** Shown as written. The dialable version is below. */
    phoneDisplay: "+971 54 422 1497",
    phoneDial: "+971544221497", // leave "" to hide the phone number
    emailSubject: "Portfolio Inquiry – Sol Andrew Domingo Jr.",
  },

  social: {
    linkedin: "https://www.linkedin.com/in/sol-andrew-domingo-jr-25403920a/",
    github: "", // PLACEHOLDER: add e.g. "https://github.com/your-username"
  },

  /**
   * CV: put your PDF in /public/cv/ and set the path, e.g. "cv/Sol-Andrew-Domingo-Jr-CV.pdf".
   * While empty, the site shows a "Request my CV" email button instead.
   */
  cvPath: "cv/Domingo_Sol_Andrew_CV.pdf",
  /** Shown under the file name in the download prompt. Update if you replace the CV. */
  cvMeta: "PDF · 2 pages · 104 KB",
};

export const mailto = (subject: string = site.contact.emailSubject) =>
  `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}`;
