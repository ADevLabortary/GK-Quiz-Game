import Home from "./pages/Home"
import TestPage from "./pages/TestPage"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
export default function App() {
 
  
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
    </>
  )
}
