import { IoMdCall } from "react-icons/io";

const callData = [
  {
    id:1,
    forWhich:"Veg Restaurant",
    number:"9043246176",
  },
  {
    id:2,
    forWhich:"Restaurant",
    number:"8508525062",
  },
  {
    id:3,
    forWhich:"Bakery and Sweets",
    number:"9043246178",
  },
  {
    id:4,
    forWhich:"Lodge and Minihall",
    number:"7639232333",
  },
];
const FooterContact = () => {
  return (
    <>
       <p className='footer-title mb-3'>Contact Us</p>
       {
        callData.map(({id, forWhich, number})=>(
          <div className="d-flex align-items-center mb-3 footer-contact" key={id}>
            <p className="fw-semibold mb-0">{forWhich} <span className="line me-1">-</span></p>
            <i className="fs-5"><IoMdCall /></i>
            <a href={`tel:${number}`} className="footer-Links ms-1 text-decoration-none">{number}</a>
         </div>
        ))
       }
    </>
  )
}

export default FooterContact
