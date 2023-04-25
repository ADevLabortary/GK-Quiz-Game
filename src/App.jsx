import Home from "./pages/Home";
import TestPage from "./pages/TestPage";
import Navbar from "./components/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
export default function App() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home navigate={navigate} />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </>
  );
}
