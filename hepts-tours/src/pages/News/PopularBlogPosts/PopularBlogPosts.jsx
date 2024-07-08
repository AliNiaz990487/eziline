import BlogPost from "../../../components/ui/BlogPost/BlogPost"
import { recentBlogPosts } from "../../../components/ui/BlogPosts/BlogPosts"

import "./PopularBlogPosts.css"

export default function PopularBlogPosts(props) {
    return (
        <div className="popular-blog-posts">
            <h2>Popular Post</h2>
            {
                recentBlogPosts.map((post, index) => {
                    return <div className="popular-blog-post" key={index}>
                        <img src={post.image} alt={`image-${index}`} />
                        <div className="popular-blog-post--content">
                            <p>{post.date}</p>
                            <h2>{post.title}</h2>
                        </div>
                    </div>
                })
            }
            {
                recentBlogPosts.map((post, index) => {
                    return <div className="popular-blog-post" key={index}>
                        <img src={post.image} alt={`image-${index}`} />
                        <div className="popular-blog-post--content">
                            <p>{post.date}</p>
                            <h2>{post.title}</h2>
                        </div>
                    </div>
                })
            }
            
        </div>
    )
}