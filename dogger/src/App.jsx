import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home/Home.jsx"))
const DetailPage = lazy(() => import("./pages/DetailPage/DetailPage.jsx"))
import "./assets/global.css";
import { FaPaw } from "react-icons/fa";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const PreLoader = () => (
  <div className="preloader">
    <span><FaPaw /></span>
  </div>
)
function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<PreLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail-page" element={<DetailPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
