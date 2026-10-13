import type { Project } from "./types";

/**
 * ════════════════════════════════════════════════════════════════
 *  PROJECTS DATA: edit your project descriptions here
 * ════════════════════════════════════════════════════════════════
 *
 * Two groups appear on the page, in this order:
 *   category: "ai"          → "AI projects"
 *   category: "experience"  → "Work experience"
 *
 * Within each group, projects appear in the order listed below.
 *
 * Screenshots
 *   1. Save images in /public/projects/ (.webp or .jpg, about 1600px wide).
 *   2. Card image:        image: "projects/your-file.webp"
 *   3. Case study images: caseStudy.screenshots[n].src = "projects/your-file.webp"
 *   Empty src values show a labelled placeholder frame.
 *
 * Links: leave "" to hide. Case study sections left empty are hidden.
 * Only state results you can confirm.
 *
 * ── TEMPLATE FOR A NEW PROJECT ── copy, paste into the list, fill in:
 * {
 *   id: "support-chatbot",                       // unique, lowercase, dashes
 *   category: "ai",
 *   title: "Customer Support Chatbot",
 *   status: "Working",
 *   aiAssisted: true,
 *   result: "One line: what it achieved",
 *   summary: "One sentence preview.",
 *   tags: ["Tool", "Tool"],
 *   image: "",
 *   caseStudy: {
 *     problem: "", role: [""], features: [""], tools: [""], outcome: "",
 *     screenshots: [{ src: "", caption: "Main screen" }],
 *   },
 *   links: { demo: "", repo: "", screenshots: "" },
 * },
 */
export const projects: Project[] = [
  /* ─────────────────────────── AI PROJECTS ─────────────────────────── */
  {
    id: "order-tracking-system",
    category: "ai",
    title: "Order Tracking System",
    status: "Internal tool",
    aiAssisted: true,
    result: "One place to follow order progress, approvals and updates across five departments",
    summary:
      "An internal web application for managing orders across sales, procurement, management, accounts and logistics.",
    // Framework and database not yet confirmed. Add them to tags and caseStudy.tools when confirmed.
    tags: ["Web application", "Gemini"],
    // Slides from the anonymized walkthrough deck (all data in them is illustrative)
    image: "projects/order-tracking/slide-03.webp",
    imageAlt: "Order Tracking System dashboard directory, from an anonymized walkthrough with illustrative data",
    caseStudy: {
      problem:
        "Order information and follow-ups were spread across spreadsheets and messages, making departmental handoffs and pending actions difficult to monitor.",
      role: [
        "Developed and refined the application with AI assistance",
        "Translated business requirements into workflows, interfaces and features",
      ],
      features: [
        "Department-specific dashboards and access controls",
        "Tracking of customer, stock and project orders",
        "Item-level approvals and recommendations",
        "Procurement, payment and logistics status updates",
        "Order comments and activity history",
        "Automated reminders for pending actions",
        "Administrative reporting",
        "Gemini assistant integration",
      ],
      tools: ["Gemini"], // add framework and database once confirmed, e.g. ["Framework", "Database", "Gemini"]
      outcome:
        "A central interface for viewing order progress, responsibilities, approvals and updates across departments.",
      walkthrough: {
        title: "Application walkthrough",
        note: "Anonymized. All names, email addresses, clients and order records shown are illustrative.",
        slides: [
          { src: "projects/order-tracking/slide-01.webp", caption: "Order Tracking System" },
          { src: "projects/order-tracking/slide-02.webp", caption: "Secure access" },
          { src: "projects/order-tracking/slide-03.webp", caption: "Dashboard directory" },
          { src: "projects/order-tracking/slide-04.webp", caption: "All orders status" },
          { src: "projects/order-tracking/slide-05.webp", caption: "Sales coordinator" },
          { src: "projects/order-tracking/slide-06.webp", caption: "Create or edit an order" },
          { src: "projects/order-tracking/slide-07.webp", caption: "Procurement manager" },
          { src: "projects/order-tracking/slide-08.webp", caption: "Procurement" },
          { src: "projects/order-tracking/slide-09.webp", caption: "Management approval" },
          { src: "projects/order-tracking/slide-10.webp", caption: "Accounts" },
          { src: "projects/order-tracking/slide-11.webp", caption: "Logistics" },
          { src: "projects/order-tracking/slide-12.webp", caption: "Admin portal" },
          { src: "projects/order-tracking/slide-13.webp", caption: "Automated department reminders" },
        ],
      },
    },
    links: { demo: "", repo: "", screenshots: "" },
  },
  {
    id: "gmail-order-followup",
    category: "ai",
    title: "Gmail Order Follow-up Automation",
    status: "Working",
    aiAssisted: true,
    result: "Order follow-ups tracked from Gmail, with scheduled reminder emails",
    summary:
      "A Gmail add-on and web dashboard for tracking active orders, item-level delivery estimates and follow-up reminders.",
    tags: ["Google Apps Script", "JavaScript", "Google Sheets", "Gmail", "CardService"],
    image: "",
    caseStudy: {
      problem:
        "Updates arriving through email threads needed a structured way to track order details, expected arrival dates and the latest notes.",
      role: [
        "Developed and refined the tool with AI assistance",
        "Built the Gmail workflow, the dashboard and the reminder configuration",
      ],
      features: [
        "Create order follow-ups from the Gmail sidebar",
        "Detect order numbers from email text",
        "Add updates and mark orders complete from Gmail",
        "Track multiple items with separate lead times and ETAs",
        "Maintain notes and pending/completed status",
        "Send scheduled summaries with active orders, item ETAs and latest updates",
        "Configure reminder recipients, frequency and sending hour",
      ],
      tools: ["Google Apps Script", "JavaScript", "Google Sheets", "Gmail", "CardService"],
      outcome:
        "A working dashboard and Gmail add-on that organise active order follow-ups and automate scheduled reminder emails.",
      screenshots: [
        { src: "", caption: "Gmail sidebar add-on" },
        { src: "", caption: "Follow-up dashboard" },
      ],
    },
    links: { demo: "", repo: "", screenshots: "" },
  },
  {
    id: "quotation-machine",
    category: "ai",
    title: "Quotation Machine",
    badge: "Internal company project",
    aiAssisted: true,
    featured: true,
    ctaLabel: "Read case study",
    // Illustrative mockup with fictional data. Do NOT replace with production
    // screenshots, internal links, pricing, supplier details or company data.
    mockup: "quotation",
    result: "Supports procurement's quotation and internal-information lookup tasks",
    summary:
      "An internal procurement tool created with Claude assistance to support quotation preparation and checking internal company information.",
    // Framework, database and AI integration not yet confirmed. Add them as tags and caseStudy.tools when confirmed.
    tags: ["Procurement", "Quotations", "Claude-assisted"],
    image: "",
    caseStudy: {
      purpose:
        "Help procurement staff prepare quotations and consult the internal information needed for their work.",
      role: [
        "I participated in this project as part of the team.",
        // PLACEHOLDER: replace with your specific responsibilities, e.g. "Gathered requirements from procurement staff"
        "[Add your specific responsibilities]",
      ],
      approach: "Created using Claude assistance.",
      featuresLabel: "capabilities",
      features: ["Supports quotation preparation", "Helps procurement staff check internal company data"],
      outcome: "A tool that supports procurement's quotation and internal-information lookup tasks.",
    },
    links: { demo: "", repo: "", screenshots: "" },
  },

  /* ───────────────────────── WORK EXPERIENCE ───────────────────────── */
  {
    id: "ecommerce-platform-management",
    category: "experience",
    title: "E-Commerce & Digital Platform Management",
    status: "Work experience",
    result: "Product catalogue, stock and SEO kept up to date on WordPress, WooCommerce and Magento",
    summary:
      "Maintaining online product catalogues, product information, stock and content, and optimising product pages for search.",
    tags: ["WordPress", "WooCommerce", "Magento", "Excel"],
    image: "",
    caseStudy: {
      context: "Part of my role at Besomi Electronics, Dubai.",
      role: [
        "Uploading products and maintaining product content",
        "Keeping stock information up to date",
        "Optimising product pages for search (SEO)",
        "Maintaining e-commerce spreadsheets to support stock accuracy and order processing",
      ],
      tools: ["WordPress", "WooCommerce", "Magento", "Excel"],
    },
    links: { demo: "", repo: "", screenshots: "" },
  },
  {
    id: "biometric-attendance",
    category: "experience",
    title: "Biometric Attendance System Implementation",
    status: "Work experience",
    result: "Biometric attendance devices configured and piloted across multiple locations",
    summary:
      "Assisted with configuring and pilot testing ZKTeco devices, plus coordination and planning for attendance system integration.",
    tags: ["ZKTeco", "BioTime", "Odoo"],
    image: "",
    caseStudy: {
      context: "Workplace implementation at Besomi Electronics. Not a software product I developed.",
      role: [
        "Assisted with configuring ZKTeco biometric attendance devices",
        "Took part in pilot testing across multiple locations",
        "Technical coordination and planning for integration with the attendance system",
      ],
      tools: ["ZKTeco", "BioTime", "Odoo"],
    },
    links: { demo: "", repo: "", screenshots: "" },
  },
  {
    id: "it-support",
    category: "experience",
    title: "IT Support & Systems Troubleshooting",
    status: "Work experience",
    result: "Hardware, software and connectivity issues resolved day to day",
    summary:
      "Supporting workplace technology and helping keep business systems reliable.",
    tags: ["Windows", "Hardware & software", "Basic networking", "CCTV", "Spiceworks"],
    image: "",
    caseStudy: {
      context: "Day-to-day IT support at Besomi Electronics.",
      role: [
        "Troubleshooting workplace hardware and software issues",
        "Resolving connectivity problems",
        "Helping maintain reliable business systems, including CCTV",
      ],
      tools: ["Windows", "Basic networking", "CCTV", "Spiceworks"],
    },
    links: { demo: "", repo: "", screenshots: "" },
  },
  {
    id: "personal-portfolio",
    category: "experience",
    title: "Personal Portfolio & Web Development",
    status: "Live",
    result: "Responsive, accessible portfolio, built and live",
    summary: "This site, designed for usability, accessibility and easy updates.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: "",
    caseStudy: {
      role: [
        "Content driven from a single set of config files, so projects and skills are easy to update",
        "Responsive layout for desktop, tablet and mobile",
        "Keyboard navigation, visible focus states and reduced-motion support",
      ],
      tools: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    },
    links: { demo: "", repo: "", screenshots: "" },
  },
];

/**
 * AI LAB
 * ------
 * Small AI experiments that don't need a full case study.
 * While empty, a short "more coming" note is shown.
 * { title: "FAQ chatbot prototype", description: "...", url: "https://..." }
 */
export const aiLab: { title: string; description: string; url: string }[] = [];
