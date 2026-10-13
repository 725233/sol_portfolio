import type { ProjectStatus } from "../config/types";

const styles: Record<ProjectStatus, string> = {
  Exploration: "border-amber-300/40 text-amber-200",
  "In progress": "border-amber-300/40 text-amber-200",
  Working: "border-emerald-300/40 text-emerald-200",
  "Internal tool": "border-emerald-300/40 text-emerald-200",
  "Work experience": "border-white/20 text-ink-soft",
  Live: "border-emerald-300/40 text-emerald-200",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11.5px] leading-none ${styles[status]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {status}
    </span>
  );
}
