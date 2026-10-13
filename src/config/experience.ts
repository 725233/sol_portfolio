import type { EducationItem, ExperienceItem } from "./types";

/** EXPERIENCE: newest first. */
export const experience: ExperienceItem[] = [
  {
    role: "IT, E-Commerce and Customer Support Specialist",
    organisation: "Besomi Electronics LLC / Besomi Group",
    location: "Dubai, UAE",
    dates: "July 2023 – Present",
    // Keep each point short. Lead with what you delivered.
    points: [
      "IT support for workplace hardware, software and equipment",
      "Product uploads, stock information and product SEO on the website",
      "E-commerce spreadsheets for stock accuracy and order processing",
      "Customer inquiries, order updates and follow-ups",
      "System implementations, including biometric attendance",
    ],
  },
];

/** EDUCATION. Leave `dates` as "" to hide it. */
export const education: EducationItem[] = [
  {
    qualification: "Bachelor of Science in Creative Computing",
    institution: "Bath Spa University",
    location: "Ras Al Khaimah, UAE",
    dates: "",
    description:
      "Background in creative technology, computing, digital development, website design and application development.",
  },
];
