import nodemailer from "nodemailer";

const isConfigured = Boolean(process.env.SMTP_HOST && process.env.CONTACT_NOTIFY_EMAIL);

const transporter = isConfigured
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: process.env.SMTP_USER
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
    })
  : null;

export async function sendContactNotification(submission) {
  if (!transporter) {
    console.log("[mailer] SMTP not configured, skipping email notification.");
    return { sent: false };
  }

  const { name, email, phone, subject, message } = submission;

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: process.env.CONTACT_NOTIFY_EMAIL,
    replyTo: email,
    subject: `New enquiry: ${subject || "Website Contact Form"}`,
    text: [
      `New contact form submission from unruffledfeathers.com`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      `Subject: ${subject || "-"}`,
      ``,
      `Message:`,
      message,
    ].join("\n"),
  });

  return { sent: true };
}
