import { lazy, Suspense } from "react"

const Home = lazy(() => import("./Pages/Home"))
const About = lazy(() => import("./Pages/About"))
const Cources = lazy(() => import("./Pages/Cources"))
const Events = lazy(() => import("./Pages/Events"))
const Blog = lazy(() => import("./Pages/Blog"))
const Teacher = lazy(() => import("./Pages/Teacher"))
const TeacherSingle = lazy(() => import("./Pages/TeacherSingle"))
const Notice = lazy(() => import("./Pages/Notice"))
const NoticeDetails = lazy(() => import("./Pages/NoticeDetails"))
const Research = lazy(() => import("./Pages/Research"))
const Scholarship = lazy(() => import("./Pages/Scholarship"))
const CourseDetails = lazy(() => import("./Pages/CourseDetails"))
const EventDetails = lazy(() => import("./Pages/EventDetails"))
const BlogDetails = lazy(() => import("./Pages/BogDetails"))
const Contact = lazy(() => import("./Pages/Contact"))

import { Routes, Route } from "react-router"
import Loader from "../src/assets/images/preloader.gif"
const links = {
  "home": "/",
  "about": "/about",
  "cources": "/cources",
  "events": "/events",
  "blog": "/blog",
  "pages": "",

  "teacher": "/teacher",
  "teacher-single": "/teacher-single",
  "notice": "/notice",
  "notice-details": "/notice-details",
  "research": "/research",
  "sholoarship": "/sholarship",
  "course-detail": "course-detail",
  "event-detail": "/evennt-detail",
  "blog-detail": "/blog-detail",

  "contact": "/contact"
}

const PreLoader = () => (
  <div className="tw-h-screen tw-bg-center tw-bg-no-repeat" style={{backgroundColor: "#ffdc11", backgroundImage: `url('${Loader}')`}}>
  </div>
)

function App() {

  return (
    <Suspense fallback={<PreLoader />}>
      <Routes>
        <Route path={links["home"]} element={<Home />} />
        <Route path={links["about"]} element={<About />} />
        <Route path={links["cources"]} element={<Cources />} />
        <Route path={links["events"]} element={<Events />} />
        <Route path={links["blog"]} element={<Blog />} />
        <Route path={links["teacher"]} element={<Teacher />} />
        <Route path={links["teacher-single"]} element={<TeacherSingle />} />
        <Route path={links["notice"]} element={<Notice />} />
        <Route path={links["notice-details"]} element={<NoticeDetails />} />
        <Route path={links["research"]} element={<Research />} />
        <Route path={links["sholoarship"]} element={<Scholarship />} />
        <Route path={links["course-detail"]} element={<CourseDetails />} />
        <Route path={links["event-detail"]} element={<EventDetails />} />
        <Route path={links["blog-detail"]} element={<BlogDetails />} />
        <Route path={links["contact"]} element={<Contact />} />
  
      </Routes>
    </Suspense>
  )
}
export { links }
export default App
