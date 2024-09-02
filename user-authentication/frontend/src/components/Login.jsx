import axios from "axios";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Icons for show/hide
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_BASE_URL

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    setValidated(true);
    try {
      const response = await axios.post(`${BASE_URL}/login`, { email, password });

      const loginModal = bootstrap.Modal.getInstance("#loginModal")
      loginModal.hide()


      navigate(`/user/${response.data.user._id}`)
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setErrorMessage("Invalid email or password");
      } else {
        setErrorMessage("Server error, please try again later");
      }
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-success d-block me-3 my-3 my-lg-0 w-100"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        Login
      </button>

      <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="loginModalLabel">Login</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form noValidate onSubmit={handleLogin} className={validated ? "was-validated" : ""}>
                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="loginEmail"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="invalid-feedback">Please enter a valid email.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="loginPassword" className="form-label">Password</label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control border-end-0"
                      id="loginPassword"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="btn border border-start-0 rounded-end"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    <div className="invalid-feedback">Please enter your password.</div>
                  </div>
                </div>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
