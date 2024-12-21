import React from 'react';

const VideoFile = () => {
 return (
    <div className='p-3 p-sm-5'>
      <iframe className='video w-100 rounded-3' src="https://www.youtube.com/embed/09hwpvN-AoE?si=ns6G6xoSAJdT110D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
};

export default VideoFile;
