import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div>
      <div className='d-flex gap-4 mt-4'>
        <div className='media-icons home d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1'><FaFacebookF /></a>
        </div>
        <div className='media-icons home d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1'><FaInstagram /></a>
        </div>
        <div className='media-icons home d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1'><FaYoutube /></a>
        </div>
      </div>
    </div>


  )
}

export default SocialMedia
