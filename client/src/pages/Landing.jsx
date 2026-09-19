import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";

function IconGraduate() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 4L2 9l10 5 10-5-10-5z" strokeLinejoin="round" />
      <path d="M6 11.5V17c0 1.4 2.7 3 6 3s6-1.6 6-3v-5.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 9v6" strokeLinecap="round" />
    </svg>
  );
}

function IconConsulting() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="7" width="18" height="13" rx="2" strokeLinejoin="round" />
      <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 12h18M11 12v2.4h2V12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconFilm() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 8l2.2-4h3l-2.2 4M10.5 8l2.2-4h3l-2.2 4M17 8l2.2-4h1.8a1 1 0 0 1 1 1v3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3" y="8" width="18" height="13" rx="2" strokeLinejoin="round" />
      <path d="M3 13h18" strokeLinecap="round" />
    </svg>
  );
}

const VENTURES = [
  {
    to: "/consulting",
    key: "consulting",
    label: "Consulting",
    eyebrow: "AI, Data & Digital",
    desc: "Our core service — calm, considered AI, data, software and agentic-AI consulting, plus specialist practices for hotels, coffee, foods, aviation and automobiles.",
    icon: IconConsulting,
    bg: "/assets/program-ml-data-engineering.jpg",
  },
  {
    to: "/education",
    key: "education",
    label: "Education",
    eyebrow: "Teach Data India",
    desc: "A 360° talent-building program bridging industry and academia for Data & Digital roles.",
    icon: IconGraduate,
    bg: "/assets/chooser-education.jpg",
  },
];

export default function Landing() {
  return (
    <div className="chooser">
      <div className="chooser-inner chooser-inner-wide">
        <Link to="/" className="brand chooser-brand">
          <img src="/assets/logo-mark.jpeg" alt="Unruffled Feathers" />
          <span className="brand-text">Unruffled Feathers</span>
        </Link>

        <Reveal className="chooser-heading">
          <h1 className="chooser-title">
            Two core services, <em>one house</em>
          </h1>
          <p className="chooser-lead">Choose where you'd like to go.</p>
        </Reveal>

        <div className="chooser-grid">
          {VENTURES.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.key} delay={i * 100} variant="zoom" className="chooser-card">
                <div className="chooser-card-photo">
                  <img src={v.bg} alt="" />
                </div>
                <span className="chooser-icon">
                  <Icon />
                </span>
                <span className="eyebrow">{v.eyebrow}</span>
                <h2>{v.label}</h2>
                <p>{v.desc}</p>
                <Link to={v.to} className="btn btn-primary">
                  Enter {v.label}
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200} className="chooser-footnote">
          <span className="chooser-footnote-label">Also behind Unruffled Feathers</span>
          <Link to="/film" className="chooser-footnote-badge">
            <span className="chooser-footnote-icon">
              <IconFilm />
            </span>
            <span className="chooser-footnote-copy">
              <strong>Film &amp; Entertainment</strong>
              <span>Casting, production and strategic-staffing</span>
            </span>
            <span className="chooser-footnote-arrow" aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
