import React from 'react';
import "./NewNav.css";
import { NavLink } from 'react-router-dom';

const NewNav = () => {
  const handleNavClick = () => {
    document.getElementById('check').checked = false;  // Uncheck the checkbox when any nav link is clicked
  };
  return (
    <nav className='mb-0'>
       <input type='checkbox' id='check'/>
       <label htmlFor="check" className='checkbtn'>
          <i className='fas fa-bars'></i>
       </label>

       {/* <NavLink to="/" className='logo text-uppercase fs-3 fw-bold text-decoration-none'>AshokRaj</NavLink> */}
       <img src='/images/Logo.jpeg' className='logo ms-md-5'/>
       {/* Overlay for background dimming */}
      {/* <div className="overlay"></div> */}

       <ul className="nav-list mb-0">
       <li>
           <NavLink 
             to="/" 
             activeClassName="active" 
             onClick={handleNavClick}
             className="fw-semibold"
           >
             Home
           </NavLink>
      </li>
         {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Restaurant
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Ashok Bhavan</a></li>
            <li><a class="dropdown-item" href="#">Ashok Raj</a></li>
          </ul>
         </li> */}
          <li>
           <NavLink 
             to="/restaurant" 
             activeClassName="active" 
             onClick={handleNavClick}
             className="fw-semibold"
           >
             Restaurant
           </NavLink>
         </li>
         <li>
           <NavLink 
             to="/bakery" 
             activeClassName="active" 
             onClick={handleNavClick}
             className="fw-semibold"
           >
             Bakery
           </NavLink>
         </li>
         <li>
           <NavLink 
             to="/lodge" 
             activeClassName="active" 
             onClick={handleNavClick}
             className="fw-semibold"
           >
             Lodge
           </NavLink>
         </li>
         <li>
           <NavLink 
             to="/contact" 
             activeClassName="active" 
             onClick={handleNavClick}
             className="fw-semibold"
           >
             Contact Us
           </NavLink>
         </li>
       </ul>
    </nav>
  );
}

export default NewNav;
