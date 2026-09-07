import Preloader from "./components/Preloader.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Opportunities from "./components/Opportunities.jsx";
import Market from "./components/Market.jsx";
import Team from "./components/Team.jsx";
import Assignments from "./components/Assignments.jsx";
import CtaBand from "./components/CtaBand.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

export default function App() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <Hero />
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
      <WhatsAppButton />
    </>
  );
}
