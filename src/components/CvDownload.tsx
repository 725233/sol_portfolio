import { Download, ExternalLink, FileText, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { site } from "../config/site";

/**
 * "Download CV" button that opens a small prompt:
 * file name and size, with Download and Open in new tab.
 */
export function CvDownload() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const downloadRef = useRef<HTMLAnchorElement>(null);
  const fileName = site.cvPath.split("/").pop() ?? "CV.pdf";

  useEffect(() => {
    if (!open) return;
    downloadRef.current?.focus();
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

  return (
    <div ref={wrapRef} className="relative inline-block">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="btn-glass"
        aria-expanded={open}
        aria-controls="cv-prompt"
        aria-haspopup="dialog"
      >
        <Download className="h-4 w-4" aria-hidden="true" />
        Download CV
      </button>

      {open && (
        <div
          id="cv-prompt"
          role="dialog"
          aria-label={`Download ${site.shortName}'s CV`}
          className="glass absolute bottom-full left-0 z-40 mb-2 w-[min(320px,calc(100vw-48px))] rounded-2xl !bg-navy-900/95 p-4"
        >
          <div className="flex items-start justify-between gap-3">
            <p className="text-[15px] font-medium text-ink">Download {site.shortName}'s CV?</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="-mr-1 -mt-1 grid h-7 w-7 place-items-center rounded-lg text-ink-faint transition hover:bg-white/10 hover:text-ink"
              aria-label="Close"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent">
              <FileText className="h-[18px] w-[18px]" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-[13.5px] text-ink">{fileName}</p>
              {site.cvMeta && <p className="font-mono text-[11.5px] text-ink-faint">{site.cvMeta}</p>}
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <a
              ref={downloadRef}
              href={site.cvPath}
              download={fileName}
              onClick={() => setOpen(false)}
              className="btn-primary flex-1 !px-3 !py-2.5 text-[14px]"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download
            </a>
            <a
              href={site.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-glass !px-3 !py-2.5 text-[14px]"
              aria-label="Open CV in a new tab"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Open
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
