import Reveal from "./Reveal.jsx";

function IconSpark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 2l2.2 6.4L21 10l-6.8 1.6L12 18l-2.2-6.4L3 10l6.8-1.6L12 2z" strokeLinejoin="round" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" strokeLinejoin="round" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="10" r="2.4" />
      <path d="M3.5 20c0-3.3 2.5-6 6-6s6 2.7 6 6" strokeLinecap="round" />
      <path d="M14.5 14.3c2.6.4 4 2.2 4 5.7" strokeLinecap="round" />
    </svg>
  );
}

function IconApp() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="6" y="2.5" width="12" height="19" rx="2.4" />
      <path d="M11 18h2" strokeLinecap="round" />
    </svg>
  );
}

function IconTag() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12.6 3H5a2 2 0 0 0-2 2v7.6a2 2 0 0 0 .6 1.4l9 9a2 2 0 0 0 2.8 0l6.8-6.8a2 2 0 0 0 0-2.8l-9-9a2 2 0 0 0-1.6-.6z" strokeLinejoin="round" />
      <circle cx="8" cy="8" r="1.4" />
    </svg>
  );
}

const SERVICES = [
  {
    mark: "01",
    icon: IconSpark,
    title: "Services",
    desc: "PR services, artist management, casting solutions and production assistance across TV, film and theatre.",
  },
  {
    mark: "02",
    icon: IconShield,
    title: "Intellectual Property Management",
    desc: "Movie licensing, copyright and piracy protection, and distribution rights management.",
  },
  {
    mark: "03",
    icon: IconUsers,
    title: "Employee Engagement",
    desc: "Office entertainment, live bands and creative activities that boost workplace culture.",
  },
  {
    mark: "04",
    icon: IconApp,
    title: "App-Based Technologies",
    desc: "Proprietary apps spanning matrimonial, pageants, artist tracking, dating and shopping recommendations.",
  },
  {
    mark: "05",
    icon: IconTag,
    title: "Branding, Positioning & Shopping Experience",
    desc: "Brand positioning, content creation, consultation and brand launch support services.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="services-head-grid">
          <Reveal className="section-head">
            <span className="eyebrow">Our Business Model</span>
            <h2 className="section-title">
              Five pillars, <em>one platform</em>
            </h2>
            <p className="section-lead">
              Our proprietary software connects every corner of the
              entertainment ecosystem — B2B and B2C — under a single
              technology-enabled platform.
            </p>
          </Reveal>

          <Reveal variant="right" delay={120} className="services-photo">
            <img
              src="/assets/services-photo.jpg"
              alt="Broadcast control room powering the platform"
            />
          </Reveal>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal
                key={s.title}
                delay={i * 90}
                variant="zoom"
                className="service-card"
                data-mark={s.mark}
              >
                <div className="service-icon">
                  <Icon />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
