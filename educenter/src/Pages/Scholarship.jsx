import Header from "../components/ui/Header"
import Hero2 from "../components/ui/Hero2"
import Footer from "../components/ui/Footer"

import Img from "../assets/images/scholarship.jpg"
import Img1 from "../assets/images/scholarship-item-1.jpg";
import Img2 from "../assets/images/scholarship-item-2.jpg";
import Img3 from "../assets/images/scholarship-item-3.jpg";

import { GoDotFill } from "react-icons/go";
import { links } from "../App"

const ScholarshipCard = ({ title, subtitle, img }) => (
    <div className="card border-0 border-bottom hover:tw-shadow-md tw-transition-all tw-text-gray-600">
        <img src={img} alt="" className="card-top-image" />
        <div className="card-body">
            <p>{subtitle}</p>
            <div className="card-title fs-3 fw-bold tw-text-black">{title}</div>
            <p className="card-text"> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <ul className="tw-py-4">
                <li className="tw-pt-2"><span className="tw-translate-y-1 tw-text-color-primary tw-inline-block"><GoDotFill /></span> Digital Access to Scholarship at Smart</li>
                <li className="tw-pt-2"><span className="tw-translate-y-1 tw-text-color-primary tw-inline-block"><GoDotFill /></span> institutes</li>
                <li className="tw-pt-2"><span className="tw-translate-y-1 tw-text-color-primary tw-inline-block"><GoDotFill /></span> Smart-affiliated hospitals and research</li>
                <li className="tw-pt-2"><span className="tw-translate-y-1 tw-text-color-primary tw-inline-block"><GoDotFill /></span> Smart Catalyst</li>
                <li className="tw-pt-2"><span className="tw-translate-y-1 tw-text-color-primary tw-inline-block"><GoDotFill /></span> Smart Library Portal</li>
                <li className="tw-pt-2"><span className="tw-translate-y-1 tw-text-color-primary tw-inline-block"><GoDotFill /></span> Smart reasearch programs and departments</li>
            </ul>
        </div>
    </div>
)

const ScholarshipMain = () => (
    <div className="container tw-py-24 tw-pb-32 tw-text-gray-600 fs-6">
        <div className="md:tw-flex tw-gap-12">
            <div className="tw-flex-1 tw-pb-16">
                <img src={Img} className="tw-min-w-full" alt="" />
            </div>
            <div className="tw-flex-1">
                <h4 className="tw-uppercase fs-2 fw-bold">scholarships news</h4>
                <p className="fw-bold tw-py-2">Our campuses are living laboratories for sustainability.</p>
                <p className="tw-pb-12 tw-py-4">Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et.dolore magna aliquauis aute irure dolor. in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas cum ut ab nesciunt distinctio maxime expedita fugit laborum? Aliquid, quia.</p>
            </div>
        </div>

        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-8">
            <ScholarshipCard img={Img1} title="Chemical Engineering" subtitle="Engineering" />
            <ScholarshipCard img={Img2} title="Music & Arts" subtitle="Design & Arts" />
            <ScholarshipCard img={Img3} title="Graphics Design" subtitle="Design & Arts" />
        </div>
    </div>
)



const Scholarship = () => {
    return (
        <>
            <Header />
            <Hero2 linkTitle="Home" title="Scholarship" link={links["home"]} />
            <ScholarshipMain />
            <Footer />
        </>
    )
}

export default Scholarship
