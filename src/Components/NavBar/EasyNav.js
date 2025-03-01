import { NavLink } from "react-router-dom";
import "./EasyNav.css";

const navbarTitle = "ASHOKRAJ";
const closeNavbar = () => {
  const navbar = document.querySelector(".navbar-collapse");
  if (navbar.classList.contains("show")) {
    navbar.classList.remove("show");
  }
};

const EasyNav = () => {
  return (
    <nav className="navbar navbar-expand-lg px-3 px-sm-4">
      <div className="container-fluid">
        <img src="/images/NavBar/Logo.webp" style={{width:"100px",height:"100px"}}/>
        <NavLink className="navbar-brand common-title" to="/">
          {navbarTitle}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav d-flex gap-lg-4">
            {/* Home */}
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/" onClick={closeNavbar}>
                Home
              </NavLink>
            </li>

            {/* Restaurant */}
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Restaurant
              </span>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")} to="/vegetarian" onClick={closeNavbar}>
                    Pure Vegetarian
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")} to="/non-vegetarian" onClick={closeNavbar}>
                    Non-Vegetarian
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Bakery */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/bakery" onClick={closeNavbar}>
                BAKERY
              </NavLink>
            </li>

             {/* Restaurant */}
             <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                LODGE
              </span>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")} to="/rooms" onClick={closeNavbar}>
                    ROOMS
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")} to="/minihall" onClick={closeNavbar}>
                    MiniHall
                  </NavLink>
                </li>
              </ul>
            </li>


            {/* Contact */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={closeNavbar}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default EasyNav;
