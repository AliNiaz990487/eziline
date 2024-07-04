import Image1 from "../../../assets/images/slider-1.jpg";
import Image2 from "../../../assets/images/slider-2.jpg";
import Image3 from "../../../assets/images/slider-3.jpg";
import Image4 from "../../../assets/images/slider-4.jpg";
import Image5 from "../../../assets/images/slider-5.jpg";
import Image6 from "../../../assets/images/slider-6.jpg";

import "./Carousel.css";

import { useState, useEffect } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
const images = [Image1, Image2, Image3, Image4, Image5, Image6];


export default function Carousel(props) {
    const [currentIndex, setSliderIndex] = useState(0)

    const prev = () => {
        setSliderIndex(currentIndex > 0 ? currentIndex - 1 : images.length - 1)
    }
    const next = () => {
        setSliderIndex(currentIndex < images.length - 1 ? currentIndex + 1 : 0)
    }
    const setByIndicator = (index) => {
        setSliderIndex(index);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 5000);
        
        return () => clearInterval(interval);
    }, [currentIndex]);
    return (
        <section className={`carousel ${props.className}`}>
            <MdArrowBackIos onClick={prev} className="carousel--btn carousel--btn-backword"/>
            <div className="carousel--wraper">
                {
                    images.map((img, index) => {
                        return <img src={img} alt={`image-${index + 1}`} key={index} className={index == currentIndex ? "show-image" : "hide-image"} />
                    })
                }
                <div className="carousel--indicators">
                    {
                        images.map((_, index) => {
                            return <div onClick={() => setByIndicator(index) } className={index==currentIndex ? "active-indicator" : "inactive-indicator"} key={index}/>
                        })
                    }
                </div>

            </div>
            <MdArrowForwardIos onClick={next} className="carousel--btn carousel--btn-forward"/>
        </section>
    )
}