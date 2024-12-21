import Sweet from './Sweets/Sweet';
import Savouries from './Savouries/Savouries';
import Cake from './Cakes/Cake';
import {Routes,Route, NavLink } from "react-router-dom";
import Other from './Others/Other';
import Cookie from './Cookies/Cookie';
import Fruit from './Fruits/Fruit';
import Chaat from './Chaat/Chaat';
import "./Bakeries.css";

const Bakeries = () => {
  return (
    <section className='common-bg'>
           <p className='common-title text-center fs-3 fw-bold pt-3'>ASHOKRAJ BAKERY</p>
           <div className='row mx-3 mt-2 mb-5'>
             <div className='col-lg-6 mb-3 mb-lg-0'>
               <img src='/images/Restaurant/1.JPG' alt='No-Image' className='bakery-img rounded-4 w-100'/> 
             </div>
             <div className='col-lg-6'>
               <p className='fs-5'>Ashokraj Bakery, located in the heart of KalayarKovil, Sivaganga<span className='d-none d-sm-inline'>, is your one-stop destination for delightful treats and snacks</span>. Renowned for its mouthwatering chaat, traditional sweets, freshly baked cakes, and crispy savouries, the bakery also offers a variety of fresh fruits and refreshing juices.
                <span className='d-none d-xl-inline'>Whether you're craving something sweet, savory, or simply looking for a quick snack, Ashokraj Bakery has something for everyone.Visit us to experience quality, taste, and freshness in every bite!</span>
              </p>
              <a href="tel:7708675225" className='btn common-button fw-bold px-4 py-2 mt-3'>Order Now</a>
             </div>
           </div>
           <ul className='m-0 bakery-btn d-flex justify-content-center align-items-center flex-wrap gap-3 gap-md-5 p-5'>
              <NavLink to="chaat" activeClassName="active" className='bakery-btn-items text-decoration-none border-0 px-sm-5 px-2 py-sm-3 py-2 rounded-2 fw-bold'>CHAAT</NavLink>
              <NavLink to="sweets" activeClassName="active" className='bakery-btn-items text-decoration-none border-0 px-sm-5 px-2 py-sm-3 py-2 rounded-2 fw-bold'>SWEETS</NavLink>  
              <NavLink to="savouries" activeClassName="active" className='bakery-btn-items text-decoration-none border-0 px-sm-5 px-2 py-sm-3 py-2 rounded-2 fw-bold'>SAVOURIES</NavLink>             
              <NavLink to="cakes" activeClassName="active" className='bakery-btn-items text-decoration-none border-0 px-sm-5 px-2 py-sm-3 py-2 rounded-2 fw-bold'>CAKES</NavLink>
              <NavLink to="cookies" activeClassName="active" className='bakery-btn-items text-decoration-none border-0 px-sm-5 px-2 py-sm-3 py-2 rounded-2 fw-bold'>COOKIES</NavLink>
              <NavLink to="fruits" activeClassName="active" className='bakery-btn-items text-decoration-none border-0 px-sm-5 px-2 py-sm-3 py-2 rounded-2 fw-bold'>FRUITS & JUICES</NavLink>
              <NavLink to="others" activeClassName="active" className='bakery-btn-items text-decoration-none border-0 px-sm-5 px-2 py-sm-3 py-2 rounded-2 fw-bold'>OTHERS</NavLink>
           </ul>
           <Routes>
              <Route path='chaat' element={<Chaat/>}/>
              <Route path='sweets' element={<Sweet/>}/>
              <Route path='savouries' element={<Savouries/>}/>
              <Route path='cakes' element={<Cake/>}/>
              <Route path='cookies' element={<Cookie/>}/>
              <Route path='fruits' element={<Fruit/>}/>
              <Route path='others' element={<Other/>}/>
           </Routes>
    </section>
  )
}

export default Bakeries
