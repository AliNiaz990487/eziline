import "./Specialization.css"
import icon1 from "../../../assets/images/service-icon1.png"
import icon2 from "../../../assets/images/service-icon2.png"
import icon3 from "../../../assets/images/service-icon3.png"
import icon4 from "../../../assets/images/service-icon4.png"
import icon5 from "../../../assets/images/service-icon5.png"
import icon6 from "../../../assets/images/service-icon6.png"
import center from "../../../assets/images/service-center.jpg"
const Specialization = () => {
  return (
    <>
      <div className='container'>
        <div className="text-center m-5">
          <div className="col-12">
            <h1 className='fs-6'>WE ARE SPECIALISTS IN</h1>
            <h3 className='fs-2 text'>WHAT WE DO</h3>
          </div>
        </div>

        <div className="row p-4">
          <div className="col-lg-4">
            <div className='ts-service-box d-flex  out'>
              <div className="ts-service-box-img">
                <img src={icon1} alt="" />
              </div>
              <div className="ts-service-box-info insite">
                <h3 className='service-box-title nikal'>
                  <a className="" href="#">Home Construction</a>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, delectus accusamus deleniti repudiandae exercitationem possimus.</p>
              </div>

            </div>
            <div className='ts-service-box d-flex  out'>
              <div className="ts-service-box-img">
                <img src={icon2} alt="" />
              </div>
              <div className="ts-service-box-info insite">
                <h3 className='service-box-title nikal'>
                  <a href="#">BUILDING REMODELS</a>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, delectus accusamus deleniti repudiandae exercitationem possimus.</p>
              </div>

            </div>
            <div className='ts-service-box d-flex  out'>
              <div className="ts-service-box-img">
                <img src={icon3} alt="" />
              </div>
              <div className="ts-service-box-info insite">
                <h3 className='service-box-title nikal'>
                  <a href="#">INTERIOR DESIGN</a>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, delectus accusamus deleniti repudiandae exercitationem possimus.</p>
              </div>

            </div>
          </div>
          <div className="col-lg-4 text-center">
            <img src={center} alt="" className='img-size' />
          </div>
          <div className="col-lg-4">
            <div className='ts-service-box d-flex  out'>
              <div className="ts-service-box-img">
                <img src={icon4} alt="" />
              </div>
              <div className="ts-service-box-info insite">
                <h3 className='service-box-title nikal'>
                  <a href="#">Home Construction</a>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, delectus accusamus deleniti repudiandae exercitationem possimus.</p>
              </div>

            </div>
            <div className='ts-service-box d-flex  out'>
              <div className="ts-service-box-img">
                <img src={icon5} alt="" />
              </div>
              <div className="ts-service-box-info insite">
                <h3 className='service-box-title nikal'>
                  <a href="#">BUILDING REMODELS</a>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, delectus accusamus deleniti repudiandae exercitationem possimus.</p>
              </div>

            </div>
            <div className='ts-service-box d-flex  out'>
              <div className="ts-service-box-img">
                <img src={icon6} alt="" />
              </div>
              <div className="ts-service-box-info insite">
                <h3 className='service-box-title nikal'>
                  <a href="#">INTERIOR DESIGN</a>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, delectus accusamus deleniti repudiandae exercitationem possimus.</p>
              </div>

            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Specialization