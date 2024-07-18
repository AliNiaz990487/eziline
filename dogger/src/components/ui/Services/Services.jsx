import Img1 from "../../../assets/images/dogger_checkup.svg";
import Img2 from "../../../assets/images/dogger_dermatology.svg";
import Img3 from "../../../assets/images/dogger_bones.svg";
import Img4 from "../../../assets/images/dogger_veterinary.svg";
import Img5 from "../../../assets/images/dogger_dryer.svg";
import Img6 from "../../../assets/images/dogger_veterinarian.svg";

const services = [
  {
    icon: Img1,
    title: 'Dog Checkup',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
  },
  {
    icon: Img2,
    title: 'Dog Dermatology',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
  },
  {
    icon: Img3,
    title: 'For Strong Teeth',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
  },
  {
    icon: Img4,
    title: 'Dog First Aid',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
  },
  {
    icon: Img5,
    title: 'Dog Dryer',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
  },
  {
    icon: Img6,
    title: 'Expert Veterinarian',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
  }
];

const ServiceCard = ({ icon, title, description }) => (
  <div data-aos="fade-up" className="col-md-4 mb-4">
    <div className="h-100">
      <img src={icon} className="mx-auto mt-4" alt={title} style={{ width: '100px' }} />
      <div className="card-body">
        <h5 className="card-title text-start pt-5 pb-3">{title}</h5>
        <p className="card-text" style={{color: "#999", fontSize: "var(--ft-sm)"}}>{description}</p>
      </div>
    </div>
  </div>
);

const Services = () => (
  <div className="container">
    <div className="row pt-5">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  </div>
);

export default Services;
