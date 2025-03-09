import { NavLink} from 'react-router-dom';
import "./HomeImage.css";
import { DataImage } from './DataImage';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const HomeImage = () => {
  return (
      <section className='p-3 p-sm-5'>
        <p className='common-title mb-4'>WHAT ARE IN ASHOKRAJ ?</p>
        <div className='row justify-content-center gap-5'>
          {
            DataImage.map(({id,image,title,link,btnTitle})=>(
            <div className='col-md-5 border border-img border-4 p-0' key={id}>
              <LazyLoadImage src={image} alt={title} effect="blur" className='w-100'/>
              <div className='d-flex justify-content-between align-items-center p-3 bg-img'>
                <p className='text-white fw-bold fs-5'>{title}</p>
                <NavLink to={link} className="btn btn-color">{btnTitle}</NavLink>
              </div>
            </div>
            ))
          }
        </div>
      </section>
  );
}

export default HomeImage;