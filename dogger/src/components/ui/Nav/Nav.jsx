import { useState, useEffect } from 'react'

import "./Nav.css"

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
};

const Nav = () => {
  const [navState, setNavState] = useState(true)
  const [navColor, setNavColor] = useState(false)
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth > 992) {
      setNavState(true);
    }
    else {
      console.log("widh less")
      setNavState(false);
    }
  }, [windowWidth]);

  const toggleNav = () => {
    if (windowWidth <= 992) {
      setNavState(false);
    }
  };

  const changeNavColor = () => {
    if (window.scrollY > 100) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  }

  window.addEventListener('scroll', changeNavColor);

  return (
    <nav id="siteNavId" className={`navbar navbar-expand-lg sticky-top ${navColor ? "active": ""}`} style={{backgroundColor: "#eee"}}>

      <div className="container nav-bar">
        <a className="navbar-brand" href="/">Dogger</a>
        <button className="navbar-toggler" type="button" onClick={toggleNav} data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

          <div className="offcanvas-header">
            <button type="button" className="btn-close" onClick={toggleNav} data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 nav-links">

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#homeId">Home</a>
              </li>

              {
                navState ? 
                <li className="about-dropdown">
                <a className="nav-link" href="#aboutId">About</a>
                <ul className="about-dropdown-content">
                  <li><a href="#trainersId">Trainers</a></li>
                  <li><a href="#pricingId">Pricing</a></li>
                  <li><a href="#faqId">FAQ</a></li>
                  <li><a href="#testimonialsId">Testimonials</a></li>
                  <li><a href="#galleryId">Gallery</a></li>
                  <li><a href="#blogId">Blog</a></li>

                  <li className="about-dropdown-inner">
                    <a href="">More Links</a>
                    <ul className="about-dropdown-inner-content">
                      <li><a href="">Menu one</a></li>
                      <li><a href="">Menu two</a></li>
                      <li><a href="">Menu three</a></li>
                    </ul>
                  </li>
                </ul>
                </li> :
                
                <li className="smaller-dropdown">
                  <div className="about-smaller-dropdown">
                    <a className="nav-link" href="#aboutId">About</a>
                    <a className="ft-asm-icon icon-down" data-bs-toggle="collapse" href="#about-dropdown" role="button" aria-expanded="false" aria-controls="about-dropdown"></a>
                  </div>

                  <div className="collapse" id="about-dropdown">
                    <ul>
                      <li><a href="#trainersId">Trainers</a></li>
                      <li><a href="#pricingId">Pricing</a></li>
                      <li><a href="#faqId">FAQ</a></li>
                      <li><a href="#testimonialsId">Testimonials</a></li>
                      <li><a href="#galleryId">Gallery</a></li>
                      <li><a href="#blogId">Blog</a></li>
  
                      <li className>
                        <div className="about-smaller-dropdown">
                          <a className="nav-link" href="">More Links</a>
                          <a className="ft-asm-icon icon-down" data-bs-toggle="collapse" href="#more-links-dropdown" role="button" aria-expanded="false" aria-controls="more-links-dropdown"></a>
                        </div>

                        <div className="collapse" id="more-links-dropdown">
                          <ul className>
                            <li><a href="">Menu one</a></li>
                            <li><a href="">Menu two</a></li>
                            <li><a href="">Menu three</a></li>
                          </ul>
                        </div>
                      </li>

                    </ul>
                  </div>

                </li>
               
              }

              <li className="nav-item">
                <a className="nav-link" href="#trainersId">Trainers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#servicesId">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contactId">Contact</a>
              </li>

            </ul>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
