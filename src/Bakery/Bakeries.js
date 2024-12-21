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
      <p className='common-title text-center fs-4 fw-bold pt-3'>ASHOKRAJ BAKERY</p>
      <div className='row mx-3 mt-2 mt-lg-4 mb-5'>
        <div className='col-lg-6 mb-3 mb-lg-0'>
          <img src='/images/Restaurant/1.JPG' alt='No-Image' className='bakery-img w-100 rounded-2'/> 
        </div>
        <div className='col-lg-6'>
          <p>Ashokraj Bakery, located in the heart of KalayarKovil, Sivaganga<span className='d-none d-sm-inline'>, is your one-stop destination for delightful treats and snacks</span>. Renowned for its mouthwatering chaat, traditional sweets, freshly baked cakes, and crispy savouries, the bakery also offers a variety of fresh fruits and refreshing juices.
          <span className='d-none d-xl-inline'>Whether you're craving something sweet, savory, or simply looking for a quick snack, Ashokraj Bakery has something for everyone.Visit us to experience quality, taste, and freshness in every bite!</span>
        </p>
        <a href="tel:7708675225" className='btn common-button fw-bold px-4 py-2 mt-3'>Order Now</a>
        </div>
      </div>
      <ul className='my-5 p-3 p-sm-5 bakery-btn d-flex flex-wrap gap-4'>
        <NavLink to="/bakery/chaat" activeClassName="active" className='bakery-btn-items text-decoration-none border-0 px-sm-5 px-2 py-sm-3 py-2 rounded-2'>CHAAT</NavLink>
        <NavLink to="/bakery/sweets" activeClassName="active" className='bakery-btn-items text-decoration-none border-0 px-sm-5 px-2 py-sm-3 py-2 rounded-2'>SWEETS</NavLink>  
        <NavLink to="/bakery/savouries" activeClassName="active" className='bakery-btn-items text-decoration-none border-0 px-sm-5 px-2 py-sm-3 py-2 rounded-2'>SAVOURIES</NavLink>             
        <NavLink to="/bakery/cakes" activeClassName="active" className='bakery-btn-items text-decoration-none border-0 px-sm-5 px-2 py-sm-3 py-2 rounded-2'>CAKES</NavLink>
        <NavLink to="/bakery/cookies" activeClassName="active" className='bakery-btn-items text-decoration-none border-0 px-sm-5 px-2 py-sm-3 py-2 rounded-2'>COOKIES</NavLink>
        <NavLink to="/bakery/fruits" activeClassName="active" className='bakery-btn-items text-decoration-none border-0 px-sm-5 px-2 py-sm-3 py-2 rounded-2'>FRUITS & JUICES</NavLink>
        <NavLink to="/bakery/others" activeClassName="active" className='bakery-btn-items text-decoration-none border-0 px-sm-5 px-2 py-sm-3 py-2 rounded-2'>OTHERS</NavLink>
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
