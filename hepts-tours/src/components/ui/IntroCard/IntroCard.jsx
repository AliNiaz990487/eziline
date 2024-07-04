import VisitButton from "../VisitButton/VisitButton.jsx";

import "./IntroCard.css";


export default function IntorCard(props) {
    return (
        <section className="intro-card">
            <div className={`intro-card--wrapper ${props.oppositeCard}`}>
                <div className="image"></div>
                <div className="intro-card--content">
                    <h2>{props.heading}</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. </p>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
                    <VisitButton buttonText="learn more"/>
                </div>
            </div>
        </section>
    )
}