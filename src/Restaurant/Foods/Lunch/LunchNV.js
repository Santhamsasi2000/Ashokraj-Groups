import React from 'react';
import MainDish from './MainDish';
import SideDish from './SideDish';
import VegSideDish from './VegSideDish';

const LunchNV = () => {
  return (
    <div className='bg-white p-3 p-sm-5'>
       <p className='text-center fw-bold fs-3 mt-5 mb-3 sub-title text-decoration-underline text-uppercase'>Main Dishes</p>
       <MainDish/>
       <hr className='mt-5 finish-line'/>
       <p className='text-center fw-bold fs-3 mt-3 mb-3 sub-title text-decoration-underline text-uppercase'>Non-Veg Side Dishes</p>
       <SideDish/>
       <hr className='mt-5 finish-line' />
       <p className='text-center fw-bold fs-3 mt-3 mb-3 sub-title text-decoration-underline text-uppercase'>Veg Side Dishes</p>
       <VegSideDish/>
    </div>
  )
}

export default LunchNV
