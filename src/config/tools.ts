/**
 * ════════════════════════════════════════════════════════════════
 *  TOOLS & TECHNOLOGIES: edit your toolkit here
 * ════════════════════════════════════════════════════════════════
 *
 * Each tool has:
 *   name   – shown on the tile
 *   icon   – a Simple Icons brand logo (siXxx) or a Lucide icon
 *   level  – optional: "hands-on" | "familiar" | "learning" | "exploring"
 *            Leave it out until you're sure; the tile then shows no label.
 *   url    – optional official website. Leave it out for skills that
 *            aren't products; those tiles are not clickable.
 *
 * Brand icons: https://simpleicons.org (import the siName below).
 * Microsoft logos aren't available in Simple Icons, so those use
 * neutral Lucide icons instead.
 *
 * A category with no tools is hidden from the site automatically.
 */
import {
  Camera,
  Cpu,
  FileSearch,
  Fingerprint,
  HardDrive,
  Mail,
  MessageSquareText,
  Monitor,
  MonitorSmartphone,
  Network,
  Sheet,
  ShoppingCart,
  Usb,
  Workflow,
  Wrench,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import {
  siApple,
  siLinux,
  siClaude,
  siGoogle,
  siGoogleappsscript,
  siJavascript,
  siMagento,
  siOdoo,
  siOpenai,
  siWordpress,
  type SimpleIcon,
} from "simple-icons";

export type ToolLevel = "hands-on" | "familiar" | "learning" | "exploring";

export interface Tool {
  name: string;
  icon: SimpleIcon | LucideIcon;
  level?: ToolLevel;
  url?: string;
}

export interface ToolCategory {
  id: string;
  title: string;
  /** One short line under the category title. */
  blurb: string;
  tools: Tool[];
}

export const levelLabels: Record<ToolLevel, string> = {
  "hands-on": "Hands-on experience",
  familiar: "Familiar with",
  learning: "Currently learning",
  exploring: "Exploring",
};

export const toolCategories: ToolCategory[] = [
  {
    id: "ecommerce",
    title: "E-Commerce & Website Management",
    blurb: "Running the online side of the business.",
    tools: [
      { name: "WordPress", icon: siWordpress, level: "hands-on", url: "https://wordpress.org" },
      { name: "WooCommerce", icon: ShoppingCart, level: "hands-on", url: "https://woocommerce.com" },
      { name: "Magento", icon: siMagento, level: "hands-on", url: "https://business.adobe.com/products/magento/magento-commerce.html" },
      { name: "Microsoft Excel", icon: Sheet, level: "hands-on", url: "https://www.microsoft.com/microsoft-365/excel" },
      { name: "SEO & product content", icon: FileSearch, level: "hands-on" },
    ],
  },
  {
    id: "it-support",
    title: "IT Support & Technical Systems",
    blurb: "Keeping workplace technology running.",
    tools: [
      { name: "Windows", icon: Monitor, level: "hands-on", url: "https://www.microsoft.com/windows" },
      { name: "Apple macOS", icon: siApple, url: "https://www.apple.com/macos/" }, // level not yet confirmed
      { name: "Linux", icon: siLinux, url: "https://www.kernel.org" }, // level not yet confirmed
      { name: "Hardware & software troubleshooting", icon: Wrench, level: "hands-on" },
      { name: "Basic networking", icon: Network, level: "hands-on" },
      { name: "CCTV systems", icon: Camera, level: "hands-on" },
      // Level not yet confirmed for the tools below. Add level: "hands-on" (or another) when ready.
      { name: "Microsoft Outlook", icon: Mail, url: "https://www.microsoft.com/microsoft-365/outlook" },
      { name: "Google Workspace", icon: siGoogle, url: "https://workspace.google.com" },
      { name: "Chrome Remote Desktop", icon: MonitorSmartphone, url: "https://remotedesktop.google.com" },
      {
        name: "Windows Disk Management",
        icon: HardDrive,
        url: "https://learn.microsoft.com/windows-server/storage/disk-management/overview-of-disk-management",
      },
      { name: "Rufus", icon: Usb, url: "https://rufus.ie" },
    ],
  },
  {
    id: "business-systems",
    title: "Business Systems & IT Operations",
    blurb: "Systems behind attendance, assets and operations.",
    tools: [
      { name: "Spiceworks", icon: Cpu, level: "hands-on", url: "https://www.spiceworks.com" },
      { name: "ZKTeco BioTime", icon: Fingerprint, level: "hands-on", url: "https://www.zkteco.com" },
      { name: "ZKTeco biometric devices", icon: Fingerprint, level: "hands-on", url: "https://www.zkteco.com" },
      { name: "Odoo", icon: siOdoo, url: "https://www.odoo.com" }, // level not yet confirmed
    ],
  },
  {
    id: "ai",
    title: "AI & Emerging Technologies",
    blurb: "My developing specialisation.",
    tools: [
      // Both AI projects on this site were built with AI assistance.
      { name: "AI-assisted workflows", icon: Sparkles, level: "hands-on" },
      { name: "ChatGPT", icon: siOpenai, url: "https://chatgpt.com" }, // level not yet confirmed
      { name: "Claude", icon: siClaude, url: "https://claude.ai" }, // level not yet confirmed
      { name: "Prompt design", icon: MessageSquareText, level: "learning" },
      { name: "AI solutions & workflow automation", icon: Workflow, level: "learning" },
    ],
  },
  {
    id: "web-dev",
    title: "Web Development & Programming",
    blurb: "Languages and platforms I've used in projects.",
    tools: [
      // Used in the Gmail Order Follow-up Automation project. Change the level as you progress.
      { name: "Google Apps Script", icon: siGoogleappsscript, level: "learning", url: "https://developers.google.com/apps-script" },
      { name: "JavaScript", icon: siJavascript, level: "learning", url: "https://developer.mozilla.org/docs/Web/JavaScript" },
      // Add more only when you've used them, e.g.:
      // { name: "HTML", icon: siHtml5, level: "familiar", url: "https://developer.mozilla.org/docs/Web/HTML" },
      // { name: "Python", icon: siPython, level: "learning", url: "https://www.python.org" },
      // { name: "Git", icon: siGit, level: "learning", url: "https://git-scm.com" },
    ],
  },
];
