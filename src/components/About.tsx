import { education, experience } from "../config/experience";
import { site } from "../config/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const [lead, ...rest] = site.about;
  const facts = [
    { k: "based in", v: site.location },
    { k: "studied", v: `${education[0]?.qualification.replace("Bachelor of Science in ", "BSc ")}, ${education[0]?.institution}` },
    { k: "currently", v: experience[0]?.organisation.split(" / ")[0] },
    { k: "focus", v: "AI solutions, automation, intelligent applications" },
  ].filter((f) => f.v);

  return (
    <section id="about" aria-labelledby="about-title" className="py-20 sm:py-28">
      <SectionHeading id="about-title" eyebrow="// about me" title="About" />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal>
          <p className="text-[clamp(1.4rem,2.6vw,2rem)] font-light leading-snug tracking-[-0.01em] text-ink">
            {lead}
          </p>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.k} className="bg-navy-950/80 p-5">
                <dt className="eyebrow mb-1.5">{f.k}</dt>
                <dd className="leading-snug text-ink">{f.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={100} className="space-y-5 text-[1.03rem] leading-relaxed text-ink-soft lg:pt-2">
          {rest.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
