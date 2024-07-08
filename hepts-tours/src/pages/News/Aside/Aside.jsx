import Search from "../Search/Search";
import PopularBlogPosts from "../PopularBlogPosts/PopularBlogPosts";
import Categories from "../Categories/Categories";

import "./Aside.css";

export default function Aside(props) {
    return (
        <aside>
            <Search />
            <PopularBlogPosts />
            <Categories />
        </aside>
    )
}