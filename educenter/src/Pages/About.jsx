import Header from "../components/ui/Header"
import Hero2 from "../components/ui/Hero2"
import { links } from "../App"
import Img from "../assets/images/about-page.jpg"
import { SuccessStory } from "../components/ui/Training"
import TeachersSection from "../components/ui/TeachersSection"
import Footer from "../components/ui/Footer"

const AboutMain = () => (
    <div className="container tw-pt-24 tw-pb-16">
        <div className="card border-0">
            <img src={Img} alt="" className="cart-top-image" />
            <div className="card-body tw-py-10">
                <h4 className="card-title fs-2 fw-bold tw-uppercase">about our journy</h4>
                <p className="card-text fs-6 tw-text-gray-600 tw-leading-7 tw-py-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsa illo quod veritatis, magni debitis fugiat dolore voluptates! Consequatur, aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat perferendis sint optio similique. Et amet magni facilis vero corporis quos.</p>
                <p className="card-text fs-6 tw-text-gray-600 tw-leading-7">exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum a, facere fugit error accusamus est officiis vero in, nostrum laboriosam corrupti explicabo, cumque repudiandae deleniti perspiciatis quae consectetur enim. Laboriosam!</p>
            </div>
        </div>
    </div>
)


const Stat = ({ value, label }) => (
    <div className=" tw-text-white tw-uppercase fw-bold tw-text-center">
        <h4 className="fs-2">{value}</h4>
        <p className="fs-4">{label}</p>
    </div>
)
const Stats = () => (
    <div className="bg-primary tw-py-8">
        <div className="container">
            <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-y-6">
                <Stat value="60" label="teachers" />
                <Stat value="50" label="courses" />
                <Stat value="100" label="students" />
                <Stat value="3737" label="satisfied client" />
            </div>
        </div>
    </div>
)
const About = () => {
    return (
        <>
            <Header activeLinkIndex={1} />
            <Hero2 linkTitle="Home" title="About Us" link={links["home"]} />
            <AboutMain />
            <Stats />
            <SuccessStory />
            <TeachersSection />
            <Footer />
        </>
    )
}

export default About
