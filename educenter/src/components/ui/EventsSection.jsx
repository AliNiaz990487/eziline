import { IoLocationOutline } from "react-icons/io5";
import Img1 from "../../assets/images/event-1.jpg";
import Img2 from "../../assets/images/event-2.jpg";
import Img3 from "../../assets/images/event-3.jpg";

const EventCard = ({ img, title, date }) => (
    <div className="card tw-transition-all hover:tw-shadow-md border-0">
        <div className="card-img-top tw-relative">
            <img src={img} className='card-img-top' alt="..." />
            <div className="tw-absolute tw-top-0 tw-left-0 tw-text-center bg-primary tw-text-white fs-2 fw-bold tw-p-2">
                <p className="tw-tracking-widest">{date}</p>
                <p className="fs-5">DECEMBER</p>
            </div>
        </div>
        <div className="card-body">
            <div className="fs-6 tw-text-gray-600 tw-py-2">
                <span className="tw-inline-block"><IoLocationOutline /></span>
                <span>Dhanmondi Lake, Dhaka</span>
            </div>
            <h5 className="card-title fs-4 fw-bold hover-primary-color">{title}</h5>
        </div>
    </div>
)

const Events = () => {
    return (
        <div className="tw-bg-gray-100">
            <div className="container tw-py-24">
                <div className="d-flex tw-items-center tw-gap-5">
                    <h4 className="fs-2 fw-bold tw-flex-grow-0">Upcoming Events</h4>
                    <hr className="tw-flex-1 tw-text-gray-400" />
                    <a href="" className="btn btn-primary tw-flex-grow-0">See All</a>
                </div>

                <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-8 tw-pt-8">
                    <EventCard img={Img1} title="Lorem ipsum dolor amet, consectetur adipisicing." date="18" />
                    <EventCard img={Img2} title="Lorem ipsum dolor amet, consectetur adipisicing." date="21" />
                    <EventCard img={Img3} title="Lorem ipsum dolor amet, consectetur adipisicing." date="23" />
                </div>
            </div>
        </div>
    )
}
export { EventCard }
export default Events
