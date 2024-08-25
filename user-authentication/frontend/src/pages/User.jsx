import { Link, useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import Nav from "../components/Nav"
import { useState, useEffect } from "react"
import UpdateUser from "../components/UpdateUser"

const User = () => {
  const { id } = useParams()
  const [user, setUser] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://127.0.0.1:3000/user/${id}`)
      .then(result => {
        setUser(result.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  const handleDelete = () => {
    axios.delete(`http://127.0.0.1:3000/deleteUser/${id}`)
      .then(result => {
        navigate("/")
      }).catch(err => {
        console.log(err)
      })
  }
  return (
    <>
      <Nav loggedIn={true}
        title={<>
          <span>Welcome</span>
          <span className="fw-bold ms-2 fs-5 text-uppercase">{user.firstName}</span>
        </>}
      />
      <div className="container py-5 table-responsive-lg">
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td className="">
                <UpdateUser />
                <Link to="" className="btn btn-danger" onClick={handleDelete}>Delete</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default User
