import Home from "./Pages/Home"
import About from "./Pages/About"
import Cources from "./Pages/Cources"
import Events from "./Pages/Events"
import Blog from "./Pages/Blog"
import Teacher from "./Pages/Teacher"
import TeacherSingle from "./Pages/TeacherSingle"
import Notice from "./Pages/Notice"
import NoticeDetails from "./Pages/NoticeDetails"
import Research from "./Pages/Research"
import Scholarship from "./Pages/Scholarship"
import CourseDetails from "./Pages/CourseDetails"
import EventDetails from "./Pages/EventDetails"
import BlogDetails from "./Pages/BogDetails.jsx"
import Contact from "./Pages/Contact.jsx"

import { Routes, Route } from "react-router"

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


function App() {

  return (
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
  )
}
export { links }
export default App
