import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Testimonial1 from "../../../assets/images/testimonial1.png";
import Testimonial2 from "../../../assets/images/testimonial2.png";
import Testimonial3 from "../../../assets/images/testimonial3.png";
import Client1 from "../../../assets/images/client1.png";
import Client2 from "../../../assets/images/client2.png";
import Client3 from "../../../assets/images/client3.png";
import Client4 from "../../../assets/images/client4.png";
import Client5 from "../../../assets/images/client5.png";
import Client6 from "../../../assets/images/client6.png";
import { FaQuoteLeft } from "react-icons/fa";

const HappyClients = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="container px-3 px-md-5">
            <div className="row m-0 m-md-5 px-0 px-md-4 row-gap-4">
                <div className="testimonials col-12 col-md-6">
                    <div>
                        <h6 className="fw-bold">TESTIMONIALS</h6>
                        <Slider {...settings}>
                            <div className="d-flex gap-3">
                                <p className="fs-3 text-primary"><FaQuoteLeft /></p>
                                <div className="mt-4">
                                    <p className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus minima, nostrum temporibus esse expedita, incidunt nesciunt nulla quae ipsum in unde distinctio. Expedita eius delectus natus, autem voluptate dolorem ducimus minima!</p>
                                    <div className="d-flex align-items-center gap-3">
                                        <img src={Testimonial1} className="rounded-3" alt="Client 1" />
                                        <div>
                                            <h6 className="text-primary fw-bold">WELDON CASH</h6>
                                            <p className="fs-6">CFO, First Choice</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex gap-3">
                                <p className="fs-3 text-primary"><FaQuoteLeft /></p>
                                <div className="mt-4">
                                    <p className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus minima, nostrum temporibus esse expedita, incidunt nesciunt nulla quae ipsum in unde distinctio. Expedita eius delectus natus, autem voluptate dolorem ducimus minima!</p>
                                    <div className="d-flex align-items-center gap-3">
                                        <img src={Testimonial2} className="rounded-3" alt="Client 2" />
                                        <div>
                                            <h6 className="text-primary fw-bold">WELDON CASH</h6>
                                            <p className="fs-6">CFO, First Choice</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex gap-3">
                                <p className="fs-3 text-primary"><FaQuoteLeft /></p>
                                <div className="mt-4">
                                    <p className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus minima, nostrum temporibus esse expedita, incidunt nesciunt nulla quae ipsum in unde distinctio. Expedita eius delectus natus, autem voluptate dolorem ducimus minima!</p>
                                    <div className="d-flex align-items-center gap-3">
                                        <img src={Testimonial3} className="rounded-3" alt="Client 3" />
                                        <div>
                                            <h6 className="text-primary fw-bold">WELDON CASH</h6>
                                            <p className="fs-6">CFO, First Choice</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="happy-clients col-12 col-md-6 py-4 py-md-0">
                    <div>
                        <h6 className="fw-bold">HAPPY CLIENTS</h6>
                        <div className="d-flex flex-wrap gap-3 justify-content-center">
                            {[Client1, Client2, Client3, Client4, Client5, Client6].map((client, index) => (
                                <div key={index} className="border p-1" style={{width: "10rem"}}>
                                    <img src={client} className="img-fluid" alt={`Client ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HappyClients;
