import BlogPost from "../../../components/ui/BlogPost/BlogPost.jsx";

import { recentBlogPosts } from "../../../components/ui/BlogPosts/BlogPosts.jsx";
import "./Blogs.css"

export default function Blogs(props) {
    return (
        <section className="blogs-cards">
            {
                recentBlogPosts.map((post, index) => {
                    return <BlogPost isBlogCardStyle={true} blogCardStyle="blog-card-style" key={index} image={post.image} title={post.title} date={post.date} includeDate={true}  />
                })
            }
            {
                recentBlogPosts.map((post, index) => {
                    return <BlogPost isBlogCardStyle={true} blogCardStyle="blog-card-style" key={index} image={post.image} title={post.title} date={post.date} includeDate={true}  />
                })
            }
        </section>
    )
}