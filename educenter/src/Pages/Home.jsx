import Header from "../components/ui/Header.jsx"
import Hero from "../components/ui/Hero.jsx"
import Features from "../components/ui/Features.jsx"
import AboutSection from "../components/ui/AboutSection.jsx"
import CourcesSection from "../components/ui/CourcesSection.jsx"
import Training from "../components/ui/Training.jsx"
import Events from "../components/ui/EventsSection.jsx"
import TeachersSection from "../components/ui/TeachersSection.jsx"
import NewsSection from "../components/ui/NewsSection.jsx"
import Footer from "../components/ui/Footer.jsx"
const Home = () => {
    return (
        <>
            <Header activeLinkIndex={0} />
            <Hero />
            <Features />
            <AboutSection />
            <CourcesSection />
            <Training />
            <Events />
            <TeachersSection />
            <NewsSection />
            <Footer />
        </>

    )
}

export default Home
