import { ClipboardList, Code2, FileText, Fingerprint, Layers, MailCheck, ShoppingCart, Workflow, Wrench, type LucideIcon } from "lucide-react";
import type { Project } from "../config/types";
import { QuotationMockup } from "./QuotationMockup";

export const icons: Record<string, LucideIcon> = {
  "order-tracking-system": ClipboardList,
  "gmail-order-followup": MailCheck,
  "quotation-machine": FileText,
  "ai-workflow-automation": Workflow,
  "ecommerce-platform-management": ShoppingCart,
  "personal-portfolio": Code2,
  "biometric-attendance": Fingerprint,
  "it-support": Wrench,
};

/**
 * Screenshot area. Shows the real image when `project.image` is set,
 * otherwise a quiet illustrated placeholder (no stock photos).
 */
export function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  if (project.mockup === "quotation") return <QuotationMockup />;
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.imageAlt ?? `Screenshot of ${project.title}`}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-top"
      />
    );
  }

  const Icon = icons[project.id] ?? Layers;
  return (
    <div className="relative grid h-full w-full place-items-center overflow-hidden bg-[linear-gradient(140deg,rgba(18,48,107,0.55),rgba(5,11,26,0.6))]">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,184,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(124,184,255,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute h-40 w-40 rounded-full bg-accent/20 blur-3xl transition-transform duration-500 group-hover:scale-125"
        aria-hidden="true"
      />
      <Icon
        className={`relative text-accent transition-transform duration-500 group-hover:scale-110 ${large ? "h-14 w-14" : "h-10 w-10"}`}
        strokeWidth={1.25}
        aria-hidden="true"
      />    </div>
  );
}
