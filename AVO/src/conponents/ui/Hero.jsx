import Img1 from "../../assets/images/bg_1.jpg"
import Img2 from "../../assets/images/bg_2.jpg"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from "./Button";
import { useEffect, useRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Counter = ({ upperLimit, duration, delay }) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, latest => Math.round(latest))

  useEffect(() => {
    const controls = animate(count, upperLimit, { duration: duration, delay: delay })

    return () => controls.stop()
  }, [])

  return <motion.p>{rounded}</motion.p>
}

const Bg = ({ img, number, label, btnLabel, duration, delay }) => (
  <div className="tw-bg-center tw-bg-cover" style={{ backgroundImage: `url('${img}')` }}>
    <div className="container">
      <div data-aos="fade-up" className="row tw-text-gray-lighter tw-py-40 md:tw-py-52 tw-items-center tw-flex-col-reverse md:tw-flex-row">
        <div className="col-12 col-md-6">
          <h4 className="tw-text-white fs-1 tw-font-extrabold">We create Modern & Minimal Website</h4>
          <p className="tw-py-6 tw-pb-12">A small river named Duden Flows by their place and supplies it with the necessary regelialia.</p>
          <Button label={btnLabel} className="tw-py-4 tw-px-4"/>
        </div>
        <div className="col-4 d-none d-md-block"></div>
        <div className="col-12 col-md-2  md:tw-text-right">
          <div className="fs-1 tw-text-white tw-font-bold tw-ps-3 tw-border-s-primary tw-border-s-4 md:tw-border-s-0 md:tw-pe-4 md:tw-border-e-primary md:tw-border-e-8">
            <Counter upperLimit={number} duration={duration} delay={delay}/>
            {/* {number} */}
          </div>
          <p className="tw-py-3">{label}</p>
        </div>
      </div>
    </div>
  </div>
)


const Hero = () => {
  let sliderRef = useRef(null)

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    fade: true,
    speed: 1500,
    arrows: false,
    customPaging: i => {
      return <div className="slider-dot tw-flex tw-items-center tw-justify-center  tw-p-0.5 tw-w-4 tw-h-4 rounded-circle tw-border-white tw-transition-colors tw-border-2">
        <span className="tw-inline-block tw-bg-white tw-w-full tw-h-full rounded-circle tw-transition-colors"></span>
      </div>
    },
    appendDots: dots => {
      return <div className="">
        <ul className="container -tw-mt-20 tw-flex tw-justify-start md:tw-justify-center">{dots}</ul>
      </div>
    }
  }
  return (
    <Slider ref={slider => (sliderRef = slider)} {...settings} >
      <Bg img={Img1} number={400} duration={7} delay={1} label="More than a hundred sucessful projects" btnLabel="Start Project" />
      <Bg img={Img2} number={21} duration={4} delay={9} label="Years of Experience" btnLabel="Explore Projects" />
    </Slider>
  )
}


const Hero2 = ({mainLabel, label1, label2}) => {
  return (
    <div className="tw-bg-cover tw-bg-center tw-bg-no-repeat" style={{backgroundImage: `url('${Img1}')`}}>
      <div className="container tw-py-24 tw-pt-60 md:tw-pt-80 tw-text-gray-lighter tw-uppercase">
        <a href="/" className="hover:tw-text-primary tw-transition-colors">Home<span className="tw-inline-block tw-translate-y-1.5 tw-text-primary fs-4"><MdKeyboardArrowRight /></span></a>
        <span className="tw-ps-3">{label1}<span className="tw-inline-block tw-translate-y-1.5 tw-text-primary fs-4"><MdKeyboardArrowRight /></span></span>
        {label2 && <span className="tw-ps-3">{label2}<span className="tw-inline-block tw-translate-y-1.5 tw-text-primary fs-4"><MdKeyboardArrowRight /></span></span>}
        <h4 className="tw-text-white tw-font-extrabold fs-1 tw-pt-8">{mainLabel}</h4>
      </div>
    </div>
  )
}
export {Hero2}
export default Hero
