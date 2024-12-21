import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center">
       <p className="fs-1 fw-bold">ASHOKRAJ</p>
       <div className="d-flex flex-column flex-lg-row gap-0 gap-lg-5 align-items-center">
         <div className="d-flex gap-5">
            <p>HOME</p>
            <p>RESTAURANT</p>
            <p>BAKERY</p>
         </div>
         <div className="d-flex gap-5">
            <p>LODGE</p>
            <p>CONTACT US</p>
         </div>
       </div>
    </nav>
  )
}

export default NavBar
