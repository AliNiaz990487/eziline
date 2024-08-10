import Nav from '../conponents/ui/Nav'
import { Hero2 } from "../conponents/ui/Hero"
import Footer from '../conponents/ui/Footer'
import { MdLocationPin } from 'react-icons/md'
import { FiMail, FiPhone } from 'react-icons/fi'
import { BiWorld } from 'react-icons/bi'


const ContactSection = () => (
  <div className="container tw-py-16">

    <div className="row tw-justify-center">
      <div className="col-md-7 tw-text-center">
        <p className="tw-uppercase tw-text-primary tw-pb-6">Contact us</p>
        <h4 className='fs-2 fw-bold tw-pb-8'>Have a Project?</h4>
        <p className='tw-text-gray-lighter tw-pb-20'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
      </div>
    </div>

    <div className="row tw-gap-y-8">
      <div className="col-12 col-md-7 md:tw-pe-8">
        <form className="row tw-bg-gray-lighter tw-p-8 tw-gap-y-8">
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-p-0 tw-gap-8">
            <div className="tw-flex-1">
              <input type="text" className="tw-w-full tw-p-3 tw-outline-none focus:placeholder:tw-text-black tw-transition-colors" placeholder="Your Name" />
            </div>
            <div className="tw-flex-1">
              <input type="email" className="tw-w-full tw-p-3 tw-outline-none focus:placeholder:tw-text-black tw-transition-colors" placeholder="Your Email" />
            </div>
          </div>
          <input type="text" className="tw-p-3 tw-outline-none focus:placeholder:tw-text-black tw-transition-colors" placeholder='Subject' />
          <textarea name="" className="tw-p-3 tw-outline-none focus:placeholder:tw-text-black tw-transition-colors tw-min-h-52" id="" placeholder="Message"></textarea>
        </form>
      </div>

      <div className="col-12 col-md-5">
        <div className="tw-flex tw-items-center tw-gap-4 tw-pb-8">
          <span className="tw-bg-primary tw-flex tw-items-center tw-justify-center tw-text-white fs-2 tw-rounded-full tw-p-3"><MdLocationPin /></span>
          <div>
            <h4>Address: </h4>
            <p className="tw-text-gray-lighter">198 West 21th Street, Suite 721 New York NY 10016</p>
          </div>
        </div>
        <div className="tw-flex tw-items-center tw-gap-4 tw-pb-8">
          <span className="tw-bg-primary tw-flex tw-items-center tw-justify-center tw-text-white fs-2 tw-rounded-full tw-p-3"><FiPhone /></span>
          <div>
            <h4>Phone: </h4>
            <p className="tw-text-primary">+ 1235 2355 98</p>
          </div>
        </div>
        <div className="tw-flex tw-items-center tw-gap-4 tw-pb-8">
          <span className="tw-bg-primary tw-flex tw-items-center tw-justify-center tw-text-white fs-2 tw-rounded-full tw-p-3"><FiMail /></span>
          <div>
            <h4>Email: </h4>
            <p className="tw-text-primary">info@yourmail.com</p>
          </div>
        </div>
        <div className="tw-flex tw-items-center tw-gap-4 tw-pb-8">
          <span className="tw-bg-primary tw-flex tw-items-center tw-justify-center tw-text-white fs-2 tw-rounded-full tw-p-3"><BiWorld /></span>
          <div>
            <h4>Website: </h4>
            <p className="tw-text-primary">yoursite.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Contact = () => {
  return (
    <div>
      <Nav activeIndex={4} />
      <Hero2 mainLabel="Contact" label1="Contact" />
      <div className="tw-py-16"></div>
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Contact
