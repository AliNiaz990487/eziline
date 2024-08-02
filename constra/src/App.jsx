import { Routes, Route } from "react-router-dom";

import Home1 from "./Pages/Home1/Home1";
import Home2 from "./Pages/Home2/Home2";
import AboutUs from "./Pages/AboutUs/AboutUs";
import OurPeople from "./Pages/OurPeople/OurPeople";
import Testimonials from "./Pages/Testimonials/Testimonials";
import Faq from "./Pages/Faq/Faq"
import Pricing from "./Pages/Pricing/Pricing"
import ProjectsAll from "./Pages/ProjectsAll/ProjectsAll";
import ProjectsSingle from "./Pages/ProjectsSingle/ProjectsSingle"
import ServicesAll from "./Pages/ServicesAll/ServicesAll"
import ServicesSingle from "./Pages/ServicesSingle/ServicesSingle";
import News from "./Pages/News/News";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home1 />} />
      <Route path="/home2" element={<Home2 />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/our-people" element={<OurPeople />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/projects-all" element={<ProjectsAll />} />
      <Route path="/projects-single" element={<ProjectsSingle />} />
      <Route path="/services-all" element={<ServicesAll />} />
      <Route path="/services-single" element={<ServicesSingle />} />
      <Route path="/news-single" element={<News />} />
      <Route path="/news-left-sidebar" element={<News />} />
      <Route path="/news-right-sidebar" element={<News className="flex-row-reverse" />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
