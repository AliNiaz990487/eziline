import Logo from "../../assets/images/logo.png"
import { links } from "../../App.jsx";
import { IoIosArrowDown, IoMdArrowDropleft } from "react-icons/io";
import { useState, useEffect } from 'react';


const NavLarge = ({ isScrolled, style, activeLinkIndex }) => {
  return (
    <div className={`tw-z-10 tw-transition ${isScrolled && "-tw-translate-y-8"}`} style={style}>
      <div className="container tw-h-full">
        <div className="row tw-h-full">
          <div className="col-5 tw-py-4">
            <img className="tw-w-40" src={Logo} alt="" />
          </div>

          <div className="col-7 bg-primary tw-min-h-full">
            <nav className="tw-h-full">
              <ul className="d-flex tw-justify-between fs-6 tw-text-white tw-font-semibold tw-uppercase tw-h-full tw-ps-16">
                <li className={`hover-nav-link ${activeLinkIndex === 0 ? "hover-nav-link-active" : ""}`}><a href={links["home"]} className="d-flex tw-items-center tw-h-full"><span>home</span></a></li>
                <li className={`hover-nav-link ${activeLinkIndex === 1 ? "hover-nav-link-active" : ""}`}><a href={links["about"]} className="d-flex tw-items-center tw-h-full"><span>about</span></a></li>
                <li className={`hover-nav-link ${activeLinkIndex === 2 ? "hover-nav-link-active" : ""}`}><a href={links["cources"]} className="d-flex tw-items-center tw-h-full"><span>cources</span></a></li>
                <li className={`hover-nav-link ${activeLinkIndex === 3 ? "hover-nav-link-active" : ""}`}><a href={links["events"]} className="d-flex tw-items-center tw-h-full"><span>events</span></a></li>
                <li className={`hover-nav-link ${activeLinkIndex === 4 ? "hover-nav-link-active" : ""}`}><a href={links["blog"]} className="d-flex tw-items-center tw-h-full"><span>blog</span></a></li>

                <li className={`drop-down-header d-flex tw-items-center hover-nav-link ${activeLinkIndex === 5 ? "hover-nav-link-active" : ""}`}>
                  <a href={links["pages"]} className="">pages</a> <span><IoIosArrowDown /></span>
                  <ul className="">
                    <li className="hover-primary-color"><a href={links["teacher"]}>Teacher</a></li>
                    <li className="hover-primary-color"><a href={links["teacher-single"]}>Teacher Single</a></li>
                    <li className="hover-primary-color"><a href={links["notice"]}>Notice</a></li>
                    <li className="hover-primary-color"><a href={links["notice-details"]}>Notice Details</a></li>
                    <li className="hover-primary-color"><a href={links["research"]}>Research</a></li>
                    <li className="hover-primary-color"><a href={links["sholoarship"]}>Sholarship</a></li>
                    <li className="hover-primary-color"><a href={links["course-detail"]}>Course Detail</a></li>
                    <li className="hover-primary-color"><a href={links["event-detail"]}>Event Detail</a></li>
                    <li className="hover-primary-color"><a href={links["blog-detail"]}>Blog Detail</a></li>

                    <li className="hover-primary-color sub-drop-down d-flex tw-items-center">
                      <span><IoMdArrowDropleft /></span><a href="">Sub Menu</a>
                      <ul>
                        <li className="hover-primary-color"><a href="">Sub Menu 1</a></li>
                        <li className="hover-primary-color"><a href="">Sub Menu 2</a></li>
                        <li className="hover-primary-color"><a href="">Sub Menu 3</a></li>
                      </ul>
                    </li>

                  </ul>
                </li>

                <li className={`hover-nav-link ${activeLinkIndex === 6 ? "hover-nav-link-active" : ""}`}><a href={links["contact"]} className="d-flex tw-items-center tw-h-full"><span>contact</span></a></li>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </div>
  )
}


const NavSmall = ({ isScrolled }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`tw-transition-all ${isScrolled ? "-tw-translate-y-16 sm:-tw-translate-y-8" : "tw-translate-y-0"}`}>
      <nav className="navbar navbar-dark bg-secondary">
        <div className="container">
          <div className="d-flex tw-justify-between flex-wrap tw-w-full">
            <img src={Logo} alt="" style={{ height: "3rem" }} />
            <button className="navbar-toggler rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>

      <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
        <div className="bg-secondary p-4">
          <div className="container">
            <ul className="tw-text-white small-nav">
              <li><a href={links["home"]}>Home</a></li>
              <li><a href={links["about"]}>About</a></li>
              <li><a href={links["cources"]}>Courses</a></li>
              <li><a href={links["events"]}>Events</a></li>
              <li><a href={links["blog"]}>Blog</a></li>
              <li>
                <div className="d-flex tw-items-center tw-justify-center tw-gap-1" onClick={toggleDropdown} role="button" aria-expanded={isDropdownOpen}>
                  <a>Pages</a>
                  <span><IoIosArrowDown /></span>
                </div>
                <div className={`collapse ${isDropdownOpen ? 'show' : ''}`} id="collapseExample">
                  <ul className="tw-bg-white tw-text-black tw-mt-3 tw-py-4">
                    <li className="tw-my-2 hover-primary-color"><a href={links["teacher"]}>Teacher</a></li>
                    <li className="tw-my-2 hover-primary-color"><a href={links["teacher-single"]}>Teacher Single</a></li>
                    <li className="tw-my-2 hover-primary-color"><a href={links["notice"]}>Notice</a></li>
                    <li className="tw-my-2 hover-primary-color"><a href={links["notice-details"]}>Notice Details</a></li>
                    <li className="tw-my-2 hover-primary-color"><a href={links["research"]}>Research</a></li>
                    <li className="tw-my-2 hover-primary-color"><a href={links["sholoarship"]}>Scholarship</a></li>
                    <li className="tw-my-2 hover-primary-color"><a href={links["course-detail"]}>Course Detail</a></li>
                    <li className="tw-my-2 hover-primary-color"><a href={links["event-detail"]}>Event Detail</a></li>
                    <li className="tw-my-2 hover-primary-color"><a href={links["blog-detail"]}>Blog Detail</a></li>
                    <li className="tw-my-2 hover-primary-color sub-drop-down d-flex tw-items-center tw-justify-center"><span><IoMdArrowDropleft /></span><a href="">Sub Menu</a></li>
                  </ul>
                </div>
              </li>
              <li><a href={links["contact"]}>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ isScrolled, activeLinkIndex }) => {
  const [toggleNav, setToggleNav] = useState(null);
  const handleResize = () => {
    if (document.body.clientWidth < 993) {
      setToggleNav(false);
    } else {
      setToggleNav(true);
    }
  }
  useEffect(handleResize, [])
  window.addEventListener("resize", handleResize)
  return (
    toggleNav ?
      <NavLarge activeLinkIndex={activeLinkIndex} isScrolled={isScrolled} style={isScrolled ? { backgroundImage: "linear-gradient(to right, var(--bs-secondary) 50%, var(--bs-primary) 50%)" } : { backgroundImage: "linear-gradient(to right, transparent 50%, var(--bs-primary) 50%)" }} /> :
      <NavSmall isScrolled={isScrolled} />
  )

}
export default Navbar
