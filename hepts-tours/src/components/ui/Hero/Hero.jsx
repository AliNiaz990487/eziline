import { forwardRef } from "react";
import { FaBars } from "react-icons/fa";
import HeroText from "../HeroText/HeroText.jsx";

import "./Hero.css";


const Hero = forwardRef(({ heroText, click, children }, ref) => {
    return (
        <div ref={ref} className="hero--container">
            <div className="hero--row">
                <h1 className="hero--logo"><a href="#">Hepta</a></h1>
                <button className="hero--menu-icon" onClick={click}>
                    <FaBars />
                </button>
            </div>
            <HeroText className="hero-text" heroText={heroText} />
            <div className="hero--children">{children}</div>
        </div>
    );
});

export default Hero;