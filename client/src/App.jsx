import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Landing from "./pages/Landing.jsx";
import EducationPage from "./pages/EducationPage.jsx";
import FilmPage from "./pages/FilmPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/film" element={<FilmPage />} />
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  );
}
