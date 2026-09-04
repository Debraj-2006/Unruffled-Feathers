import Reveal from "./Reveal.jsx";

const SERVICES = [
  {
    mark: "01",
    title: "Services",
    desc: "PR services, artist management, casting solutions and production assistance across TV, film and theatre.",
  },
  {
    mark: "02",
    title: "Intellectual Property Management",
    desc: "Movie licensing, copyright and piracy protection, and distribution rights management.",
  },
  {
    mark: "03",
    title: "Employee Engagement",
    desc: "Office entertainment, live bands and creative activities that boost workplace culture.",
  },
  {
    mark: "04",
    title: "App-Based Technologies",
    desc: "Proprietary apps spanning matrimonial, pageants, artist tracking, dating and shopping recommendations.",
  },
  {
    mark: "05",
    title: "Branding, Positioning & Shopping Experience",
    desc: "Brand positioning, content creation, consultation and brand launch support services.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Our Business Model</span>
          <h2 className="section-title">
            Five pillars, <em>one platform</em>
          </h2>
          <p className="section-lead">
            UR proprietary software connects every corner of the
            entertainment ecosystem — B2B and B2C — under a single
            technology-enabled platform.
          </p>
        </Reveal>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="service-card">
              <div className="service-icon">{s.mark}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
