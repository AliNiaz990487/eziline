import Header from "../../components/ui/Header/Header.jsx";
import Blogs from "./Blogs/Blogs.jsx";
import Footer from "../../components/ui/Footer/Footer.jsx";
import Aside from "./Aside/Aside.jsx";

import "./News.css";

export default function News(props) {
    return (
        <>
            <Header heroText="Blog" />
            <main className="news">
                <Blogs />
                <Aside />
            </main>
            <Footer />
        </>
    )
}
