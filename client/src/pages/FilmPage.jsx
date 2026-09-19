import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import Opportunities from "../components/Opportunities.jsx";
import Market from "../components/Market.jsx";
import Team from "../components/Team.jsx";
import Assignments from "../components/Assignments.jsx";
import CtaBand from "../components/CtaBand.jsx";
import FAQ from "../components/FAQ.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#opportunities", label: "Opportunities" },
  { href: "#team", label: "Team" },
  { href: "#assignments", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function FilmPage() {
  return (
    <>
      <Navbar
        links={NAV_LINKS}
        switchLinks={[
          { to: "/consulting", label: "Consulting" },
          { to: "/education", label: "Teach Data India" },
        ]}
        cta={{ href: "#contact", label: "Get in Touch" }}
      />
      <Hero bgImage="/assets/chooser-film.jpg" />
      <About />
      <Services />
      <Opportunities />
      <Market />
      <Team />
      <Assignments />
      <CtaBand />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
