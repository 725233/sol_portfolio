import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";
import type { Screenshot } from "../config/types";

/** Click-through slide walkthrough: main slide, previous/next, and a thumbnail strip. */
export function SlideViewer({ slides, label }: { slides: Screenshot[]; label: string }) {
  const [index, setIndex] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const count = slides.length;
  const current = slides[index];

  const go = (next: number) => {
    const i = (next + count) % count;
    setIndex(i);
    const thumb = thumbsRef.current?.children[i] as HTMLElement | undefined;
    thumb?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  };

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="slide viewer"
      aria-label={label}
      tabIndex={0}
      onKeyDown={onKey}
      className="rounded-xl focus-visible:outline-offset-4"
    >
      <figure className="relative overflow-hidden rounded-xl border border-white/15 bg-navy-950">
        <img
          key={current.src}
          src={current.src}
          alt={`Slide ${index + 1} of ${count}: ${current.caption}`}
          className="aspect-video w-full object-contain"
          decoding="async"
        />
        <button
          type="button"
          onClick={() => go(index - 1)}
          className="icon-btn absolute left-2 top-1/2 h-9 w-9 -translate-y-1/2 bg-navy-950/80 hover:!-translate-y-1/2 hover:!bg-navy-950/95"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          className="icon-btn absolute right-2 top-1/2 h-9 w-9 -translate-y-1/2 bg-navy-950/80 hover:!-translate-y-1/2 hover:!bg-navy-950/95"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </figure>

      <div className="mt-3 flex items-baseline justify-between gap-3">
        <p className="min-w-0 truncate text-[14px] text-ink" aria-live="polite">
          {current.caption}
        </p>
        <p className="shrink-0 font-mono text-[12px] tabular-nums text-ink-faint">
          {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </p>
      </div>

      <div ref={thumbsRef} className="mt-3 flex gap-2 overflow-x-auto pb-2" aria-label="All slides">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}: ${s.caption}`}
            aria-current={i === index ? "true" : undefined}
            className={`shrink-0 overflow-hidden rounded-md border transition ${
              i === index ? "border-accent shadow-[0_0_12px_rgba(90,160,255,0.35)]" : "border-white/10 opacity-60 hover:opacity-100"
            }`}
          >
            <img src={s.src} alt="" loading="lazy" decoding="async" className="aspect-video w-24 object-cover sm:w-28" />
          </button>
        ))}
      </div>
    </div>
  );
}
