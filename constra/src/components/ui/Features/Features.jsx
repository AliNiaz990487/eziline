import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Features = () => {
  return (
    <div className="container my-5">
      <div className="row p-5">
        <div className="col-12 col-md-6">
          <h6 className="fs-6">ABOUT US</h6>
          <h2 className="fs-4 fw-bold">WE DELIVER LANDMARK PROJECTS</h2>
          <p>We are rhetoric question ran over her cheek When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p>
          <div className="row mt-4">
            <div className="col-6">
              <div className="d-flex align-items-center mb-3">
                {/* <FontAwesomeIcon icon={faTrophy} className="icon" /> */}
                <span className="text-primary"><i className="fas fa-trophy"></i></span>
                <span className="ms-3 fs-6 fw-bold">WE'VE REPUTION FOR EXCELLENCE</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                {/* <FontAwesomeIcon icon={faThumbsUp} className="icon" /> */}
                <span className="text-primary"><i className="fas fa-sliders-h"></i></span>
                <span className="ms-3 fs-6 fw-bold">GUIDED BY COMMITMENT</span>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex align-items-center mb-3">
                {/* <FontAwesomeIcon icon={faHandshake} className="icon" /> */}
                <span className="text-primary"><i className="fas fa-thumbs-up"></i></span>
                <span className="ms-3 fs-6 fw-bold">WE BUILD PARTNERSHIPS</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                {/* <FontAwesomeIcon icon={faUsers} className="icon" /> */}
                <span className="text-primary"><i className="fas fa-users"></i></span>
                <span className="ms-3 fs-6 fw-bold">A TEAM OF PROFESSIONALS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-5 mt-md-0">
          <h6 className='fs-3 fw-bold'>OUR VALUES</h6>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fs-6 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  SAFTEY
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body fs-6">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidata </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fs-6 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  CUSTOMER SERVICE
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body fs-6"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidata </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fs-6 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  INTEGRITY
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body fs-6"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidata </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
