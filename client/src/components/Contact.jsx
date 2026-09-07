import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { API_URL, SITE_EMAIL, WHATSAPP_NUMBER } from "../config.js";

const EMPTY = { name: "", email: "", phone: "", subject: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email.";
  }
  if (!values.message.trim()) errors.message = "Please enter a message.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus({ state: "loading", message: "" });
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus({
        state: "success",
        message: "Thank you! Your message has been sent — we'll get back to you shortly.",
      });
      setValues(EMPTY);
    } catch (err) {
      setStatus({ state: "error", message: err.message || "Something went wrong." });
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Contact Us</span>
          <h2 className="section-title">
            Let's start a <em>conversation</em>
          </h2>
          <p className="section-lead">
            Have a project, partnership or casting need in mind? Send us a
            message or reach out directly.
          </p>
        </Reveal>

        <div className="contact-wrap">
          <Reveal variant="left" className="contact-info">
            <h3>Get in touch</h3>
            <p>We usually respond within one business day.</p>

            <div className="contact-detail">
              <span className="ic">Email</span>
              <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
            </div>

            <div className="contact-detail">
              <span className="ic">WhatsApp</span>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with us instantly
              </a>
            </div>

            <div className="contact-detail">
              <span className="ic">Website</span>
              <span>www.unruffledfeathers.com</span>
            </div>
          </Reveal>

          <Reveal
            as="form"
            variant="right"
            delay={120}
            className="contact-form"
            onSubmit={onSubmit}
            noValidate
          >
            <div className="form-row">
              <div className={`field ${errors.name ? "error" : ""}`}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={onChange}
                  placeholder="Your full name"
                />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>

              <div className={`field ${errors.email ? "error" : ""}`}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="phone">Phone (optional)</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={onChange}
                  placeholder="+91 00000 00000"
                />
              </div>

              <div className="field">
                <label htmlFor="subject">Subject (optional)</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={values.subject}
                  onChange={onChange}
                  placeholder="What's this about?"
                />
              </div>
            </div>

            <div className={`field ${errors.message ? "error" : ""}`}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={onChange}
                placeholder="Tell us a little about your project..."
              />
              {errors.message && <span className="field-error">{errors.message}</span>}
            </div>

            <button className="btn btn-dark" type="submit" disabled={status.state === "loading"}>
              {status.state === "loading" ? "Sending..." : "Send message"}
            </button>

            {status.state === "success" && (
              <div className="form-status success">{status.message}</div>
            )}
            {status.state === "error" && (
              <div className="form-status error">{status.message}</div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
