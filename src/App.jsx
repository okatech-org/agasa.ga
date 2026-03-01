import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import Services from "./pages/Services";
import Actualites from "./pages/Actualites";
import Reglementation from "./pages/Reglementation";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/services" element={<Services />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/reglementation" element={<Reglementation />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
