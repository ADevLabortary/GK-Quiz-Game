import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HowToPlaySection from "./components/HowToPlay"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
 
  
  return (
    <div>
    <Navbar />
    <Hero />
    <hr />
    <HowToPlaySection/>
    <hr />
    <About />
    <hr />
    <Contact />
    <hr />
    <Footer />
    </div>
  )
}
