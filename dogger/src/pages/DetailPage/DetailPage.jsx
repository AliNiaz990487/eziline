import Nav from '../../components/ui/Nav/Nav';
import DetailPageForm from '../../components/forms/DetailPageForm';
import Footer from "../../components/ui/Footer/Footer";


import { Card, Button } from 'react-bootstrap';
import Img1 from "../../assets/images/dogger_img_sm_1.jpg";
import Img2 from "../../assets/images/dogger_img_sm_2.jpg";
import Img3 from "../../assets/images/person_1.jpg";

import "./DetailPage.css";

const CommentCard = ({ className, style }) => {
  return (
    <Card className={`w-100 mb-3 comment-card ${className}`} style={style}>
      <Card.Body>
        <div className="row g-3">
          <div className="col-auto">
            <img
              src={Img3}
              alt="Profile"
              className="rounded-circle"
              // style={{ width: '64px', height: '64px' }}
            />
          </div>
          <div className="col">
            <Card.Title className="text-start">Jean Doe</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">January 9, 2018 at 2:21PM</Card.Subtitle>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsum impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?
            </Card.Text>
            <Button variant="secondary">Reply</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

const DetailPage = () => {
  return (
    <>
      <Nav />
      <header className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container d-flex flex-column justify-content-center align-items-center pt-5">
          <h4 className="text-center pt-5 mt-5 mb-5" style={{ fontFamily: "var(--ff)", fontSize: "var(--ft-lg)", fontWeight: "bold" }}>5 THINGS YOU NEED TO KNOW ABOUT DOG MESSAGE</h4>
          <p className="fs-3 pb-5 mb-5" style={{ fontFamily: "var(--ff)", fontWeight: "lighter" }}>
            April 17, 2019 • Posted by <a style={{ color: "var(--bg-clr)", cursor: "pointer" }}>Admin</a> in <a style={{ color: "var(--bg-clr)", cursor: "pointer" }}>Events</a>
          </p>
        </div>
      </header>

      <main className="container overflow-x-hidden">
        <div className="row mt-5 g-5">
          <div className="col-md-12 col-lg-8 mt-5">
            <p className="mt-5" style={{ fontSize: "1.8rem", fontWeight: "lighter" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nihil aspernatur nemo sunt, qui, harum repudiandae quisquam eaque dolore itaque quod tenetur quo quos labore?</p>
            <p className="mt-5" style={{ fontSize: "1.6rem", color: "#777" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae expedita cumque necessitatibus ducimus debitis totam, quasi praesentium eveniet tempore possimus illo esse, facilis? Corrupti possimus quae ipsa pariatur cumque, accusantium tenetur voluptatibus incidunt reprehenderit, quidem repellat sapiente, id, earum obcaecati.</p>

            <figure className="figure mt-3">
              <img className="figure-img img-fluid" src={Img1} alt="" />
              <figcaption className="figure-caption fst-italic">This is an image caption</figcaption>
            </figure>
            <figure className="figure mt-5">
              <img className="figure-img img-fluid" src={Img2} alt="" />
              <figcaption className="figure-caption fst-italic">This is an image caption</figcaption>
            </figure>

            <p className="mt-5" style={{ fontSize: "1.6rem", color: "#777" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident vero tempora aliquam excepturi labore, ad soluta voluptate necessitatibus. Nulla error beatae, quam, facilis suscipit quaerat aperiam minima eveniet quis placeat.</p>
            <p className="mt-5" style={{ fontSize: "1.6rem", color: "#777" }}>Eveniet deleniti accusantium nulla natus nobis nam asperiores ipsa minima laudantium vero cumque cupiditate ipsum ratione dicta, expedita quae, officiis provident harum nisi! Esse eligendi ab molestias, quod nostrum hic saepe repudiandae non. Suscipit reiciendis tempora ut, saepe temporibus nemo.</p>
            <p className="mt-5" style={{ fontSize: "1.6rem", color: "#777" }}>Accusamus, temporibus, ullam. Voluptate consectetur laborum totam sunt culpa repellat, dolore voluptas. Quaerat cum ducimus aut distinctio sit, facilis corporis ab vel alias, voluptas aliquam, expedita molestias quisquam sequi eligendi nobis ea error omnis consequatur iste deleniti illum, dolorum odit.</p>
            <p className="mt-5" style={{ fontSize: "1.6rem", color: "#777" }}>In adipisci corporis at delectus! Cupiditate, voluptas, in architecto odit id error reprehenderit quam quibusdam excepturi distinctio dicta laborum deserunt qui labore dignissimos necessitatibus reiciendis tenetur corporis quas explicabo exercitationem suscipit. Nisi quo nulla, nihil harum obcaecati vel atque quos.</p>
            <p className="mt-5" style={{ fontSize: "1.6rem", color: "#777" }}>Amet sint explicabo maxime accusantium qui dicta enim quia, nostrum id libero voluptates quae suscipit dolor quam tenetur dolores inventore illo laborum, corporis non ex, debitis quidem obcaecati! Praesentium maiores illo atque error! Earum, et, fugit. Sint, delectus molestiae. Totam.</p>
            <p className="mt-5" style={{ fontSize: "1.6rem", color: "#777" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iste, repudiandae facere aperiam sapiente, officia delectus soluta molestiae nihil corporis animi quos ratione qui labore? Sint eaque perspiciatis minus illum.</p>
            <p className="mt-5" style={{ fontSize: "1.6rem", color: "#777" }}>Consectetur porro odio quod iure quaerat cupiditate similique, dolor reprehenderit molestias provident, esse dolorum omnis architecto magni amet corrupti neque ratione sunt beatae perspiciatis? Iste pariatur omnis sed ut itaque.</p>
            <p className="mt-5" style={{ fontSize: "1.6rem", color: "#777" }}>Id similique, rem ipsam accusantium iusto dolores sit velit ex quas ea atque, molestiae. Sint, sed. Quisquam, suscipit! Quisquam quibusdam maiores fugiat eligendi eius consequuntur, molestiae saepe commodi expedita nemo!</p>

            <p className="mt-5 mb-5" style={{ fontSize: "1.6rem", color: "#777" }}>
              Categories: <a href="" style={{ color: "var(--bg-clr)" }}>Design</a>, <a href="" style={{ color: "var(--bg-clr)" }}>Events</a> Tags: <a href="" style={{ color: "var(--bg-clr)" }}>#html</a>, <a href="" style={{ color: "var(--bg-clr)" }}>trends</a>
            </p>

            <p className="fs-1" style={{ color: "#777" }}>6 Comments</p>
            <CommentCard className="pt-5" />
            <CommentCard />
            <CommentCard className="ms-5" />
            <CommentCard className="ms-5 ps-5" />
            <CommentCard className="ps-5" style={{ marginLeft: "6rem" }} />
            <CommentCard />
          
            <DetailPageForm />
          </div>

          <div className="col-md-12 col-lg-4">
            <div className="d-flex justify-content-center p-5 mt-5 mb-5" style={{ backgroundColor: "#f5f5f5" }}>
              <input className="form-control form-control-lg" type="text" placeholder="Type a keyword and hit enter" />
            </div>

            <div className="mb-4">
              <h4 className="fs-3 mb-3">Categories</h4>
              <div>
                <div className="d-flex justify-content-between fs-4" style={{ color: "#999" }}>
                  <span style={{ color: "var(--bg-clr)" }}>Dog</span><span>(12)</span>
                </div>
                <hr style={{ color: "#999" }} />
                <div className="d-flex justify-content-between fs-4" style={{ color: "#999" }}>
                  <span style={{ color: "var(--bg-clr)" }}>Dog Food</span><span>(22)</span>
                </div>
                <hr style={{ color: "#999" }} />
                <div className="d-flex justify-content-between fs-4" style={{ color: "#999" }}>
                  <span style={{ color: "var(--bg-clr)" }}>Dog Care</span><span>(37)</span>
                </div>
                <hr style={{ color: "#999" }} />
                <div className="d-flex justify-content-between fs-4" style={{ color: "#999" }}>
                  <span style={{ color: "var(--bg-clr)" }}>Training</span><span>(42)</span>
                </div>
                <hr style={{ color: "#999" }} />
                <div className="d-flex justify-content-between fs-4" style={{ color: "#999" }}>
                  <span style={{ color: "var(--bg-clr)" }}>Travel</span><span>(14)</span>
                </div>
                <hr style={{ color: "#999" }} />
                <div className="d-flex justify-content-between fs-4" style={{ color: "#999" }}>
                  <span style={{ color: "var(--bg-clr)" }}>Vacation</span><span>(140)</span>
                </div>
              </div>
            </div>

            <div className="pt-5 pb-5">
              <img src={Img3} className="img-fluid" alt="..." />
              <div className="card-body mt-5">
                <p className="card-title text-start">About The Author</p>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                <button className="btn fs-3 text-white mt-4 ms-4 mb-5" style={{backgroundColor: "var(--bg-clr)", padding: ".3em 1em", borderRadius: "4rem"}}>Read More</button>
              </div>
            </div>

            <div className="mt-5 pt-5">
              <h4 className='fs-3 pt-5'>Paragraph</h4>
              <p className='fs-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default DetailPage;
