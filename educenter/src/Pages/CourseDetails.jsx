import Header from "../components/ui/Header"
import Hero2 from "../components/ui/Hero2"
import Photography from "../components/ui/Photography";
import Footer from "../components/ui/Footer"

import Img from "../assets/images/teacher.jpg"
import { GoDotFill } from "react-icons/go";
import { links } from "../App"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CourceCard } from "../components/ui/CourcesSection";

import Img1 from "../assets/images/course-1.jpg"
import Img2 from "../assets/images/course-2.jpg"
import Img3 from "../assets/images/course-3.jpg"


const CourseDetailsCard = () => (
    <div className="container tw-py-12">
        <div className="border-bottom tw-py-4">
            <h4 className="fs-3 fw-bold tw-pb-4">Teacher</h4>
            <div className="d-flex tw-justify-center md:tw-justify-between tw-flex-wrap tw-gap-y-5">
                <div className="tw-flex tw-gap-4">
                    <img src={Img} alt="" />
                    <div className="">
                        <h4 className="fs-3 fw-bold">Sam Somrat</h4>
                        <p>Photographer</p>
                    </div>
                </div>
                <div>
                    <h5 className="fs-3 fw-bold tw-pb-3">Social Link</h5>
                    <ul className="tw-text-gray-600">
                        <li className="hover-primary-color tw-inline-block tw-pe-6"><a href=""><FaFacebook /></a></li>
                        <li className="hover-primary-color tw-inline-block tw-pe-6"><a href=""><FaTwitter /></a></li>
                        <li className="hover-primary-color tw-inline-block tw-pe-6"><a href=""><FaLinkedin /></a></li>
                        <li className="hover-primary-color tw-inline-block tw-pe-6"><a href=""><FaInstagram /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)

const CourseDetailsMain = () => {
    const Column = () => (
        <ul className="tw-flex-1">
            <li className="tw-pt-2"><span className="tw-pe-3 tw-translate-y-1 tw-text-color-primary tw-inline-block"><GoDotFill /></span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className="tw-pt-2"><span className="tw-pe-3 tw-translate-y-1 tw-text-color-primary tw-inline-block"><GoDotFill /></span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className="tw-pt-2"><span className="tw-pe-3 tw-translate-y-1 tw-text-color-primary tw-inline-block"><GoDotFill /></span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className="tw-pt-2"><span className="tw-pe-3 tw-translate-y-1 tw-text-color-primary tw-inline-block"><GoDotFill /></span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        </ul>
    )

    return (
        <div className="container tw-text-gray-600 fs-6 tw-leading-7">
            <h4 className="fs-3 fw-bold tw-text-color-secondary tw-py-4 tw-pt-12">About Course</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <h4 className="fs-3 fw-bold tw-text-color-secondary tw-py-4 tw-pt-12">Requirements</h4>
            <div className="md:tw-flex tw-flex-wrap tw-gap-8">
                <Column />
                <Column />
            </div>
            <h4 className="fs-3 fw-bold tw-text-color-secondary tw-py-4 tw-pt-12">How to Apply</h4>
            <ul className="">
                <li className="tw-pt-2"><span className="tw-pe-3 tw-translate-y-1 tw-text-color-primary tw-inline-block"><GoDotFill /></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati unde nulla? Lorem, ipsum dolor. Lorem, ipsum.</li>
                <li className="tw-pt-2"><span className="tw-pe-3 tw-translate-y-1 tw-text-color-primary tw-inline-block"><GoDotFill /></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati unde nulla? Lorem, ipsum dolor. Lorem, ipsum.</li>
                <li className="tw-pt-2"><span className="tw-pe-3 tw-translate-y-1 tw-text-color-primary tw-inline-block"><GoDotFill /></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati unde nulla? Lorem, ipsum dolor. Lorem, ipsum.</li>
                <li className="tw-pt-2"><span className="tw-pe-3 tw-translate-y-1 tw-text-color-primary tw-inline-block"><GoDotFill /></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati unde nulla? Lorem, ipsum dolor. Lorem, ipsum.</li>
                <li className="tw-pt-2"><span className="tw-pe-3 tw-translate-y-1 tw-text-color-primary tw-inline-block"><GoDotFill /></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati unde nulla? Lorem, ipsum dolor. Lorem, ipsum.</li>
            </ul>
            <h4 className="fs-3 fw-bold tw-text-color-secondary tw-py-4 tw-pt-12">Feels and Funding</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
    )
}



const CourseDetails = () => {
    return (
        <>
            <Header />
            <Hero2 linkTitle="Our Courses" title="Photography" link={links["cources"]} />
            <Photography title="Photography" />
            <CourseDetailsMain />
            <CourseDetailsCard />
            <div className="container tw-pt-8 tw-pb-36">
                <h4 className="text-secondary fs-1 fw-bold tw-py-3">Related Course</h4>
                <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-8 tw-py-10">
                    <CourceCard img={Img1} title="Photography"/>
                    <CourceCard img={Img2} title="Programming"/>
                    <CourceCard img={Img3} title="Lifestyle Archives"/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CourseDetails
