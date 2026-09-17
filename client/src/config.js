// Update this to the business's real WhatsApp number (with country code, no +, no spaces)
// e.g. "919876543210" for an Indian number.
export const WHATSAPP_NUMBER = "919341921581";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi Unruffled Feathers, I'd like to know more about your services.";

export const SITE_EMAIL = "support@unruffledfeathers.com";
export const SITE_URL = "https://www.unruffledfeathers.com";

export const SITE_PHONES = ["+91 93419 21581", "+91 96207 90990"];
export const SITE_ADDRESS =
  "No. M808, Kno.3, Syno.49/2, Brindavan Palms, Naganathapura, Bengaluru, Karnataka 560100";
export const SITE_CIN = "U72900KA2019PTC124324";
export const SITE_GSTIN = "29AACCU4326Q1ZQ";

// Base URL of the backend API. Leave blank for local dev (Vite proxies /api
// to the local Express server) — set VITE_API_URL in Vercel to the deployed
// Render backend's URL, e.g. "https://unruffled-feathers-api.onrender.com".
export const API_URL = import.meta.env.VITE_API_URL || "";
