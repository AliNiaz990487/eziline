import { useEffect, useState } from "react"
import axios from "axios"


const BASE_URL = import.meta.env.VITE_API_BASE_URL

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}/users`)
      .then(result => setUsers(result.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <table className="table table-striped container my-5">
      <thead>
        <tr>
          <th>S.no</th>
          <th>Users</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, idx) => (
          <tr key={idx}>
            <td>{idx + 1}</td>
            <td>{user.firstName} {user.lastName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Users
