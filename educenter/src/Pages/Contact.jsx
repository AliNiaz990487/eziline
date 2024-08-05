import Header from "../components/ui/Header"
import Hero2 from "../components/ui/Hero2"
import Footer from "../components/ui/Footer"
import ContactForm from "../components/forms/ContactForm.jsx"
import { links } from "../App"



const ContactMain = () => (
    <div className="container tw-py-24 tw-pb-36 tw-text-gray-600 fs-6">
        <h4 className="fs-2 fw-bold tw-pb-12">Contact Us</h4>
        <div className="row tw-gap-y-7">
            <div className="col-12 col-md-7">
                <ContactForm />
            </div>
            <div className="col-12 col-md-5">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit recusandae voluptates doloremque veniam temporibus porro culpa ipsa, nisi soluta minima saepe laboriosam debitis nesciunt. Dolore, labore. Accusamus nulla sed cum aliquid exercitationem debitis error harum porro maxime quo iusto aliquam dicta modi earum fugiat, vel possimus commodi, deleniti et veniam, fuga ipsum praesentium. Odit unde optio nulla ipsum quae obcaecati! Quod esse natus quibusdam asperiores quam vel, tempore itaque architecto ducimus expedita</p>
                <div className="tw-py-12 fw-bold">
                    <a href="" className="hover-primary-color tw-block">+880 20 5784 3248</a>
                    <a href="" className="hover-primary-color tw-block">yourmail@email.com</a>
                </div>
                <p>71 Shelton Street</p>
                <p>London WC2H 9JQ England</p>
            </div>
        </div>
    </div>
)



const Contact = () => {
    return (
        <>
            <Header activeLinkIndex={6}/>
            <Hero2 linkTitle="Home" title="Contact Us" link={links["home"]} />
            <ContactMain />
            <Footer />
        </>
    )
}

export default Contact
