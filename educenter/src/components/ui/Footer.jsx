import { FaCopyright, FaDiscord, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="tw-bg-color-secondary md:tw-relative">
        <div className="bg-primary container-fluid">
            <div className="row md:tw-absolute -tw-top-20 tw-w-full">
                <div className="col-12 col-md-3"></div>
                <div className="col-12 col-md-9 bg-primary tw-py-12 md:tw-p-16">
                    <h4 className="fs-3 fw-bold tw-text-white tw-pb-3">Subscribe Now</h4>
                    <div className="d-flex tw-bg-white tw-p-4 tw-flex-wrap tw-gap-y-5">
                        <input className="md:tw-flex-1 focus-within:tw-outline-none tw-w-full" type="text" placeholder="Enter Your Email..." />
                        <a href="" className="btn btn-primary tw-flex-grow-0">Join</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="container tw-py-32 md:tw-pt-52">
            <div className="row tw-text-gray-600 fs-6 tw-gap-y-8">
                <div className="col-12 col-md-4">
                    <img src={Logo} className="tw-w-40 tw-pb-6" alt="" />
                    <p className="tw-pb-1">3621 15 Mile Rd #C104, Clinton MI, 48035, New York, USA</p>
                    <p className="tw-pb-1">1 (2) 345 6789</p>
                    <p className="tw-pb-1">1 (2) 345 6789</p>
                    <p className="tw-pb-1">ontact@yourdomain.com</p>
                </div>

                <div className="col-12 col-md-8">
                    <div className="d-flex tw-justify-between tw-flex-wrap tw-gap-4">
                        <div className="tw-flex-1">
                            <h4 className="tw-text-white fs-3 fw-bold tw-pb-12 tw-uppercase">Company</h4>
                            <ul>
                                <li className="tw-pb-4 hover-primary-color"><a href="">About Us</a></li>
                                <li className="tw-pb-4 hover-primary-color"><a href="">Our Teacher</a></li>
                                <li className="tw-pb-4 hover-primary-color"><a href="">Contact</a></li>
                                <li className="tw-pb-4 hover-primary-color"><a href="">Blog</a></li>
                            </ul>
                        </div>
        
                        <div className="tw-flex-1">
                            <h4 className="tw-text-white fs-3 fw-bold tw-pb-12 tw-uppercase">Links</h4>
                            <ul>
                                <li className="tw-pb-4 hover-primary-color"><a href="">Courses</a></li>
                                <li className="tw-pb-4 hover-primary-color"><a href="">Events</a></li>
                                <li className="tw-pb-4 hover-primary-color"><a href="">Notice</a></li>
                                <li className="tw-pb-4 hover-primary-color"><a href="">Scholarshhip</a></li>
                            </ul>
                        </div>
        
                        <div className="tw-flex-1">
                            <h4 className="tw-text-white fs-3 fw-bold tw-pb-12 tw-uppercase">Supoort</h4>
                            <ul>
                                <li className="tw-pb-4 hover-primary-color"><a href="">Forums</a></li>
                                <li className="tw-pb-4 hover-primary-color"><a href="">Documentation</a></li>
                                <li className="tw-pb-4 hover-primary-color"><a href="">Language</a></li>
                                <li className="tw-pb-4 hover-primary-color"><a href="">Release Status</a></li>
                            </ul>
                        </div>
        
                        <div className="tw-flex-1">
                            <h4 className="tw-text-white fs-3 fw-bold tw-pb-12 tw-uppercase">recommend</h4>
                            <ul>
                                <li className="tw-pb-4 hover-primary-color"><a href="">WordPress</a></li>
                                <li className="tw-pb-4 hover-primary-color"><a href="">LearnPress</a></li>
                                <li className="tw-pb-4 hover-primary-color"><a href="">WooCommerce</a></li>
                                <li className="tw-pb-4 hover-primary-color"><a href="">bbPress</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr className="tw-text-gray-600"/>

        <div className="container tw-py-6">
            <div className="d-flex tw-justify-between flex-wrap tw-text-gray-600 fs-6 tw-gap-y-4">
                <div>
                    <p>Copyright <span className="tw-inline-block tw-translate-y-0.5"><FaCopyright /></span> 2024, designed & developed by <a href="" className="tw-text-white hover-primary-color" >Themefisher</a> </p>
                </div>
                
                <ul className="text-primary">
                    <li className="tw-inline-block tw-pe-5"><a href=""><FaFacebook /></a></li>
                    <li className="tw-inline-block tw-pe-5"><a href=""><FaTwitter /></a></li>
                    <li className="tw-inline-block tw-pe-5"><a href=""><FaDiscord /></a></li>
                    <li className="tw-inline-block tw-pe-5"><a href=""><FaInstagram /></a></li>
                </ul>
            </div>
        </div>

    </footer >
  )
}

export default Footer
