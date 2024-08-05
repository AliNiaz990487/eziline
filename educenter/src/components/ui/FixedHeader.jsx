import { FaFacebook, FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";
import LoginRegisterForm from "../forms/LoginRegisterForm";

const Login = () => (
  <>
    <a type="button" className="hover-primary-color tw-font-semibold tw-uppercase" data-bs-toggle="modal" data-bs-target="#loginModal">
      login
    </a>
  
    <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header border-0">
            <h1 className="modal-title fs-5" id="loginModalLabel">Login</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <LoginRegisterForm />
          </div>
          <div className="modal-footer border-0">
            <a type="button" className="btn btn-primary" data-bs-dismiss="modal">Login</a>
          </div>
        </div>
      </div>
    </div>
  </>
);

const Register = () => (
  <>
    <a type="button" className="hover-primary-color tw-font-semibold tw-uppercase" data-bs-toggle="modal" data-bs-target="#registerModal">
      Register
    </a>
  
    <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header border-0">
            <h1 className="modal-title fs-5" id="registerModalLabel">Register</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <LoginRegisterForm isRegister={true}/>
          </div>
          <div className="modal-footer border-0">
            <a type="button" className="btn btn-primary" data-bs-dismiss="modal">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  </>
);


const FixedHeader = ({ isScrolled }) => {
  return (
    <div className={`tw-bg-white tw-transition-all ${isScrolled ? "tw-min-h-0" : "tw-min-h-fit"}`}>
      <div className="container">
        <div className="d-flex justify-content-center justify-content-md-between flex-wrap tw-uppercase tw-py-2 tw-gap-y-3">
          <div className="tw-flex tw-items-center tw-gap-5 tw-text-xs tw-flex-wrap">
            <span className="hover-primary-color tw-font-semibold">call +44 300 303 0266</span>
            <span className="hover-primary-color"><FaFacebook /></span>
            <span className="hover-primary-color"><FaTwitter /></span>
            <span className="hover-primary-color"><FaDiscord /></span>
            <span className="hover-primary-color"><FaInstagram /></span>
          </div>

          <div className="d-flex tw-justify-center tw-items-center gap-3 tw-text-xs flex-wrap tw-font-semibold">
            <a href="" className="hover-primary-color">notice</a>
            <a href="" className="hover-primary-color">research</a>
            <a href="" className="hover-primary-color">scholarship</a>
            {/* <a href="" className="hover-primary-color">login</a> */}
            <Login />
            {/* <a href="" className="hover-primary-color">register</a> */}
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedHeader;
