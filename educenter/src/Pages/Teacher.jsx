import Header from "../components/ui/Header"
import Hero2 from "../components/ui/Hero2"
import { TeacherCard } from "../components/ui/TeachersSection"
import Footer from "../components/ui/Footer"

import Img1 from "../assets/images/teacher-1.jpg";
import Img2 from "../assets/images/teacher-2.jpg";
import Img3 from "../assets/images/teacher-3.jpg";

import { links } from "../App"

const All = () => (
    <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols2 md:tw-grid-cols-3 tw-gap-8">
        <TeacherCard img={Img1} name="Jacke Masito" />
        <TeacherCard img={Img2} name="Clark Malik" />
        <TeacherCard img={Img3} name="John Doe" />

        <TeacherCard img={Img1} name="Alex Rook" />
        <TeacherCard img={Img2} name="Din Martin" />
        <TeacherCard img={Img3} name="Raka Jim" />

        <TeacherCard img={Img1} name="Devid Luis" />
        <TeacherCard img={Img2} name="Zim Cook" />
        <TeacherCard img={Img3} name="Duis Riu" />
    </div>
)
const Arts = () => (
    <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols2 md:tw-grid-cols-3 tw-gap-8">
        <TeacherCard img={Img1} name="Jacke Masito" />
        <TeacherCard img={Img2} name="Zim Cook" />
    </div>
)
const BiologicalSience = () => (
    <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols2 md:tw-grid-cols-3 tw-gap-8">
        <TeacherCard img={Img2} name="Clark Malik" />
        <TeacherCard img={Img1} name="Alex Rook" />
        <TeacherCard img={Img1} name="Duis Riu" />
    </div>
)
const BusinessStudies = () => (
    <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols2 md:tw-grid-cols-3 tw-gap-8">
        <TeacherCard img={Img3} name="John Doe" />
        <TeacherCard img={Img3} name="Duis Riu" />
    </div>
)
const Law = () => (
    <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols2 md:tw-grid-cols-3 tw-gap-8">
        <TeacherCard img={Img1} name="Jacke Masito" />
        <TeacherCard img={Img2} name="Din Martin" />
    </div>
)
const Pharmacy = () => (
    <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols2 md:tw-grid-cols-3 tw-gap-8">
        <TeacherCard img={Img2} name="Zim Cook" />
    </div>
)
const Science = () => (
    <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols2 md:tw-grid-cols-3 tw-gap-8">
        <TeacherCard img={Img3} name="Raka Jim" />
    </div>
)
const SocialScience = () => (
    <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols2 md:tw-grid-cols-3 tw-gap-8">
        <TeacherCard img={Img2} name="Zim Cook" />
    </div>
)

const TeacherMain = () => (
    <div className="container tw-py-28">
        <ul className="nav nav-pills mb-3 tw-flex tw-flex-wrap tw-justify-center" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <button style={{color: "gray"}} className="hover-primary-color nav-link tw-bg-transparent fs-6 active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">ALL</button>
            </li>
            <li className="nav-item" role="presentation">
                <button style={{color: "gray"}} className="hover-primary-color nav-link tw-bg-transparent fs-6" id="pills-arts-tab" data-bs-toggle="pill" data-bs-target="#pills-arts" type="button" role="tab" aria-controls="pills-arts" aria-selected="false">ARTS</button>
            </li>
            <li className="nav-item" role="presentation">
                <button style={{color: "gray"}} className="hover-primary-color nav-link tw-bg-transparent fs-6" id="pills-bio-tab" data-bs-toggle="pill" data-bs-target="#pills-bio" type="button" role="tab" aria-controls="pills-bio" aria-selected="false">BIOLOGICAL SCIENCE</button>
            </li>
            <li className="nav-item" role="presentation">
                <button style={{color: "gray"}} className="hover-primary-color nav-link tw-bg-transparent fs-6" id="pills-business-tab" data-bs-toggle="pill" data-bs-target="#pills-business" type="button" role="tab" aria-controls="pills-business" aria-selected="false">BUSINESS STUDIES</button>
            </li>
            <li className="nav-item" role="presentation">
                <button style={{color: "gray"}} className="hover-primary-color nav-link tw-bg-transparent fs-6" id="pills-law-tab" data-bs-toggle="pill" data-bs-target="#pills-law" type="button" role="tab" aria-controls="pills-law" aria-selected="false">LAW</button>
            </li>
            <li className="nav-item" role="presentation">
                <button style={{color: "gray"}} className="hover-primary-color nav-link tw-bg-transparent fs-6" id="pills-pharmacy-tab" data-bs-toggle="pill" data-bs-target="#pills-pharmacy" type="button" role="tab" aria-controls="pills-pharmacy" aria-selected="false">PHARMACY</button>
            </li>
            <li className="nav-item" role="presentation">
                <button style={{color: "gray"}} className="hover-primary-color nav-link tw-bg-transparent fs-6" id="pills-science-tab" data-bs-toggle="pill" data-bs-target="#pills-science" type="button" role="tab" aria-controls="pills-science" aria-selected="false">SCIENCE</button>
            </li>
            <li className="nav-item" role="presentation">
                <button style={{color: "gray"}} className="hover-primary-color nav-link tw-bg-transparent fs-6" id="pills-social-tab" data-bs-toggle="pill" data-bs-target="#pills-social" type="button" role="tab" aria-controls="pills-social" aria-selected="false">SOCIAL SCIENCE</button>
            </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex="0"><All /></div>
            <div className="tab-pane fade" id="pills-arts" role="tabpanel" aria-labelledby="pills-arts-tab" tabIndex="0"><Arts /></div>
            <div className="tab-pane fade" id="pills-bio" role="tabpanel" aria-labelledby="pills-bio-tab" tabIndex="0"><BiologicalSience /></div>
            <div className="tab-pane fade" id="pills-business" role="tabpanel" aria-labelledby="pills-business-tab" tabIndex="0"><BusinessStudies /></div>
            <div className="tab-pane fade" id="pills-law" role="tabpanel" aria-labelledby="pills-law-tab" tabIndex="0"><Law /></div>
            <div className="tab-pane fade" id="pills-pharmacy" role="tabpanel" aria-labelledby="pills-pharmacy-tab" tabIndex="0"><Pharmacy /></div>
            <div className="tab-pane fade" id="pills-science" role="tabpanel" aria-labelledby="pills-science-tab" tabIndex="0"><Science /></div>
            <div className="tab-pane fade" id="pills-social" role="tabpanel" aria-labelledby="pills-social-tab" tabIndex="0"><SocialScience /></div>
        </div>
    </div>
);



const Teacher = () => {
    return (
        <>
            <Header />
            <Hero2 linkTitle="Home" title="Our teacher" link={links["home"]} />
            <TeacherMain />
            <Footer />
        </>
    )
}

export default Teacher
