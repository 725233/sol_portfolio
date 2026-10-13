import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { site } from "../config/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#tools", label: "Tools" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Nav({ onHome }: { onHome: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        open
          ? "glass !rounded-none !border-x-0 !border-t-0 !bg-navy-950/95"
          : scrolled
            ? "glass !rounded-none !border-x-0 !border-t-0"
            : "border-b border-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-page items-center justify-between px-4 sm:px-8">
        <button
          type="button"
          onClick={onHome}
          className="group flex items-center gap-2 font-mono text-[15px] font-medium tracking-[0.12em] text-ink"
          aria-label={`${site.brandMark}, back to welcome screen`}
          title="Back to welcome"
        >
          {site.brandMark}
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_#7cb8ff] transition group-hover:scale-150" />
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-3.5 py-2 text-[14px] text-ink-soft transition hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-primary hidden !px-4 !py-2 text-[14px] sm:inline-flex">
            Let's connect
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="icon-btn md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100svh-4rem)] overflow-y-auto border-t border-white/10 px-4 pb-10 pt-6 md:hidden"
      >
        <ul className="flex flex-col">
          {links.map((l, i) => (
            <li key={l.href} className="border-b border-white/10">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between py-5 text-2xl font-medium text-ink"
              >
                {l.label}
                <span className="font-mono text-[12px] text-ink-faint">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-8 w-full">
          Let's connect
        </a>
      </div>
    </header>
  );
}
