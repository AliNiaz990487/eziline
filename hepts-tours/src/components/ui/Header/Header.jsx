import React, { useRef } from "react";
import Nav from "../Nav/Nav.jsx";
import Hero from "../Hero/Hero.jsx";

import "./Header.css";


export default function Header(props) {
    const headerRef = useRef();
    const navRef = useRef();

    const toggleNav = () => {
        headerRef.current.classList.toggle("header--hide");
        navRef.current.classList.toggle("nav--show");
    };

    return (
        <header>
            <Nav ref={navRef} onClose={toggleNav} />
            <Hero ref={headerRef} heroText={props.heroText} click={toggleNav} children={props.children}/>
        </header>
    );
}

