import {NavLink } from "react-router-dom";
import "./Bakeries.css";
import { bakeryMenus } from './DataBakery';
import { FaArrowAltCircleDown } from "react-icons/fa";

const Bakeries = () => {
  return (
    <section className='bakery-bg p-3 p-sm-5'>
      <h1 className='bakery-title mb-4'>ASHOKRAJ BAKERY AND SWEETS</h1>
      <h2 className='bakery-subTitle'>Discover Deliciousness – Explore Our Menu!</h2>
      <div className="bakery-downarrow"><FaArrowAltCircleDown /></div>
      <ul className='bakery-menu p-3 p-sm-4 mb-0 row gap-4'>
          {bakeryMenus.map((item, index) => (
            <NavLink
              key={index}
              to={`/${item.link}`}
              activeClassName='active'
              className='bakery-btn col-sm-4 col-md-3 col-xl-2'
            >
              {item.label}
            </NavLink>
          ))}
      </ul>
    </section>
  )
}

export default Bakeries
