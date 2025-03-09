import { Routes, Route } from "react-router-dom";
import "./App.css";
import MiniHall from "./Components/Lodge/MiniHall/MiniHall";
import Footer from "./Components/Footer/Footer";
import EasyNav from "./Components/NavBar/EasyNav";
import Home from "./Components/Home/Home";
import ContactUs from "./Components/ContactUs/ContactUs";
import Rooms from "./Components/Lodge/Rooms/Rooms";
import Bakeries from "./Components/Bakery/Bakeries";
import VegRes from "./Components/Veg-Restaurant/VegRes";
import Restaurant from "./Components/Restaurant/Restaurant";
// Blur - lazy loading
import 'react-lazy-load-image-component/src/effects/blur.css';

import Chaat from "./Components/Bakery/Chaat/Chaat";
import Sweet from "./Components/Bakery/Sweets/Sweet";
import Savouries from "./Components/Bakery/Savouries/Savouries";
import Cake from "./Components/Bakery/Cakes/Cake";
import Fruit from "./Components/Bakery/Fruits/Fruit";
import Other from "./Components/Bakery/Others/Other";
import Cookie from "./Components/Bakery/Cookies/Cookie";
import ScrollToTop from "./Components/ScrollToTop";
import BreakFastNv from "./Components/Restaurant/Foods/BreakFastNv";
import LunchNV from "./Components/Restaurant/Foods/Lunch/LunchNV";
import DinnerNV from "./Components/Restaurant/Foods/Dinner/DinnerNV";

function App() {
  return (
    <>
      <EasyNav/>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/non-vegetarian/*" element={<Restaurant />} />
          <Route path="/bakery" element={<Bakeries />} />
          <Route path="/vegetarian/*" element={<VegRes/>}/>
          <Route path="/rooms" element={<Rooms/>} />
          <Route path="/minihall" element={<MiniHall/>} />
          <Route path="/contact" element={<ContactUs />} />

          {/* Restaurant */}
          <Route path='/non-vegetarian/tiffin' element={<BreakFastNv/>}/>
          <Route path='/non-vegetarian/lunch' element={<LunchNV/>}/>
          <Route path='/non-vegetarian/dinner' element={<DinnerNV/>}/>

           {/* Bakery- Menus */}
           <Route path='/chaat' element={<Chaat/>}/>
           <Route path='/sweets' element={<Sweet/>}/>
           <Route path='/savouries' element={<Savouries/>}/>
           <Route path='/cakes' element={<Cake/>}/>
           <Route path='/cookies' element={<Cookie/>}/>
           <Route path='/fruits' element={<Fruit/>}/>
           <Route path='/others' element={<Other/>}/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
