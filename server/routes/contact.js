import { Router } from "express";
import { pool } from "../db/pool.js";
import { sendContactNotification } from "../mailer.js";

export const contactRouter = Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

contactRouter.post("/", async (req, res) => {
  const { name, email, phone, subject, message } = req.body || {};

  if (!name || !String(name).trim()) {
    return res.status(400).json({ error: "Name is required." });
  }
  if (!email || !EMAIL_RE.test(String(email).trim())) {
    return res.status(400).json({ error: "A valid email is required." });
  }
  if (!message || !String(message).trim()) {
    return res.status(400).json({ error: "Message is required." });
  }

  try {
    const { rows } = await pool.query(
      `INSERT INTO contact_submissions (name, email, phone, subject, message)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, created_at`,
      [
        String(name).trim(),
        String(email).trim(),
        phone ? String(phone).trim() : null,
        subject ? String(subject).trim() : null,
        String(message).trim(),
      ]
    );

    sendContactNotification({ name, email, phone, subject, message }).catch((err) => {
      console.error("[mailer] Failed to send notification email:", err.message);
    });

    res.status(201).json({ ok: true, id: rows[0].id, created_at: rows[0].created_at });
  } catch (err) {
    console.error("Failed to save contact submission:", err.message);
    res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
});
