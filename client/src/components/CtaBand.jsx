import Reveal from "./Reveal.jsx";

export default function CtaBand({
  bgImage = "/assets/cta-bg.jpg",
  heading = (
    <>
      Have a project, brand or <em>platform</em> in mind?
    </>
  ),
  ctaHref = "#contact",
  ctaLabel = "Start a conversation",
}) {
  return (
    <section className="cta-band">
      <div className="cta-band-bg" aria-hidden="true">
        <img src={bgImage} alt="" />
      </div>
      <div className="container cta-band-inner">
        <Reveal variant="left">
          <h2>{heading}</h2>
        </Reveal>
        <Reveal variant="right" delay={120}>
          <a href={ctaHref} className="btn btn-cta">
            {ctaLabel}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
