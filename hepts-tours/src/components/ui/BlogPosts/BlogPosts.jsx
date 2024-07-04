import Image1 from "../../../assets/images/img_1.jpg";
import Image2 from "../../../assets/images/slider-5.jpg";
import Image3 from "../../../assets/images/img_3.jpg";

import "./BlogPosts.css";

const recentBlogPosts = [
    {
        image: Image1,
        date: "february 26, 2018",
        title: "45 Best Places To Unwind",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
        image: Image2,
        date: "february 26, 2018",
        title: "45 Best Places To Unwind",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
        image: Image3,
        date: "february 26, 2018",
        title: "45 Best Places To Unwind",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    }
]

export default function BlogPosts(props) {
    return (
        <section className="blog-posts--wraper">
            {
                recentBlogPosts.map((post, index) => {
                    return (
                        <div className="blog-posts--post" key={index}>
                            <img src={post.image} alt={post.title} />
                            <div className="blog-posts--post--content">
                                {
                                    props.includeDate ? <p className="blog-posts--post--date">{post.date}</p> : <></>
                                }
                                <h2>{post.title}</h2>
                                {
                                    props.includeDescription? <p className="blog-posts--post--description">{post.description}</p> : <></>
                                }

                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}