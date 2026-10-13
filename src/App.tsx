import { useCallback, useEffect, useState } from "react";
import { About } from "./components/About";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { ToolsSection } from "./components/ToolsSection";
import { Welcome } from "./components/Welcome";
import { prefersReducedMotion } from "./hooks/useInView";

type Screen = "welcome" | "leaving" | "portfolio";

// A link straight to a section (e.g. yoursite.com/#projects) skips the welcome screen.
const initialScreen = (): Screen => (window.location.hash && window.location.hash !== "#welcome" ? "portfolio" : "welcome");

export default function App() {
  const [screen, setScreen] = useState<Screen>(initialScreen);
  const [entered, setEntered] = useState(false);

  const enter = useCallback(() => {
    const go = () => {
      setEntered(true);
      setScreen("portfolio");
      window.scrollTo(0, 0);
    };
    if (prefersReducedMotion()) go();
    else {
      setScreen("leaving");
      setTimeout(go, 520);
    }
  }, []);

  const goHome = useCallback(() => {
    history.replaceState(null, "", window.location.pathname + window.location.search);
    setScreen("welcome");
    window.scrollTo(0, 0);
  }, []);

  // When arriving at the portfolio, move focus to the name for screen readers and keyboards.
  useEffect(() => {
    if (screen !== "portfolio") return;
    const hash = window.location.hash;
    if (hash && !entered) {
      document.querySelector(hash)?.scrollIntoView();
      return;
    }
    document.getElementById("hero-name")?.focus({ preventScroll: true });
  }, [screen, entered]);

  return (
    <>
      <div className="backdrop" aria-hidden="true" />

      {screen !== "portfolio" ? (
        <Welcome leaving={screen === "leaving"} onEnter={enter} />
      ) : (
        <div id="top" className={`relative z-10 ${entered ? "page-enter" : ""}`}>
          <a
            href="#projects"
            className="sr-only z-50 rounded-full bg-ink px-4 py-2 text-navy-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to projects
          </a>
          <Nav onHome={goHome} />
          <main className="mx-auto max-w-page px-4 sm:px-8">
            <Hero />
            <Projects />
            <About />
            <ToolsSection />
            <Experience />
            <Certifications />
            <Contact />
          </main>
          <div className="mx-auto max-w-page px-4 sm:px-8">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
