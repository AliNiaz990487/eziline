import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Hotels from "./pages/Hotels/Hotels.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import News from "./pages/News/News.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Nav from "./components/ui/Nav/Nav.jsx";
import "./assets/global.css";


export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}




