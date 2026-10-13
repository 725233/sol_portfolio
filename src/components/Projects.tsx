import { ArrowUpRight, FlaskConical } from "lucide-react";
import { useState } from "react";
import { aiLab, projects } from "../config/projects";
import type { Project } from "../config/types";
import { ProjectCard } from "./ProjectCard";
import { ProjectDialog } from "./ProjectDialog";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function GroupHeading({ id, title, note }: { id: string; title: string; note: string }) {
  return (
    <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 border-b border-white/10 pb-4">
      <h3 id={id} className="text-xl font-medium tracking-[-0.01em] sm:text-2xl">{title}</h3>
      <p className="font-mono text-[12px] text-ink-faint">{note}</p>
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const ai = projects.filter((p) => p.category === "ai");
  const work = projects.filter((p) => p.category === "experience");

  return (
    <section id="projects" aria-labelledby="projects-title" className="py-20 sm:py-28">
      <SectionHeading
        id="projects-title"
        eyebrow="// selected work"
        title="Projects"
        animateLetters
        aside={`${projects.length} case studies`}
      />

      {/* ── AI projects ── */}
      <div role="group" aria-labelledby="ai-projects-title">
        <GroupHeading id="ai-projects-title" title="AI projects" note="built with AI assistance" />
        <div className="grid gap-5 md:grid-cols-2">
          {ai.map((p, i) => (
            <Reveal key={p.id} className={`h-full ${p.featured ? "md:col-span-2" : ""}`} delay={(i % 2) * 90}>
              <ProjectCard project={p} index={i} onOpen={setActive} />
            </Reveal>
          ))}
        </div>

        {/* AI lab: small experiments */}
        <Reveal className="mt-5">
          <div className="rounded-2xl border border-dashed border-accent/30 p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                  <FlaskConical className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-medium">AI lab</p>
                  <p className="text-[0.95rem] text-ink-soft">
                    {aiLab.length ? "Smaller experiments with AI and automation." : "More AI experiments on the way."}
                  </p>
                </div>
              </div>
              {aiLab.length === 0 && <span className="font-mono text-[12px] text-ink-faint">coming soon</span>}
            </div>

            {aiLab.length > 0 && (
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {aiLab.map((d) => (
                  <li key={d.title}>
                    <a
                      href={d.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass flex h-full flex-col gap-1 rounded-xl p-4 transition hover:border-accent/40"
                    >
                      <span className="flex items-center justify-between font-medium">
                        {d.title}
                        <ArrowUpRight className="h-4 w-4 text-accent" aria-hidden="true" />
                      </span>
                      <span className="text-[0.95rem] text-ink-soft">{d.description}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      </div>

      {/* ── Work experience projects ── */}
      <div role="group" aria-labelledby="work-projects-title" className="mt-16 sm:mt-20">
        <GroupHeading id="work-projects-title" title="Work experience" note="IT, web and e-commerce" />
        <div className="grid gap-5 md:grid-cols-2">
          {work.map((p, i) => (
            <Reveal key={p.id} className={`h-full ${p.featured ? "md:col-span-2" : ""}`} delay={(i % 2) * 90}>
              <ProjectCard project={p} index={ai.length + i} onOpen={setActive} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectDialog project={active} onClose={() => setActive(null)} />
    </section>
  );
}
