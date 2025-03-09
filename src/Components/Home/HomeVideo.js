import React, { useState, useRef } from 'react';

const HomeVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video-container p-3" style={{ position: 'relative', width: '100%'}}>
    {/* // <div className="video-container p-3"> */}
      <video
        ref={videoRef}
        src="./Video/Home.mp4"
        preload="metadata"
        muted
        loop
        className="w-100 object-fit-cover rounded-3"
      />
 <p
        onClick={handlePlayPause}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          color:"white",
          border:"none",
          fontSize:"40px"
        }}
      >
        {isPlaying ? '❚❚' : '▶'}
      </p>
    </div>
  );
};

export default HomeVideo;
