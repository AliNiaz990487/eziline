import Header from "../../components/ui/Header/Header.jsx";
import VisitButton from "../../components/ui/VisitButton/VisitButton.jsx";
import Welcome from "./Welcome/Welcome.jsx";
import Experiences from "../../components/ui/Experiences/Experiences.jsx";
import CarouselTopText from "../../components/ui/CarouselTopText/CarouselTopText.jsx";
import Carousel from "../../components/ui/Carousel/Carousel.jsx";
import BlogPostsTopText from "../../components/ui/BlogPostsTopText/BlogPostsTopText.jsx";
import BlogPosts from "../../components/ui/BlogPosts/BlogPosts.jsx";
import HappyCustomers from "../../components/ui/HappyCustomers/HappyCustomers.jsx";
import TopDestinations from "./TopDestination/TopDestinations.jsx";
import Footer from "../../components/ui/Footer/Footer.jsx";
import "./Home.css";

export default function Home() {
    return (
    <>
        <Header heroText="Travel & Tours" children={<VisitButton btnStyle={true} btnStyleClass="home-btn"  buttonText="Visit Colorlib"/>} />
        <main>
            <Welcome className="welcome-section" />
            <Experiences includeText={true} />
            <CarouselTopText heading="International Tour Management." peragraph="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." />
            <Carousel className="carousel-home-bg" />
            <BlogPostsTopText heading="Recent Blog Post" className="blog-posts-top-text"/>
            <BlogPosts includeDate={true} includeDescription={false} />
            <HappyCustomers className="customers" />
            <TopDestinations className="destinations" />
        </main>
        <Footer />
    </>

    )
}