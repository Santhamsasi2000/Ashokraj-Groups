import React, { Suspense } from 'react';
import HomeVideo from "./HomeVideo";
import HomeImage from './HomeImage';
import "./Home.css";

const Home = () => {
  return (
    <section className='home'>
      <Suspense>
        <HomeVideo/>
        <HomeImage/>
      </Suspense>
    </section>
  );
};

export default Home;
