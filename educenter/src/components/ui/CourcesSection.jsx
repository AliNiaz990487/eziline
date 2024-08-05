import { FaCalendar } from "react-icons/fa"
import Img1 from "../../assets/images/course-1.jpg"
import Img2 from "../../assets/images/course-2.jpg"
import Img3 from "../../assets/images/course-3.jpg"
import Img4 from "../../assets/images/course-4.jpg"
import Img5 from "../../assets/images/course-5.jpg"
import Img6 from "../../assets/images/course-6.jpg"


const CourceCard = ({ img, title }) => (
    <div className="card hover:tw-shadow-md tw-transition-all">
        <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body tw-py-5">
                <p className="fs-6 tw-text-gray-600"><span className="tw-inline-block"><FaCalendar /></span> 02-14-2018 <a href="" className="hover-primary-color">Humanities</a></p>
                <h5 className="card-title fs-3 fw-bold tw-pt-3 hover-primary-color">{title}</h5>
                <p className="card-text fs-6 tw-text-gray-600 tw-pb-3"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <a href="#" className="btn btn-primary">Apply Now</a>
            </div>
    </div>
)

const CourcesSection = () => {
    return (
        <div className="container">
            <div className="d-flex tw-items-center tw-gap-5">
                <h4 className="fs-2 fw-bold tw-flex-grow-0">Our Course</h4>
                <hr className="tw-flex-1 tw-text-gray-400"/>
                <a href="" className="btn btn-primary tw-flex-grow-0">See All</a>
            </div>

            <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-8 tw-py-10">
                <CourceCard img={Img1} title="Photography"/>
                <CourceCard img={Img2} title="Programming"/>
                <CourceCard img={Img3} title="Lifestyle Archives"/>
                <CourceCard img={Img4} title="Complete Freelancing"/>
                <CourceCard img={Img5} title="Branding Design"/>
                <CourceCard img={Img6} title="Art Design"/>
            </div>
        </div>
    )
}

export { CourceCard }
export default CourcesSection
