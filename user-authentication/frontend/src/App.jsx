import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
const Home = lazy(() => import("./pages/Home"))
const User = lazy(() => import("./pages/User"))

const Preloader = () => (
  <div className="vh-100 d-flex justify-content-center align-items-center">
    <div class="spinner-border text-warning" style={{scale: "1.5"}} role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
)

function App() {
  return (
    // <Preloader />
    <Suspense fallback={<Preloader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Suspense>
  )
}

export default App
