import Header from "../components/ui/Header"
import Hero2 from "../components/ui/Hero2"
import { EventCard } from "../components/ui/EventsSection"
import Footer from "../components/ui/Footer"

import Img1 from "../assets/images/event-1.jpg"
import Img2 from "../assets/images/event-2.jpg"
import Img3 from "../assets/images/event-3.jpg"


import { links } from "../App"

const EventsMain = () => (
    <div className="container tw-py-32">
        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-8 tw-pt-8">
            <EventCard img={Img1} title="Lorem ipsum dolor amet, consectetur adipisicing." date="18" />
            <EventCard img={Img2} title="Lorem ipsum dolor amet, consectetur adipisicing." date="21" />
            <EventCard img={Img3} title="Lorem ipsum dolor amet, consectetur adipisicing." date="23" />

            <EventCard img={Img1} title="Lorem ipsum dolor amet, consectetur adipisicing." date="18" />
            <EventCard img={Img2} title="Lorem ipsum dolor amet, consectetur adipisicing." date="21" />
            <EventCard img={Img3} title="Lorem ipsum dolor amet, consectetur adipisicing." date="23" />
        </div>
    </div>
)



const Events = () => {
    return (
        <>
            <Header activeLinkIndex={3} />
            <Hero2 linkTitle="Home" title="Upcoming Events" link={links["home"]} />
            <EventsMain />
            <Footer />
        </>
    )
}

export default Events
