import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home1 = lazy(() => import("./Pages/Home1/Home1"));
const Home2 = lazy(() => import("./Pages/Home2/Home2"));
const AboutUs = lazy(() => import("./Pages/AboutUs/AboutUs"));
const OurPeople = lazy(() => import("./Pages/OurPeople/OurPeople"));
const Testimonials = lazy(() => import("./Pages/Testimonials/Testimonials"));
const Faq = lazy(() => import("./Pages/Faq/Faq"));
const Pricing = lazy(() => import("./Pages/Pricing/Pricing"));
const ProjectsAll = lazy(() => import("./Pages/ProjectsAll/ProjectsAll"));
const ProjectsSingle = lazy(() => import("./Pages/ProjectsSingle/ProjectsSingle"));
const ServicesAll = lazy(() => import("./Pages/ServicesAll/ServicesAll"));
const ServicesSingle = lazy(() => import("./Pages/ServicesSingle/ServicesSingle"));
const News = lazy(() => import("./Pages/News/News"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));

const PreLoader = () => (
  <div className="min-vh-100 d-flex justify-content-center align-items-center">
    <div className="spinner-border text-warning" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
)

function App() {
  return (
    <Suspense fallback={<PreLoader />}>
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
    </Suspense>
  )
}

export default App
