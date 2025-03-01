import Rice from './Rice'
import Noodles from './Noodles'
import Tandoori from './Tandoori'
import Naan from './Naan'
import Gravy from './Gravy'
import VegGravy from './VegGravy'
import Soup from './Soup'
import Parotta from './Parotta'

const DinnerNV = () => {
  return (
    <div className='bg-white p-3 p-sm-5'>
       <p className='text-center fw-bold fs-3 mt-5 mb-3 sub-title text-decoration-underline text-uppercase'>Fried Rice Varieties</p>
       <Rice/>
       <hr className='mt-5 finish-line'/>
       <p className='text-center fw-bold fs-3 mt-5 mb-3 sub-title text-decoration-underline text-uppercase'>Noodles Varieties</p>
       <Noodles/>
       <hr className='mt-5 finish-line'/>
       <p className='text-center fw-bold fs-3 mt-5 mb-3 sub-title text-decoration-underline text-uppercase'>Parotta Varieties</p>
       <Parotta/>
       <hr className='mt-5 finish-line'/>
       <p className='text-center fw-bold fs-3 mt-5 mb-3 sub-title text-decoration-underline text-uppercase'>Tandoori Dry Varieties</p>
       <Tandoori/>
       <hr className='mt-5 finish-line'/>
       <p className='text-center fw-bold fs-3 mt-5 mb-3 sub-title text-decoration-underline text-uppercase'>Naan Varieties</p>
       <Naan/>
       <hr className='mt-5 finish-line'/>
       <p className='text-center fw-bold fs-3 mt-5 mb-3 sub-title text-decoration-underline text-uppercase'>Gravy Varieties</p>
       <Gravy/>
       <hr className='mt-5 finish-line'/>
       <p className='text-center fw-bold fs-3 mt-5 mb-3 sub-title text-decoration-underline text-uppercase'>Veg Gravy Varieties</p>
       <VegGravy/>
       <hr className='mt-5 finish-line'/>
       <p className='text-center fw-bold fs-3 mt-5 mb-3 sub-title text-decoration-underline text-uppercase'>Soup Varieties</p>
       <Soup/>
    </div>
  )
}

export default DinnerNV
