import React, { useState, useEffect } from "react";
import Image1 from "../../../assets/images/person_4.jpg";
import Image2 from "../../../assets/images/person_3.jpg";
import Image3 from "../../../assets/images/person_2.jpg";
import Image4 from "../../../assets/images/person_1.jpg";
import "./HappyCustomers.css";

import Slider from "react-slick";


const happyCustomers = [
    {
        image: Image1,
        name: "Ricky Fisher",
        review: "“The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.”"
    },
    {
        image: Image2,
        name: "Ken Davis",
        review: "“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.”"
    },
    {
        image: Image3,
        name: "Mellisa Griffin",
        review: "“A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”"
    },
    {
        image: Image4,
        name: "Robert Steward",
        review: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”"
    }
];


// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';

const HappyCustomers = () => {
    const [settings, setSettings] = useState({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 1
    });

    useEffect(() => {
        const handleResize = () => {
            let width = document.body.clientWidth;
            if (width < 768) {
                setSettings((prevSettings) => ({
                    ...prevSettings,
                    slidesToShow: 1,
                }));
            } else if (width < 1200) {
                setSettings((prevSettings) => ({
                    ...prevSettings,
                    slidesToShow: 2,
                }));
            } else {
                setSettings((prevSettings) => ({
                    ...prevSettings,
                    slidesToShow: 3,
                }));
            }
        };

        window.addEventListener('resize', handleResize);

        // Initial check
        handleResize();

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section data-aos="fade-up" className="container pb-5">
            <div className="">
                <Slider {...settings} >
                    {happyCustomers.map((customer, index) => (
                        <div className="customer-container text-center" key={index}>
                            <div className="review-bubble mb-3">
                                <p>{customer.review}</p>
                            </div>
                            <div className="customer-image-container">
                                <img className="customer-image rounded-circle mt-5" src={customer.image} alt={customer.name} />
                            </div>
                            <div className="customer-name mt-2">{customer.name}</div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="p-5"></div>
        </section>
    );
};

export default HappyCustomers;
