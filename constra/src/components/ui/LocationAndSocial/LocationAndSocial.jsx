import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'
import { FaLocationDot } from "react-icons/fa6"

const LocationAndSocial = () => {
  return (
    <section className="bg-body-secondary">
        <div className="container p-2">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-md-between">
                <div className="">
                    <span className="mx-2"><FaLocationDot /></span>
                    <small className="mx-2">905 Constra Incorporate, USA</small>
                </div>
                <div className="">
                    <a href="#" className="link-dark mx-2"><FaFacebook /></a>
                    <a href="#" className="link-dark mx-2"><FaTwitter /></a>
                    <a href="#" className="link-dark mx-2"><FaInstagram /></a>
                    <a href="#" className="link-dark mx-2"><FaGithub /></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LocationAndSocial
