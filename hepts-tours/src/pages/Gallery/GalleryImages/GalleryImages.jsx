import Img1 from "../../../assets/images/slider-1.jpg";
import Img2 from "../../../assets/images/slider-2.jpg";
import Img3 from "../../../assets/images/slider-3.jpg";
import Img4 from "../../../assets/images/slider-4.jpg";
import Img5 from "../../../assets/images/slider-5.jpg";
import Img6 from "../../../assets/images/slider-6.jpg";

import "./GalleryImages.css";

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img1, Img3, Img6, Img3, Img2, Img1, Img4, Img5]

export default function GalleryImages(props) {
    return (
        <section className="gallery-images">
            <div className="gallery-images--wrapper">
                {
                    images.map((img, i) => {
                        return <img src={img} alt={`img-${i}`} key={i} className="gallery-image" />
                    })
                }
            </div>
        </section>
    )
}