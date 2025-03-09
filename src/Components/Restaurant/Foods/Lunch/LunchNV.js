import React from 'react';
import MainDish from './MainDish';
import SideDish from './SideDish';
import VegSideDish from './VegSideDish';
import { NavLink, Route, Routes } from 'react-router-dom';
import BackToRestaurant from '../../BackToRestaurant'

const LunchNV = () => {
  return (
    <div className='p-3 p-sm-5'>
      <BackToRestaurant/>
      {/* <ul className='d-flex justify-content-center gap-3 gap-md-5 ps-0'>
          <NavLink to="/non-vegetarian/lunch/main-dishes" activeClassName="active" className='restaurant-btn'>Main Dishes</NavLink>
          <NavLink to="/non-vegetarian/lunch/non-veg-side-dishes" activeClassName="active" className='restaurant-btn'>Non-Veg Side Dishes</NavLink>
          <NavLink to="/non-vegetarian/lunch/veg-side-dishes" activeClassName="active" className='restaurant-btn'>Veg Side Dishes</NavLink>
      </ul> */}
      <Routes>
          <Route path='/non-vegetarian/lunch/main-dishes' element={<MainDish/>}/>
          <Route path='/non-vegetarian/lunch/non-veg-side-dishes' element={<SideDish/>}/>
          <Route path='/non-vegetarian/lunch/veg-side-dishes' element={<VegSideDish/>}/>
      </Routes>
       <p className='restaurant-title mb-4'>Main Dishes</p>
       <MainDish/>
       <hr className='mt-5 restaurant-horizontalLine'/>
       <p className='restaurant-title mb-4'>Non-Veg Side Dishes</p>
       <SideDish/>
       <hr className='mt-5 restaurant-horizontalLine' />
       <p className='restaurant-title mb-4'>Veg Side Dishes</p>
       <VegSideDish/>
    </div>
  )
}

export default LunchNV
