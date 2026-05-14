import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";  

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />  // ✅ add this
      </Routes>
    </BrowserRouter>
  );
}

export default App;