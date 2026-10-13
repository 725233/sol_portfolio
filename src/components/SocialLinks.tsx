import { Check, Copy, Mail, Phone, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { mailto, site } from "../config/site";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";

type Placement = "bottom" | "top";

interface PromptProps {
  id: string;
  label: string;
  icon: ReactNode;
  title: string;
  value: string;
  actionLabel: string;
  actionHref: string;
  actionIcon: ReactNode;
  placement: Placement;
}

/**
 * Icon button that opens a small prompt: "Call Sol?" / "Email Sol?"
 * with a primary action (tel: / mailto:) and a Copy fallback for devices
 * that have no calling or email app.
 */
function ContactPrompt({ id, label, icon, title, value, actionLabel, actionHref, actionIcon, placement }: PromptProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const wrapRef = useRef<HTMLLIElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const actionRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    actionRef.current?.focus();
    const onDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* Clipboard blocked: the value stays selectable in the prompt. */
    }
  };

  return (
    <li ref={wrapRef}>
      <button
        ref={triggerRef}
        type="button"
        className={`icon-btn ${open ? "bg-accent/15 text-accent" : ""}`}
        aria-label={label}
        title={label}
        aria-expanded={open}
        aria-controls={id}
        aria-haspopup="dialog"
        onClick={() => setOpen((o) => !o)}
      >
        {icon}
      </button>

      {open && (
        <div
          id={id}
          role="dialog"
          aria-label={title}
          className={`glass absolute left-0 z-50 w-[min(290px,calc(100vw-32px))] rounded-2xl !bg-navy-900/95 p-4 ${
            placement === "bottom" ? "top-full mt-2" : "bottom-full mb-2"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <p className="text-[15px] font-medium text-ink">{title}</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="-mr-1 -mt-1 grid h-7 w-7 place-items-center rounded-lg text-ink-faint transition hover:bg-white/10 hover:text-ink"
              aria-label="Close"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <p className="mt-1 select-all break-all font-mono text-[13px] text-ink-soft">{value}</p>

          <div className="mt-4 flex gap-2">
            <a ref={actionRef} href={actionHref} onClick={() => setOpen(false)} className="btn-primary flex-1 !px-3 !py-2.5 text-[14px]">
              {actionIcon}
              {actionLabel}
            </a>
            <button type="button" onClick={copy} className="btn-glass !px-3 !py-2.5 text-[14px]" aria-live="polite">
              {copied ? <Check className="h-4 w-4 text-emerald-300" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

/** LinkedIn, GitHub, phone and email icons. Links left empty in config are hidden. */
export function SocialLinks({ className = "", placement = "bottom" }: { className?: string; placement?: Placement }) {
  const idBase = placement === "top" ? "footer" : "hero";

  return (
    <ul className={`relative flex items-center gap-2 ${className}`}>
      {site.social.linkedin && (
        <li>
          <a className="icon-btn" href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <LinkedInIcon className="h-[22px] w-[22px]" />
          </a>
        </li>
      )}
      {site.social.github && (
        <li>
          <a className="icon-btn" href={site.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
            <GitHubIcon className="h-[22px] w-[22px]" />
          </a>
        </li>
      )}
      {site.contact.phoneDial && (
        <ContactPrompt
          id={`${idBase}-call-prompt`}
          label="Call me"
          icon={<Phone className="h-[21px] w-[21px]" strokeWidth={1.75} aria-hidden="true" />}
          title={`Call ${site.shortName}?`}
          value={site.contact.phoneDisplay}
          actionLabel="Call"
          actionHref={`tel:${site.contact.phoneDial}`}
          actionIcon={<Phone className="h-4 w-4" aria-hidden="true" />}
          placement={placement}
        />
      )}
      {site.contact.email && (
        <ContactPrompt
          id={`${idBase}-email-prompt`}
          label="Email me"
          icon={<Mail className="h-[22px] w-[22px]" strokeWidth={1.75} aria-hidden="true" />}
          title={`Email ${site.shortName}?`}
          value={site.contact.email}
          actionLabel="Write email"
          actionHref={mailto()}
          actionIcon={<Mail className="h-4 w-4" aria-hidden="true" />}
          placement={placement}
        />
      )}
    </ul>
  );
}
