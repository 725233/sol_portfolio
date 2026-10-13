import { Mail } from "lucide-react";
import type { ReactNode } from "react";
import { CvDownload } from "./CvDownload";
import { education, experience } from "../config/experience";
import { mailto, site } from "../config/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function TimelineItem({ label, title, org, meta, children }: {
  label: string;
  title: string;
  org: string;
  meta: string;
  children: ReactNode;
}) {
  return (
    <li className="relative pl-8 sm:pl-10">
      <span className="absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border border-accent/60 bg-navy-950" aria-hidden="true">
        <span className="h-[5px] w-[5px] rounded-full bg-accent" />
      </span>
      <p className="eyebrow mb-2">{label}</p>
      <h3 className="text-xl font-medium leading-snug sm:text-2xl">{title}</h3>
      <p className="mt-1 text-ink">{org}</p>
      <p className="mt-1 font-mono text-[13px] text-ink-faint">{meta}</p>
      <div className="mt-5">{children}</div>
    </li>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-20 sm:py-28">
      <SectionHeading id="experience-title" eyebrow="// experience & education" title="Experience" />

      <Reveal>
        <ol className="relative space-y-14 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-gradient-to-b before:from-accent/50 before:via-white/15 before:to-transparent">
          {experience.map((e) => (
            <TimelineItem key={e.role} label="work" title={e.role} org={e.organisation} meta={`${e.dates} · ${e.location}`}>
              <ul className="max-w-[68ch] space-y-2.5 text-ink-soft">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3 leading-relaxed">
                    <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-ink-faint" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </TimelineItem>
          ))}

          {education.map((ed) => (
            <TimelineItem
              key={ed.qualification}
              label="education"
              title={ed.qualification}
              org={ed.institution}
              meta={[ed.dates, ed.location].filter(Boolean).join(" · ")}
            >
              <p className="max-w-[68ch] leading-relaxed text-ink-soft">{ed.description}</p>
            </TimelineItem>
          ))}
        </ol>
      </Reveal>

      <Reveal className="mt-14 pl-8 sm:pl-10">
        {site.cvPath ? (
          <CvDownload />
        ) : (
          <a href={mailto(`CV request – ${site.name}`)} className="btn-glass">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Request my CV
          </a>
        )}
      </Reveal>
    </section>
  );
}
