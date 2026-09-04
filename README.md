# Unruffled Feathers — Website

Built from the company's pitch deck (`Unruffled Feathers - V4.pptx`): About Us,
Business Model, Business Opportunities, Market Opportunity, Team, Recent
Assignments, and a Contact Us form. Includes a floating WhatsApp button and
saves every contact form submission to PostgreSQL (with an optional email
notification).

## Stack
- **client/** — React + Vite frontend (the site itself)
- **server/** — Express API + PostgreSQL (`pg`) + Nodemailer (optional email)

## 1. Set up PostgreSQL

Install PostgreSQL locally (or use a hosted instance — Supabase, Neon,
Railway, RDS, etc.) and create a database:

```sql
CREATE DATABASE unruffled_feathers;
```

## 2. Configure the backend

```bash
cd server
cp .env.example .env
```

Edit `server/.env`:
- `DATABASE_URL` — your PostgreSQL connection string
- `SMTP_*` / `CONTACT_NOTIFY_EMAIL` — optional. Leave `SMTP_HOST` blank to
  skip email notifications; submissions are always saved to PostgreSQL
  regardless.

Then create the table:

```bash
npm install
npm run db:init
```

## 3. Run it

```bash
# Terminal 1 — backend (http://localhost:5000)
cd server
npm run dev

# Terminal 2 — frontend (http://localhost:5173)
cd client
npm install
npm run dev
```

Open http://localhost:5173.

## 4. Before going live

- **WhatsApp number**: edit `client/src/config.js` → `WHATSAPP_NUMBER`
  (currently a placeholder `910000000000`). Use the full international
  number, digits only, no `+`.
- **Contact email**: edit `client/src/config.js` → `SITE_EMAIL`, and set
  `CONTACT_NOTIFY_EMAIL` / `SMTP_*` in `server/.env` if you want email
  alerts on new submissions.
- Team photos, logo and copy are pulled from the pitch deck and live in
  `client/public/assets/` and the section components under
  `client/src/components/`.

## Production build

```bash
cd client && npm run build
```

`server/index.js` serves `client/dist` automatically when it exists, so in
production you only need to run the Express server (`npm start` in
`server/`) after building the client.

## Viewing contact form submissions

Submissions live in the `contact_submissions` table:

```sql
SELECT * FROM contact_submissions ORDER BY created_at DESC;
```
