import SocialMedia from './SocialMedia';
import "./Footer.css";
import QuickLinks from './QuickLinks';
import FooterContact from './FooterContact';

const Footer = () => {
  return (
      <div className='mt-0 footer p-5 row gy-4 gy-sm-5 justify-content-between gx-0'>
        <div className='col-md-6 col-xl-4'>
          <p className='footer-title mb-3'>Follow Us</p>
          <p className='fw-semibold'>Get Involved with Online</p>
          <SocialMedia/>
        </div>
        <div className='col-md-6 col-xl-4'>
          <QuickLinks/>
        </div>
        <div className='col-xl-4'>
          <FooterContact/>
        </div>
        <p className='mt-3 fw-semibold footer-color text-sm-center'>Developed by &nbsp;
        <a href="https://www.pogowebsolutions.com/" className='text-uppercase text-resize' target="_blank" rel="noopener noreferrer">POGO Web Solutions</a>
      </p>
      </div>
       
  ) 
}

export default Footer
