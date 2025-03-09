import { LazyLoadImage } from "react-lazy-load-image-component";
import "./CommonCard.css";

const CommonCard = (props) => {
  return (
      <div className="col-md-6 col-lg-4"  key={props.id}>
        <div className="card border-0 shadow rounded-4 h-100 w-100">
            <LazyLoadImage
            src={props.image}
            alt={`Best ${props.name} in Kalayarkovil and Sivaganga`}
            className="card-img w-100 object-fit-cover rounded-top-4"
            effect="blur" threshold={200}/>
            <p className="fw-semibold fs-5 text-center mt-3 mb-1">{props.name}</p>
            <p className="fw-semibold text-center text-secondary mb-1 flex-grow-1">{props.desc}</p>
            <p className="text-secondary fw-semibold text-center mb-1">{props.timings}</p>
            <a href={`tel:${props.number}`} className={`${props.which}-items-btn rounded-bottom-4`}>Order Now</a>
        </div>
      </div>
  )
}

export default CommonCard;
