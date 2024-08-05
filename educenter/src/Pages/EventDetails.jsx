import Header from "../components/ui/Header"
import Hero2 from "../components/ui/Hero2"
import Photography, { TimeDetail } from "../components/ui/Photography";
import Footer from "../components/ui/Footer"

import { links } from "../App"
import { EventCard } from "../components/ui/EventsSection";

import Img1 from "../assets/images/speaker-1.jpg"
import Img2 from "../assets/images/speaker-2.jpg"
import Img3 from "../assets/images/speaker-3.jpg"
import Img4 from "../assets/images/speaker-4.jpg"
import { IoLocationOutline } from "react-icons/io5";


import EventImg1 from "../assets/images/event-1.jpg";
import EventImg2 from "../assets/images/event-2.jpg";
import EventImg3 from "../assets/images/event-3.jpg";


const EventDetailsCard = ({ img, name }) => (
    <div className="tw-flex tw-gap-4">
        <img src={img} alt="" />
        <div className="">
            <h4 className="fs-3 fw-bold">{name}</h4>
            <p>Teacher</p>
        </div>
    </div>
)

const EventDetailsMain = () => {

    return (
        <div className="container tw-text-gray-600 fs-6 tw-leading-7">
            <h4 className="fs-3 fw-bold tw-text-color-secondary tw-py-4 tw-pt-12">About Event</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <h4 className="fs-3 fw-bold tw-text-color-secondary tw-py-4 tw-pt-12">Event Speakers</h4>

            <div className="d-flex tw-flex-wrap tw-justify-between tw-pb-8 border-bottom">
                <EventDetailsCard img={Img1} name="Jack Mastio" />
                <EventDetailsCard img={Img2} name="John Doe" />
                <EventDetailsCard img={Img3} name="Randy Luis" />
                <EventDetailsCard img={Img4} name="Alfred Jin" />
            </div>
        </div>
    )
}



const EventDetails = () => {
    return (
        <>
            <Header />
            <Hero2 linkTitle="Upcoming Events" title="Event Details" link={links["events"]} />
            <div className="container tw-pt-20">
                <h4 className="text-secondary fs-1 fw-bold tw-py-8">English Spoken</h4>
            </div>
            <Photography
                title={<TimeDetail icon={<IoLocationOutline />} title="Location" duration="Dhanmondi, Dhaka" />} />
            <EventDetailsMain />
            <div className="container tw-pt-8 tw-pb-36">
                <h4 className="text-secondary fs-1 fw-bold tw-py-3">More Events</h4>
                <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-8 tw-pt-8">
                    <EventCard img={EventImg1} title="Lorem ipsum dolor amet, consectetur adipisicing." date="18" />
                    <EventCard img={EventImg2} title="Lorem ipsum dolor amet, consectetur adipisicing." date="21" />
                    <EventCard img={EventImg3} title="Lorem ipsum dolor amet, consectetur adipisicing." date="23" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default EventDetails
