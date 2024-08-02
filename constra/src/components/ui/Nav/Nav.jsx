import { useState, useRef, useEffect } from "react";
import { FaSearch } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from 'react-icons/io5';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import './Nav.css';
import { ImGift } from "react-icons/im";
import LogoWhite from "../../../assets/images/logo.png"


const SearchButton = () => {
    const [searchBtn, setSearchBtn] = useState(true);
    const searchElement = useRef(null);

    const toggleSearch = () => {
        setSearchBtn(!searchBtn);
        if (searchElement.current) {
            searchElement.current.classList.toggle("show")
        }
    };

    return (
        <div className="search-block">
            {searchBtn ?
                <button className="btn text-white" onClick={toggleSearch}>
                    <FaSearch />
                </button> :
                <button className="btn text-white" onClick={toggleSearch}>
                    <RxCross2 />
                </button>}
            <div className="bg-dark p-3" ref={searchElement}>
                <input type="text" placeholder="Type what you want and enter" />
            </div>
        </div>
    );
}

const NavLarge = ({ logo, getQuoteBtn, className }) => {
    return (
        <div className={className}>
            {logo}
            <nav>
                <ul>
                    <li>
                        <a href="" className="navlink">HOME</a><span className="charvion-icon"><MdOutlineKeyboardArrowDown /></span>
                        <div className='dropdown'>
                            <a href="/">HOME ONE</a >
                            <a href="/home2">HOME TWO</a >
                        </div>
                    </li>

                    <li>
                        <a href="" className="navlink">COMPANY</a><span className="charvion-icon"><MdOutlineKeyboardArrowDown /></span>
                        <div className="dropdown">
                            <a href="/about-us">ABOUT US</a>
                            <a href="/our-people">OUR PEOPLE</a>
                            <a href="/testimonials">TESTIMONIALS</a>
                            <a href="/faq">FAQ</a>
                            <a href="/pricing">PRICING</a>
                        </div>
                    </li>

                    <li>
                        <a href="" className="navlink">PROJECTS</a><span className="charvion-icon"><MdOutlineKeyboardArrowDown /></span>
                        <div className='dropdown'>
                            <a href="/projects-all">PROJECTS ALL</a >
                            <a href="/projects-single">PROJECTS SINGLE</a >
                        </div>
                    </li>

                    <li>
                        <a href="" className="navlink">SERVICES</a><span className="charvion-icon"><MdOutlineKeyboardArrowDown /></span>
                        <div className='dropdown'>
                            <a href="/services-all">SERVICES ALL</a >
                            <a href="/services-single">SERVICES SINGLE</a >
                        </div>
                    </li>

                    <li>
                        <a href="" className="navlink">FEATURES</a><span className="charvion-icon"><MdOutlineKeyboardArrowDown /></span>
                        <div className='dropdown'>
                            <a href="/typography">TYPOGRAPHY</a >
                            <a href="/404">404</a >
                            <div className="inner-dropdown">
                                <div className="inner-dropdown-header">
                                    <a href="">PARENT MENU</a>
                                    <span><MdOutlineKeyboardArrowRight /></span>
                                </div>
                                <div className="dropdown">
                                    <a href="">CHILD MENU 1</a>
                                    <a href="">CHILD MENU 2</a>
                                    <a href="">CHILD MENU 3</a>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <a href="" className="navlink">NEWS</a><span className="charvion-icon"><MdOutlineKeyboardArrowDown /></span>
                        <div className="dropdown">
                            <a href="/news-left-sidebar">NEWS LEFT SIDEBAR</a>
                            <a href="/news-right-sidebar">NEWS RIGHT SIDEBAR</a>
                            <a href="/news-single">NEWS SINGLE</a>
                        </div>
                    </li>

                    <li><a href="/contact" className="navlink">CONTACT</a></li>
                </ul>
                {getQuoteBtn ? getQuoteBtn : <SearchButton />}
            </nav>
        </div>
    );
}

const NavSmall = ({ logo, getQuoteBtn, className }) => {
    return (
        <div className>
            <nav className="navbar p-0">
                <div className="container">
                    {logo}
                    <button className="btn m-0 p-0 rounded-0 bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fs-1" style={{ lineHeight: 0 }}><IoMenu /></span>
                    </button>
                    {logo ? <></> : <SearchButton />}
                </div>
            </nav>
            <div className="collapse mt-3" id="navbarToggleExternalContent" data-bs-theme="dark">

                <div className="accordion" id="navAccordion">
                    <div className="accordion-item border-0">
                        <h2 className="accordion-header">
                            <button className={`accordion-button navlink nav-accordion-btn ${className ? className : "bg-dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navHomeCollapse" aria-expanded="true" aria-controls="navHomeCollapse">
                                HOME
                            </button>
                        </h2>
                        <div id="navHomeCollapse" className="accordion-collapse collapse" data-bs-parent="#navAccordion">
                            <div className="accordion-body dropdown d-block position-static w-100">
                                <a className="navlink" href="/">HOME ONE</a>
                                <a className="navlink" href="/home2">HOME TWO</a>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item border-0">
                        <h2 className="accordion-header">
                            <button className={`accordion-button navlink nav-accordion-btn ${className ? className : "bg-dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navCompanyCollapse" aria-expanded="true" aria-controls="navCompanyCollapse">
                                COMPANY
                            </button>
                        </h2>
                        <div id="navCompanyCollapse" className="accordion-collapse collapse" data-bs-parent="#navAccordion">
                            <div className="accordion-body dropdown d-block position-static w-100">
                                <a className="navlink" href="/about-us">ABOUT US</a>
                                <a className="navlink" href="/our-people">OUR PEOPLE</a>
                                <a className="navlink" href="/testimonials">TESTIMONIALS</a>
                                <a className="navlink" href="/faq">FAQ</a>
                                <a className="navlink" href="/pricing">PRICING</a>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item border-0">
                        <h2 className="accordion-header">
                            <button className={`accordion-button navlink nav-accordion-btn ${className ? className : "bg-dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navProjectsCollapse" aria-expanded="true" aria-controls="navProjectsCollapse">
                                PROJECTS
                            </button>
                        </h2>
                        <div id="navProjectsCollapse" className="accordion-collapse collapse" data-bs-parent="#navAccordion">
                            <div className="accordion-body dropdown d-block position-static w-100">
                                <a className="navlink" href="/projects-all">PROJECTS ALL</a>
                                <a className="navlink" href="/projects-single">PROJECTS SINGLE</a>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item border-0">
                        <h2 className="accordion-header">
                            <button className={`accordion-button navlink nav-accordion-btn ${className ? className : "bg-dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navServicesCollapse" aria-expanded="true" aria-controls="navServicesCollapse">
                                SERVICES
                            </button>
                        </h2>
                        <div id="navServicesCollapse" className="accordion-collapse collapse" data-bs-parent="#navAccordion">
                            <div className="accordion-body dropdown d-block position-static w-100">
                                <a className="navlink" href="/services-all">SERVICES ALL</a>
                                <a className="navlink" href="/services-single">SERVICES SINGLE</a>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item border-0">
                        <h2 className="accordion-header">
                            <button className={`accordion-button navlink nav-accordion-btn ${className ? className : "bg-dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navFeaturesCollapse" aria-expanded="true" aria-controls="navFeaturesCollapse">
                                FEATURES
                            </button>
                        </h2>
                        <div id="navFeaturesCollapse" className="accordion-collapse collapse" data-bs-parent="#navAccordion">
                            <div className="accordion-body dropdown d-block position-static w-100">
                                <a className="navlink" href="/typography">TYPOGRAPHY</a>
                                <a className="navlink" href="/404">404</a>
                                <a className="navlink" href="#">PARENT MENU</a>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item border-0">
                        <h2 className="accordion-header">
                            <button className={`accordion-button navlink nav-accordion-btn ${className ? className : "bg-dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navNewsCollapse" aria-expanded="true" aria-controls="navNewsCollapse">
                                NEWS
                            </button>
                        </h2>
                        <div id="navNewsCollapse" className="accordion-collapse collapse" data-bs-parent="#navAccordion">
                            <div className="accordion-body dropdown d-block position-static w-100">
                                <a className="navlink" href="/news-left-sidebar">NEWS LEFT SIDEBAR</a>
                                <a className="navlink" href="/news-right-sidebar">NEWS RIGHT SIDEBAR</a>
                                <a className="navlink" href="/news-single">NEWS SINGLE</a>
                            </div>
                        </div>
                    </div>

                    <div className={`py-3`} style={{ paddingLeft: "1.25rem" }}><a className={`navlink ${className}`} href="">CONTACT</a></div>
                    {getQuoteBtn}
                </div>

            </div>
        </div>
    );
}


const Navbar1 = () => {
    const [toggleNav, setToggleNav] = useState(false);
    const handleResize = () => {
        if (document.body.clientWidth < 992) {
            setToggleNav(false);
        } else {
            setToggleNav(true);
        }
    }
    useEffect(handleResize, [])
    window.addEventListener('resize', handleResize)

    return (
        <div className="bg-dark sticky-top">
            <div className="container">
                {toggleNav ? <NavLarge /> : <NavSmall />}
            </div>
        </div>
    );
};

const Navbar2 = () => {
    const [toggleNav, setToggleNav] = useState(false);
    const handleResize = () => {
        if (document.body.clientWidth < 992) {
            setToggleNav(false);
        } else {
            setToggleNav(true);
        }
    }
    useEffect(handleResize, [])
    window.addEventListener('resize', handleResize)

    return (
        <div className="bg-light sticky-top">
            <div className="container">
                {toggleNav ?
                    <NavLarge
                        className="nav2"
                        logo={<a href=""><img src={LogoWhite} className="nav2-logo" alt="logo" /></a>}
                        getQuoteBtn={<a className="btn btn-primary rounded-0 ms-4">Get a Quote</a>}
                    /> :
                    <NavSmall
                        className="text-black bg-light"
                        logo={<a href=""><img src={LogoWhite} className="nav2-logo" alt="logo" /></a>}
                        getQuoteBtn={<a className="btn btn-primary rounded-0 ms-3">Get a Quote</a>}
                    />}
            </div>
        </div>
    );
};

export { Navbar2 };
export default Navbar1;
