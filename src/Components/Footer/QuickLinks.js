import { NavLink } from 'react-router-dom';
const QuickLinks = () => {
  return (
     <div>
        <div className='d-flex flex-column align-items-start'>
            <p className='footer-title mb-3'>Quick Links</p>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/non-vegetarian">Restaurant</NavLink>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/bakery">Bakery</NavLink>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/vegetarian">Veg Restaurant</NavLink>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/rooms">Lodge</NavLink>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/contact">Location</NavLink>
        </div>
    </div>
  )
}

export default QuickLinks
