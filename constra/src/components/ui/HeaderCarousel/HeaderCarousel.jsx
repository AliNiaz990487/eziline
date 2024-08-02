import React from 'react';
import Img1 from "../../../assets/images/bg1.jpg";
import Img2 from "../../../assets/images/bg2.jpg";
import Img3 from "../../../assets/images/bg3.jpg";
import "./HeaderCarousel.css";

const HeaderCarousel = () => {
    return (
        <section className="carousel-container">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button className="active" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                    <button className="" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button className="" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000" style={{ maxHeight: "90vh" }}>
                        <img src={Img1} className="d-block w-100" alt="Slide 1" />
                        <div className="carousel-caption d-none d-md-block w-100">
                            <h3 className="animate-text-from-left display-1 fs-4">17 YEARS OF EXCELLENCE IN</h3>
                            <h1 className="animate-text-from-bottom fw-bold">CONSTRUCTION INDUSTRY</h1>
                            <div className="btn-group gap-4">
                                <a href="#" className="rounded-0 btn btn-primary animate-text-from-bottom">OUR SERVICES</a>
                                <a href="#" className="rounded-0 text-white btn btn-outline-primary fs-6 animate-text-from-bottom">CONTACT NOW</a>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="2000" style={{ maxHeight: "90vh" }}>
                        <img src={Img2} className="d-block w-100" alt="Slide 2" />
                        <div className="carousel-caption d-none d-md-flex flex-column align-items-start">
                            <a href="" className="rounded-0 btn btn-primary mb-3">WORLD CLASS SERVICE</a>
                            <h3 className="animate-text-from-left display-1 fs-4">WHEN SERVICE MATTERS</h3>
                            <h1 className="animate-text-from-bottom fw-bold text-nowrap">YOUR CHOICE IS SIMPLE</h1>
                            <a href="#" className="rounded-0 text-white btn btn-outline-primary fs-6 animate-text-from-bottom">OUR SERVICES</a>
                        </div>
                    </div>

                    <div className="carousel-item" style={{ maxHeight: "90vh" }}>
                        <img src={Img3} className="d-block w-100" alt="Slide 3" />
                        <div className="carousel-caption d-none d-md-flex flex-column align-items-end">
                            <h3 className="animate-text-from-left display-1 fs-4">MEET OUR ENGINERS</h3>
                            <h1 className="animate-text-from-bottom fw-bold text-nowrap">WE BELIVE SUSTAINABLITY</h1>
                            <p className="fs-6 animate-text-from-left">We deal with your failure that determines how you acheive sucess</p>
                            <div className="btn-group gap-4">
                                <a href="#" className="rounded-0 btn btn-primary animate-text-from-bottom">OUR SERVICES</a>
                                <a href="#" className="rounded-0 text-white btn btn-outline-primary fs-6 animate-text-from-bottom">CONTACT NOW</a>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev w-auto" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="btn btn-dark rounded-0 p-4 m-4 carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next w-auto" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="btn btn-dark rounded-0 p-4 m-4 carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container bg-primary carousel-banner">
                <div className="d-flex justify-content-between align-items-center p-3">
                    <h4 className="text-white fs-5 fw-bold">WE UNDERSTAND YOU NEEDS ON CONSTRUCTION</h4>
                    <button className='btn btn-primary bg-dark rounded-0 border-0'>REQUEST QUOTE</button>
                </div>
            </div>
        </section>
    );
}

export default HeaderCarousel;
