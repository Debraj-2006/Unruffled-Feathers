import Reveal from "./Reveal.jsx";

const PRACTICES = [
  {
    title: "AI & Data Science Problem Solving",
    tag: "Framing",
    items: [
      "Opportunity assessments & feasibility studies",
      "Problem-framing workshops",
      "Use-case prioritisation & sequenced roadmaps",
    ],
  },
  {
    title: "AI & Data Science Solutions",
    tag: "End-to-end delivery",
    items: [
      "Data Engineering — integration, governance, architecture",
      "Data Analytics — descriptive, diagnostic, predictive",
      "ML Models & Enterprise-level AI",
    ],
  },
  {
    title: "Software Solutions",
    tag: "Working systems",
    items: [
      "Custom web & mobile applications",
      "Systems integration & API development",
      "Cloud-native architecture & modernisation",
    ],
  },
  {
    title: "Agentic AI",
    tag: "Automation, with guardrails",
    items: [
      "Agent orchestration & workflow discovery",
      "Human-in-the-loop checkpoints",
      "Responsible-AI guardrails & enterprise integration",
    ],
  },
  {
    title: "Recruitment Services",
    tag: "Backed by Teach Data India",
    items: [
      "Contract, contract-to-hire & permanent placement",
      "Campus & early-career hiring pipelines",
      "Executive search for data/AI leadership",
      "Skills-verified shortlists",
    ],
  },
];

export default function ConsultingPractices() {
  return (
    <section id="practices" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-title">
            Five ways we <em>help</em>
          </h2>
          <p className="section-lead">
            Every engagement starts the same way: understand the decision
            that needs to get easier, then build the smallest thing that
            makes it easier — before scaling.
          </p>
        </Reveal>

        <div className="opportunity-grid">
          {PRACTICES.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 100}
              variant="zoom"
              className="opportunity-card"
            >
              <span className="tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <ul>
                {p.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
