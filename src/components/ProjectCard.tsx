import { ArrowUpRight, Sparkles } from "lucide-react";
import type { Project } from "../config/types";
import { ProjectVisual } from "./ProjectVisual";
import { StatusBadge } from "./StatusBadge";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const featured = project.featured;
  const isAi = project.category === "ai";

  return (
    <article
      className={`group glass relative flex h-full overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_44px_rgba(0,4,20,0.5),0_0_32px_rgba(90,160,255,0.18)] ${
        featured ? "flex-col md:flex-row" : "flex-col"
      }`}
    >
      <div className={`relative shrink-0 overflow-hidden ${featured ? "aspect-[16/10] md:aspect-auto md:w-[46%]" : "aspect-[16/9]"}`}>
        <ProjectVisual project={project} large={featured || isAi} />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-4 p-6 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-[12px] text-ink-faint">{String(index + 1).padStart(2, "0")}</span>
          <div className="flex flex-wrap gap-2">
            {project.aiAssisted && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/35 px-2.5 py-1 font-mono text-[11.5px] leading-none text-accent">
                <Sparkles className="h-3 w-3" aria-hidden="true" />
                AI-assisted build
              </span>
            )}
            {project.badge && (
              <span className="inline-flex items-center rounded-full border border-white/20 px-2.5 py-1 font-mono text-[11.5px] leading-none text-ink-soft">
                {project.badge}
              </span>
            )}
            {project.status && <StatusBadge status={project.status} />}
          </div>
        </div>

        {isAi ? (
          <>
            <h3 className="text-xl font-medium leading-tight tracking-[-0.01em] text-ink sm:text-[1.4rem]">{project.title}</h3>
            <p className="leading-relaxed text-ink-soft">{project.summary}</p>
          </>
        ) : (
          <>
            <h3 className="text-[15px] font-medium text-ink-soft">{project.title}</h3>
            <p className="flex gap-2.5 text-xl font-light leading-snug tracking-[-0.01em] text-ink">
              <span className="text-accent" aria-hidden="true">→</span>
              <span>
                <span className="sr-only">Result: </span>
                {project.result}
              </span>
            </p>
          </>
        )}

        <ul className="flex flex-wrap gap-2" aria-label="Tags">
          {project.tags.map((t) => (
            <li key={t} className="tag">{t}</li>
          ))}
        </ul>

        <div className="mt-auto pt-2">
          {/* The ::after makes the whole card clickable while keeping one real button */}
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1.5 font-mono text-[13px] text-accent after:absolute after:inset-0 after:content-['']"
            aria-haspopup="dialog"
            aria-label={`${project.ctaLabel ?? "View project"}: ${project.title}`}
          >
            {project.ctaLabel ?? "View project"}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}
