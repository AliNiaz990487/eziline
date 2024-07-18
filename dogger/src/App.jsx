import Home from "./pages/Home/Home.jsx";
import DetailPage from "./pages/DetailPage/DetailPage.jsx";
import "./assets/global.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-page" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
