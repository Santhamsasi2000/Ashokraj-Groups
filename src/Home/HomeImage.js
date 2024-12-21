import { NavLink, useNavigate} from 'react-router-dom';

const HomeImage = () => {
  const navigate = useNavigate();
  const handleContactClick = () => 
  {
    navigate('/lodge');
    window.scrollTo(0, 0);
  };
  return (
      <section className='row p-3'>
        <p className='text-center fw-bold fs-4'>WHAT ARE IN ASHOKRAJ ?</p>
        <div className='col-md-6 main-img p-2'>
          <p className='text-center text-color fw-bold fs-5'>HIGH STANDARD VEGETARIAN</p>
          <NavLink to="/restaurant" activeClassName="active" className="fw-semibold">
            <img src='/images/Home/Vegetarian1.JPG' alt='No-Image' className='w-100 img-fluid rounded-3' loading='lazy'/>
            {/* <span className="link-text fw-bold fs-1">VEGETARIAN</span> */}
          </NavLink>
        </div>
        <div className='col-md-6 main-img p-2'>
        <p className='text-center fw-bold text-color fs-5'>VEG AND NON-VEG RESTAURANT</p>
          <NavLink to="/restaurant" activeClassName="active" className="fw-semibold">
            <img src='https://res.cloudinary.com/dv5ye2dkg/image/upload/v1734710508/Restaurant_a4oxfq.jpg' alt='No-Image' className='w-100 img-fluid rounded-3' loading='lazy'/>
            {/* <span className="link-text fw-bold fs-1">RESTAURANT</span> */}
          </NavLink>
        </div>
        <div className='col-md-6 main-img p-2'>
          <p className='text-center fw-bold text-color fs-5'>BAKERY & SWEETS</p>
          <NavLink to="/bakery" activeClassName="active" className="fw-semibold">
            <img src='/images/Home/Bakery.JPG' alt='No-Image' className='w-100 img-fluid rounded-3' loading='lazy'/>
            {/* <span className="link-text fw-bold fs-1">BAKERY</span> */}
          </NavLink>
        </div>
        <div className='col-md-6 main-img p-2'>
            <p className='text-center fw-bold text-color fs-5'>LODGE & MINIHALL</p>
            <img src='/images/Home/lodge.JPG' alt='No-Image' className='w-100 img-fluid rounded-3' onClick={handleContactClick} loading='lazy'/>
            {/* <span className="link-text fw-bold fs-1">LODGE</span> */}
        </div>
      </section>
  );
}

export default HomeImage;