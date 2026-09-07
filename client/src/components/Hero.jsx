import { useEffect, useRef } from "react";

export default function Hero() {
  const copyRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const fade = Math.max(0, 1 - y / 500);
      if (copyRef.current) {
        copyRef.current.style.transform = `translateY(${y * 0.15}px)`;
        copyRef.current.style.opacity = fade;
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

  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <img src="/assets/hero-bg.jpg" alt="" />
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
      </div>

      <a href="#about" className="scroll-cue">
        <span>Scroll</span>
        <span className="line" />
      </a>
    </section>
  );
}
