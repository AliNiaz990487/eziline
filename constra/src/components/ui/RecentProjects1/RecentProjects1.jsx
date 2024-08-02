import Img1 from "../../../assets/images/project1.jpg";
import Img2 from "../../../assets/images/project2.jpg";
import Img3 from "../../../assets/images/project3.jpg";
import Img4 from "../../../assets/images/project4.jpg";
import Img5 from "../../../assets/images/project5.jpg";
import Img6 from "../../../assets/images/project6.jpg";

const RecentProjects1 = () => {
    return (
        <div className="container p-5">
            <ul className="nav nav-pills mb-3 d-flex justify-content-center border-primary border-bottom" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-bold text-black fs-6 rounded-0 active" id="pills-show-all-tab" data-bs-toggle="pill" data-bs-target="#pills-show-all" type="button" role="tab" aria-controls="pills-show-all" aria-selected="true">SHOW ALL</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-bold text-black fs-6 rounded-0" id="pills-commercial-tab" data-bs-toggle="pill" data-bs-target="#pills-commercial" type="button" role="tab" aria-controls="pills-commercial" aria-selected="false">COMMERCIAL</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-bold text-black fs-6 rounded-0" id="pills-education-tab" data-bs-toggle="pill" data-bs-target="#pills-education" type="button" role="tab" aria-controls="pills-education" aria-selected="false">EDUCATION</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-bold text-black fs-6 rounded-0" id="pills-government-tab" data-bs-toggle="pill" data-bs-target="#pills-government" type="button" role="tab" aria-controls="pills-government" aria-selected="false">GOVERNMENT</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-bold text-black fs-6 rounded-0" id="pills-infrastructure-tab" data-bs-toggle="pill" data-bs-target="#pills-infrastructure" type="button" role="tab" aria-controls="pills-infrastructure" aria-selected="false">INFRASTRUCTURE</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-bold text-black fs-6 rounded-0" id="pills-residential-tab" data-bs-toggle="pill" data-bs-target="#pills-residential" type="button" role="tab" aria-controls="pills-residential" aria-selected="false">RESIDENTIAL</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-bold text-black fs-6 rounded-0" id="pills-healthcare-tab" data-bs-toggle="pill" data-bs-target="#pills-healthcare" type="button" role="tab" aria-controls="pills-healthcare" aria-selected="false">HEALTHCARE</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-show-all" role="tabpanel" aria-labelledby="pills-show-all-tab" tabIndex="0">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 p-0"><img className="img-fluid" src={Img1} alt="" /></div>
                        <div className="col-12 col-md-6 col-lg-4 p-0"><img className="img-fluid" src={Img2} alt="" /></div>
                        <div className="col-12 col-md-6 col-lg-4 p-0"><img className="img-fluid" src={Img3} alt="" /></div>
                    
                        <div className="col-12 col-md-6 col-lg-4 p-0"><img className="img-fluid" src={Img4} alt="" /></div>
                        <div className="col-12 col-md-6 col-lg-4 p-0"><img className="img-fluid" src={Img5} alt="" /></div>
                        <div className="col-12 col-md-6 col-lg-4 p-0"><img className="img-fluid" src={Img6} alt="" /></div>
                    </div>
                </div>

                <div className="tab-pane fade" id="pills-commercial" role="tabpanel" aria-labelledby="pills-commercial-tab" tabIndex="0">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 p-0"><img className="img-fluid" src={Img3} alt="" /></div>
                    </div>
                </div>

                <div className="tab-pane fade" id="pills-education" role="tabpanel" aria-labelledby="pills-education-tab" tabIndex="0">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 p-0"><img className="img-fluid" src={Img2} alt="" /></div>
                        <div className="col-12 col-md-6 col-lg-4 p-0"><img className="img-fluid" src={Img3} alt="" /></div>
                    </div>
                </div>

                <div className="tab-pane fade" id="pills-government" role="tabpanel" aria-labelledby="pills-government-tab" tabIndex="0">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 p-0"><img className="img-fluid" src={Img4} alt="" /></div>
                        <div className="col-12 col-md-6 col-lg-4 p-0"><img className="img-fluid" src={Img5} alt="" /></div>
                    </div>
                </div>

                <div className="tab-pane fade" id="pills-infrastructure" role="tabpanel" aria-labelledby="pills-infrastructure-tab" tabIndex="0">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 p-0"><img className="img-fluid" src={Img5} alt="" /></div>
                        <div className="col-12 col-md-6 col-lg-4 p-0"><img className="img-fluid" src={Img6} alt="" /></div>
                    </div>
                </div>

                <div className="tab-pane fade" id="pills-residential" role="tabpanel" aria-labelledby="pills-residential-tab" tabIndex="0">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 p-0"><img className="img-fluid" src={Img1} alt="" /></div>
                        <div className="col-12 col-md-6 col-lg-4 p-0"><img className="img-fluid" src={Img4} alt="" /></div>
                    </div>
                </div>

                <div className="tab-pane fade" id="pills-healthcare" role="tabpanel" aria-labelledby="pills-healthcare-tab" tabIndex="0">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 p-0"><img className="img-fluid" src={Img2} alt="" /></div>
                        <div className="col-12 col-md-6 col-lg-4 p-0"><img className="img-fluid" src={Img6} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-5"><a href="" className="btn btn-primary rounded-0">VIEW ALL PROJECTS</a></div>
        </div>
    )
}

export default RecentProjects1;
