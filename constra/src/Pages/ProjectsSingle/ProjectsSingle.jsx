import LocationAndSocial from "../../components/ui/LocationAndSocial/LocationAndSocial"
import LogoAndContact from "../../components/ui/LogoAndContact/LogoAndContact"
import Navbar from "../../components/ui/Nav/Nav";
import Header from "../../components/ui/Header/Header"
import Img1 from "../../assets/images/project4.jpg"
import Img2 from "../../assets/images/project5.jpg"
import Footer from "../../components/ui/Footer/Footer"
const ProjectSection = () => (
    <div className="container">
        <div className="row my-5 p-5">
            <div className="col12 pb-5 col-md-8 pb-md-0">
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
            </div>

            <div className="col12 col-md-4">
                <h4 className="fs-5 fw-bold">CAPITAL TELTWAY BUILDING</h4>
                <p className="fs-6">Morbi turpis nisl, auctor ut nisl vel, pellentesque euismod nunc nunc accumsan imperdiet.</p>
                <p className="fs-6 fw-bold">Client</p>
                <p className="fs-6">Pransbay Powers Authority</p>
                <p className="fs-6 fw-bold">Architect</p>
                <p className="fs-6">Dlarke Pelli Incorp</p>
                <p className="fs-6 fw-bold">Location</p>
                <p className="fs-6">McLean, VA</p>
                <p className="fs-6 fw-bold">Size</p>
                <p className="fs-6">65,000 SF</p>
                <p className="fs-6 fw-bold">Year Completed</p>
                <p className="fs-6">2015</p>
                <p className="fs-6 fw-bold">Categories</p>
                <p className="fs-6">Commercial, Interiors</p>
                <button className="btn btn-primary rounded-0">VIEW PROJECT</button>
            </div>
        </div>
    </div>
)
const ProjectsSingle = () => {
    return (
        <div>
            <LocationAndSocial />
            <LogoAndContact />
            <Navbar />
            <Header title="PROJECT" tab1="PROJECT" tab2="PROJECTS SINGLE" />
            <ProjectSection />
            <Footer />
        </div>
    )
}

export default ProjectsSingle
