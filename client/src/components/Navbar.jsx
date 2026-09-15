import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ links, switchLink, cta, homeTo = "/" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [links]);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Link to={homeTo} className="brand">
          <img src="/assets/logo-mark.jpeg" alt="Unruffled Feathers" />
          <span className="brand-text">Unruffled Feathers</span>
        </Link>

        <div className="nav-right">
          <nav className={`nav-links ${open ? "open" : ""}`}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={active === link.href ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {switchLink && (
              <Link to={switchLink.to} onClick={() => setOpen(false)}>
                {switchLink.label}
              </Link>
            )}
            {cta && (
              <a href={cta.href} className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
                {cta.label}
              </a>
            )}
          </nav>

          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
