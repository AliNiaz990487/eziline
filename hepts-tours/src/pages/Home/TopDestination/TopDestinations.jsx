import Image1 from "../../../assets/images/slider-6.jpg";
import Image2 from "../../../assets/images/img_2.jpg";
import Image3 from "../../../assets/images/img_4.jpg";
import Image4 from "../../../assets/images/img_5.jpg";

import "./TopDestinations.css";
import { IoMdStarOutline } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";

const destinations = [
    {
        image: Image1,
        title: "Food & Wines",
        rattings: 3,
        reviews: "3,239"
    },
    {
        image: Image2,
        title: "Resort & Spa",
        rattings: 3,
        reviews: "4,921"
    },
    {
        image: Image3,
        title: "Hotel Rooms",
        rattings: 4,
        reviews: "2,112"
    },
    {
        image: Image4,
        title: "Mountain Climbing",
        rattings: 4,
        reviews: "6,421"
    },
]

export default function TopDestinations(props) {
    return (
        <section className={`destinations ${props.className}`}>
            <h2>Top Destination</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.</p>
            <div className="destination--wrapper">
                {
                    destinations.map((destination, index) => {
                        return <div className="destination" key={index}>
                            <img src={destination.image} alt={destination.title} />
                            <h2>{destination.title}</h2>
                            <div className="destination--ratings-reviews">
                                <div className="destination--ratings">
                                    {   
                                        Array.from({ length: 5}, (_, i) => (i+1<=destination.rattings) ? <IoStarSharp key={i} />  : <IoMdStarOutline key={i} />)
                                    }
                                </div>
                                <div className="destination--reviews">
                                    {destination.reviews} reviews
                                </div>
                            </div>
                        </div>
                    })
                }  
            </div>          
        </section>
    )
}