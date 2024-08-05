import Header from "../components/ui/Header"
import Hero2 from "../components/ui/Hero2"
import { NewsCard } from "../components/ui/NewsSection"
import Footer from "../components/ui/Footer"

import Img1 from "../assets/images/event-1.jpg"
import Img2 from "../assets/images/event-2.jpg"
import Img3 from "../assets/images/event-3.jpg"


import { links } from "../App"

const BlogMain = () => (
    <div className="container tw-py-32">
        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-8 tw-py-10">
            <NewsCard img={Img1} date="August 28, 2018" name="Somrat Sorkar"/>
            <NewsCard img={Img2} date="August 13, 2018" name="Jonathon Drew"/>
            <NewsCard img={Img3} date="August 24, 2018" name="Alex Pitt"/>

            <NewsCard img={Img1} date="August 28, 2018" name="Somrat Sorkar"/>
            <NewsCard img={Img2} date="August 13, 2018" name="Jonathon Drew"/>
            <NewsCard img={Img3} date="August 24, 2018" name="Alex Pitt"/>
        </div>
    </div>
)



const Events = () => {
    return (
        <>
            <Header activeLinkIndex={4} />
            <Hero2 linkTitle="Home" title="Our Blog" link={links["home"]} />
            <BlogMain />
            <Footer />
        </>
    )
}

export default Events
