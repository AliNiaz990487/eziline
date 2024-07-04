import IntroCard from "../../../components/ui/IntroCard/IntroCard.jsx";

import "./IntroCards.css";

export default function IntroCards() {
    return (
        <div className="intro-cards">
            <IntroCard heading="Faimly Room" />
            <IntroCard heading="Presidential Room" oppositeCard="opposite-card"/>
        </div>
    )
}