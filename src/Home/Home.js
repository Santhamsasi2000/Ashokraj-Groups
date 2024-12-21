import React, { Suspense } from 'react';
import HomeImage from './HomeImage';
import "./Home.css";
import VideoFile from './VideoFile';

const Home = () => {
  return (
    <section className='home'>
      <Suspense>
        <VideoFile/>
        <HomeImage/>
      </Suspense>
    </section>
  );
};

export default Home;
