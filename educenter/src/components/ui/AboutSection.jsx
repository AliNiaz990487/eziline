import Img from "../../assets/images/about-us.jpg"

const AboutSection = () => {
  return (
    <div className="container tw-py-24">
        <div className="row tw-items-center">
            <div className="col-12 col-md-6">
                <h4 className="fs-2 fw-bold tw-pb-5">About Educenter</h4>
                <p className="fs-6 tw-text-gray-600 tw-py-5 tw-leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat </p>
                <p className="fs-6 tw-text-gray-600 tw-pb-7 tw-leading-6">cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                <a className="btn btn-primary" href="">learn More</a>
            </div>
            <div className="col-12 col-md-6"><img src={Img} alt="" className="img-fluid" /></div>
        </div>
    </div>
  )
}

export default AboutSection
