import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BackToRestaurant = () => {
  return (
    <NavLink to="/non-vegetarian" className="btn btn-primary mb-4">
         <div className="d-flex align-items-center gap-2">
           <FaArrowLeft />Back to Menu
         </div>
    </NavLink>
  )
}

export default BackToRestaurant
