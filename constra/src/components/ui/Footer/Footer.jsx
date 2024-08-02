import React from 'react';
import constra from '../../../assets/images/footer-logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaGreaterThan } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <div className='bg-black'>
                <div className="container pt-5">
                    <div className="row row-gap-5">
                        <div className='col-12 col-md-4 ps-1'>
                            <h3 className='fs-6 text-light border-primary border-start ps-3'>ABOUT US</h3>
                            <img src={constra} className='w-50 mt-3' alt="Footer Logo" />
                            <p className='mt-4 p-color fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veniam expedita adipisci optio nemo modi?</p>
                            <div className=''>
                                <div className='d-flex gap-4 p-color'>
                                    <FaFacebook />
                                    <FaTwitter />
                                    <FaInstagram />
                                    <FaGithub />
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-4 ps-1'>
                            <h3 className='fs-6 text-light border-primary border-start ps-3'>WORKING HOURS</h3>
                            <p className='mt-4 fs-6 p-color'>We work 7 days a week, every day excluding major holidays. Contact us if you have an emergency, with our Hotline and Contact form.</p>
                            <div className=''>
                                <p className='d-flex justify-content-between fs-6 p-color'><span>Monday - Friday:</span> <span>10:00 - 16:00</span></p>
                                <p className='d-flex justify-content-between fs-6 p-color'><span>Saturday:</span> <span>12:00 - 15:00</span></p>
                                <p className='d-flex justify-content-between fs-6 p-color'><span>Sunday and holidays:</span> <span>9:00 - 12:00</span></p>
                            </div>
                        </div>
                        <div className='col-12 col-md-4 ps-1 ps-md-5'>
                            <h3 className='fs-6 text-light border-primary border-start ps-3'>SERVICE</h3>
                            <ul className='list-tag p-0'>
                                <li><span className='fs-6 pe-2 arrow'><FaGreaterThan /></span><a href="" className="fs-6">Pre-Construction</a></li>
                                <li><span className='fs-6 pe-2 arrow'><FaGreaterThan /></span><a href="" className="fs-6">General Contracting</a></li>
                                <li><span className='fs-6 pe-2 arrow'><FaGreaterThan /></span><a href="" className="fs-6">Construction Management</a></li>
                                <li><span className='fs-6 pe-2 arrow'><FaGreaterThan /></span><a href="" className="fs-6">Design and Build</a></li>
                                <li><span className='fs-6 pe-2 arrow'><FaGreaterThan /></span><a href="" className="fs-6">Self-Perform-Construction</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='style'>
                <div className='container p-3'>
                    <div className="">
                        <div className='text-center '>
                            <h6 className='font'>Copyright © 2024, Designed & Developed by Themefisher</h6>
                        </div>
                        <div className=''>
                            <ul className='d-flex flex-wrap justify-content-center gap-4 th'>
                                <li><a href="">ABOUT</a></li>
                                <li><a href="">OUR PEOPLE</a></li>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">BLOG</a></li>
                                <li><a href="">PRICING</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
