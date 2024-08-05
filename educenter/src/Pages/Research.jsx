import Header from "../components/ui/Header"
import Hero2 from "../components/ui/Hero2"
import Footer from "../components/ui/Footer"

import Img1 from "../assets/images/research-1.jpg";
import Img2 from "../assets/images/research-2.jpg";
import Img3 from "../assets/images/research-3.jpg";
import Img4 from "../assets/images/research-4.jpg";
import Img5 from "../assets/images/research-5.jpg";
import Img6 from "../assets/images/research-6.jpg";

import { links } from "../App"

const ResearchCard = ({title, img}) => (
    <div className="card border-0 border-bottom hover:tw-shadow-md tw-transition-all">
        <img src={img} alt="" className="card-top-image" />
        <div className="card-body">
            <div className="card-title fs-3 fw-bold">{title}</div>
            <p className="card-text tw-text-gray-600"> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
        </div>
    </div>
)

const ResearchMain = () => (
    <div className="container tw-py-24 tw-pb-32 tw-text-gray-600 fs-6">
        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-8">
            <ResearchCard img={Img1} title="Geography"/>
            <ResearchCard img={Img2} title="Mathematical"/>
            <ResearchCard img={Img3} title="Humanities"/>
            <ResearchCard img={Img4} title="Physical & Sciences"/>
            <ResearchCard img={Img5} title="Biological Sciences"/>
            <ResearchCard img={Img6} title="Achaeology"/>
        </div>
    </div>
)



const Research = () => {
    return (
        <>
            <Header/>
            <Hero2 linkTitle="Home" title="Research" link={links["home"]} />
            <ResearchMain />
            <Footer />
        </>
    )
}

export default Research
