import Reveal from "./Reveal.jsx";

const ASSIGNMENTS = [
  {
    text: "Ad for breastfeeding awareness",
    link: "https://tinyurl.com/bfeedingaware",
  },
  { text: "Talent hunt for a show by Zee — Model Hunt" },
  {
    text: "Business registration/branding of Indian Dev and Diva pageantry in West India",
  },
  {
    text: "Women's safety initiatives of Government of India — as technology and filming partner",
  },
  {
    text: "Placement of talents in various web series and movies currently in production",
  },
];

export default function Assignments() {
  return (
    <section id="assignments" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Recent Assignments</span>
          <h2 className="section-title">
            Work we're <em>proud of</em>
          </h2>
        </Reveal>

        <div className="assign-list">
          {ASSIGNMENTS.map((a, i) => (
            <Reveal key={a.text} delay={i * 80} variant="left" className="assign-item">
              <span className="assign-index">{String(i + 1).padStart(2, "0")}</span>
              <p>
                {a.text}
                {a.link && (
                  <>
                    {" — "}
                    <a href={a.link} target="_blank" rel="noopener noreferrer">
                      view
                    </a>
                  </>
                )}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
