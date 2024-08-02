import LocationAndSocial from "../../components/ui/LocationAndSocial/LocationAndSocial"
import LogoAndContact from "../../components/ui/LogoAndContact/LogoAndContact"
import Navbar from "../../components/ui/Nav/Nav";
import Header from "../../components/ui/Header/Header"

import Footer from "../../components/ui/Footer/Footer"

const PricingCard = ({title, price, button, className}) => (
    <div>
        <div className={`text-center text-white p-5 ${className}`}>
            <p className="fs-6 fw-bold m-0 ">{title}</p>
            <p className="fs-2 fw-bold m-1">{`\$${price}`}</p>
            <p className="fs-6">/MONTH</p>
        </div>
        <div className="text-center  p-4 fs-6 bg-dark-subtle">
            <p className="border-dark border-bottom pb-3">Project Management for Owners</p>
            <p className="border-dark border-bottom pb-3">Pre-construction feasibility</p>
            <p className="border-dark border-bottom pb-3">On-site representation</p>
            <p className="border-dark border-bottom pb-3">Quality control inspections</p>
            <p className="border-dark border-bottom pb-3">Schedule claim preparation/defense</p>
            <p className="border-dark border-bottom pb-3">Project phasing development</p>
            {button}
        </div>
    </div>
)
const PricingCards = () => (
    <div className="container my-5 py-5">
        <div className="d-flex flex-wrap gap-4 justify-content-center">
            <PricingCard title="BUILDING REMODELS" price="89.9" className="bg-dark" button={<button className="btn btn-primary bg-dark border-0 rounded-0">Order Now</button>} />
            <PricingCard title="RENOVATION" price="179.9" className="bg-primary" button={<button className="btn btn-primary rounded-0">Order Now</button>} />
            <PricingCard title="HOME CONSTRUCTION" price="279.9" className="bg-dark" button={<button className="btn btn-primary bg-dark border-0 rounded-0">Order Now</button>} />
        </div>
    </div>
)

const Pricing = () => {
    return (
        <div>
            <LocationAndSocial />
            <LogoAndContact />
            <Navbar />
            <Header title="PRICING" tab1="COMPANY" tab2="PRICING" />
            <PricingCards />
            <Footer />
        </div>
    )
}

export default Pricing
