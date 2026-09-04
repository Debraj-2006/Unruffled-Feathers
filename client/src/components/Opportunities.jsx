import Reveal from "./Reveal.jsx";

const GROUPS = [
  {
    title: "Services",
    items: ["PR Services", "Artist Managements", "Casting Solutions", "Theatre Plays & Musicals"],
  },
  {
    title: "IP Management",
    items: [
      "Movie Licenses",
      "Copyright Protection",
      "Piracy Protection",
      "Distribution Rights Management",
    ],
  },
  {
    title: "Employee Engagement",
    items: ["Office Entertainment", "Bands"],
  },
  {
    title: "App-Based",
    items: [
      "Matrimonial",
      "Pageants",
      "Movies & Serials Production",
      "Aviation Jobs",
      "Artist Tracking",
      "Dating",
      "Shopping Recommendation",
      "Influencer Hub",
    ],
  },
  {
    title: "Branding Services",
    items: ["Brand Positioning", "Content Creation", "Consultation", "Brand Launch Support"],
  },
];

export default function Opportunities() {
  return (
    <section id="opportunities" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Our Business Opportunities</span>
          <h2 className="section-title">
            Built for <em>B2B &amp; B2C</em>
          </h2>
          <p className="section-lead">
            A closer look at what each pillar of our platform delivers to
            partners, brands, artists and audiences.
          </p>
        </Reveal>

        <div className="opportunity-grid">
          {GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 100} variant="zoom" className="opportunity-card">
              <span className="tag">B2B / B2C</span>
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((item) => (
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
