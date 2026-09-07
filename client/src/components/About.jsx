import Reveal from "./Reveal.jsx";

const FOCUS_AREAS = [
  "Casting and production assistance for TV, movies, advertising, etc.",
  "Strategic consulting services for projects",
  "Employee engagement via creative activities",
  "Strategic staffing",
  "Analytics and data-driven software solutions for the industry",
];

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container about-grid">
        <div className="about-visual">
          <Reveal variant="left" className="about-frame">
            <div className="about-tilt">
              <div className="about-logo-card">
                <img src="/assets/logo.jpeg" alt="Unruffled Feathers" />
              </div>
            </div>
            <div className="about-badge">
              <strong>2019</strong>
              <span>Est.</span>
            </div>
          </Reveal>
        </div>

        <Reveal variant="right" delay={120} className="about-copy">
          <span className="eyebrow">About Us</span>
          <h2 className="section-title">
            A technology-enabled <em>Internet of People</em> platform
          </h2>
          <p>
            Founded in May 2019, Unruffled Feathers Enterprises Private
            Limited is a fully technology-enabled Internet of People platform
            providing and solving the business needs of the entertainment,
            film, theater, tourism and the aviation industry.
          </p>
          <p>Our solutions target:</p>

          <ul className="about-list">
            {FOCUS_AREAS.map((item) => (
              <li key={item}>
                <span className="dot" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
