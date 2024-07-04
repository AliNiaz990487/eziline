
import Image1 from "../../../assets/images/person_1.jpg";
import Image2 from "../../../assets/images/person_2.jpg";
import Image3 from "../../../assets/images/person_3.jpg";

import "./TeamCards.css";

const cardsData = [
    {
        image: Image3,
        rank: "ceo, co-founder",
        name: "Vince Richardson"
    },
    {
        image: Image1,
        rank: "cto, co-founder",
        name: "Jean Love"
    },
    {
        image: Image2,
        rank: "marketer, co-founder",
        name: "Jeff Stark"
    },    
    {
        image: Image3,
        rank: "ceo, co-founder",
        name: "Vince Richardson"
    },
    {
        image: Image1,
        rank: "cto, co-founder",
        name: "Jean Love"
    },
    {
        image: Image2,
        rank: "marketer, co-founder",
        name: "Jeff Stark"
    }
]

export default function TeamCards(props) {
    return (
        <section className="team-cards">
            {
                cardsData.map((card, index) => {
                    return <div className="card" key={index}>
                        <img src={card.image} alt={`card-image-${index}`} />
                        <p>{card.rank}</p>
                        <h2>{card.name}</h2>
                    </div>
                })
            }
        </section>
    )
}