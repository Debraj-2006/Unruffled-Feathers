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
      <span className="preloader-particle p1" />
      <span className="preloader-particle p2" />
      <span className="preloader-particle p3" />
      <span className="preloader-particle p4" />

      <div className="preloader-mark">
        <span className="preloader-dashring" />
        <svg className="preloader-ring-svg" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="56"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            pathLength="100"
            className="preloader-ring-track"
          />
          <circle
            cx="60"
            cy="60"
            r="56"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            pathLength="100"
            className="preloader-ring-draw"
          />
        </svg>
        <span className="preloader-logo">
          <img src="/assets/logo-mark.jpeg" alt="" />
        </span>
      </div>

      <span className="preloader-divider" />
      <span className="preloader-word">Unruffled Feathers</span>
      <span className="preloader-tag">Internet of People Platform</span>
    </div>
  );
}
