import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import TeachData from "../components/TeachData.jsx";
import Team from "../components/Team.jsx";
import CtaBand from "../components/CtaBand.jsx";
import FAQ from "../components/FAQ.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

const NAV_LINKS = [
  { href: "#teach-data", label: "Programs" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

const FOOTER_LINKS = [
  { href: "#teach-data", label: "Programs" },
  { href: "#team", label: "Our Team" },
  { href: "#contact", label: "Contact" },
];

const FAQS = [
  {
    q: "What is Teach Data India?",
    a: "A 360° immersive learning and talent-building program by Unruffled Feathers that bridges the gap between industry and academia for Data & Digital talent.",
  },
  {
    q: "Which colleges do you partner with?",
    a: "Tier-2, 3 & 4 colleges across India that are digital and data ready, brought on board through structured MOUs.",
  },
  {
    q: "What programs do you offer?",
    a: "Finishing School, Freshers Foundation, Full Stack ML-Data Engineering, Data Engineering, Digital Analytics, and Business Analysis & Market Research programs.",
  },
  {
    q: "Who mentors the program?",
    a: "Leaders and mentors with 20+ years of industry experience, delivering training with a personal, one-on-one touch.",
  },
  {
    q: "How can my company or college get involved?",
    a: "Reach out via the contact form, email or WhatsApp to discuss an MOU, a hiring pipeline, or a custom cohort.",
  },
];

export default function EducationPage() {
  return (
    <>
      <Navbar
        links={NAV_LINKS}
        switchLinks={[
          { to: "/consulting", label: "Consulting" },
          { to: "/film", label: "Film & Entertainment" },
        ]}
        cta={{ href: "#contact", label: "Join Us Now" }}
      />
      <Hero
        bgImage="/assets/chooser-education.jpg"
        kicker="Welcome to"
        title={
          <>
            Bridging <span>industry &amp; academia</span> for India's data
            talent
          </>
        }
        description="Teach Data India is a 360° immersive learning and talent-building program by Unruffled Feathers — preparing STEM graduates to walk in ready for Data & Digital roles, with mentorship from leaders with 20+ years of experience."
        primaryCta={{ href: "#contact", label: "Join Us Now" }}
        secondaryCta={{ href: "#teach-data", label: "Explore programs" }}
        stats={[
          { value: "6", label: "Specialist programs" },
          { value: "20+", label: "Yrs mentor experience" },
          { value: "360°", label: "Immersive learning model" },
        ]}
      />
      <TeachData />
      <Team />
      <CtaBand
        bgImage="/assets/chooser-education.jpg"
        heading={
          <>
            Ready to build your <em>data talent</em> pipeline?
          </>
        }
        ctaHref="#contact"
        ctaLabel="Join Us Now"
      />
      <FAQ
        faqs={FAQS}
        lead="A few things partners usually ask before reaching out. Don't see yours — send us a message."
      />
      <Contact
        heading={
          <>
            Let's build your <em>talent pipeline</em>
          </>
        }
        lead="Want to explore an MOU, hire industry-ready freshers, or bring a custom cohort to your campus? Send us a message or reach out directly."
      />
      <Footer
        tagline="A 360° immersive learning and talent-building program bridging industry and academia for Data & Digital roles — by Unruffled Feathers."
        exploreLinks={FOOTER_LINKS}
      />
    </>
  );
}
