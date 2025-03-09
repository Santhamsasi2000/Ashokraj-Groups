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
    <nav className="navbar navbar-expand-xl px-3 px-sm-4">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <img src="/images/NavBar/Logo.webp" style={{width:"100px",height:"100px"}}/>
          <NavLink className="navbar-brand" to="/">
            {navbarTitle}
          </NavLink>
        </div>
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
                HOME
              </NavLink>
            </li>

            {/* Restaurant */}
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/non-vegetarian" onClick={closeNavbar}>
                RESTAURANT
              </NavLink>
            </li>

            {/* Bakery */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/bakery" onClick={closeNavbar}>
                BAKERY
              </NavLink>
            </li>

            {/*Veg-Restaurant */}
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/vegetarian" onClick={closeNavbar}>
                VEG-RESTAURANT
              </NavLink>
            </li>

             {/* Lodge*/}
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
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default EasyNav;
