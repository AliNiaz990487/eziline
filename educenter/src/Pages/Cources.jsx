import Header from "../components/ui/Header"
import Hero2 from "../components/ui/Hero2"
import { CourceCard } from "../components/ui/CourcesSection"
import Footer from "../components/ui/Footer"

import Img1 from "../assets/images/course-1.jpg"
import Img2 from "../assets/images/course-2.jpg"
import Img3 from "../assets/images/course-3.jpg"
import Img4 from "../assets/images/course-4.jpg"
import Img5 from "../assets/images/course-5.jpg"
import Img6 from "../assets/images/course-6.jpg"

import { links } from "../App"

const CourcesMain = () => (
    <div className="container tw-py-24">
        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-8 tw-py-10">
            <CourceCard img={Img1} title="Photography" />
            <CourceCard img={Img2} title="Programming" />
            <CourceCard img={Img3} title="Lifestyle Archives" />
            <CourceCard img={Img4} title="Complete Freelancing" />
            <CourceCard img={Img5} title="Branding Design" />
            <CourceCard img={Img6} title="Art Design" />

            <CourceCard img={Img1} title="Photography" />
            <CourceCard img={Img2} title="Programming" />
            <CourceCard img={Img3} title="Lifestyle Archives" />
            <CourceCard img={Img4} title="Complete Freelancing" />
            <CourceCard img={Img5} title="Branding Design" />
            <CourceCard img={Img6} title="Art Design" />
        </div>
    </div>
)



const Cources = () => {
    return (
        <>
            <Header activeLinkIndex={2} />
            <Hero2 linkTitle="Home" title="Our Courses" link={links["home"]} />
            <CourcesMain />
            <Footer />
        </>
    )
}

export default Cources
