import React from "react";
import Img1 from "../../../assets/images/team1.jpg";
import Img2 from "../../../assets/images/team2.jpg";
import Img3 from "../../../assets/images/team3.jpg";
import Img4 from "../../../assets/images/team4.jpg";
import Img5 from "../../../assets/images/team5.jpg";
import Img6 from "../../../assets/images/team6.jpg";

import { FaFacebook, FaTwitter, FaGooglePlus, FaLinkedin } from "react-icons/fa";
import "./TeamCards.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TeamCard = ({ name, rank, image, className }) => (
  <div className={`${className}`}>
    <img src={image} alt={name} />
    <div className>
      <h4>{name}</h4>
      <p>{rank}</p>
      <p>Nats Stenman began his career in construction with boots on the ground.</p>
      <div className="social-icons">
        <FaFacebook />
        <FaTwitter />
        <FaGooglePlus />
        <FaLinkedin />
      </div>
    </div>
  </div>
);

const TeamCards = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container team-slider mb-5">
      <Slider {...settings}>
        <TeamCard className="team-card" name="NATS STENMAN" rank="Chief Operating Officer" image={Img1} />
        <TeamCard className="team-card" name="ANGELA LYOUER" rank="Innovation Officer" image={Img2} />
        <TeamCard className="team-card" name="MARK CONTER" rank="Safety Officer" image={Img3} />
        <TeamCard className="team-card" name="AYESHA STEWART" rank="Finance Officer" image={Img4} />
        <TeamCard className="team-card" name="DAVE CLARKTE" rank="Civil Engineer" image={Img5} />
        <TeamCard className="team-card" name="ELTON JOE" rank="Site Supervisor" image={Img6} />
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

export { TeamCard, Img1, Img2, Img3, Img4, Img5, Img6 };
export default TeamCards;
