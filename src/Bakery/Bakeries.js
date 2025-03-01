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
    <section className='common-bg p-3 p-sm-5'>
      <p className='common-title'>ASHOKRAJ BAKERY AND SWEETS</p>
      <ul className='menu-parent p-3 p-sm-5 d-flex flex-wrap gap-4 mb-0'>
        <NavLink to="/bakery/chaat" activeClassName="active" className='menu-btn'>CHAAT</NavLink>
        <NavLink to="/bakery/sweets" activeClassName="active" className='menu-btn'>SWEETS</NavLink>  
        <NavLink to="/bakery/savouries" activeClassName="active" className='menu-btn'>SAVOURIES</NavLink>             
        <NavLink to="/bakery/cakes" activeClassName="active" className='menu-btn'>CAKES</NavLink>
        <NavLink to="/bakery/cookies" activeClassName="active" className='menu-btn'>COOKIES</NavLink>
        <NavLink to="/bakery/fruits" activeClassName="active" className='menu-btn'>FRUITS & JUICES</NavLink>
        <NavLink to="/bakery/others" activeClassName="active" className='menu-btn'>OTHERS</NavLink>
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
