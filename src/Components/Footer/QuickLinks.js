import { NavLink } from 'react-router-dom';
const QuickLinks = () => {
  return (
     <div>
        <div className='d-flex flex-column align-items-start'>
            <p className='common-title text-start mb-3'>Quick Links</p>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/aboutus">About Us</NavLink>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/services">Our Services</NavLink>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/case-studies">Case Studies</NavLink>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/faq">General Customer Questions</NavLink>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/careers">Careers</NavLink>
        </div>
    </div>
  )
}

export default QuickLinks
