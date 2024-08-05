import Img1 from "../../assets/images/post-1.jpg";
import Img2 from "../../assets/images/post-2.jpg";
import Img3 from "../../assets/images/post-3.jpg";

const NewsCard = ({ img, name, date }) => (
    <div className="card hover:tw-shadow-md tw-transition-all border-0 border-bottom">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body tw-py-5">
            <div className="tw-text-gray-600 fs-6">
                <span className="tw-pe-4">{date}</span>
                <span>By {name}</span>
            </div>
            <h5 className="card-title fs-4 fw-bold tw-pt-3 hover-primary-color">Lorem ipsum dolor amet, adipisicing eiusmod tempor.</h5>
            <p className="card-text fs-6 tw-text-gray-600 tw-pb-3">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
            <a className="btn btn-primary" href="">Read More</a>
        </div>
    </div>
)

const NewsSection = () => {
  return (
    <div className="container tw-py-24">
      <h4 className="fs-2 fw-bold">Latest News</h4>
      <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-8 tw-py-10">
            <NewsCard img={Img1} date="August 28, 2018" name="Somrat Sorkar"/>
            <NewsCard img={Img2} date="August 13, 2018" name="Jonathon Drew"/>
            <NewsCard img={Img3} date="August 24, 2018" name="Alex Pitt"/>
        </div>
    </div>
  )
}

export { NewsCard }
export default NewsSection
