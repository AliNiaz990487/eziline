import Header from "../../components/ui/Header/Header.jsx";
import Form from "../../components/forms/Form/Form.jsx";
import ContactDetails from "./ContactDetails/ContactDetails.jsx";
import HappyCustomers from "../../components/ui/HappyCustomers/HappyCustomers.jsx";
import Footer from "../../components/ui/Footer/Footer.jsx";

import "./Contact.css";

export default function Contact(props) {
    return (
        <>
            <Header heroText="Contact" />
            <main className="contact-main">
                <section className="contact-section">
                    <Form />
                    <ContactDetails />
                </section>
                <HappyCustomers />
            </main>
            <Footer />
        </>
    )
}