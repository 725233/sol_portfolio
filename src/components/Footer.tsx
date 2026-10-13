import { ArrowUp } from "lucide-react";
import { site } from "../config/site";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-mono text-[14px] tracking-[0.12em] text-ink">{site.brandMark}</p>
          <p className="mt-1 text-[14px] text-ink-faint">
            © {new Date().getFullYear()} {site.name} · {site.location}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <SocialLinks className="-ml-2.5" placement="top" />
          <a href="#top" className="icon-btn" aria-label="Back to top" title="Back to top">
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
