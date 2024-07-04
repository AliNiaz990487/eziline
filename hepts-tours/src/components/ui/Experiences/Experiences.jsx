import Foods from "../../../assets/images/001-breakfast.svg";
import Travel  from "../../../assets/images/002-planet-earth.svg";
import Airplane  from "../../../assets/images/003-airplane.svg";
import Beach  from "../../../assets/images/004-beach.svg";
import Mountain  from "../../../assets/images/005-mountains.svg";
import Balloon  from "../../../assets/images/006-hot-air-balloon.svg";

import ExperiencesText from "../ExperiencesText/ExperiencesText";


import "./Experiences.css";

const gridData = [
    {
        img: Foods,
        title: "Good Foods",
        description: "Far far away, behind teh word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
        img: Travel,
        title: "Travel Anywhere",
        description: "Far far away, behind teh word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },    
    {
        img: Airplane,
        title: "Airplane",
        description: "Far far away, behind teh word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
        img: Beach,
        title: "Beach Resort",
        description: "Far far away, behind teh word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
        img: Mountain,
        title: "Mountain Climbing",
        description: "Far far away, behind teh word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
        img: Balloon,
        title: "Hot Air Balloon",
        description: "Far far away, behind teh word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    }
]


const gridItem = (img, title, description, key) => {
    return (
        <div className="experiences--grid-item" key={key}>
            <img src={img} alt={title} />
            <h4 className="experiences--main-text">{title}</h4>
            <p className="experiences--secondary-text experiences--secondary-text-small">{description}</p>
        </div>
    )
}

export default function Experiences(props) {
    return (
        <section className="experiences">
            {
                props.includeText? <ExperiencesText /> : <></> 
            }
            <div className="experiences--grid">
                {
                    gridData.map((item, index) => gridItem(item.img, item.title, item.description, index))
                }
            </div>
        </section>
    )
}