import { useEffect, useState } from "react";

const HOLD_MS = 3600;
const EXIT_MS = 950;

const REDUCED_HOLD_MS = 250;
const REDUCED_EXIT_MS = 250;

export default function Preloader() {
  const [leaving, setLeaving] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const holdMs = prefersReduced ? REDUCED_HOLD_MS : HOLD_MS;
    const exitMs = prefersReduced ? REDUCED_EXIT_MS : EXIT_MS;

    document.body.style.overflow = "hidden";

    const leaveTimer = setTimeout(() => setLeaving(true), holdMs);
    const unmountTimer = setTimeout(() => {
      setMounted(false);
      document.body.style.overflow = "";
    }, holdMs + exitMs);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(unmountTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className={`preloader ${leaving ? "leaving" : ""}`}>
      <span className="preloader-word">Unruffled Feathers</span>
      <span className="preloader-divider" />
      <span className="preloader-tag">Internet of People Platform</span>
    </div>
  );
}
