import Header from "../../components/ui/Header/Header.jsx";
import IntroCard from "../../components/ui/IntroCard/IntroCard.jsx";
import CarouselTopText from "../../components/ui/CarouselTopText/CarouselTopText.jsx";
import Carousel from "../../components/ui/Carousel/Carousel.jsx";
import BlogPostsTopText from "../../components/ui/BlogPostsTopText/BlogPostsTopText.jsx";
import TeamCards from "./TeamCards/TeamCards.jsx";
import Footer from "../../components/ui/Footer/Footer.jsx";

import "./AboutUs.css";

export default function AboutUs(props) {
    return (
        <>
            <Header heroText="About Us"/>
            <main>
                <IntroCard heading="Welcome Travel & Tours"/>
                <CarouselTopText heading="Hotel Gallery"/>
                <Carousel />
                <BlogPostsTopText className="team-about-us-bg" heading="Team"/>
                <TeamCards />
            </main>
            <Footer />
        </>
    )
}