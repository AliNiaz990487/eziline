import axios from "axios";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_BASE_URL

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const [showCPassword, setShowCPassword] = useState(false); 
  const [emailExists, setEmailExists] = useState(false);
  const navigate = useNavigate()
  const matchPassCPass = () => cPassword === password;

  const signUp = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setEmailExists(false)
    if (!form.checkValidity() || !matchPassCPass()) {
      e.stopPropagation();
      if (!matchPassCPass()) {
        setPasswordMatchError(true);
      }
      setValidated(true);
      return;
    }
    setPasswordMatchError(false);

    axios
      .post(`${BASE_URL}/signup`, { firstName, lastName, email, password })
      .then((result) => {
        // location.reload();
        // console.log(result.data)
        const signUpModal = bootstrap.Modal.getInstance("#signUpModal")
        signUpModal.hide()
        navigate(`/user/${result.data._id}`)
      })
      .catch((err) => {
        // console.log(err);
        if (err.response && err.response.status === 400) {
          setValidated(false)
          setEmailExists(true)
        }
      });
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-success d-block my-3 my-lg-0 w-100 text-nowrap"
        data-bs-toggle="modal"
        data-bs-target="#signUpModal"
      >
        Sign Up
      </button>

      <div className="modal fade" id="signUpModal" tabIndex="-1" aria-labelledby="signUpModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="signUpModalLabel">Sign Up</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form noValidate onSubmit={signUp} className={validated ? "was-validated" : ""}>
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">Please enter your first name.</div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">Please enter your last name.</div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className={`form-control ${emailExists ? "border-danger": ""}`}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {emailExists ? <small className="text-danger">Email already exists</small> : 
                  <div className="invalid-feedback">Please enter a valid email address.</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control border-end-0"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength="8"
                    />
                    <button
                      type="button"
                      className="btn border border-start-0 rounded-end"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    <div className="invalid-feedback">Please enter a password with at least 8 characters.</div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <div className="input-group">
                    <input
                      type={showCPassword ? "text" : "password"}
                      className={`form-control border-end-0 ${passwordMatchError ? "is-invalid" : ""}`}
                      onChange={(e) => setCPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="btn border border-start-0 rounded-end"
                      onClick={() => setShowCPassword(!showCPassword)}
                    >
                      {showCPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    <div className="invalid-feedback">Passwords do not match.</div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
