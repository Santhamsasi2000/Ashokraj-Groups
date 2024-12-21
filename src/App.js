import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Common/Footer/Footer";
import NewNav from "./Common/NavBar/NewNav";
import "./App.css";

//Lazy load the main components
const Home = lazy(() => import("./Home/Home"));
const Restaurant = lazy(() => import("./Restaurant/Restaurant"));
const Bakeries = lazy(() => import("./Bakery/Bakeries"));
const Lodge = lazy(() => import("./Lodge/Lodge"));
const ContactUs = lazy(() => import("./ContactUs/ContactUs"));

function App() {
  return (
    <>
       <NewNav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/*" element={<Restaurant />} />
          <Route path="/bakery/*" element={<Bakeries />} />
          <Route path="/lodge" element={<Lodge />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Suspense>
      <Footer/> 
    </>
  );
}

export default App;
