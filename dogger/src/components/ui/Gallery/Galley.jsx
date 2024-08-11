import Img1 from "../../../assets/images/dogger_img_sm_1.jpg";
import Img2 from "../../../assets/images/dogger_img_sm_2.jpg";
import Img3 from "../../../assets/images/dogger_img_sm_3.jpg";
import Img4 from "../../../assets/images/dogger_img_sm_4.jpg";
import Img5 from "../../../assets/images/dogger_img_sm_5.jpg";
import Img6 from "../../../assets/images/dogger_img_sm_6.jpg";

import "./Gallery.css"

let images = [
    [Img1, Img2, Img3, Img4],
    [Img5, Img6, Img1, Img2],
    [Img3, Img4, Img5, Img6]
];

const Gallery = () => {
  return (
    <section data-aos="fade-up" className="m-5">
        {
            images.map((imgr, i) => (
                <div className="row gallery-row" key={i}>
                    {
                        imgr.map((img, j) => (
                            <div className="col-12 col-sm-6 col-lg-3 p-0 m-0" key={j}>
                                <img className="img-fluid gallery-image" src={img} alt=""/>
                            </div>
                        ))
                    }
                </div>
            ))
        }
    </section>
  );
}

export default Gallery;
