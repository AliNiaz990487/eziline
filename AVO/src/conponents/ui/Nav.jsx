import { links } from "../../App"
import { useState, useEffect } from "react"

const Nav = ({activeIndex}) => {
    const [navSticky, setNavSticky] = useState("tw-absolute")

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 30 && window.scrollY < 600) {
                setNavSticky('tw-absolute -tw-translate-y-full')
            } else if(window.scrollY > 600) {
                setNavSticky("tw-fixed tw-bg-black tw-translate-y-0 tw-shadow-md")
            } else {
                setNavSticky("tw-absolute tw-bg-black lg:tw-bg-transparent")
            }
        }
        window.addEventListener("scroll", handleScroll)
        handleScroll()
        return  () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <nav className={`navbar navbar-expand-lg tw-top-0 tw-z-10 tw-w-screen tw-transition-transform ${navSticky}`}>
            <div className="container lg:tw-flex tw-justify-between mt-2">
                <a className="navbar-brand fs-3 tw-font-bold tw-text-white" href={links["home"]}>
                    a<span className="tw-text-primary">v</span>o
                </a>
                <button className="navbar-toggler border-0 focus:tw-shadow-none tw-uppercase tw-text-gray-dark tw-text-base" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                </button>

                <div className="collapse navbar-collapse lg:tw-max-w-fit" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`nav-link lg:tw-ms-5 tw-text-sm tw-uppercase tw-font-bold hover:tw-text-primary tw-transition-colors ${activeIndex==0? "tw-text-primary": "tw-text-gray-dark"}`} href={links["home"]}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link lg:tw-ms-5 tw-text-sm tw-uppercase tw-font-bold hover:tw-text-primary tw-transition-colors ${activeIndex==1? "tw-text-primary": "tw-text-gray-dark"}`} href={links["about"]}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link lg:tw-ms-5 tw-text-sm tw-uppercase tw-font-bold hover:tw-text-primary tw-transition-colors ${activeIndex==2? "tw-text-primary": "tw-text-gray-dark"}`} href={links["work"]}>Work</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link lg:tw-ms-5 tw-text-sm tw-uppercase tw-font-bold hover:tw-text-primary tw-transition-colors ${activeIndex==3? "tw-text-primary": "tw-text-gray-dark"}`} href={links["blog"]}>Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link lg:tw-ms-5 tw-text-sm tw-uppercase tw-font-bold hover:tw-text-primary tw-transition-colors ${activeIndex==4? "tw-text-primary": "tw-text-gray-dark"}`} href={links["contact"]}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
