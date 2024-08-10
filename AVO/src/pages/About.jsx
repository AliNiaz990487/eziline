import Nav from '../conponents/ui/Nav'
import { Hero2 } from "../conponents/ui/Hero"
import AboutUsSection from '../conponents/ui/AboutUsSection'
import GetStartedCard from '../conponents/ui/GetStartedCard'
import AboutUsSliders from '../conponents/ui/AboutUsSlider'
import Footer from '../conponents/ui/Footer'

import Img1 from "../assets/images/team-1.jpg"
import Img2 from "../assets/images/team-2.jpg"
import Img3 from "../assets/images/team-3.jpg"
import Img4 from "../assets/images/team-4.jpg"
import Img5 from "../assets/images/team-5.jpg"
import Img6 from "../assets/images/team-6.jpg"
import Img7 from "../assets/images/team-7.jpg"
import Img8 from "../assets/images/team-8.jpg"
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
import { BiLogoGooglePlus } from 'react-icons/bi'

const AboutCard = ({ img, name, rank, animationDelay }) => (
  <div className="tw-group tw-relative" data-aos="fade-up" data-aos-delay={animationDelay}>
    <div className="about-social-icons tw-absolute tw-top-4 tw-left-2">
      <a href="" className="tw-bg-white hover:tw-bg-primary rounded-circle tw-text-primary hover:tw-text-white tw-transition-colors tw-flex tw-items-center tw-justify-center tw-p-2 fs-5 tw-mb-2"><span><FiTwitter /></span></a>
      <a href="" className="tw-bg-white hover:tw-bg-primary rounded-circle tw-text-primary hover:tw-text-white tw-transition-colors tw-flex tw-items-center tw-justify-center tw-p-2 fs-5 tw-mb-2"><span><FiFacebook /></span></a>
      <a href="" className="tw-bg-white hover:tw-bg-primary rounded-circle tw-text-primary hover:tw-text-white tw-transition-colors tw-flex tw-items-center tw-justify-center tw-p-2 fs-5 tw-mb-2"><span><BiLogoGooglePlus /></span></a>
      <a href="" className="tw-bg-white hover:tw-bg-primary rounded-circle tw-text-primary hover:tw-text-white tw-transition-colors tw-flex tw-items-center tw-justify-center tw-p-2 fs-5 tw-mb-2"><span><FiInstagram /></span></a>
    </div>
    <div className="tw-bg-cover tw-bg-center tw-bg-no-repeat" style={{ backgroundImage: `url('${img}')` }}>
      <img src={Img8} className="tw-invisible img-fluid" alt="" />
    </div>
    <div className="sm:tw-ps-4 tw-py-4">
      <h4 className="fs-4 tw-uppercase tw-font-extrabold tw-group-hover-primary tw-transition-colors">
          {name.split(" ").map((n, index) => (
              <span key={index}>
                {n}
                <br />
              </span>
          ))}
      </h4>
      <p className="tw-text-primary">{rank}</p>
    </div>
  </div>
);



const About = () => {
  return (
    <div>
      <Nav activeIndex={1} />
      <Hero2 mainLabel="About Us" label1="about us" />
      <AboutUsSection />
      <div className="container">
        <h4 className='tw-text-xl tw-font-bold tw-uppercase tw-text-center tw-pb-24' data-aos="fade-up">Expert Team</h4>
        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-6">
          <AboutCard img={Img1} name="John Wilson" rank="Web Designer" animationDelay={0}/>
          <AboutCard img={Img2} name="Robert Wills" rank="Web Developer" animationDelay={100}/>
          <AboutCard img={Img3} name="Mike Smith" rank="Graphic Designer" animationDelay={200}/>
          <AboutCard img={Img4} name="Adrian Henderson" rank="System Analyst" animationDelay={300}/>
          <AboutCard img={Img5} name="John Wilson" rank="Web Programmer" animationDelay={0}/>
          <AboutCard img={Img6} name="Robert Wills" rank="Web Designer" animationDelay={100}/>
          <AboutCard img={Img7} name="Mike Smith" rank="Graphic Designer" animationDelay={200}/>
          <AboutCard img={Img8} name="Andrian Henderson" rank="SEO" animationDelay={300}/>
        </div>
      </div>
      <GetStartedCard />
      <AboutUsSliders />
      <Footer />

      <div className="tw-group">
        <div className="tw-group-hover:tw-text-primary tw-transition-colors">
          Hover me
        </div>
      </div>

    </div>
  )
}

export default About
