import Header from "../components/ui/Header"
import Hero2 from "../components/ui/Hero2"
import { CourceCard } from "../components/ui/CourcesSection"
import Footer from "../components/ui/Footer"

import Img1 from "../assets/images/teacher-1.jpg"
import Img4 from "../assets/images/course-4.jpg"
import Img5 from "../assets/images/course-5.jpg"
import Img6 from "../assets/images/course-6.jpg"

import { links } from "../App"
import { FaEnvelope, FaFacebook, FaInternetExplorer, FaMobile, FaSkype, FaTwitter } from "react-icons/fa"
import { FaLocationPin } from "react-icons/fa6"

const TeacherSingleMain = () => (
    <div className="container tw-pt-24 tw-text-gray-600 fs-6">
        <div className="row tw-gap-y-4">
            <div className="col-12 col-md-5">
                <img src={Img1} className="tw-min-w-full" alt="" />
            </div>
            <div className="col-12 col-md-7">
                <div>
                    <h4 className="fs-3 fw-bold text-black">John Doe</h4>
                    <h5 className="fs-4 fw-bold tw-py-3">Computer Science</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque accusamus tenetur ea harum delectus ab consequatur excepturi, odit qui in quo quia voluptate nam optio, culpa aspernatur. Error placeat iusto officia voluptas quae.</p>
                </div>
                <div className="row tw-pt-8 tw-gap-y-8">
                    <div className="col-12 col-md-6">
                        <h4 className="fs-3 fw-bold text-black tw-uppercase">Contact info:</h4>
                        <ul className="">
                            <li className="hover-primary-color tw-pt-2"><a href=""><span className="tw-inline-block tw-translate-y-1"><FaEnvelope /></span> johndoe@gmail.com</a></li>
                            <li className="hover-primary-color tw-pt-2"><a href=""><span className="tw-inline-block tw-translate-y-1"><FaMobile /></span> +120 345 876</a></li>
                            <li className="hover-primary-color tw-pt-2"><a href=""><span className="tw-inline-block tw-translate-y-1"><FaFacebook /></span> john Doe</a></li>
                            <li className="hover-primary-color tw-pt-2"><a href=""><span className="tw-inline-block tw-translate-y-1"><FaTwitter /></span> john Doe</a></li>
                            <li className="hover-primary-color tw-pt-2"><a href=""><span className="tw-inline-block tw-translate-y-1"><FaSkype /></span></a> john Doe</li>
                            <li className="hover-primary-color tw-pt-2"><a href=""><span className="tw-inline-block tw-translate-y-1"><FaInternetExplorer /></span> johnDoe.com</a></li>
                            <li className="hover-primary-color tw-pt-2"><a href=""><span className="tw-inline-block tw-translate-y-1"><FaLocationPin /></span></a> 1313 Boulevard Cremazie,Quebec</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6">
                        <h4 className="fs-3 fw-bold text-black tw-uppercase tw-pb-3">summary of activiteis/interests</h4>
                        <p className="tw-pt-2">Computer Networking</p>
                        <p className="tw-pt-2">Computer Security</p>
                        <p className="tw-pt-2">Human Computer Interfacing</p>
                    </div>
                </div>
            </div>
        </div>

        <h4 className="fs-3 fw-bold text-black tw-uppercase tw-py-4">biography</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
    </div>
)



const TeacherSingle = () => {
    return (
        <>
            <Header/>
            <Hero2 linkTitle="Our Teacher" title="John Doe" link={links["teacher"]} />
            <TeacherSingleMain />
            <div className="container">
                <h4 className="fs-4 fw-bold tw-py-4">OUR COURSES</h4>
                <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-8 tw-pt-10 tw-pb-24">
                    <CourceCard img={Img4} title="Complete Freelancing"/>
                    <CourceCard img={Img5} title="Branding Design"/>
                    <CourceCard img={Img6} title="Art Design"/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TeacherSingle
