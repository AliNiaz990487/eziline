import LocationAndSocial from "../../components/ui/LocationAndSocial/LocationAndSocial"
import LogoAndContact from "../../components/ui/LogoAndContact/LogoAndContact"
import Navbar from "../../components/ui/Nav/Nav";
import Header from "../../components/ui/Header/Header"

import Img1 from "../../assets/images/news1.jpg"
import Img2 from "../../assets/images/news2.jpg"
import Img3 from "../../assets/images/news3.jpg"

import Footer from "../../components/ui/Footer/Footer"
import "./Faq.css"


const FaqAccordion = ({ id, tId1, tId2, tId3 }) => (
    <div className="accordion accordion-flush" id={id}>
      <div className="accordion-item">
        <h2 className="accordion-header" id={`heading${tId1}`}>
          <button
            className="accordion-button collapsed fs-6 fw-bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${tId1}`}
            aria-expanded="false"
            aria-controls={tId1}
          >
            DOES THE LAW REQUIRE HEAD PROTECTION ON CONSTRUCTION SITES?
          </button>
        </h2>
        <div
          id={tId1}
          className="accordion-collapse collapse"
          aria-labelledby={`heading${tId1}`}
          data-bs-parent={`#${id}`}
        >
          <div className="accordion-body fs-6">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id={`heading${tId2}`}>
          <button
            className="accordion-button collapsed fs-6 fw-bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${tId2}`}
            aria-expanded="false"
            aria-controls={tId2}
          >
            WHAT ARE THE FIRST AID REQUIREMENTS FOR SITES?
          </button>
        </h2>
        <div
          id={tId2}
          className="accordion-collapse collapse"
          aria-labelledby={`heading${tId2}`}
          data-bs-parent={`#${id}`}
        >
          <div className="accordion-body fs-6">
            Anemi nim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid henderit in voluptate velit esse cillu oris nisi ut aliquip ex ea com matat.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id={`heading${tId3}`}>
          <button
            className="accordion-button collapsed fs-6 fw-bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${tId3}`}
            aria-expanded="false"
            aria-controls={tId3}
          >
            WHAT IS AN APPOINTED PERSON?
          </button>
        </h2>
        <div
          id={tId3}
          className="accordion-collapse collapse"
          aria-labelledby={`heading${tId3}`}
          data-bs-parent={`#${id}`}
        >
          <div className="accordion-body fs-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </div>
        </div>
      </div>
    </div>
  );

const RecentPost = ({ img, title }) => (
    <div className="d-flex gap-3 my-3">
        <div className="" style={{width: "12rem"}}>
            <img className="img-fluid" src={img} alt="" />
        </div>        
        <a href="" className="recent-post-link hover text-decoration-none text-dark fw-bold">{title}</a>
    </div>
)
const RecentPosts = () => (
    <>
        <RecentPost img={Img1} title="We Just Completes $17.6 Million Medical Clinic In Mid-missouri" />
        <hr className="" />
        <RecentPost img={Img2} title="Thandler Airport Water Reclamation Facility Expansion Project Named" />
        <hr className="" />
        <RecentPost img={Img3} title="Silicon Bench And Cornike Begin Construction Solar Facilities" />
    </>
)

const FaqSection = () => (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 col-md-9">
          <h4 className="fs-5 fw-bold ps-3 mb-4">CONSTRUCTION GENERAL</h4>
          <FaqAccordion id="ac1" tId1="ac11" tId2="ac12" tId3="ac13" />
          <h4 className="fs-5 fw-bold ps-3 mt-5 mb-4">SAFETY</h4>
          <FaqAccordion id="ac2" tId1="ac21" tId2="ac22" tId3="ac23" />
        </div>
        <div className="col-12 col-md-3 my-5 my-md-0">
          <h4 className="fs-6 fw-bold border-primary border-start px-3">RECENT POSTS</h4>
          <RecentPosts />
        </div>
      </div>
    </div>
  );

const Faq = () => {
    return (
        <div>
            <LocationAndSocial />
            <LogoAndContact />
            <Navbar />
            <Header title="FAQ" tab1="COMPANY" tab2="FAQ" />
            <FaqSection />
            <Footer />
        </div>
    )
}
export { RecentPosts }
export default Faq
