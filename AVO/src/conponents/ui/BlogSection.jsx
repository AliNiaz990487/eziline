import { BiMessage } from "react-icons/bi"
import { links } from "../../App"

import Img1 from "../../assets/images/image_1.jpg"
import Img2 from "../../assets/images/image_2.jpg"
import Img3 from "../../assets/images/image_3.jpg"
import Img4 from "../../assets/images/image_4.jpg"
import Img5 from "../../assets/images/image_5.jpg"
import Img6 from "../../assets/images/image_6.jpg"
import Img7 from "../../assets/images/image_7.jpg"
import Img8 from "../../assets/images/image_8.jpg"

const BlogCard = ({img, animationDelay}) => (
    <div data-aos="fade-up" data-aos-delay={animationDelay}>
        <a href="" className="tw-text-lg hover:tw-text-primary tw-transition-colors">Amplify your blockchain team</a>
        <a href={links["blog-single"]}>
            <div className="tw-bg-cover tw-bg-center" style={{backgroundImage: `url('${img}')`}}>
                <img src={Img1} className="tw-invisible" alt="" />
            </div>
        </a>
        <p className="tw-uppercase">june 01, 2020 admin <span className="tw-inline-block tw-translate-y-1.5 tw-py-1"><BiMessage /></span> 3</p>
        <p className="tw-text-gray-lighter">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
    </div>
) 


const BlogSection4Cards = () => {
  return (
    <section className="container tw-py-20">
        <h4 className='tw-uppercase tw-text-xl tw-text-center tw-font-extrabold tw-py-12'>recent blog</h4>
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
            {
                [Img1, Img2, Img3, Img4].map((img, index) => (
                    <BlogCard img={img} animationDelay={100*index} key={index}/>
                ))
            }
        </div>
    </section>
  )
}

const BlogSection8Cards = ()  => {
    return (
        <section className="container tw-py-20">
            <h4 className='tw-uppercase tw-text-xl tw-text-center tw-font-extrabold tw-py-12'>recent blog</h4>
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8 tw-gap-y-20">
            {
                [Img1, Img2, Img3, Img4].map((img, index) => (
                    <BlogCard img={img} animationDelay={100*index} key={index}/>
                ))
            }{
                [Img5, Img6, Img7, Img8].map((img, index) => (
                    <BlogCard img={img} animationDelay={100*index} key={index}/>
                ))
            }
            </div>
        </section>
      )
}

export {BlogSection4Cards, BlogSection8Cards} 
