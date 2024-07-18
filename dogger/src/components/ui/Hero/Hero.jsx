import Image from "../../../assets/images/dogger_img_1.png";
import "./Hero.css"

const Hero = (props) => {
  return (
    <div className="container" id="homeId" data-aos="fade-up">
      <div className="row">
        <div className="col-md-7 align-self-center text-center text-md-left">
          <div className="intro-text p-5">
            <h2>we care for
              <span className="d-md-block">your dog</span>
            </h2>
            <p >We are always try to provide your dog the best services.</p>
          </div>
        </div>
        <div className="col-md-5 align-self-end text-center text-md-right">
          {
            props.includeImage && <img className="col img-fluid " src={Image} alt="" />
          }
        </div>
      </div>
    </div>
  )
}

export default Hero
