import Img1 from "../../assets/images/person_1.jpg";
import Img2 from "../../assets/images/person_2.jpg";
import Img3 from "../../assets/images/person_3.jpg";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ImQuotesLeft } from "react-icons/im";


const AboutUsSlider = ({ name, rank, image, className }) => (
  <div className={`card border-0 tw-relative ${className} tw-my-12 tw-bg-gray-200 tw-mx-1 sm:tw-mx-4 md:tw-mx-6 tw-p-8 tw-text-gray-lighter`} data-aos="fade-up">
    <span className="tw-absolute tw-top-0 tw-text-primary fs-2 -tw-mt-4"><ImQuotesLeft /></span>
    <p>Far far away, behind the word mountains, far from the countries. Voklia and Consonantia, there live the blind texts.</p>
    <div className="tw-flex tw-items-center tw-gap-x-4 tw-pt-4">
        <img src={image} className="tw-w-14 rounded-circle tw-aspect-square" alt={name} />
      <div>
          <h4 className="tw-text-black">{name}</h4>
          <p>{rank}</p>
      </div>
    </div>
  </div>
);

const AboutUsSliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    customPaging: i => {
      return <div className="slider-dot tw-flex tw-items-center tw-justify-center  tw-p-0.5 tw-w-4 tw-h-4 rounded-circle tw-border-gray-lighter tw-border-2">
          <span className="tw-inline-block tw-bg-gray-lighter tw-w-full tw-h-full rounded-circle"></span>
      </div>
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 598,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ],
  };

  return (
    <div className="container mb-5">
      <h4 className='tw-uppercase tw-text-xl tw-text-center tw-font-extrabold tw-py-12' data-aos="fade-up">clients says about us</h4>
      <Slider {...settings}>
        <AboutUsSlider className="" name="Roger Scott" rank="Marketing Manager" image={Img1} />
        <AboutUsSlider className="" name="Roger Scott" rank="Marketing Manager" image={Img2} />
        <AboutUsSlider className="" name="Roger Scott" rank="Marketing Manager" image={Img3} />
        <AboutUsSlider className="" name="Roger Scott" rank="Marketing Manager" image={Img1} />
        <AboutUsSlider className="" name="Roger Scott" rank="Marketing Manager" image={Img2} />
        <AboutUsSlider className="" name="Roger Scott" rank="Marketing Manager" image={Img1} />
      </Slider>
    </div>
  );
};


export default AboutUsSliders;
