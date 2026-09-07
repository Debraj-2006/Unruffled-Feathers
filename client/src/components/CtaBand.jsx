import Reveal from "./Reveal.jsx";

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="cta-band-bg" aria-hidden="true">
        <img src="/assets/cta-bg.jpg" alt="" />
      </div>
      <div className="container cta-band-inner">
        <Reveal variant="left">
          <h2>
            Have a project, brand or <em>platform</em> in mind?
          </h2>
        </Reveal>
        <Reveal variant="right" delay={120}>
          <a href="#contact" className="btn btn-cta">
            Start a conversation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
