import Image from "../../../assets/images/dogger_img_big_1.jpg"
import PawText from "../PawText/PawText";
import './InfoCard.css';

const InfoCard = () => {
  // window.addEventListener('load', AOS.refresh)
  return (
    <section className="container d-flex align-items-center info-card" id="aboutId">
      <div data-aos="fade-up" className="info-card-text-container">
        <PawText className="info-card-paw-wrapper" heading="ABOUT US" peragraph="Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean"/>
        <p className="text-padding">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        <ul className="text-padding">
            <li className="paw-icon">A small river named Duden flows</li>
            <li className="paw-icon">It is a paradisematic country</li>
            <li className="paw-icon">Roasted parts of sentences fly</li>
        </ul>
      </div>
      <div data-aos="fade-up" className="info-card-image-container">
        <img src={Image} alt="dogger_img_bit_1.jpg" className="img-fluid shadow-sm" />
      </div>
    </section>
  );
};

export default InfoCard;
