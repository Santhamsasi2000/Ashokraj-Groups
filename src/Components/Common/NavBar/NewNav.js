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

       <NavLink to="/" className='logo'>AshokRaj</NavLink>
       
       <ul className="nav-list mb-0">
        <li><NavLink to="/" activeClassName="active" onClick={handleNavClick} className="fw-semibold">Home</NavLink></li>
        <li><NavLink to="/vegetarian" activeClassName="active" onClick={handleNavClick} className="fw-semibold">VEG RESTAURANT</NavLink></li> 
        <li><NavLink to="/non-vegetarian" activeClassName="active" onClick={handleNavClick} className="fw-semibold">RESTAURANT</NavLink></li>  
        <li><NavLink to="/bakery" activeClassName="active" onClick={handleNavClick} className="fw-semibold">BAKERY</NavLink></li>
        <li><NavLink to="/lodge" activeClassName="active" onClick={handleNavClick} className="fw-semibold">LODGE</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active" onClick={handleNavClick} className="fw-semibold">CONTACT</NavLink></li>
       </ul>
    </nav>
  );
}

export default NewNav;
