import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const SocialMedia = () => {
  return (
    <div>
      <div className='d-flex gap-4 mt-4'>
        <div className='media-icons bg-white d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1' href='https://www.facebook.com/profile.php?id=124470647731014&_rdr' 
          target='_blank'  rel="noopener noreferrer"><FaFacebookF /></a>
        </div>
        <div className='media-icons bg-white d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1' href='https://www.instagram.com/problemsolving.consultancy1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' 
           target='_blank'  rel="noopener noreferrer"><FaInstagram /></a>
        </div>
        <div className='media-icons bg-white d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1'
          target='_blank' rel='noopener noreferrer'> <FaYoutube /></a>
        </div>
      </div>
      <div className='d-flex gap-4 mt-4'>
        <div className='media-icons bg-white d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1' href='https://www.facebook.com/profile.php?id=124470647731014&_rdr' 
          target='_blank'  rel="noopener noreferrer"><SiWhatsapp /></a>
        </div>
        <div className='media-icons bg-white d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1' href='https://www.instagram.com/shanthiraniphotos/' 
           target='_blank'  rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <div className='media-icons bg-white d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1'  href='https://www.youtube.com/@shanthiranimatrichr.sec.sc9160/featured'
          target='_blank' rel='noopener noreferrer'><FaXTwitter /></a>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia
