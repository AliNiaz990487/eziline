import "./PricingCard.css"

const PricingCard = ({ title, price, features, buttonText, isDark }, key) => {
    return (
      <div data-aos="fade-up" className={`card text-white ${isDark ? 'bg-dark' : ''} mb-5 pb-5 pt-5`} key={key}>
        <div className="card-body p-5 d-flex flex-column align-items-center">
          <h5 className="card-title mb-5">{title}</h5>
          <h6 className="card-price mb-5">${price}<span className="period">/year</span></h6>
          <ul className="fa-ul">
            {features.map((feature, index) => (
              <li key={index} className={`pb-3 ${feature.isDisabled ? 'text-line-through' : ''}`}>
                {feature.text}
              </li>
            ))}
          </ul>
          <button className={`mt-5 btn card-btn ${isDark ? "card-btn-light" : "card-btn-dark"}`}>{buttonText}</button>
        </div>
      </div>
    );
  }

export default PricingCard
