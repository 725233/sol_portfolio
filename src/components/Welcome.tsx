import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

interface WelcomeProps {
  leaving: boolean;
  onEnter: () => void;
}

/** First screen: a large "Hi." and a button into the portfolio. */
export function Welcome({ leaving, onEnter }: WelcomeProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => buttonRef.current?.focus({ preventScroll: true }), []);

  return (
    <main
      className={`relative z-10 grid min-h-[100svh] place-items-center px-4 text-center transition-all duration-500 ease-out ${
        leaving ? "welcome-leave" : ""
      }`}
      aria-labelledby="welcome-title"
    >
      <div className="flex flex-col items-center gap-10">
        <h1
          id="welcome-title"
          className="hi-text text-[clamp(6rem,26vw,15rem)] font-semibold leading-[0.9] tracking-[-0.05em]"
        >
          Hi.
        </h1>
        <button ref={buttonRef} type="button" onClick={onEnter} className="btn-glass group px-7 py-4 text-base">
          Work with me
          <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </button>
      </div>
    </main>
  );
}
