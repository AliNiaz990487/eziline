import "./BlogPostsTopText.css";

export default function BlogPostsTopText(props) {
    return (
        <section className="blog-posts--text">
            <h2>{props.heading}</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        </section>
    )
}