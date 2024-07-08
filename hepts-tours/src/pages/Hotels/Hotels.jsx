import Header from "../../components/ui/Header/Header.jsx";
import IntroCards from "./IntroCards/IntroCards.jsx";
import Experiences from "../../components/ui/Experiences/Experiences.jsx";
import CarouselTopText from "../../components/ui/CarouselTopText/CarouselTopText.jsx";
import Carousel from "../../components/ui/Carousel/Carousel.jsx";
import BlogPostsTopText from "../../components/ui/BlogPostsTopText/BlogPostsTopText.jsx";
import BlogPosts from "../../components/ui/BlogPosts/BlogPosts.jsx";
import Footer from "../../components/ui/Footer/Footer.jsx";

import "./Hotels.css";

export default function Hotels() {
    return (
        <>
            <Header heroText="Our Hotel" />
            <main>
                <Experiences />
                <IntroCards />
                <CarouselTopText heading="Hotel Gallery" peragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed." />
                <Carousel className="carousel-hotels-bg"/>
                <BlogPostsTopText className="blog-posts-top-text-bg" heading="More Hotel Features"/>
                <BlogPosts className="blog-posts-wrapper-hotels-bg" includeDate={false} includeDescription={false}/>
                <Footer />
            </main>
        </>
    )
}