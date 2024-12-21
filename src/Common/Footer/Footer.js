import React from 'react';
import "./Footer.css";
import { Link, useNavigate } from 'react-router-dom';
import SocialMedia from './SocialMedia';

const Footer = () => {
  const navigate = useNavigate();
  const handleContactClick = () => 
  {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <div className='footer d-flex flex-column align-items-center py-2'>
      <p className='footer-color fw-bold fs-4 text-uppercase'>Connect with us</p>
      <SocialMedia/>
      <button 
        onClick={handleContactClick}
        className='border border-2 border-color home px-4 py-2 rounded-2 fw-bold fs-6 text-uppercase mt-4 text-decoration-none'>
        Location
      </button>
      <p className='mt-3 fw-semibold footer-color'>Developed by &nbsp;<a href={`tel:6384379814`} className='text-uppercase text-white'>POGO Web Solutions</a></p>
    </div>
  );
}

export default Footer;
