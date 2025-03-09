import "./Restaurant.css";
import {NavLink} from "react-router-dom";
import { FaArrowAltCircleDown } from "react-icons/fa";

const Restaurant = () => {
  return (
     <section className="p-3 p-sm-5 restaurant-bg">
        <h1 className="restaurant-title mb-4">ASHOKRAJ RESTAURANT</h1>
        <h2 className="restaurant-subTitle">Taste the Tradition – Explore Our Specials</h2>
        <div className="restaurant-downarrow mb-3"><FaArrowAltCircleDown /></div>
        <ul className='d-flex justify-content-center gap-3 gap-md-5 ps-0'>
          <NavLink to="/non-vegetarian/tiffin" activeClassName="active" className='restaurant-btn'>TIFFIN</NavLink>
          <NavLink to="/non-vegetarian/lunch" activeClassName="active" className='restaurant-btn'>LUNCH</NavLink>
          <NavLink to="/non-vegetarian/dinner" activeClassName="active" className='restaurant-btn'>DINNER</NavLink>
        </ul>    
     </section>
  );
};

export default Restaurant;
