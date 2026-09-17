import Reveal from "./Reveal.jsx";

const POSITIVE = [
  { value: "82%", label: "Say data helps keep their business focused" },
  { value: "81%", label: "Say it accelerates decision-making" },
  { value: "76%", label: "Say it builds trust in internal conversations" },
];

const FRICTION = [
  { value: "38%", label: "Find their data difficult to understand" },
  { value: "37%", label: "Struggle to generate insight from it" },
  { value: "28%", label: "Feel overwhelmed by complexity" },
];

export default function DataStats() {
  return (
    <section id="why-data" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Why Data, Why Now</span>
          <h2 className="section-title">
            Business leaders agree: data works — <em>when it's usable</em>
          </h2>
          <p className="section-lead">Source: Salesforce data research.</p>
        </Reveal>

        <Reveal variant="zoom" className="hero-stats data-stats-row">
          {POSITIVE.map((s) => (
            <div className="hero-stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </Reveal>

        <Reveal variant="zoom" delay={120} className="data-stats-dark">
          <div className="data-stats-dark-row">
            {FRICTION.map((s) => (
              <div className="data-stat-dark" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <p>
            85% of companies are already planning to invest in managing
            their data better — that's the opening we help clients act on.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
