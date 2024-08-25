import Login from "./Login"
import SignUp from "./SignUp"
import { Link } from "react-router-dom"

const Nav = ({ title, loggedIn }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div className="container px-lg-0">
        <a className="navbar-brand flex-grow-1">{title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
          {loggedIn ? <Link to="/" className="btn btn-outline-success">Log out</Link> :
            <>
              <Login />
              <SignUp />
            </>
          }
        </div>
      </div>
    </nav>
  )
}

export default Nav
