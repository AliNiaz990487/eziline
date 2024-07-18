import Nav from "../../components/ui/Nav/Nav";
import Hero from "../../components/ui/Hero/Hero";
import PawText from "../../components/ui/PawText/PawText";
import HoverCards from "../../components/ui/HoverCards/HoverCards";
import InfoCard from "../../components/ui/InfoCard/InforCard";
import ProfileCards from "../../components/ui/ProfileCards/ProfileCards";
import PricingCards from "../../components/ui/PricingCards/PricingCards";
import Faq from "../../components/ui/Faq/Faq";
import HappyCustomers from "../../components/ui/HappyCustomers/HappyCustomers";
import Gallery from "../../components/ui/Gallery/Galley";
import BlogCards from "../../components/ui/BlogCards/BlogCards";
import Services from "../../components/ui/Services/Services";
import ContactForm from "../../components/forms/ContactForm";
import Footer from "../../components/ui/Footer/Footer";
import "./Home.css";
const Home = () => {
  return (
    <>
        <Nav />
        <header className="header-bg">
            <Hero includeImage={true}/>
        </header>
        <main>
          <div className="m-5"></div>
          <PawText heading="Welcome to dogger pet care" peragraph="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." />
          <div className="m-5"></div>
          <HoverCards />
          <div className="m-5 p-3"></div>
          <InfoCard />
          <div className="m-5 p-5"></div>
          <ProfileCards />
          <PawText heading="pricing table" peragraph="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
          <PricingCards />
          <div id="faqId" className="m-5 p-5"></div>
          <Faq />
          <div id="testimonialsId" className="m-5 p-5"></div>
          <PawText heading="Happy customers" />
          <HappyCustomers />
          <div id="galleryId" className="m-5 p-5"></div>
          <PawText heading="photo gallery" />
          <Gallery />
          <div id="blogId" className="m-5 p-5"></div>
          <PawText heading="dogger blog" peragraph="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." />
          <BlogCards />
          <div id="servicesId" className="m-5 p-5"></div>
          <PawText heading="our services" peragraph="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." />
          <Services />
          <div id="contactId" className="m-5 p-5"></div>
          <ContactForm/>
          <Footer />
        </main>
    </>
  )
}

export default Home
