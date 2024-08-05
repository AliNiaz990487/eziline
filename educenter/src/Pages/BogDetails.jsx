import Header from "../components/ui/Header"
import Hero2 from "../components/ui/Hero2"
import { NewsCard } from "../components/ui/NewsSection"
import BlogDetailsForm from "../components/forms/BlogDetailsForm"
import Footer from "../components/ui/Footer"

import { links } from "../App"

import { IoBookOutline } from "react-icons/io5";
import { TbStackPop } from "react-icons/tb";
import { TfiComment } from "react-icons/tfi";

import Img from "../assets/images/blog-single.jpg"
import Img1 from "../assets/images/post-1.jpg";
import Img2 from "../assets/images/post-2.jpg";
import Img3 from "../assets/images/post-3.jpg";

const BlogDetailsCard = () => (
    <div className="container tw-pt-12">
        <div className="border-bottom tw-text-gray-600">
            <img src={Img} alt="" />
            <div className="d-flex tw-flex-wrap tw-items-center tw-gap-6 tw-py-4">
                <p><span className="fw-bold">Post:</span> Somrat</p>
                <p>August 28, 2017</p>
                <p><span className="tw-inline-block tw-translate-y-0.5"><IoBookOutline /></span> Read 289</p>
                <p><span className="tw-inline-block tw-translate-y-0.5"><TbStackPop /></span> 289</p>
                <p><span className="tw-inline-block tw-translate-y-0.5"><TfiComment /></span> 265</p>
            </div>
        </div>
    </div>
)

const BlogDetailsMain = () => {

    return (
        <div className="container tw-text-gray-600 fs-6 tw-leading-7">
            <h4 className="fs-2 fw-bold tw-text-color-secondary tw-py-4 tw-pt-12">Lorem ipsum dolor amet, consectetur adipisicing eiusmod tempor </h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem s</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, </p>
        </div>
    )
}



const BlogDetails = () => {
    return (
        <>
            <Header />
            <Hero2 linkTitle="Our Blog" title="Blog Details" link={links["blog"]} />
            <BlogDetailsCard />
            <BlogDetailsMain />
            <BlogDetailsForm />
            <div className="container tw-py-24">
                <h4 className="fs-2 fw-bold">Recommended</h4>
                <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-8 tw-py-10">
                    <NewsCard img={Img1} date="August 28, 2018" name="Somrat Sorkar" />
                    <NewsCard img={Img2} date="August 13, 2018" name="Jonathon Drew" />
                    <NewsCard img={Img3} date="August 24, 2018" name="Alex Pitt" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BlogDetails
