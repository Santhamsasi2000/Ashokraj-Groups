import React, { Suspense } from 'react';
import "./Home.css";
import VideoFile from './VideoFile';
import HomeImage from './ImageHome/HomeImage';

const Home = () => {
  return (
    <section>
      <Suspense>
        <VideoFile/>
        <HomeImage/>
      </Suspense>
    </section>
  );
};

export default Home;
