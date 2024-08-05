import Header from "../components/ui/Header"
import Hero2 from "../components/ui/Hero2"
import Footer from "../components/ui/Footer"

import { links } from "../App"
import { GoDotFill } from "react-icons/go";


const NoticeDetailsMain = () => (
    <div className="container tw-py-24 tw-text-gray-600 fs-6">
        <div className="tw-flex tw-gap-3 tw-gap-y-4 tw-flex-wrap">
            <div className="bg-primary tw-self-start tw-text-center tw-text-white tw-uppercase tw-p-4">
                <p className="fs-2 fw-bold">30</p>
                <p className="fs-4">apr,2019</p>
            </div>
            <div className="col-12 col-md-10">
                <h4 className="fs-3 fw-bold text-black tw-uppercase tw-py-4">Teaching Materials and Testing Methods</h4>
                <p className="tw-py-4">Lorem ipsum dolor sit amet, lectus molestie amet eget varius nulla ultricies, senectus vehicula wisi risus tellus nonummy. Urna volutpat, nunc doloremque risus felis lorem risus. Et suspendisse diam libero pulvinar, tristique ac cras luctus ornare. Quam justo. Non ligula turpis sem, velit dolor luctus venenatis. Eros eget at vitae, wisi diam ut ad convallis, in gravida nunc inceptos sed leo donec, duis dolorem adipiscing arcu facilisis. Purus lorem vulputate et condimentum in felis, porttitor accumsan id bibendum diam varius, lorem diam molestie erat a amet urna, dolor pellentesque lectus justo adipiscing. Laoreet est velit vestibulum, laoreet luctus bibendum sed ornare amet elementum, ullamcorper nibh in sollicitudin donec arcu lorem.</p>
                <p>Quam justo. Non ligula turpis sem, velit dolor luctus venenatis. Eros eget at vitae, wisi diam ut ad convallis, in gravida nunc inceptos sed leo donec, duis dolorem adipiscing arcu facilisis. Purus lorem vulputate et condimentum in felis, porttitor accumsan id bibendum diam varius, lorem diam molestie erat a amet urna, dolor pellentesque lectus justo adipiscing. Laoreet est velit vestibulum, laoreet luctus bibendum sed ornare amet elementum, ullamcorper nibh in sollicitudin donec arcu lorem.</p>
                <ul className="tw-py-4">
                    <li><span className="tw-translate-y-1 tw-pe-3 tw-text-color-primary tw-inline-block"><GoDotFill /></span> Digital Access to Scholarship at Smart</li>
                    <li><span className="tw-translate-y-1 tw-pe-3 tw-text-color-primary tw-inline-block"><GoDotFill /></span> institutes</li>
                    <li><span className="tw-translate-y-1 tw-pe-3 tw-text-color-primary tw-inline-block"><GoDotFill /></span> Smart-affiliated hospitals and research</li>
                    <li><span className="tw-translate-y-1 tw-pe-3 tw-text-color-primary tw-inline-block"><GoDotFill /></span> Smart Catalyst</li>
                    <li><span className="tw-translate-y-1 tw-pe-3 tw-text-color-primary tw-inline-block"><GoDotFill /></span> Smart Library Portal</li>
                    <li><span className="tw-translate-y-1 tw-pe-3 tw-text-color-primary tw-inline-block"><GoDotFill /></span> Smart reasearch programs and departments</li>
                </ul>
                <a href="" className="btn btn-primary tw-mb-10">Download</a>
            </div>
        </div>

    </div>
)



const NoticeDetails = () => {
    return (
        <>
            <Header />
            <Hero2 linkTitle="Notice" title="Notice Details" link={links["notice"]} />
            <NoticeDetailsMain />
            <Footer />
        </>
    )
}

export default NoticeDetails
