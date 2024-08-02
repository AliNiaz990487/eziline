import LocationAndSocial from "../../components/ui/LocationAndSocial/LocationAndSocial"
import LogoAndContact from "../../components/ui/LogoAndContact/LogoAndContact"
import Navbar from "../../components/ui/Nav/Nav";
import Header from "../../components/ui/Header/Header"
import { TeamCard, Img1, Img2, Img3, Img4, Img5, Img6 } from "../../components/ui/TeamCards/TeamCards"
import Footer from "../../components/ui/Footer/Footer"
import "./OurPeople.css"
const OurPeoples = () => (
    <div className="container">
        <div className="d-flex flex-wrap justify-content-center gap-5 my-5">
            <TeamCard className="our-people-card our-people-card-md" name="NATS STENMAN" rank="Chief Operating Officer" image={Img1} />
            <TeamCard className="our-people-card our-people-card-md" name="ANGELA LYOUER" rank="Innovation Officer" image={Img2} />
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-5  mb-5">
            <TeamCard className="our-people-card our-people-card-md" name="MARK CONTER" rank="Safety Officer" image={Img3} />
            <TeamCard className="our-people-card our-people-card-md" name="AYESHA STEWART" rank="Finance Officer" image={Img4} />
            <TeamCard className="our-people-card our-people-card-md" name="DAVE CLARKTE" rank="Civil Engineer" image={Img5} />
            <TeamCard className="our-people-card our-people-card-md" name="ELTON JOE" rank="Site Supervisor" image={Img6} />
        </div>
    </div>
)


const OurPeople = () => {
    return (
        <div>
            <LocationAndSocial />
            <LogoAndContact />
            <Navbar />
            <Header title="OUR TEAM" tab1="COMPANY" tab2="OUR TEAM" />
            <div className="text-center mt-5 fs-3 fw-bold">OUR LEADERS</div>
            <OurPeoples />
            <Footer />
        </div>
    )
}

export default OurPeople
