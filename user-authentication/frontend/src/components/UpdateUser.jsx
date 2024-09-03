import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_API_BASE_URL

const UpdateUser = () => {
  const [togglePass, setTogglePass] = useState(false);
  const [toggleCPass, setToggleCPass] = useState(false);
  const { id } = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [emailTaken, setEmailTaken] = useState(false);

  const updateUser = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setEmailTaken(false)
    if (form.checkValidity() === false || password !== cPassword) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    setValidated(false);

    axios.put(`${BASE_URL}/updateUser/${id}`, { firstName, lastName, email, password })
      .then(result => {
        console.log(result.data);
        window.location.reload()
      })
      .catch(err => {
        if(err.response.status === 400) {
          setEmailTaken(true)
        }
      });
  };

  useEffect(() => {
    console.log("base url in useEfect ", BASE_URL);
    axios.get(`${BASE_URL}/user/${id}`)
      .then(result => {
        const { firstName, lastName, email, password } = result.data;
        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);
        setPassword(password);
        setCPassword(password);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="d-inline">
      <button type="button" className="btn btn-primary me-3 mb-3 mb-md-0" data-bs-toggle="modal" data-bs-target="#updateModal">
        Update
      </button>

      <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updateModalLabel">Update User</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <form onSubmit={updateUser} noValidate className={`needs-validation ${validated ? 'was-validated' : ''}`}>
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="form-control"
                    required
                  />
                  <div className="invalid-feedback">First name is required.</div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="form-control"
                    required
                  />
                  <div className="invalid-feedback">Last name is required.</div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    required
                  />
                  {emailTaken ? 
                  <small className="text-danger">Email is already taken.</small> :
                  <div className="invalid-feedback">Please provide a valid email address.</div>
                  }
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <div className="input-group">
                    <input
                      type={togglePass ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      required
                      minLength="8"
                    />
                    <button type="button" className="input-group-text" onClick={() => setTogglePass(!togglePass)}>
                      {togglePass ? <FaEye /> : <FaEyeSlash />}
                    </button>
                    <div className="invalid-feedback">Password must be at least 6 characters.</div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <div className="input-group">
                    <input
                      type={toggleCPass ? "text" : "password"}
                      value={cPassword}
                      onChange={(e) => setCPassword(e.target.value)}
                      className={`form-control ${password !== cPassword ? 'is-invalid' : ''}`}
                      required
                    />
                    <button type="button" className="input-group-text" onClick={() => setToggleCPass(!toggleCPass)}>
                      {toggleCPass ? <FaEye /> : <FaEyeSlash />}
                    </button>
                    <div className="invalid-feedback">Passwords must match.</div>
                  </div>
                </div>

                <input type="submit" className="btn btn-primary" value="Update" />
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
