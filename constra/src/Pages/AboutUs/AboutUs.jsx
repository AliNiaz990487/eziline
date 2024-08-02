import LocationAndSocial from "../../components/ui/LocationAndSocial/LocationAndSocial"
import LogoAndContact from "../../components/ui/LogoAndContact/LogoAndContact"
import Navbar from "../../components/ui/Nav/Nav"
import Header from "../../components/ui/Header/Header"
import Stats from "../../components/ui/Stats/Stats"
import TeamCards from "../../components/ui/TeamCards/TeamCards"
import Footer from "../../components/ui/Footer/Footer"

import Image1 from "../../assets/images/slide-page1.jpg"
import Image2 from "../../assets/images/slide-page2.jpg"
import Image3 from "../../assets/images/slide-page3.jpg"

import { FaQuoteLeft } from "react-icons/fa";

const WhoWeAre = () => (
    <div className="container">
        <div className="row my-5">
            <div className="col-12 col-md-6">
                <h4 className="fs-5 fw-bold">WHO WE ARE</h4> 
                <div className="fs-6">
                    <p>when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
                    <div className="bg-primary-subtle border-primary border-start d-flex gap-3 p-1">
                        <span className="fs-5 text-dark"><FaQuoteLeft /></span>
                        <p className="pt-3">Semporibus autem quibusdam et aut officiis debitis aut rerum est aut optio cumque nihil necessitatibus autemn ec tincidunt nunc posuere ut</p>
                    </div>
                    <p>He lay on his armour-like back, and if he lifted. ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing.</p>
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div id="carouselExampleFade" className="carousel slide carousel-fade">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Image1} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block w-50">
                                <h5 className="fw-bold fs-5 px-1 py-2"  style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>LEADERSHIP</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Image2} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block w-75">
                                <h5 className="fw-bold fs-5 px-1 py-2"  style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>RELASTIONSHIPS</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Image3} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block w-75">
                                <h5 className="fw-bold fs-5 px-1 py-2"  style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>PERFORMANCE</h5>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
)
const AboutUs = () => {
    return (
        <div>
            <LocationAndSocial />
            <LogoAndContact />
            <Navbar />
            <Header title="ABOUT" tab1="COMPANY" tab2="ABOUT US" />
            <WhoWeAre />
            <Stats />
            <div className="text-center mt-3">
                <p className="fs-6 m-1">QUALITY SERVICE</p>
                <p className="fs-3 fw-bold">PROFESSIONAL TEAM</p>
            </div>
            <TeamCards />
            <Footer />
        </div>
    )
}

export default AboutUs
