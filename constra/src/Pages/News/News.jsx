import LocationAndSocial from "../../components/ui/LocationAndSocial/LocationAndSocial"
import LogoAndContact from "../../components/ui/LogoAndContact/LogoAndContact"
import Navbar from "../../components/ui/Nav/Nav";
import Header from "../../components/ui/Header/Header"
import { RecentPosts } from "../Faq/Faq";
import Footer from "../../components/ui/Footer/Footer"

import Img1 from "../../assets/images/news1.jpg"
import Img3 from "../../assets/images/news2.jpg"
import Img2 from "../../assets/images/news3.jpg"

import { FaMessage, FaPerson } from "react-icons/fa6";
import { FaCalendar, FaFolder } from "react-icons/fa";

const NewsCard = ({img, title}) => (
    <div className="">
        <div>{img}</div>
        <div className="d-flex gap-4 flex-wrap my-2">
            <div className="fs-6"><span><FaPerson /></span> <span>Admin</span></div>
            <div className="fs-6 border-start ps-3"><span><FaFolder /></span> <span>News</span></div>
            <div className="fs-6 border-start ps-3"><span><FaCalendar /></span> <span>June 14, 2016</span></div>
            <div className="fs-6 border-start ps-3"><span><FaMessage /></span> <span>03 Comments</span></div>
        </div>
        <a className="recent-post-link fs-5 fw-bold text-decoration-none text-dark ">{title}</a>
        <p className="fs-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur ...</p>
        <button className="btn btn-primary rounded-0">CONTINUE READING</button>
        <hr className="my-5"/>
    </div>
)

const NewsSection = ({className}) => (
    <div className="container">
      <div className={`row m-0 p-0 m-md-5 p-md-5 ${className}`}>
        <div className="col-12 col-md-3 my-5 my-md-0">
          <h4 className="fs-6 fw-bold border-primary border-start px-3">RECENT POSTS</h4>
          <RecentPosts />
        </div>

        <div className="col-12 col-md-9 ps-md-5">
            <NewsCard img={<img className="w-100" src={Img1} alt="" />} title="We Just Completes $17.6 Million Medical Clinic in Mid-Missouri" />
            <NewsCard img={<img className="w-100" src={Img3} alt="" />} title="Thundler Airport Water Reclamation Facility Expansion Project Named" />
            <NewsCard img={<img className="w-100" src={Img2} alt="" />} title="Silicon Bench An Cornike Begin Construction Of Large-Scale Solar Facilites For Trade" />
        </div>

      </div>
    </div>
)

const News = ({className}) => {
    return (
        <div>
            <LocationAndSocial />
            <LogoAndContact />
            <Navbar />
            <Header title="NEWS" tab1="NEWS" tab2="NEWS LEFT SIDEBAR" />
            <NewsSection className={className}/>
            <Footer />
        </div>
    )
}

export default News