import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BackToMenu = () => {
  return (
    <NavLink to="/bakery" className="btn btn-primary mb-4">
         <div className="d-flex align-items-center gap-2">
           <FaArrowLeft />Back to Menu
         </div>
    </NavLink>
  )
}

export default BackToMenu
