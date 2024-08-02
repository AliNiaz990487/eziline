import LocationAndSocial from "../../components/ui/LocationAndSocial/LocationAndSocial"
import LogoAndContact from "../../components/ui/LogoAndContact/LogoAndContact"
import Navbar from "../../components/ui/Nav/Nav";
import Header from "../../components/ui/Header/Header"
import { ServiceCard } from "../../components/ui/ServiceCards/ServiceCards";
import Footer from "../../components/ui/Footer/Footer"

import Img1 from "../../assets/images/service1.jpg"
import Img2 from "../../assets/images/service2.jpg"
import Img3 from "../../assets/images/service3.jpg"
import Img4 from "../../assets/images/service4.jpg"
import Img5 from "../../assets/images/service5.jpg"
import Img6 from "../../assets/images/service6.jpg"

import Icon1 from "../../assets/images/service-icon1.png"
import Icon2 from "../../assets/images/service-icon2.png"
import Icon3 from "../../assets/images/service-icon3.png"
import Icon4 from "../../assets/images/service-icon4.png"
import Icon5 from "../../assets/images/service-icon5.png"
import Icon6 from "../../assets/images/service-icon6.png"

const ServiceCards = () => (
    <div className="container my-5 py-5">
        <div className="d-flex flex-wrap gap-4 justify-content-center">
            <ServiceCard image={Img1} icon={Icon1} title="ZERO HARM EVERYDAY"/>
            <ServiceCard image={Img2} icon={Icon2} title="VIRTUAL CONSTRUCTION"/>
            <ServiceCard image={Img3} icon={Icon3} title="BUILD TO LAST"/>
            <ServiceCard image={Img4} icon={Icon4} title="EXTERIOR DESIGN"/>
            <ServiceCard image={Img5} icon={Icon5} title="RENOVATION"/>
            <ServiceCard image={Img6} icon={Icon6} title="SAFETY MANAGEMENT"/>
        </div>
    </div>
)

const ServicesAll = () => {
    return (
        <div>
            <LocationAndSocial />
            <LogoAndContact />
            <Navbar />
            <Header title="SERVICE" tab1="SERVICES" tab2="ALL SERVICE" />
            <ServiceCards />
            <Footer />
        </div>
    )
}

export default ServicesAll
