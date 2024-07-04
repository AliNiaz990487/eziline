import { IoPlaySharp } from "react-icons/io5";
import welcomeImage from "../../../assets/images/img_1_long.jpg";
import "./Welcome.css";



export default function Welcome(props) {
    return (
        <section className={`welcome ${props.className}`}>
            <img src={welcomeImage} alt="" className="welcome--image" />
            <div className="welcome--text">
                <h2>Welcome to our website</h2>
                <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonatia, there live the blind texts, Seprated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                </p>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelilia.</p>
                <div className="welcome--video">
                    <IoPlaySharp className="welcome--video-icon" /> 
                    <h4 className="welcome--video-text">Watch the video</h4>
                </div>
            </div>
        </section>
    )
}