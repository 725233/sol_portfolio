export type ProjectStatus =
  | "Exploration"
  | "In progress"
  | "Working"
  | "Internal tool"
  | "Work experience"
  | "Live";

export interface Screenshot {
  /** e.g. "projects/order-dashboard.webp". Empty shows a labelled placeholder. */
  src: string;
  caption: string;
}

export interface Project {
  id: string;
  /** "ai" → AI projects group, "experience" → Work experience group. */
  category: "ai" | "experience";
  title: string;
  /** Optional status pill, e.g. "Working". */
  status?: ProjectStatus;
  /** Extra badge text, e.g. "Internal company project". */
  badge?: string;
  /** Shows an "AI-assisted build" label on the card and case study. */
  aiAssisted?: boolean;
  /** Button text on the card. Defaults to "View project". */
  ctaLabel?: string;
  /**
   * Built-in illustrative mockup (fictional data) used instead of a screenshot.
   * Currently available: "quotation".
   */
  mockup?: "quotation";
  /** The headline outcome, one short line. Only state results you can confirm. */
  result: string;
  /**
   * Short preview. AI project cards show this; work experience cards show `result`.
   * Also shown at the top of the case study.
   */
  summary: string;
  /** Short labels shown on the card. */
  tags: string[];
  /**
   * Path to a screenshot in /public/projects, e.g. "projects/order-tracking.webp".
   * Leave empty to show the built-in placeholder.
   */
  image: string;
  imageAlt?: string;
  /** Case study sections. Any section left out is hidden. */
  caseStudy: {
    context?: string;
    purpose?: string;
    problem?: string;
    /**
     * One item shows as a paragraph, several as a list.
     * Text in [square brackets] is shown as a visible placeholder to fill in.
     */
    role?: string[];
    approach?: string;
    features?: string[];
    /** Section label for `features`. Defaults to "features". */
    featuresLabel?: string;
    tools?: string[];
    outcome?: string;
    note?: string;
    screenshots?: Screenshot[];
    /** A click-through slide walkthrough shown in the case study. */
    walkthrough?: {
      title: string;
      note?: string;
      slides: Screenshot[];
    };
  };
  links: {
    demo: string;
    repo: string;
    screenshots: string;
  };
  /** Featured projects take a wider card. */
  featured?: boolean;
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  organisation: string;
  location: string;
  dates: string;
  points: string[];
}

export interface EducationItem {
  qualification: string;
  institution: string;
  location: string;
  dates: string;
  description: string;
}
