import Maggie from "./Maggie/Maggie";
import Chaats from "./Others/Chaats";
import PaniPuri from "./PaniPuri/PaniPuri";
import PavBhaji from "./PavBhaji/PavBhaji";
import Pizza from "./Pizza/Pizza";
import Sandwich from "./Sandwich/Sandwich";

const Chaat = () => {
  return (
    <section className="bg-white p-3 p-sm-5">
      <p className='text-center fw-bold fs-3 mt-5 mb-3 text-decoration-underline text-uppercase sub-title'>Pani Puri</p>
      <PaniPuri />
      <hr className='mt-5 finish-line'/>
      <p className='text-center fw-bold fs-3 mt-5 mb-3 text-decoration-underline text-uppercase sub-title'>Pav Bhaji</p>
      <PavBhaji />
      <hr className='mt-5 finish-line'/>
      <p className='text-center fw-bold fs-3 mt-5 mb-3 text-decoration-underline text-uppercase sub-title'>Sandwich</p>
      <Sandwich/>
      <hr className='mt-5 finish-line'/>
      <p className='text-center fw-bold fs-3 mt-5 mb-3 text-decoration-underline text-uppercase sub-title'>Maggi</p>
      <Maggie/>
      <hr className='mt-5 finish-line'/>
      <p className='text-center fw-bold fs-3 mt-5 mb-3 text-decoration-underline text-uppercase sub-title'>Pizza</p>
      <Pizza/>
      <hr className='mt-5 finish-line'/>
      <p className='text-center fw-bold fs-3 mt-5 mb-3 text-decoration-underline text-uppercase sub-title'>Others</p>
      <Chaats/>
    </section>
  );
};

export default Chaat;
