import { useEffect, useRef } from "react";

export default function Hero({
  bgImage = "/assets/hero-bg.jpg",
  kicker = "Welcome to",
  title = (
    <>
      The <span>Internet of People</span> platform for entertainment, film
      &amp; beyond
    </>
  ),
  description = "Unruffled Feathers Enterprises is a fully technology-enabled platform solving the business needs of the entertainment, film, theater, tourism and aviation industries — from casting to strategic staffing and data-driven consulting.",
  primaryCta = { href: "#contact", label: "Get in touch" },
  secondaryCta = { href: "#about", label: "Discover more" },
  stats = [
    { value: "2019", label: "Founded" },
    { value: "5+", label: "Industries served" },
    { value: "60+", label: "Yrs combined leadership" },
  ],
}) {
  const copyRef = useRef(null);
  const bgImgRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const fade = Math.max(0, 1 - y / 500);
      const tilt = Math.min(y * 0.02, 10);

      if (copyRef.current) {
        copyRef.current.style.transform = `perspective(1200px) translateY(${y * 0.15}px) rotateX(${tilt * 0.35}deg)`;
        copyRef.current.style.opacity = fade;
      }

      if (bgImgRef.current) {
        const scale = 1 + Math.min(y * 0.00025, 0.12);
        bgImgRef.current.style.transform = `scale(${scale}) translateY(${y * 0.08}px) rotateX(${tilt}deg)`;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <img ref={bgImgRef} src={bgImage} alt="" />
      </div>

      <div className="container">
        <div className="hero-copy" ref={copyRef}>
          <span className="hero-kicker">{kicker}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="hero-actions">
            <a href={primaryCta.href} className="btn btn-primary">
              {primaryCta.label}
            </a>
            <a href={secondaryCta.href} className="btn btn-ghost">
              {secondaryCta.label}
            </a>
          </div>

          <div className="hero-stats">
            {stats.map((s) => (
              <div className="hero-stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a href={secondaryCta.href} className="scroll-cue">
        <span>Scroll</span>
        <span className="line" />
      </a>
    </section>
  );
}
