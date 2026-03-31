import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import PortfolioContact from "./pages/PortfolioContact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioContact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;