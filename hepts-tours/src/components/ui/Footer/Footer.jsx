import { IoIosSend } from "react-icons/io";
import { FaFacebookF, FaHeart, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Footer.css";
import { PiCopyrightLight } from "react-icons/pi";

function QuickLink() {
    return (
        <div className="footer--group quick-link">
            <h2>Quick Link</h2>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Rooms</a></li>
            </ul>
        </div>
    )
}
function Support() {
    return (
        <div className="footer--group support">
            <h2>Support</h2>
            <ul>
                <li><a href="#">Our Location</a></li>
                <li><a href="#">The Hosts</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Restaurant</a></li>
            </ul>
        </div>
    )
}
function Contact(){
    return (
        <div className="footer--group contact">
            <h2>Contact Info</h2>
            <ul>
                <li>
                    Address:
                    <div className="contact--address">
                        98 West 21th Street, Suite 721 New York Ny 10016
                    </div> 
                </li>
                <li>
                    Phone: 
                    <div className="contact--phone">
                        (+1) 435 3533
                    </div>
                </li>
                <li>
                    Email:
                    <div className="contact--email">
                        info@yourdomain.com
                    </div>
                </li>
            </ul>
        </div>
    )
}
function Subscribe(){
    return (
        <div className="footer--group subscribe">
            <h2>Subscribe</h2>
            <p>Sign up for our newsletter</p>
            <div className="subscribe--input">
                <input type="email" name="" id="" placeholder="Your email..."/>
                <IoIosSend className="send-icon"/>
            </div>
        </div>
    )
}
function Copyright(){
    return (
        <div className="copyright footer--group">
            <p>Copyright <PiCopyrightLight className="p-icon"/> 2024 All rights reserved | This template is make with <FaHeart className="p-icon"/> by <span>Colorlib</span></p>
            <div>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaYoutube /></a>
            </div>
        </div>
    )
}

export default function Footer(props) {
    return (
        <footer>
            <div className="footer">
                <QuickLink />
                <Support />
                <Contact />
                <Subscribe />
            </div>
            <Copyright />
        </footer>
    );
}