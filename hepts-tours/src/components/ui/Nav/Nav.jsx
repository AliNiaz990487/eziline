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
                <li><a href="#">Home</a></li>
                <li><a href="#">Hotels</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
});

export default Nav;