import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ links, switchLink, switchLinks, cta, homeTo = "/" }) {
  const switches = switchLinks || (switchLink ? [switchLink] : []);
  const navigate = useNavigate();
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

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
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
              {switches.length > 0 && (
                <select
                  className="nav-venture-select"
                  aria-label="Choose a venture"
                  defaultValue=""
                  onChange={(e) => {
                    const to = e.target.value;
                    setOpen(false);
                    if (to) navigate(to);
                  }}
                >
                  <option value="" disabled>
                    Other Ventures
                  </option>
                  {switches.map((link) => (
                    <option key={link.to} value={link.to}>
                      {link.label}
                    </option>
                  ))}
                </select>
              )}
              {cta && (
                <a href={cta.href} className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
                  {cta.label}
                </a>
              )}
            </nav>

            <button
              className={`nav-toggle ${open ? "open" : ""}`}
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <div className={`nav-backdrop ${open ? "open" : ""}`} onClick={() => setOpen(false)} />
    </>
  );
}
