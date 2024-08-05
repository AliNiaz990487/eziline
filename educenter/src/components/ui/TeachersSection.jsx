import { FaFacebook, FaGooglePlus, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Img1 from "../../assets/images/teacher-1.jpg";
import Img2 from "../../assets/images/teacher-2.jpg";
import Img3 from "../../assets/images/teacher-3.jpg";

const TeacherCard = ({ img, name }) => (
    <div className="card hover:tw-shadow-md tw-transition-all border-0">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body tw-py-5">
            <h5 className="card-title fs-4 fw-bold tw-pt-3 hover-primary-color">{name}</h5>
            <p className="card-text fs-6 tw-text-gray-600 tw-pb-3">Teacher</p>
            <ul className="tw-text-gray-600">
                <li className="tw-inline-block tw-pe-3 hover-primary-color"><a href=""><FaFacebook /></a></li>
                <li className="tw-inline-block tw-pe-3 hover-primary-color"><a href=""><FaTwitter /></a></li>
                <li className="tw-inline-block tw-pe-3 hover-primary-color"><a href=""><FaGooglePlus /></a></li>
                <li className="tw-inline-block tw-pe-3 hover-primary-color"><a href=""><FaLinkedin /></a></li>
            </ul>
        </div>
    </div>
)

const TeachersSection = () => {
  return (
    <div className="container tw-py-24">
      <h4 className="fs-2 fw-bold">Our Teachers</h4>
      <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-8 tw-py-10">
            <TeacherCard img={Img1} name="Jacke Masito"/>
            <TeacherCard img={Img2} name="Clark Malik"/>
            <TeacherCard img={Img3} name="John Doe"/>
        </div>
    </div>
  )
}
export { TeacherCard }
export default TeachersSection
