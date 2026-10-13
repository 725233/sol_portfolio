import { ArrowDown } from "lucide-react";
import { site } from "../config/site";
import { SocialLinks } from "./SocialLinks";
import { SystemMap } from "./SystemMap";

export function Hero() {
  return (
    <section aria-labelledby="hero-name" className="relative pb-20 pt-28 sm:pb-28 sm:pt-36">
      <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-10">
        <div className="min-w-0">
          <p className="eyebrow mb-5 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>{site.title}</span>
            <span className="text-ink-faint" aria-hidden="true">/</span>
            <span className="text-ink-faint">{site.location}</span>
          </p>

          <h1 id="hero-name" tabIndex={-1} className="text-[clamp(2.5rem,7vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            {site.name}
          </h1>

          <SocialLinks className="-ml-2.5 mt-4" />

          <p className="mt-6 max-w-[30ch] text-[clamp(1.25rem,2.4vw,1.6rem)] font-light leading-snug text-ink">
            {site.hero.headline}
          </p>

          <div className="mt-6 max-w-[60ch] space-y-4 text-[1.03rem] leading-relaxed text-ink-soft">
            {site.hero.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary group">
              Explore my work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-glass">
              Let's connect
            </a>
          </div>

          <dl className="mt-10 grid max-w-[560px] grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {site.hero.proof.map((p) => (
              <div key={p.label} className="min-w-0">
                <dt className="sr-only">{p.label}</dt>
                <dd className="text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">{p.value}</dd>
                <dd className="mt-1 text-[13px] leading-snug text-ink-faint">{p.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="min-w-0">
          <SystemMap />
        </div>
      </div>
    </section>
  );
}
