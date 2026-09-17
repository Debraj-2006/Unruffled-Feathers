import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import ConsultingPractices from "../components/ConsultingPractices.jsx";
import ConsultingIndustries from "../components/ConsultingIndustries.jsx";
import DataStats from "../components/DataStats.jsx";
import Team from "../components/Team.jsx";
import CtaBand from "../components/CtaBand.jsx";
import FAQ from "../components/FAQ.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

const NAV_LINKS = [
  { href: "#practices", label: "Practices" },
  { href: "#industries", label: "Industries" },
  { href: "#why-data", label: "Why Data" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

const FOOTER_LINKS = [
  { href: "#practices", label: "Practices" },
  { href: "#industries", label: "Industries" },
  { href: "#team", label: "Our Team" },
];

const FAQS = [
  {
    q: "What does the Consulting division cover?",
    a: "AI, data, software and agentic-AI consulting — plus specialist practices for hotels, coffee, premium foods, aviation and automobiles, and recruitment for data/AI roles.",
  },
  {
    q: "How do engagements typically start?",
    a: "We start by understanding the decision that needs to get easier, then build the smallest thing that makes it easier — before scaling to a full solution.",
  },
  {
    q: "Do you only work with large enterprises?",
    a: "No — we work with corporates, colleges and production teams of all sizes across India, from opportunity assessments to full end-to-end delivery.",
  },
  {
    q: "Can you help with hiring, not just strategy?",
    a: "Yes — our Recruitment Services practice is backed by the Teach Data India talent pipeline, covering contract, contract-to-hire, permanent and executive search for data/AI roles.",
  },
  {
    q: "How do I start a project?",
    a: "Send us a message through the contact form below, or reach out directly over email, phone or WhatsApp — we'll take it from there.",
  },
];

export default function ConsultingPage() {
  return (
    <>
      <Navbar
        links={NAV_LINKS}
        switchLinks={[
          { to: "/education", label: "Teach Data India" },
          { to: "/film", label: "Film & Entertainment" },
        ]}
        cta={{ href: "#contact", label: "Start a Conversation" }}
      />
      <Hero
        bgImage="/assets/services-photo.jpg"
        kicker="Welcome to"
        title={
          <>
            Calm, considered expertise across{" "}
            <span>AI, data &amp; digital</span>
          </>
        }
        description="Unruffled Feathers Consulting brings structured, data-informed thinking to technology, talent and media challenges — AI, data, software and agentic-AI consulting, plus specialist practices for hotels, coffee, premium foods, aviation and automobiles."
        primaryCta={{ href: "#contact", label: "Start a conversation" }}
        secondaryCta={{ href: "#practices", label: "See how we help" }}
        stats={[
          { value: "5", label: "Consulting practices" },
          { value: "5", label: "Specialist industries" },
          { value: "2019", label: "Founded" },
        ]}
      />
      <ConsultingPractices />
      <ConsultingIndustries />
      <DataStats />
      <Team />
      <CtaBand
        bgImage="/assets/program-data-engineering.jpg"
        heading={
          <>
            Bring us the challenge — we'll help make the{" "}
            <em>path clearer</em>.
          </>
        }
        ctaHref="#contact"
        ctaLabel="Start a conversation"
      />
      <FAQ
        faqs={FAQS}
        lead="A few things clients usually ask before reaching out. Don't see yours — send us a message."
      />
      <Contact
        heading={
          <>
            Let's start a <em>conversation</em>
          </>
        }
        lead="Have an AI, data, software or hiring challenge in mind? Send us a message or reach out directly."
      />
      <Footer
        tagline="AI, data, software and agentic-AI consulting — plus specialist practices for hotels, coffee, premium foods, aviation and automobiles — by Unruffled Feathers."
        exploreLinks={FOOTER_LINKS}
      />
    </>
  );
}
