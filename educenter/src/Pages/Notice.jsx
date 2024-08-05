import Header from "../components/ui/Header"
import Hero2 from "../components/ui/Hero2"
import Footer from "../components/ui/Footer"

import { links } from "../App"

const NoticeCard = ({title, date}) => (
    <div className="md:tw-flex tw-items-center tw-gap-5 border-bottom tw-my-10">
        <div className="tw-flex-grow-0 bg-primary tw-text-center tw-text-white fw-bold tw-uppercase tw-p-3">
            <p className="fs-2">{date}</p>
            <p className="fs-4">apr,2019</p>
        </div>
        <div className="tw-flex-1">
            <a href="" className="fs-3 fw-bold hover-primary-color">{title}</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis saepe omnis officia! Doloribus quae maiores laboriosam praesentium enim fugiat ipsam laudantium assumenda!</p>
        </div>
        <div className="tw-flex-grow-0 tw-text-end">
            <a href={links["notice-details"]} className="btn btn-primary">Read More</a>
        </div>
    </div>
)

const NoticeMain = () => (
    <div className="container tw-py-24 tw-text-gray-600 fs-6">
        <NoticeCard date="30" title="Teaching Materials and Testing Methods" />
        <NoticeCard date="27" title="Biltong sirloin sausage brisket porchetta prosciutto" />
        <NoticeCard date="25" title="Teaching Materials and Testing Methods" />
        <NoticeCard date="23" title="Biltong sirloin sausage brisket porchetta prosciutto" />
    </div>
)



const Notice = () => {
    return (
        <>
            <Header/>
            <Hero2 linkTitle="Home" title="Notice" link={links["home"]} />
            <NoticeMain />
            <Footer />
        </>
    )
}

export default Notice
