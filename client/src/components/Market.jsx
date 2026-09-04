import Reveal from "./Reveal.jsx";

const SEGMENTS = [
  {
    title: "Production Houses",
    desc: "Talent acquisition, business consulting, and content for videos, movies, TV shows & radio.",
  },
  {
    title: "Airlines",
    desc: "In-flight entertainment content, niche staffing requirements and strategic consulting.",
  },
  {
    title: "Artists & Influencers",
    desc: "Branding, placements & contracts, and an Internet-of-Things connect for talent discovery.",
  },
  {
    title: "Mass Public Users (B2C)",
    desc: "Corporate videos, presentations & events, plus everyday access to our proprietary apps.",
  },
];

export default function Market() {
  return (
    <section id="market" className="section">
      <div className="container market-wrap">
        <Reveal variant="left">
          <span className="eyebrow">Market Opportunity</span>
          <h2 className="section-title">
            Real <em>demand</em>, across a fragmented industry
          </h2>
          <p className="section-lead">
            From production houses and airlines to independent artists and
            everyday consumers, Unruffled Feathers sits at the intersection
            of a largely unorganized industry — connecting supply and demand
            through technology.
          </p>
        </Reveal>

        <div className="market-grid-inner">
          {SEGMENTS.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} variant="right" className="market-card">
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
