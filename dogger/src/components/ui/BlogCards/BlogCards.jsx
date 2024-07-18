import Img1 from "../../../assets/images/dogger_img_sm_1.jpg";
import Img2 from "../../../assets/images/dogger_img_sm_2.jpg";
import Img3 from "../../../assets/images/dogger_img_sm_3.jpg";


const images = [
    Img1, Img2, Img3, Img1
];

const BlogCards = () => {
    return (
        <section data-aos="fade-up" className="container mt-5">
            <div className="row">
                {images.map((img, index) => (
                    <div className="col-md-6 mb-4" key={index}>
                        <div className="">
                            <div className="row g-2">
                                <div className="col g-5">
                                    <img src={img} className="img-fluid" alt="Dog"/>
                                </div>
                                <div className="col g-5">
                                    <div className="card-body">
                                        <h5 className="card-title text-start">5 Things You Need To Know About Dog Massage</h5>
                                        <p className="card-text"><small className="text-muted">April 17, 2019</small></p>
                                        <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <a href="#" className="btn" style={{fontSize: "var(--ft-sm)", color: "var(--bg-clr)"}}>Read More...</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default BlogCards;
