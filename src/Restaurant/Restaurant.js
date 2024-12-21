import React, { Suspense, lazy } from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
import "./Restaurant.css";

// Lazy load AshokBhavan and AshokRaj components
const AshokBhavan = lazy(() => import('./AshokBavan/AshokBhavan'));
const AshokRaj = lazy(() => import('./AshokRaj/AshokRaj'));

const Restaurant = () => {
  return (
    <div className='pt-2 common-bg'>
       <p className='common-title text-center fs-3 fw-bold pt-3'>ASHOKRAJ RESTAURANT</p>
      <div className='row mx-3 mt-4 mb-5 align-items-center'>
        <div className='col-lg-6 mb-3 mb-lg-0'>
          <img src='/images/Restaurant/1.JPG' alt='No-Image' className='bakery-img rounded-4 w-100'/> 
        </div>
        <div className='col-lg-6'>
          <ul>
              <li className='mb-2 fw-semibold fs-5'>Best vegetarian and non-vegetarian restaurant in Kalayarkovil, Sivaganga.</li>
              <li className='mb-2 fw-semibold fs-5'>Best restaurants in Kalayarkovil, Sivaganga.</li>
              <li className='mb-2 fw-semibold fs-5'>Ashokraj Restaurant near me.</li>
              <li className='mb-2 fw-semibold fs-5'>Family restaurants in Kalayarkovil, Sivaganga.</li>
              <li className='mb-2 fw-semibold fs-5'>Pure vegetarian restaurants in Kalayarkovil, Sivaganga.</li>
              <li className='mb-2 fw-semibold fs-5'>Popular restaurants for tourists in Kalayarkovil, Sivaganga.</li>
          </ul>
            <button className='btn common-button fw-bold px-4 py-2'>ORDER NOW</button>
        </div>
      </div>

      <ul className='m-0 d-flex justify-content-center gap-3 gap-md-5 py-4 ps-0'> 
        <NavLink to="veg" className='button-color text-white text-decoration-none border-0 px-sm-5 px-3 py-sm-3 py-2 rounded-2 fw-bold fs-6 text-center'>ASHOK BHAVAN</NavLink>
        <NavLink to="non-veg" className='button-color text-white text-decoration-none border-0 px-sm-5 px-3 py-sm-3 py-2 rounded-2 fw-bold fs-6  text-center'>ASHOKRAJ</NavLink>
      </ul>

      {/* Suspense for nested routes */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="veg" element={<AshokBhavan />} />
          <Route path="non-veg/*" element={<AshokRaj />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default Restaurant;
