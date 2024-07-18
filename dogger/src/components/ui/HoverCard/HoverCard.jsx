import './HoverCard.css';

const HoverCard = ({ image, title, text, buttonLabel, reverse, aos1, aos2 }) => {
  return (
    <div className={`d-flex align-items-center my-3 p-3 hover-card ${reverse ? 'reverse-card' : ''}`}>
      <div data-aos={aos1} className={`text-container ${reverse ? "reverse-text-container" : ""}`}>
        <h2>{title}</h2>
        <p>{text}</p>
        <button className="">{buttonLabel}</button>
      </div>
      <div data-aos={aos2} className="image-container">
        <img src={image} alt={title} className="" />
      </div>
    </div>
  );
};

export default HoverCard;
