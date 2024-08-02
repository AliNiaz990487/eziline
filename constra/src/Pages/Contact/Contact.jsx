import LocationAndSocial from "../../components/ui/LocationAndSocial/LocationAndSocial"
import LogoAndContact from "../../components/ui/LogoAndContact/LogoAndContact"
import Navbar from "../../components/ui/Nav/Nav";
import Header from "../../components/ui/Header/Header"
import Form from "../../components/forms/Form"
import Footer from "../../components/ui/Footer/Footer"



import { FaLocationDot} from "react-icons/fa6";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const ContactCard = ({icon, title, label}) => (
        <div className="text-center bg-dark text-white p-4" style={{minWidth: "15rem", minHeight: "10rem"}}>
            <span className="fs-5 bg-primary rounded-circle p-3">{icon}</span>
            <div className="fs-6 fw-bold mt-3">{title}</div>
            <div className="fs-6">{label}</div>
        </div>
)

const ContactCards = () => (
    <div className="container my-5">
        <div className="d-flex justify-content-center gap-5 flex-wrap">
            <ContactCard icon={<FaLocationDot />} title="VISIT OUR OFFICE" label="9051 Constra Incorporate, USA"/>
            <ContactCard icon={<FaEnvelope />} title="EMAIL US" label="office@Consta.com"/>
            <ContactCard icon={<FaPhone />} title="CALL US" label="(+9) 847-291-4353"/>
        </div>

    </div>
)

const Contact = () => {
    return (
        <div>
            <LocationAndSocial />
            <LogoAndContact />
            <Navbar />
            <Header title="CONTACT" tab1="COMPANY" tab2="CONTACT US" />
            <ContactCards />
            <div className="container"><Form /></div>
            <Footer />
        </div>
    )
}

export default Contact