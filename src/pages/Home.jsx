import React from "react";
import Hero from "../components/Hero";
import HowToPlaySection from "../components/HowToPlay";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home({ navigate }) {
  return (
    <div>
      <Hero navigate={navigate} />
      <hr />
      <HowToPlaySection />
      <hr />
      <About />
      <hr />
      <Contact />
      <hr />
      <Footer />
    </div>
  );
}

export default Home;
