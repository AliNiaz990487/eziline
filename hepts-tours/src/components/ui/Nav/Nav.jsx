import { forwardRef } from "react";
import { FaTimes } from "react-icons/fa";
import "./Nav.css";

const Nav = forwardRef(({ onClose }, ref) => {
    return (
        <nav ref={ref} className="nav">
            <div className="nav--row">
                <FaTimes className="nav--close-icon" onClick={onClose}/>
            </div>
            <ul className="nav--ul">
                <li><a href="/">Home</a></li>
                <li><a href="/hotels">Hotels</a></li>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="contact">Contact</a></li>
            </ul>
        </nav>
    );
});

export default Nav;