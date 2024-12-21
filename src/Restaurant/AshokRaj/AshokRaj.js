import React from 'react';
import "./AshokRaj.css";
import {Routes,Route,NavLink} from "react-router-dom";
import LunchNV from './Foods/Lunch/LunchNV';
import DinnerNV from './Foods/Dinner/DinnerNV';
import BreakFastNv from './Foods/BreakFastNv';

const AshokRaj = () => {
  return (
    <div className='py-5'>
           <ul className='restaurant-button d-flex justify-content-center gap-3 gap-md-5 ps-0'>
            <NavLink to="break" activeClassName="active" className='nonVeg text-decoration-none border-outline-primary px-sm-5 px-3 py-sm-3 py-2 rounded-2 fw-bold'>TIFFIN</NavLink>
            <NavLink to="lunch" activeClassName="active" className='nonVeg text-decoration-none px-sm-5 px-3 py-sm-3 py-2 rounded-2 fw-bold'>LUNCH</NavLink>
            <NavLink to="dinner" activeClassName="active" className='nonVeg text-decoration-none px-sm-5 px-3 py-sm-3 py-2 rounded-2 fw-bold'>DINNER</NavLink>
           </ul>
            <Routes>
              <Route path='break' element={<BreakFastNv/>}/>
              <Route path='lunch' element={<LunchNV/>}/>
              <Route path='dinner' element={<DinnerNV/>}/>
            </Routes>
            {/* <Timing/> */}
        </div>
  )
}

export default AshokRaj
