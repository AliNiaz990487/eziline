import Image1 from "../../../assets/images/dogger_trainer_1.jpg";
import Image2 from "../../../assets/images/dogger_trainer_2.jpg";
import Image3 from "../../../assets/images/dogger_trainer_3.jpg";


import PawText from "../PawText/PawText";
import ProfileCard from "../ProfileCard/ProfileCard";

import "./ProfileCards.css";
const ProfileCards = () => {
    const profiles = [
        {
          image: Image1,
          name: 'Jessica White',
          description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
        },
        {
          image: Image2,
          name: 'Valerie Elash',
          description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
        },
        {
          image: Image3,
          name: 'Alicia Jones',
          description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
        },
      ];
    
      return (
        <section className="profile-cards-bg" id="trainersId">
          <div className="container">
            <PawText className="profile-paw-color mb-5" heading="our trainers" peragraph="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
            <div className="mb-5 d-flex flex-wrap justify-content-between  justify-content-md-around">
              {profiles.map((profile, index) => (
                <ProfileCard key={index} {...profile} />
              ))}
            </div>
          </div>
        </section>
      );
}

export default ProfileCards
