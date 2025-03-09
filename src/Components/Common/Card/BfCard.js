const BfCard = (props) => {
  return (
    <div className="card border-0 shadow food-items rounded-4"  key={props.id}>
    <img
        src={props.image}
        alt="No-image"
        className="single-receipe w-100 object-fit-cover rounded-top-4"/>
   <p className="fw-semibold fs-5 text-center mt-3 text-uppercase mb-1">{props.name}</p>
           <p className="text-secondary fw-semibold text-center mb-1">
            Serving At <span className='text-dark'>{props.timings}</span>
            </p>
            <p className="text-secondary fw-semibold text-center mb-1">{props.desc}</p>
     <a href={`tel:${props.number}`} className='order-now text-white text-center text-decoration-none text-uppercase py-3 fw-bold rounded-bottom-4'>Order Now</a>
  </div>
  )
}

export default BfCard;
