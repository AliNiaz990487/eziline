// Footer.js
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-5 bg-dark">
      <div className="container">
        <div className="row mt-5 fs-4">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold fs-3">About Us</h5>
            <p className='' style={{color: "#888"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium
              magnam voluptatem autem. Amet aliquid nesciunt veritatis aliquam.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold fs-3">Quick Links</h5>
            <p>
              <a href="#" style={{color: "#888"}}>About Us</a>
            </p>
            <p>
              <a href="#" style={{color: "#888"}}>Trainers</a>
            </p>
            <p>
              <a href="#" style={{color: "#888"}}>Services</a>
            </p>
            <p>
              <a href="#" style={{color: "#888"}}>Testimonials</a>
            </p>
            <p>
              <a href="#" style={{color: "#888"}}>Contact Us</a>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold fs-3">Follow Us</h5>
            <a href="#" className="pe-4 icon-link-hover" style={{color: "#888"}}><FaFacebookF /></a>
            <a href="#" className="pe-4 icon-link-hover" style={{color: "#888"}}><FaTwitter /></a>
            <a href="#" className="pe-4 icon-link-hover" style={{color: "#888"}}><FaInstagram /></a>
            <a href="#" className="pe-4 icon-link-hover" style={{color: "#888"}}><FaLinkedinIn /></a>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold fs-3">Subscribe Newsletter</h5>
            <form>
              <div className="input-group">
                <input type="email" className="form-control form-control-lg" placeholder="Enter Email" style={{outline: "none"}} />
                <button className="btn p-3" type="button" style={{backgroundColor: "#fff", fontSize: "var(--ft-sm)"}}>Send</button>
              </div>
            </form>
          </div>
        </div>

        <hr className="mt-5 mb-5" />

        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-8">
            <p className="text-center" style={{ color: "#999"}}>Copyright © 2024 All rights reserved | This template is made with
              <a href="#" style={{ color: "#fff" }}>
                {' '}❤ by Colorlib
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
