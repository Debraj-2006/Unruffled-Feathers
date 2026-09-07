import { useState } from "react";
import Reveal from "./Reveal.jsx";

const FAQS = [
  {
    q: "What industries does Unruffled Feathers work with?",
    a: "We serve the entertainment, film, theater, tourism and aviation industries — connecting talent, brands and audiences through a single technology-enabled platform.",
  },
  {
    q: "What kind of services can I hire you for?",
    a: "Casting and production assistance, strategic consulting, employee engagement activities, strategic staffing, and data-driven software for the entertainment ecosystem.",
  },
  {
    q: "Do you work with individuals as well as businesses?",
    a: "Yes — our platform is built for both B2B and B2C needs, from production houses and airlines to independent artists, influencers and everyday users.",
  },
  {
    q: "How quickly can I expect a response?",
    a: "We usually respond within one business day. For anything urgent, WhatsApp is the fastest way to reach us.",
  },
  {
    q: "How do I start a project with you?",
    a: "Send us a message through the contact form below, or reach out directly over email or WhatsApp — we'll take it from there.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section section-alt">
      <div className="container faq-wrap">
        <Reveal variant="left" className="faq-head">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">
            Questions, <em>answered</em>
          </h2>
          <p className="section-lead">
            A few things people usually ask before reaching out. Don't see
            yours — send us a message.
          </p>
        </Reveal>

        <div className="faq-list">
          {FAQS.map((item, i) => (
            <Reveal
              key={item.q}
              delay={i * 70}
              variant="right"
              className={`faq-item ${open === i ? "open" : ""}`}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className="faq-toggle">{open === i ? "–" : "+"}</span>
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
