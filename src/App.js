import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import VegRes from "./Veg-Restaurant/VegRes";
// Blur - lazy loading
import 'react-lazy-load-image-component/src/effects/blur.css';
import Rooms from "./Lodge/Rooms/Rooms";
import MiniHall from "./Lodge/MiniHall/MiniHall";
import Footer from "./Components/Footer/Footer";
import EasyNav from "./Components/NavBar/EasyNav";

//Lazy load the main components
const Home = lazy(() => import("./Home/Home"));
const Restaurant = lazy(() => import("./Restaurant/Restaurant"));
const Bakeries = lazy(() => import("./Bakery/Bakeries"));
const ContactUs = lazy(() => import("./ContactUs/ContactUs"));

function App() {
  return (
    <>
      <EasyNav/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vegetarian/*" element={<VegRes/>}/>
          <Route path="/non-vegetarian/*" element={<Restaurant />} />
          <Route path="/bakery/*" element={<Bakeries />} />
          <Route path="/rooms" element={<Rooms/>} />
          <Route path="/minihall" element={<MiniHall/>} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Suspense>
      <Footer/>
    </>
  );
}

export default App;
