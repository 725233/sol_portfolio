import { ArrowRight, Check, Copy, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { mailto, site } from "../config/site";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import { Reveal } from "./Reveal";

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* Clipboard blocked: the value is still selectable on screen. */
    }
  };
  return (
    <button type="button" onClick={copy} className="icon-btn relative z-10 h-9 w-9" aria-label={copied ? "Copied" : `Copy ${label}`}>
      {copied ? <Check className="h-4 w-4 text-emerald-300" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
    </button>
  );
}

export function Contact() {
  const rows = [
    { key: "email", label: "Email", value: site.contact.email, href: mailto(), icon: Mail, copy: true, external: false },
    {
      key: "phone",
      label: "Phone",
      value: site.contact.phoneDial ? site.contact.phoneDisplay : "",
      href: `tel:${site.contact.phoneDial}`,
      icon: Phone,
      copy: true,
      external: false,
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      value: site.social.linkedin ? "View profile" : "",
      href: site.social.linkedin,
      icon: LinkedInIcon,
      copy: false,
      external: true,
    },
    {
      key: "github",
      label: "GitHub",
      value: site.social.github ? site.social.github.replace(/^https?:\/\/(www\.)?/, "") : "",
      href: site.social.github,
      icon: GitHubIcon,
      copy: false,
      external: true,
    },
  ].filter((r) => r.value);

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />

          <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <p className="eyebrow mb-4">// contact</p>
              <h2 id="contact-title" className="text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                Have a project in mind? Let's work together.
              </h2>
              <p className="mt-6 max-w-[48ch] leading-relaxed text-ink-soft">
                Open to roles and projects in IT, web, e-commerce and practical AI.
              </p>
              <a href={mailto()} className="btn-primary group mt-9 !px-7 !py-4 text-base">
                Work with me
                <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>

            <ul className="flex flex-col self-end">
              {rows.map((r) => {
                const Icon = r.icon;
                return (
                  <li key={r.key} className="group relative flex items-center gap-4 border-b border-white/10 py-4 last:border-b-0">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/15 text-ink/80 transition group-hover:border-accent/50 group-hover:text-accent">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[12px] text-ink-faint">{r.label}</p>
                      <a
                        href={r.href}
                        className="block truncate text-ink transition after:absolute after:inset-0 after:content-[''] group-hover:text-accent"
                        {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {r.value}
                      </a>
                    </div>
                    {r.copy && <CopyButton value={r.value} label={r.label.toLowerCase()} />}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
