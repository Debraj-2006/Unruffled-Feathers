import { useEffect, useRef } from "react";
import FeatherIcon from "./FeatherIcon.jsx";

const FEATHERS = [
  { top: "8%", left: "5%", size: 64, depth: 0.5, rotate: -20, duration: 9, delay: -2 },
  { top: "80%", left: "9%", size: 42, depth: 0.85, rotate: 14, duration: 7, delay: -4 },
  { top: "11%", left: "84%", size: 86, depth: 0.35, rotate: 24, duration: 11, delay: -1, front: true },
  { top: "50%", left: "93%", size: 50, depth: 0.75, rotate: -10, duration: 8, delay: -5 },
  { top: "84%", left: "68%", size: 38, depth: 1, rotate: 30, duration: 6.5, delay: -3, front: true },
  { top: "4%", left: "58%", size: 32, depth: 0.9, rotate: -6, duration: 10, delay: -6 },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const copyRef = useRef(null);
  const visualRef = useRef(null);
  const glowRef = useRef(null);
  const feathersRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const fade = Math.max(0, 1 - y / 500);
      if (copyRef.current) {
        copyRef.current.style.transform = `translateY(${y * 0.25}px)`;
        copyRef.current.style.opacity = fade;
      }
      if (visualRef.current) {
        visualRef.current.style.transform = `translateY(${y * 0.12}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translateY(${y * 0.35}px) scale(${1 + y * 0.0004})`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const section = sectionRef.current;
    const feathers = feathersRef.current;
    if (!section || !feathers) return;

    const onMove = (e) => {
      const rect = section.getBoundingClientRect();
      const mx = (e.clientX - rect.left) / rect.width - 0.5;
      const my = (e.clientY - rect.top) / rect.height - 0.5;
      feathers.style.setProperty("--mx", mx * 60);
      feathers.style.setProperty("--my", my * 60);
    };

    const onLeave = () => {
      feathers.style.setProperty("--mx", 0);
      feathers.style.setProperty("--my", 0);
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section id="top" className="hero" ref={sectionRef}>
      <div className="hero-glow" ref={glowRef} />

      <div className="hero-feathers" ref={feathersRef}>
        {FEATHERS.map((f, i) => (
          <div
            key={i}
            className={`feather ${f.front ? "feather-front" : ""}`}
            style={{ top: f.top, left: f.left, width: f.size, "--depth": f.depth }}
          >
            <div className="feather-rotate" style={{ transform: `rotate(${f.rotate}deg)` }}>
              <div
                className="feather-float"
                style={{ animationDuration: `${f.duration}s`, animationDelay: `${f.delay}s` }}
              >
                <FeatherIcon className="feather-svg" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container">
        <div className="hero-copy" ref={copyRef}>
          <span className="hero-kicker">Welcome to</span>
          <h1>
            The <span>Internet of People</span> platform for entertainment,
            film &amp; beyond
          </h1>
          <p>
            Unruffled Feathers Enterprises is a fully technology-enabled
            platform solving the business needs of the entertainment, film,
            theater, tourism and aviation industries — from casting to
            strategic staffing and data-driven consulting.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            <a href="#about" className="btn btn-ghost">
              Discover more
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>2019</strong>
              <span>Founded</span>
            </div>
            <div className="hero-stat">
              <strong>5+</strong>
              <span>Industries served</span>
            </div>
            <div className="hero-stat">
              <strong>60+</strong>
              <span>Yrs combined leadership</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" ref={visualRef}>
          <div className="hero-ring">
            <div className="hero-card-depth">
              <div className="hero-logo-card">
                <img src="/assets/logo.jpeg" alt="Unruffled Feathers logo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue">
        <span>Scroll</span>
        <span className="line" />
      </a>
    </section>
  );
}
