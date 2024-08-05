import FixedHeader from "./FixedHeader.jsx";
import Navbar from "./Navbar.jsx";
import { useState, useEffect } from "react"
const Header = ({activeLinkIndex}) => {
    const [isScrolled, setIsScrolled] = useState(null)

    useEffect(() => {
        const isScrolledHandler = () => {
            if(window.scrollY > 30) {
                setIsScrolled(true)
            }else {
                setIsScrolled(false)
            }
        } 

        window.addEventListener("scroll", isScrolledHandler)
        return () => window.removeEventListener("scroll", isScrolledHandler)
    }, [])
  return (
    <div className="tw-fixed tw-top-0 tw-w-screen" style={{zIndex: 5}}>
        <FixedHeader isScrolled={isScrolled} />
        <Navbar activeLinkIndex={activeLinkIndex} isScrolled={isScrolled} style={isScrolled ? {backgroundImage: "linear-gradient(to right, var(--bs-secondary) 50%, var(--bs-primary) 50%)"} : {backgroundImage: "linear-gradient(to right, transparent 50%, var(--bs-primary) 50%)"}}/>
    </div>
  )
}

export default Header