import "./BlogPost.css";

export default function BlogPost(props) {
    return (
        <div className={ props.isBlogCardStyle ? props.blogCardStyle : "blog-posts--post" } key={props.index}>
            <img src={props.image} alt={props.title} />
            <div className="blog-posts--post--content">
                {
                    props.includeDate ? <p className="blog-posts--post--date">{props.date}</p> : <></>
                }
                <h2>{props.title}</h2>
                {
                    props.includeDescription ? <p className="blog-posts--post--description">{props.description}</p> : <></>
                }

            </div>
        </div>
    )
}