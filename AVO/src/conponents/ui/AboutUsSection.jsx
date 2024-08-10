import Img from "../../assets/images/about.jpg"

import { FiPenTool } from "react-icons/fi";
import { BiWindowAlt } from "react-icons/bi";
import { TbStack2 } from "react-icons/tb";
import { ImMobile } from "react-icons/im";
import { IoSearch } from "react-icons/io5";

import Button from "./Button";
import { links } from "../../App";

const delayIncrement = 100; // Delay increment in milliseconds

const services = [
    { icon: <FiPenTool />, title: 'UI/UX Design' },
    { icon: <BiWindowAlt />, title: 'Web Development' },
    { icon: <TbStack2 />, title: 'Product Design' },
    { icon: <ImMobile />, title: 'Mobile Apps' },
    { icon: <IoSearch />, title: 'SEO' },
];

const ServiceCards = () => {
    return (
        <div className="row tw-gap-y-8">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="col-md tw-flex tw-items-center tw-flex-col tw-text-center"
                    data-aos="fade-up"
                    data-aos-delay={index * delayIncrement}
                >
                    <span className="tw-text-2xl tw-pb-8">{service.icon}</span>
                    <p>{service.title}</p>
                </div>
            ))}
        </div>
    );
}

const AboutUsSection = () => {
  return (
    <section className='container tw-py-32'>
        <h4 className='tw-text-xl tw-font-bold tw-uppercase tw-text-center' data-aos="fade-up">about us</h4>
        <div className="row tw-gap-y-6 tw-py-16 ">
            <ServiceCards />
        </div>

        <div className="row tw-text-gray-lighter tw-leading-7 tw-justify-center gap-md-2 tw-py-8">
            <div className="col-md-8 row tw-flex-col-reverse md:tw-flex-row gap-md-2">
                <div className="col-md md:tw-text-right px-0 px-md-2 py-2 py-md-0" data-aos="fade-up" data-aos-delay={50}>
                    <h4 className="tw-text-xl tw-text-black tw-font-bold">Welcome to AVO A Personal Porfolio Web Agency</h4>
                    <p className="tw-pt-5">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
                <div className="col-md tw-bg-cover tw-bg-center" data-aos="fade-up" style={{backgroundImage: "url('/src/assets/images/about.jpg')"}}>
                    <img src={Img} className="tw-invisible" alt="" />
                </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={50}>
                <p className="tw-pb-6">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <Button label="View all projects" link={links["home"]} />                
            </div>
        </div>

        <div className="row tw-text-gray-lighter tw-py-6 tw-gap-y-4">
            <div className="col-12 col-md tw-flex tw-items-center tw-gap-2" data-aos="fade-up">
                <span className="tw-text-2xl tw-text-primary border-bottom">01</span>
                <div>
                    <h4 className="tw-text-black fs-4 tw-font-semibold">Search Engine Optimization</h4>
                    <p>Far far away, behind the word mountains</p>
                </div>
            </div>
            <div className="col-12 col-md tw-flex tw-items-center tw-gap-2" data-aos="fade-up" data-aos-delay={50}>
                <span className="tw-align-top tw-text-2xl tw-text-primary border-bottom">02</span>
                <div>
                    <h4 className="tw-text-black fs-4 tw-font-semibold">Search Engine Optimization</h4>
                    <p>Far far away, behind the word mountains</p>
                </div>
            </div>
            <div className="col-12 col-md tw-flex tw-items-center tw-gap-2" data-aos="fade-up" data-aos-delay={100}>
                <span className="tw-text-2xl tw-text-primary border-bottom">03</span>
                <div>
                    <h4 className="tw-text-black fs-4 tw-font-semibold">Search Engine Optimization</h4>
                    <p>Far far away, behind the word mountains</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUsSection
