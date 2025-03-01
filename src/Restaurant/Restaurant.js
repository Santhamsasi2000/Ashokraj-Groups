import "./Restaurant.css";
import {Routes,Route,NavLink} from "react-router-dom";
import LunchNV from './Foods/Lunch/LunchNV';
import DinnerNV from './Foods/Dinner/DinnerNV';
import BreakFastNv from './Foods/BreakFastNv';


const Restaurant = () => {
  return (
     <section className="pt-3 pt-sm-5 restaurant-bg">
        <p className="restaurant-title">ASHOKRAJ RESTAURANT</p>
        <h2 className="restaurant-subTitle mb-4">Our Special Menu</h2>
           <ul className='d-flex justify-content-center gap-3 gap-md-5 ps-0'>
            <NavLink to="/non-vegetarian/tiffin" activeClassName="active" className='restaurant-btn'>TIFFIN</NavLink>
            <NavLink to="/non-vegetarian/lunch" activeClassName="active" className='restaurant-btn'>LUNCH</NavLink>
            <NavLink to="/non-vegetarian/dinner" activeClassName="active" className='restaurant-btn'>DINNER</NavLink>
           </ul>
            <Routes>
              <Route path='tiffin' element={<BreakFastNv/>}/>
              <Route path='lunch' element={<LunchNV/>}/>
              <Route path='dinner' element={<DinnerNV/>}/>
            </Routes>
     </section>
  );
};

export default Restaurant;
