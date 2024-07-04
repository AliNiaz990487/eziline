
import "./CarouselTopText.css";


export default function CarouselTopText(props) {
    return (
        <div className="carousel-top-text">
            <h2>{props.heading}</h2>
            <p>{props.peragraph}</p>
        </div>
    )
}