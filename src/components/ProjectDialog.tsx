import { ExternalLink, Sparkles, X } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";
import type { Project } from "../config/types";
import { ProjectVisual } from "./ProjectVisual";
import { SlideViewer } from "./SlideViewer";
import { StatusBadge } from "./StatusBadge";

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
}

function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="grid gap-2 border-t border-white/10 pt-6 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-6">
      <h4 className="eyebrow">{label}</h4>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-ink-soft">
      {items.map((r) => {
        const placeholder = r.startsWith("[") && r.endsWith("]");
        return (
          <li key={r} className="flex gap-3 leading-relaxed">
            <span className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {placeholder ? <span className="border-b border-dashed border-accent/60 text-ink-faint">{r}</span> : r}
          </li>
        );
      })}
    </ul>
  );
}

/** Full case study, using the native <dialog> for focus trapping and Esc to close. */
export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) {
      dialog.showModal();
      dialog.scrollTop = 0;
      document.body.style.overflow = "hidden";
    }
    if (!project && dialog.open) dialog.close();
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  const links = project
    ? [
        { label: "Live demo", url: project.links.demo },
        { label: "GitHub repository", url: project.links.repo },
        { label: "More screenshots", url: project.links.screenshots },
      ].filter((l) => l.url)
    : [];

  const cs = project?.caseStudy;
  const tools = cs?.tools ?? [];

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      aria-labelledby="case-title"
      className="m-auto max-h-[min(90svh,900px)] w-[min(800px,calc(100vw-24px))] overflow-y-auto rounded-2xl border border-white/15 bg-navy-900/95 p-0 text-ink shadow-[0_30px_80px_rgba(0,0,0,0.6)] backdrop:bg-transparent"
    >
      {project && cs && (
        <article>
          <div className={`relative overflow-hidden ${project.mockup ? "aspect-[16/11] sm:aspect-[16/8]" : "aspect-[16/7]"}`}>
            <ProjectVisual project={project} large />
            <button
              type="button"
              onClick={onClose}
              className="icon-btn absolute right-3 top-3 bg-navy-950/60 hover:!translate-y-0"
              aria-label="Close case study"
              autoFocus
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="space-y-7 p-6 sm:p-9">
            <header className="space-y-3">
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
              <h3 id="case-title" className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                {project.title}
              </h3>
              <p className="text-lg font-light leading-snug text-ink">{project.summary}</p>
            </header>

            {cs.context && (
              <Section label="context">
                <p className="leading-relaxed text-ink-soft">{cs.context}</p>
              </Section>
            )}

            {cs.purpose && (
              <Section label="purpose">
                <p className="leading-relaxed text-ink-soft">{cs.purpose}</p>
              </Section>
            )}

            {cs.problem && (
              <Section label="problem">
                <p className="leading-relaxed text-ink-soft">{cs.problem}</p>
              </Section>
            )}

            {cs.role && cs.role.length > 0 && (
              <Section label="my contribution">
                {cs.role.length === 1 ? <p className="leading-relaxed text-ink-soft">{cs.role[0]}</p> : <Bullets items={cs.role} />}
              </Section>
            )}

            {cs.approach && (
              <Section label="approach">
                <p className="leading-relaxed text-ink-soft">{cs.approach}</p>
              </Section>
            )}

            {cs.features && cs.features.length > 0 && (
              <Section label={cs.featuresLabel ?? "features"}>
                <ul className="grid gap-x-6 gap-y-2.5 text-ink-soft sm:grid-cols-2">
                  {cs.features.map((f) => (
                    <li key={f} className="flex gap-3 text-[0.97rem] leading-snug">
                      <span className="mt-[0.5em] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {tools.length > 0 && (
              <Section label="tools">
                <ul className="flex flex-wrap gap-2">
                  {tools.map((t) => (
                    <li key={t} className="tag">{t}</li>
                  ))}
                </ul>
              </Section>
            )}

            {(cs.outcome || project.result) && (
              <Section label="outcome">
                <p className="flex gap-2.5 text-lg font-light leading-snug text-ink">
                  <span className="text-accent" aria-hidden="true">→</span>
                  <span>{cs.outcome ?? project.result}</span>
                </p>
              </Section>
            )}

            {cs.walkthrough && cs.walkthrough.slides.length > 0 && (
              <section className="space-y-4 border-t border-white/10 pt-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="eyebrow">{cs.walkthrough.title.toLowerCase()}</h4>
                  <span className="hidden font-mono text-[11.5px] text-ink-faint sm:inline">use ← → keys or the arrows</span>
                </div>
                <SlideViewer slides={cs.walkthrough.slides} label={`${project.title}: ${cs.walkthrough.title}`} />
                {cs.walkthrough.note && <p className="text-[13px] text-ink-faint">{cs.walkthrough.note}</p>}
              </section>
            )}

            {/* Screenshots with an empty src are skipped; the section appears once one is added. */}
            {cs.screenshots && cs.screenshots.some((s) => s.src) && (
              <Section label="screenshots">
                <div className="grid gap-4 sm:grid-cols-2">
                  {cs.screenshots
                    .filter((s) => s.src)
                    .map((s) => (
                      <figure key={s.caption} className="min-w-0">
                        <img
                          src={s.src}
                          alt={s.caption}
                          loading="lazy"
                          decoding="async"
                          className="aspect-[16/10] w-full rounded-xl border border-white/10 object-cover"
                        />
                        <figcaption className="mt-2 text-[13px] text-ink-faint">{s.caption}</figcaption>
                      </figure>
                    ))}
                </div>
              </Section>
            )}

            {cs.note && (
              <p className="rounded-xl border border-dashed border-accent/35 bg-accent/5 p-4 text-[0.95rem] leading-relaxed text-ink-soft">
                {cs.note}
              </p>
            )}

            {links.length > 0 && (
              <div className="flex flex-wrap gap-3 border-t border-white/10 pt-6">
                {links.map((l) => (
                  <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className="btn-glass !py-2.5 text-[14px]">
                    {l.label}
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </article>
      )}
    </dialog>
  );
}
