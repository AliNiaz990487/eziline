import Header from "../../components/ui/Header/Header.jsx";
import GalleryImages from "./GalleryImages/GalleryImages.jsx";
import Footer from "../../components/ui/Footer/Footer.jsx";

import "./Gallery.css";

export default function Gallery(props) {
    return (
        <>
            <Header heroText="Gallery" />
            <main>
                <GalleryImages />
            </main>
            <Footer />
        </>
    )
}