import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import './ProfileCard.css';

const ProfileCard = ({ image, name, description, socialLinks }) => {
  return (
    <div data-aos="fade-up" className="profile-card">
      <img src={image} className="card-img-top" alt={name} />
      <div className="m-5 card-body">
        <h5 className="card-title mb-4">{name}</h5>
        <p className="card-text">{description}</p>
        <div className="social-links mt-4">
          <FaTwitter />
          <FaInstagram />
          <FaFacebook />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
