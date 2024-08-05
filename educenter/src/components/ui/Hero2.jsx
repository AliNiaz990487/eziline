import { RiArrowRightWideFill } from 'react-icons/ri';

const Hero2 = ({ linkTitle, title, link }) => {
    return (
        <div
            className="tw-relative tw-bg-cover tw-bg-no-repeat tw-bg-center tw-w-full"
            style={{ backgroundImage: "url('src/assets/images/banner-1.jpg')", zIndex: 1 }}
        >

            <div className="container">
                <div className="row  tw-text-white tw-pt-44 tw-pb-28">
                    <div className="col-md-8">
                        <div className="fs-3 fw-bold">
                            <a className="text-primary fs-2 fw-bold hover:tw-cursor-pointer" href={link}>{linkTitle}</a>
                            <span className="tw-inline-block"><RiArrowRightWideFill /></span>
                            <span>{title}</span>
                        </div>
                        <p className="fs-6 tw-text-gray-300">Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others.</p>
                    </div>
                </div>
            </div>

            <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-bg-color-secondary tw-opacity-80" style={{ zIndex: -1 }}></div>
        </div>
    )
}

export default Hero2
