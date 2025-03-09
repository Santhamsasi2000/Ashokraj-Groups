import { LazyLoadImage } from "react-lazy-load-image-component";
import Services from "./Services";
import "./MiniHall.css";

const MiniHall = () => {
  return (
  <section className="minihall-bg p-3 p-sm-5">
    <h1 className="mini-title mb-4">Ashokraj Minihall</h1>
    <div className='row align-items-center justify-content-center mb-5 mb-sm-0'>
      <div className='col-12 col-lg-5 text-center'>
        <LazyLoadImage className="w-100 mb-4 mb-lg-0" src='/images/Lodge/Mini-Hall.webp' alt='Near school in Kallal,Kalayarkovil' effect="blur" threshold={200}/>
      </div>
      <div className='col-12 col-lg-6'>
        <p className="text-justify mb-4">The perfect venue for your events in Kalayarkovil! With a 100+ seating capacity, our function hall is ideal for weddings, parties, and gatherings. Enjoy delicious food provided by the renowned Ashokraj Restaurant, ensuring a memorable culinary experience for your guests. Located nearby the bus stand, our hall offers convenience and accessibility. Though non A/C, our spacious and well-ventilated space ensures comfort for all. Choose Ashokraj Mini / Function Hall for the best event experience in Kalayarkovil!</p>
        <a href={`tel:7639232333`} className="minihall-btn">Book Now</a>
      </div>
    </div>
    {/* <Services/> */}
  </section>
  )
}

export default MiniHall;
