import React from 'react'
import { BiCopy, BiCopyright, BiHeart } from 'react-icons/bi';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
import { MdKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <footer className='tw-bg-secondary'>
        <div className='container tw-py-20 tw-text-gray-dark '>
            <div className="row tw-gap-y-6">
                <div className="col-12 col-md-3">
                    <h4 className="tw-text-white tw-font-bold tw-text-xbase tw-pb-3 md:tw-pb-6">avo</h4>
                    <p>Far far away, behind the word mountains, far from the countries.</p>
                    <div className="tw-pt-8">
                        <a href="" data-aos="fade-up" data-aos-delay={0}><span className="tw-inline-block tw-bg-gray-700 tw-me-3 rounded-circle tw-p-2"><FiTwitter /></span></a>
                        <a href="" data-aos="fade-up" data-aos-delay={100}><span className="tw-inline-block tw-bg-gray-700 tw-me-3 rounded-circle tw-p-2"><FiFacebook /></span></a>
                        <a href="" data-aos="fade-up" data-aos-delay={200}><span className="tw-inline-block tw-bg-gray-700 tw-me-3 rounded-circle tw-p-2"><FiInstagram /></span></a>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <h4 className="tw-text-white tw-font-bold tw-text-xbase tw-pb-3 md:tw-pb-6">Community</h4>
                    <ul>
                        <li className="tw-pb-1 md:tw-pb-2"><a href=""><span className="tw-inline-block tw-translate-y-1"><MdKeyboardArrowRight /></span>Projects</a></li>
                        <li className="tw-pb-1 md:tw-pb-2"><a href=""><span className="tw-inline-block tw-translate-y-1"><MdKeyboardArrowRight /></span>Team</a></li>
                        <li className="tw-pb-1 md:tw-pb-2"><a href=""><span className="tw-inline-block tw-translate-y-1"><MdKeyboardArrowRight /></span>Reviews</a></li>
                        <li className="tw-pb-1 md:tw-pb-2"><a href=""><span className="tw-inline-block tw-translate-y-1"><MdKeyboardArrowRight /></span>FAQs</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-3">
                    <h4 className="tw-text-white tw-font-bold tw-text-xbase tw-pb-3 md:tw-pb-6">About Us</h4>
                    <ul>
                        <li className="tw-pb-1 md:tw-pb-2"><a href=""><span className="tw-inline-block tw-translate-y-1"><MdKeyboardArrowRight /></span>Our Story</a></li>
                        <li className="tw-pb-1 md:tw-pb-2"><a href=""><span className="tw-inline-block tw-translate-y-1"><MdKeyboardArrowRight /></span>Meet the team</a></li>
                        <li className="tw-pb-1 md:tw-pb-2"><a href=""><span className="tw-inline-block tw-translate-y-1"><MdKeyboardArrowRight /></span>Careers</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-3">
                    <h4 className="tw-text-white tw-font-bold tw-text-xbase tw-pb-3 md:tw-pb-6">Have a Questions?</h4>
                    <ul>
                        <li className="tw-pb-1 md:tw-pb-2"><a href=""><span className="tw-inline-block tw-translate-y-1"><MdKeyboardArrowRight /></span>203 Fake St. Mountain View, San Francisco, California, USA</a></li>
                        <li className="tw-pb-1 md:tw-pb-2"><a href=""><span className="tw-inline-block tw-translate-y-1"><MdKeyboardArrowRight /></span>+2 392 3929 210</a></li>
                        <li className="tw-pb-1 md:tw-pb-2"><a href=""><span className="tw-inline-block tw-translate-y-1"><MdKeyboardArrowRight /></span>info@yourdomain.com</a></li>
                    </ul>
                </div>
            </div>

            <p className='md:tw-text-center tw-pt-12'>Copyright <span className='tw-inline-block tw-translate-y-0.5'><BiCopyright/></span>2024 All rights reserved | This template is made with <span className='tw-inline-block tw-translate-y-0.5'><BiHeart /></span> by <a href="" className='tw-text-primary'>Colorlib</a></p>

        </div>
    </footer>
  )
}

export default Footer
