import { Link } from "react-router-dom";
import { SITE_EMAIL } from "../config.js";

export default function Footer({
  tagline = "A fully technology-enabled Internet of People platform for the entertainment, film, theater, tourism and aviation industry.",
  exploreLinks = [
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Business Model" },
    { href: "#team", label: "Our Team" },
    { href: "#assignments", label: "Recent Work" },
  ],
  homeTo = "/",
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link to={homeTo} className="footer-brand">
              <img src="/assets/logo-mark.jpeg" alt="Unruffled Feathers" />
              <span>Unruffled Feathers</span>
            </Link>
            <p>{tagline}</p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a></li>
              <li><a href="#contact">Send a message</a></li>
              <li>www.unruffledfeathers.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Unruffled Feathers Enterprises Private Limited. All rights reserved.</span>
          <span>Founded 2019</span>
        </div>
        <p className="footer-credit">
          Placeholder photography via Wikimedia Commons contributors, used
          under free licenses — swap for your own before launch.
        </p>
      </div>
    </footer>
  );
}
