import React from 'react';
import Logo from "../../../assets/images/logo.png";
import "./LogoAndContact.css";

const Contact = ({ label, contact, className = "border-1 border-start" }) => (
    <div className={`px-3 border-md-0 ${className}`}>
        <small>{label}</small>
        <h4 className="h6 fw-bold">{contact}</h4>
    </div>
);

const LogoAndContact = () => {
  return (
    <section className="container">
        <div className="row align-items-center my-4">
            <div className="col-12 col-lg-2 text-center text-lg-start mb-3 mb-lg-0">
                <img className="img-fluid" src={Logo} alt="logo" style={{ maxWidth: '150px' }} />
            </div>
            <div className="col-12 col-lg-10 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
                <Contact label="Call Us" contact="(+9) 847-291-4353" className='' />
                <Contact label="Email Us" contact="office@Constra.com" />
                <Contact label="Global Certificate" contact="ISO 9001:2017" />
                <a href="/contact" className="btn btn-primary rounded-0">Get A Quote</a>
            </div>
        </div>
    </section>
  );
}

export default LogoAndContact;
