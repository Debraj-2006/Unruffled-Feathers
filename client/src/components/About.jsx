import { useEffect, useRef } from "react";
import Reveal from "./Reveal.jsx";

const FOCUS_AREAS = [
  "Casting and production assistance for TV, movies, advertising, etc.",
  "Strategic consulting services for projects",
  "Employee engagement via creative activities",
  "Strategic staffing",
  "Analytics and data-driven software solutions for the industry",
];

export default function About() {
  const visualRef = useRef(null);
  const tiltRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const node = visualRef.current;
    const tilt = tiltRef.current;
    if (!node || !tilt) return;

    const onMove = (e) => {
      const rect = node.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - py) * 16;
      const ry = (px - 0.5) * 18;
      tilt.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    };

    const onLeave = () => {
      tilt.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    node.addEventListener("mousemove", onMove);
    node.addEventListener("mouseleave", onLeave);
    return () => {
      node.removeEventListener("mousemove", onMove);
      node.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section id="about" className="section section-alt">
      <div className="container about-grid">
        <div className="about-visual" ref={visualRef}>
          <Reveal variant="left" className="about-frame">
            <div className="about-tilt" ref={tiltRef}>
              <div className="about-logo-card">
                <img src="/assets/logo.jpeg" alt="Unruffled Feathers" />
              </div>
            </div>
            <div className="about-badge">
              <strong>2019</strong>
              <span>Est.</span>
            </div>
          </Reveal>
        </div>

        <Reveal variant="right" delay={120} className="about-copy">
          <span className="eyebrow">About Us</span>
          <h2 className="section-title">
            A technology-enabled <em>Internet of People</em> platform
          </h2>
          <p>
            Founded in May 2019, Unruffled Feathers Enterprises Private
            Limited is a fully technology-enabled Internet of People platform
            providing and solving the business needs of the entertainment,
            film, theater, tourism and the aviation industry.
          </p>
          <p>Our solutions target:</p>

          <ul className="about-list">
            {FOCUS_AREAS.map((item) => (
              <li key={item}>
                <span className="dot" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
