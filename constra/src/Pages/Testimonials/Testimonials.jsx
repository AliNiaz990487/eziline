import LocationAndSocial from "../../components/ui/LocationAndSocial/LocationAndSocial"
import LogoAndContact from "../../components/ui/LogoAndContact/LogoAndContact"
import Navbar from "../../components/ui/Nav/Nav";
import Header from "../../components/ui/Header/Header"

import Img1 from "../../assets/images/testimonial1.png"
import Img2 from "../../assets/images/testimonial2.png"
import Img3 from "../../assets/images/testimonial3.png"

import Footer from "../../components/ui/Footer/Footer"
import "./Testimonials.css"

const TestimonialCard = ({image, name, company}) => (
    <div className="testimonial-card">
        <div>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
        <div>
            <img src={image} alt="" />
            <p className="fs-6 fw-bold m-1 text-primary">{name}</p>
            <p className="">{company}</p>
        </div>
    </div>
)
const TestimonialsCards = () => (
    <div className="container mb-5">
        <div className="testimonial-cards">
            <TestimonialCard image={Img1} name="GABRIEL DENIS" company="Chairman, Okt Industries"/>
            <TestimonialCard image={Img2} name="WELDON CASH" company="CEO, First Choice Group"/>
            <TestimonialCard image={Img3} name="HYRAM IZZY" company="Dicrector, AKT Group"/>
        </div>
    </div>
)


const Testimonials = () => {
    return (
        <div>
            <LocationAndSocial />
            <LogoAndContact />
            <Navbar />
            <Header title="TESTIMONIAL" tab1="COMPANY" tab2="TESTIMONIAL" />
            <div className="text-center mt-5 fs-3 fw-bold">WHAT PEOPLE SAID</div>
            <TestimonialsCards />
            <Footer />
        </div>
    )
}
export { TestimonialCard }
export default Testimonials
