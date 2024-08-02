import LocationAndSocial from "../../components/ui/LocationAndSocial/LocationAndSocial"
import LogoAndContact from "../../components/ui/LogoAndContact/LogoAndContact"
import Navbar from "../../components/ui/Nav/Nav";
import Header from "../../components/ui/Header/Header"
import { TestimonialCard } from "../../Pages/Testimonials/Testimonials"
import Footer from "../../components/ui/Footer/Footer"

import Img1 from "../../assets/images/project1.jpg"
import Img2 from "../../assets/images/project2.jpg"
import Img3 from "../../assets/images/testimonial1.png"
import "./ServicesSingle.css"

const Solutions = () => (
    <div className="solutions">
        <div className="solution">Home Construction</div>
        <div className="solution solution-active">Building Remodels</div>
        <div className="solution">Interior Design</div>
        <div className="solution">Exterior Design</div>
        <div className="solution">Renovation</div>
        <div className="solution">Safety Management</div>
    </div>
)

const Carousel = () => (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={Img1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img src={Img2} className="d-block w-100" alt="..." />
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
)

const Accordion = () => (
    <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed fs-6 fw-bold p-0 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    DOES THE LAW REQUIRE HEAD PROTECTION ON CONSTRUCTION SITES?
                </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body fs-6">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidata </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed fs-6 fw-bold p-0 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    WHT ARE THE FIRST AID REQUIREMENTS FOR SITES?
                </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body fs-6">Anemi nim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid henderit in voluptate velit esse cillu oris nisi ut aliquip ex ea com matat. </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed fs-6 fw-bold p-0 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    WHAT IS AN APPOINTED PERSON?
                </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body fs-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
            </div>
        </div>
    </div>
)

const ServiceSection = () => (
    <div className="container my-5 py-5">
        <div className="row">
            <div className="col12 col-md-3">
                <h4 className="fs-6 fw-bold border-primary border-start ps-3 mb-4">SOLUTIONS</h4>
                <Solutions />
                <TestimonialCard image={Img3} name="GABRIEL DENIS" company="Chairman, Okt Industries" />
            </div>

            <div className="col12 col-md-9">
                <h4 className="fs-4 fw-bold mb-4">BUILDING REMODELS</h4>
                <p className="fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien.</p>
                <p className="fs-6">Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. , nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo iaculis ligula, ac dapibus quam ornare ut. Praesent ac hendrerit sem, et tempus sem</p>
                <Carousel />
                <div className="row my-5">
                    <div className="col-12 col-sm-6">
                        <h4 className="fs-5 fw-bold">WHAT MAKES US DIFFERENT</h4>
                        <p className="fs-6">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat tincidunt nunc posuere.</p>
                        <div className="service-points">
                            <p className="fs-6">Partnership Strategy tristique eleifend.</p>
                            <p className="fs-6">Opporutnity to work with amet elit a.</p>
                            <p className="fs-6">Saving Time to Deal with commodo iaculis.</p>
                            <p className="fs-6">Leadership skills to manage erat volutpat.</p>
                            <p className="fs-6">Cut cost without sacrificing dolore magna.</p>
                            <p className="fs-6">Automate your business elis tristique.</p>
                        </div>
                    </div>
                    <div className="col12 col-sm-6">
                        <h4 className="fs-5 fw-bold">YOU SHOUL KNOW</h4>
                        <Accordion />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const ServicesSignle = () => {
    return (
        <div>
            <LocationAndSocial />
            <LogoAndContact />
            <Navbar />
            <Header title="SERVICE" tab1="SERVICES" tab2="SERVICE SINGLE" />
            <ServiceSection />
            <Footer />
        </div>
    )
}

export default ServicesSignle
