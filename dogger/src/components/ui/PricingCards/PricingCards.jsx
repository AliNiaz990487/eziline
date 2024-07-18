import PricingCard from "../PricingCard/PricingCard";
import "./PricingCards.css"

const PricingCards = () => {
    const pricingPlans = [
        {
          title: 'BASIC',
          price: 47,
          features: [
            { text: 'Officia quaerat eaque neque', isDisabled: false },
            { text: 'Possimus aut consequuntur incidunt', isDisabled: false },
            { text: 'Lorem ipsum dolor sit amet', isDisabled: true },
            { text: 'Consectetur adipiscing elit', isDisabled: true },
            { text: 'Dolorum esse odio quas architecto sint', isDisabled: true },
          ],
          buttonText: 'Buy Now',
          isDark: false,
        },
        {
          title: 'PREMIUM',
          price: 250,
          features: [
            { text: 'Officia quaerat eaque neque', isDisabled: false },
            { text: 'Possimus aut consequuntur incidunt', isDisabled: false },
            { text: 'Lorem ipsum dolor sit amet', isDisabled: false },
            { text: 'Consectetur adipiscing elit', isDisabled: false },
            { text: 'Dolorum esse odio quas architecto sint', isDisabled: true },
          ],
          buttonText: 'Buy Now',
          isDark: true,
        },
        {
          title: 'PROFESSIONAL',
          price: 850,
          features: [
            { text: 'Officia quaerat eaque neque', isDisabled: false },
            { text: 'Possimus aut consequuntur incidunt', isDisabled: false },
            { text: 'Lorem ipsum dolor sit amet', isDisabled: false },
            { text: 'Consectetur adipiscing elit', isDisabled: false },
            { text: 'Dolorum esse odio quas architecto sint', isDisabled: false },
          ],
          buttonText: 'Buy Now',
          isDark: false,
        }
      ];
      // window.addEventListener('load', AOS.refresh)
      return (
        <div className="container my-5" id="pricingId">
          <div className="d-flex justify-content-center wrap-cards">
            {pricingPlans.map((plan, index) => (
                <PricingCard {...plan} key={index} />
            ))}
          </div>
        </div>
      );
}

export default PricingCards
