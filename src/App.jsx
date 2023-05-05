import TestPage from "./pages/TestPage";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowToPlaySection from "./components/HowToPlay";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Route, Routes, useNavigate } from "react-router-dom";
export default function App() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero navigate={navigate} />} />

        <Route path="/how-to-play" element={<HowToPlaySection />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/test" element={<TestPage />} />
      </Routes>
      <Footer />
    </>
  );
}
