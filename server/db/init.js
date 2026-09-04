import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { pool } from "./pool.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  const schema = readFileSync(path.join(__dirname, "schema.sql"), "utf8");
  await pool.query(schema);
  console.log("Database schema ready: contact_submissions table created (or already existed).");
  await pool.end();
}

main().catch((err) => {
  console.error("Failed to initialize database:", err.message);
  process.exit(1);
});
