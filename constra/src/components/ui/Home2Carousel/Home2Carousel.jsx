import Image1 from "../../../assets/images/bg4.jpg"
import Image2 from "../../../assets/images/bg5.jpg"


const Home2Carousel = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Image1} className="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block text-start p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.4)", height: "fit-content"}}>
                        <p className="fs-6">17 YEARS OF EXCELLENCE IN</p>
                        <h5 className="fw-bold fs-4">CONSTRUCTION INDUSTRY</h5>
                        <p style={{fontSize: ".8rem"}}>You have ideas, goals, and dreams. We hav a cluturally diverse, forward thinking team looking fo talent like</p>
                        <a className="btn btn-primary rounded-0">OUR SERVICE</a>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src={Image2} className="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block text-start p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.4)", height: "fit-content"}}>
                        <p className="fs-6">WHEN SERVICE MATTERS</p>
                        <h5 className="fw-bold fs-4">YOUR CHOICE IS SIMPLE</h5>
                        <p style={{fontSize: ".8rem"}}>You have ideas, goals, and dreams. We hav a cluturally diverse, forward thinking team looking fo talent like</p>
                        <a className="btn btn-primary rounded-0">KNOW US</a>
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
    )
}

export default Home2Carousel
