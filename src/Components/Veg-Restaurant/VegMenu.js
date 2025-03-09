import { NavLink,Routes,Route } from "react-router-dom";
import BreakFastVeg from "./Foods/BreakFastVeg";
import LunchVeg from "./Foods/LunchVeg";

const VegMenu = () => {
  return (
    <div className="">
        <div className='d-flex justify-content-center gap-3 gap-md-5 pb-3 pb-sm-5 mb-0'>
            <NavLink to="/vegetarian/tiffin" activeClassName="active" className='veg-btn'>MORNING & NIGHT</NavLink>
            <NavLink to="/vegetarian/lunch" activeClassName="active" className='veg-btn'>LUNCH</NavLink>
        </div>
        <Routes>
            <Route path='tiffin' element={<BreakFastVeg/>}/>
            <Route path='lunch' element={<LunchVeg/>}/>
        </Routes>
    </div>
  )
}

export default VegMenu
