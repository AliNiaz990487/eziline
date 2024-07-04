import "../../../assets/global.css"
import "./HeroText.css"

export default function HeroText(props) {
    return <div className="hero-text">
        <h1>{props.heroText}</h1>
        <p>A free template by <a href="#">Colorlib</a>. Download and share!</p>
        
    </div>
}


