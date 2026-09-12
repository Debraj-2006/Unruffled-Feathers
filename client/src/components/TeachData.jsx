import Reveal from "./Reveal.jsx";

function IconGraduate() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 4L2 9l10 5 10-5-10-5z" strokeLinejoin="round" />
      <path d="M6 11.5V17c0 1.4 2.7 3 6 3s6-1.6 6-3v-5.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 9v6" strokeLinecap="round" />
    </svg>
  );
}

function IconLayers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 3l9 5-9 5-9-5 9-5z" strokeLinejoin="round" />
      <path d="M3 13l9 5 9-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M9 8L4 12l5 4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 8l5 4-5 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconDatabase() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <ellipse cx="12" cy="5.5" rx="7" ry="2.8" />
      <path d="M5 5.5V18c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V5.5" strokeLinecap="round" />
      <path d="M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" strokeLinecap="round" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 20V10M11 20V4M18 20v-7" strokeLinecap="round" />
      <path d="M3 20h18" strokeLinecap="round" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.8-4.8" strokeLinecap="round" />
    </svg>
  );
}

const WHY_US = [
  "Sign the right MOU with Tier-2, 3 & 4 colleges that are digital and data ready",
  "Personalized, industry-ready freshers groomed to join as your future employees",
  "Increase your qualified intern intake by a significant margin",
  "Talent acquisition from the best colleges across India",
  "Mentorship from leaders with 20+ years of experience, delivered with a personal touch",
];

const STATS = [
  { value: "27.8%", label: "CAGR, Big Data market ('19–'25)" },
  { value: "$5.5B", label: "Current Big Data market size" },
  { value: "$18.9B", label: "Projected market size by 2025" },
];

const PROGRAMS = [
  {
    mark: "01",
    icon: IconGraduate,
    title: "Finishing School Program",
    desc: "A 360° immersive program that turns final-year students into industry-ready hires before day one.",
    photo: "/assets/program-finishing-school.jpg",
  },
  {
    mark: "02",
    icon: IconLayers,
    title: "Freshers Foundation Program",
    desc: "Foundational training that gets new hires fluent in data and digital fundamentals, fast.",
    photo: "/assets/program-freshers-foundation.jpg",
  },
  {
    mark: "03",
    icon: IconCode,
    title: "Full Stack ML-Data Engineering Program",
    desc: "End-to-end machine learning and data engineering — from programming basics to production-ready pipelines.",
    photo: "/assets/program-ml-data-engineering.jpg",
  },
  {
    mark: "04",
    icon: IconDatabase,
    title: "Data Engineering Program",
    desc: "Six modules spanning programming, frameworks, databases, data modelling and DevOps/DataOps.",
    photo: "/assets/program-data-engineering.jpg",
  },
  {
    mark: "05",
    icon: IconChart,
    title: "Digital Analytics Course",
    desc: "Google & Adobe Analytics, tag management, personalization and social/mobile analytics in one curriculum.",
    photo: "/assets/program-digital-analytics.jpg",
  },
  {
    mark: "06",
    icon: IconSearch,
    title: "Business Analysis & Market Research",
    desc: "A 60–80 hour program in research design, insights generation and client-ready storytelling.",
    photo: "/assets/program-business-analysis.jpg",
  },
];

export default function TeachData() {
  return (
    <section id="teach-data" className="section">
      <div className="container">
        <div className="services-head-grid">
          <Reveal className="section-head">
            <span className="eyebrow">Why Teach Data India</span>
            <h2 className="section-title">
              Closing India's <em>data talent</em> gap
            </h2>
            <p className="section-lead">
              A 360° immersive learning and talent-building program that
              bridges the gap between industry and academia — helping
              corporates build a pipeline of industry-ready, data- and
              digital-ready talent straight from campus.
            </p>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <ul className="about-list">
              {WHY_US.map((item) => (
                <li key={item}>
                  <span className="dot" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal variant="zoom" className="hero-stats teach-data-stats">
          {STATS.map((s) => (
            <div className="hero-stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </Reveal>

        <div className="services-grid">
          {PROGRAMS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal
                key={p.title}
                delay={i * 90}
                variant="zoom"
                className="program-card"
                data-mark={p.mark}
              >
                <div className="program-card-photo">
                  <img src={p.photo} alt="" />
                </div>
                <div className="program-card-body">
                  <div className="service-icon">
                    <Icon />
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="teach-data-cta">
          <p>
            Mentorship by people with 20+ years of experience — with a
            personal touch.
          </p>
          <a href="#contact" className="btn btn-primary">
            Join Us Now
          </a>
        </Reveal>
      </div>
    </section>
  );
}
