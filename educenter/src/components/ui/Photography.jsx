import { FaClock, FaMoneyBill } from "react-icons/fa"
import { IoBookOutline } from "react-icons/io5";
import Img from "../../assets/images/course-single.jpg"

const TimeDetail = ({ icon, title, duration }) => (
    <div className="d-flex tw-items-center tw-gap-4">
        <span className="fs-2 text-primary">{icon}</span>
        <div className="tw-text-center">
            <h4 className="fs-4 tw-uppercase fw-bold">{title}</h4>
            <p className="fs-6 tw-font-normal">{duration}</p>
        </div>
    </div>
)
const Photography = ({ title }) => {
    return (
        <div className="container">
            <div className="card border-0 border-bottom">
                <img src={Img} alt="" className="card-top-image" />
                <div className="card-body px-0">
                    <div className="d-flex tw-justify-center md:tw-justify-between tw-flex-wrap tw-gap-y-6">
                        <div className="tw-flex tw-gap-7 tw-justify-center tw-items-center tw-flex-wrap">
                            <h4 className="fs-2 fw-bold">{title}</h4>
                            <TimeDetail icon={<IoBookOutline />} title="courses" duration="06 Month" />
                            <TimeDetail icon={<FaClock />} title="Duration" duration="03 Hours" />
                            <TimeDetail icon={<FaMoneyBill />} title="Fee" duration="From: $699" />
                        </div>
                        <div className="tw-text-end">
                            <a href="" className="btn btn-primary">Apply Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { TimeDetail }
export default Photography
