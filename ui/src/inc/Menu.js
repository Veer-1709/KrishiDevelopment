import { NavLink } from "react-router-dom";
function Menu(){
    return(
        <>
            
        <nav className="navbar navbar-expand-sm mynav navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">KrishiDevelopment</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About Us</NavLink>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">Shop</a>
                </li> */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                {/* <li className="nav-item">
                  <a data-bs-toggle="modal" data-bs-target="#mylogin" className="btn btn-outline-warning" href="#">Login</a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="#">Sign Up</a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">Cart <span className="badge rounded-pill bg-danger">8</span> </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
        </>
    )
}

export default Menu;