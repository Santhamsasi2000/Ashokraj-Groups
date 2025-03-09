import Rice from './Rice'
import Noodles from './Noodles'
import Tandoori from './Tandoori'
import Naan from './Naan'
import Gravy from './Gravy'
import VegGravy from './VegGravy'
import Soup from './Soup'
import Parotta from './Parotta'
import BackToRestaurant from '../../BackToRestaurant'

const DinnerNV = () => {
  return (
    <section className='p-3 p-sm-5'>
       <BackToRestaurant/>
       <h2 className='restaurant-title mb-4'>Fried Rice Varieties</h2>
       <Rice/>
       <hr className='mt-5 restaurant-horizontalLine'/>
       <h2 className='restaurant-title mb-4'>Noodles Varieties</h2>
       <Noodles/>
       <hr className='mt-5 restaurant-horizontalLine'/>
       <h1 className='restaurant-title mb-4'>Parotta Varieties</h1>
       <Parotta/>
       <hr className='mt-5 restaurant-horizontalLine'/>
       <p className='restaurant-title mb-4'>Tandoori Dry Varieties</p>
       <Tandoori/>
       <hr className='mt-5 restaurant-horizontalLine'/>
       <h2 className='restaurant-title mb-4'>Naan Varieties</h2>
       <Naan/>
       <hr className='mt-5 restaurant-horizontalLine'/>
       <h2 className='restaurant-title mb-4'>Gravy Varieties</h2>
       <Gravy/>
       <hr className='mt-5 restaurant-horizontalLine'/>
       <h2 className='restaurant-title mb-4'>Veg Gravy Varieties</h2>
       <VegGravy/>
       <hr className='mt-5 restaurant-horizontalLine'/>
       <h2 className='restaurant-title mb-4'>Soup Varieties</h2>
       <Soup/>
    </section>
  )
}

export default DinnerNV
