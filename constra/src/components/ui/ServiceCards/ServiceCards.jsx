import Image1 from "../../../assets/images/service1.jpg"
import Image2 from "../../../assets/images/service2.jpg"
import Image3 from "../../../assets/images/service3.jpg"
import Icon1 from "../../../assets/images/service-icon1.png"
import Icon2 from "../../../assets/images/service-icon2.png"
import Icon3 from "../../../assets/images/service-icon3.png"

import "./ServiceCards.css";

const ServiceCard = ({ image, icon, title }) => (
    <div className="service-card service-card-md">
        <img src={image} className="" alt="" />
        <div className="d-flex gap-3 mt-4">
            <img src={icon} className="align-self-start" alt="" />
            <div className="service-card-desc">
                <a href="/service-single" className="fs-6 fw-bold">{title}</a>
                <p className="fs-6">You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor suscipit.</p>
                <a href="/service-single" className="fs-6 text-decoration-none">LEARN MORE</a>
            </div>
        </div>
    </div>
)
const ServiceCards = () => {
    return (
    <div className="container my-5">
        <div className="d-flex gap-5 flex-wrap px-5 row-gap-3 justify-content-center">
            <ServiceCard image={Image1} icon={Icon1} title="ZERO HARM EVERYDAY" />
            <ServiceCard image={Image2} icon={Icon2} title="VIRTUAL CONSTRUCTION" />
            <ServiceCard image={Image3} icon={Icon3} title="BUILD TO LAST" />
        </div>
    </div>
    )
}
export { ServiceCard }
export default ServiceCards
