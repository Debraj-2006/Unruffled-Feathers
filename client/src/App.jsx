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
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import { useTiltButtons } from "./hooks/useTiltButtons.js";
import { useTiltCards } from "./hooks/useTiltCards.js";

export default function App() {
  useTiltButtons();
  useTiltCards();

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
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
