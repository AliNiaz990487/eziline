import React, { useRef } from "react";
import { FaBars } from "react-icons/fa";
import Nav from "./Nav";
import "../css/header.css";
import "../css/nav.css";

export default function Header() {
    const headerRef = useRef();
    const navRef = useRef();

    const toggleNav = () => {
        headerRef.current.classList.toggle("header--hide");
        navRef.current.classList.toggle("nav--show");
    };

    return (
        <header>
            <div className="header--container" ref={headerRef}>
                <div className="header--row">
                    <h1 className="header--logo">Hepta</h1>
                    <button className="header--menu-icon" onClick={toggleNav}>
                        <FaBars />
                    </button>
                </div>
                <div className="header--content">
                    <h1>Travel & Tours</h1>
                    <p>A free template by <a href="#">Colorlib</a>. Download and share!</p>
                    <button>visit colorlib</button>
                </div>
            </div>
            <Nav ref={navRef} onClose={toggleNav} />
        </header>
    );
}
