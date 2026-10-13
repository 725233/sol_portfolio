import { BadgeCheck, FileText } from "lucide-react";
import { certifications } from "../config/certifications";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section id="certifications" aria-labelledby="certifications-title" className="py-20 sm:py-28">
      <SectionHeading
        id="certifications-title"
        eyebrow="// certifications"
        title="Certifications"
        aside={`${certifications.length} completed`}
      />

      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <li key={c.title} className="min-w-0">
            <Reveal delay={i * 80} className="h-full">
              <article className="group glass flex h-full flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_44px_rgba(0,4,20,0.5),0_0_32px_rgba(90,160,255,0.18)]">
                <a
                  href={c.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block overflow-hidden border-b border-white/10 bg-white"
                  aria-label={`View certificate: ${c.title} (opens in a new tab)`}
                >
                  <img
                    src={c.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" aria-hidden="true" />
                </a>

                <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11.5px] text-accent">
                      <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      {c.type}
                    </span>
                    {c.date && <span className="font-mono text-[12px] tabular-nums text-ink-faint">{c.date}</span>}
                  </div>

                  <h3 className="text-[1.08rem] font-medium leading-snug text-ink">{c.title}</h3>
                  <p className="text-[14px] leading-snug text-ink-soft">
                    {c.issuer}
                    {c.via && <span className="text-ink-faint"> · {c.via}</span>}
                  </p>

                  <ul className="flex flex-wrap gap-1.5" aria-label="Topics">
                    {c.topics.map((t) => (
                      <li key={t} className="tag">{t}</li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-3">
                    <a
                      href={c.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[13px] text-accent transition hover:text-ink"
                    >
                      <FileText className="h-4 w-4" aria-hidden="true" />
                      View certificate
                    </a>
                    {c.verifyUrl && (
                      <a
                        href={c.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[13px] text-ink-soft transition hover:text-accent"
                      >
                        <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                        Verify
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
