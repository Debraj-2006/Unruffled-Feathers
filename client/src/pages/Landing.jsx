import { useState } from "react";
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

function IconFilm() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M3 8h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8z" strokeLinejoin="round" />
      <path d="M3 8l1.6-4h3L6 8M9.4 8L11 4h3l-1.6 4M15.8 8L17.4 4h3L19 8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const VENTURES = [
  {
    to: "/education",
    key: "education",
    label: "Education",
    eyebrow: "Teach Data India",
    desc: "A 360° talent-building program bridging industry and academia for Data & Digital roles.",
    icon: IconGraduate,
    bg: "/assets/chooser-education.jpg",
  },
  {
    to: "/film",
    key: "film",
    label: "Film & Entertainment",
    eyebrow: "Since 2019",
    desc: "An Internet of People platform for casting, staffing and consulting across entertainment, tourism and aviation.",
    icon: IconFilm,
    bg: "/assets/chooser-film.jpg",
  },
];

export default function Landing() {
  const [active, setActive] = useState(0);
  const venture = VENTURES[active];
  const Icon = venture.icon;

  return (
    <div className="chooser">
      <div className="chooser-bg" aria-hidden="true">
        {VENTURES.map((v, i) => (
          <img key={v.key} src={v.bg} alt="" className={i === active ? "is-active" : ""} />
        ))}
      </div>

      <div className="chooser-inner">
        <Link to="/" className="brand chooser-brand">
          <img src="/assets/logo-mark.jpeg" alt="Unruffled Feathers" />
          <span className="brand-text">Unruffled Feathers</span>
        </Link>

        <Reveal>
          <h1 className="chooser-title">
            Two ventures, <em>one platform</em>
          </h1>
          <p className="chooser-lead">Choose where you'd like to go.</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="toggle" role="tablist" aria-label="Choose a venture">
            <span
              className="toggle-thumb"
              style={{
                left: `calc(4px + ${active} * (50% - 4px))`,
                width: "calc(50% - 4px)",
              }}
            />
            {VENTURES.map((v, i) => (
              <button
                key={v.key}
                type="button"
                role="tab"
                aria-selected={active === i}
                className={`toggle-option ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                {v.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal key={venture.key} className="chooser-panel">
          <span className="chooser-icon">
            <Icon />
          </span>
          <span className="eyebrow">{venture.eyebrow}</span>
          <h2>{venture.label}</h2>
          <p>{venture.desc}</p>
          <Link to={venture.to} className="btn btn-primary">
            Enter {venture.label}
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
