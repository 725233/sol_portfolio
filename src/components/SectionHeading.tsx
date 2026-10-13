import type { CSSProperties } from "react";
import { useInView } from "../hooks/useInView";

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  /** Letters fade in and rise one after another when the heading enters the screen. */
  animateLetters?: boolean;
  aside?: string;
}

export function SectionHeading({ id, eyebrow, title, animateLetters = false, aside }: SectionHeadingProps) {
  const { ref, inView } = useInView<HTMLHeadingElement>(0.4);

  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-14">
      <div>
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2
          id={id}
          ref={ref}
          aria-label={animateLetters ? title : undefined}
          className={`text-[2.4rem] font-semibold leading-none tracking-[-0.03em] sm:text-6xl ${
            animateLetters ? `letters ${inView ? "is-in" : ""}` : ""
          }`}
        >
          {animateLetters
            ? title.split("").map((ch, i) => (
                <span key={i} className="ch" aria-hidden="true" style={{ "--i": i } as CSSProperties}>
                  {ch === " " ? " " : ch}
                </span>
              ))
            : title}
        </h2>
      </div>
      {aside && <p className="font-mono text-[13px] text-ink-faint">{aside}</p>}
    </div>
  );
}
