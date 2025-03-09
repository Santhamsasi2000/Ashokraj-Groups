import VegMenu from "./VegMenu";
import "./VegRes.css";
import { FaArrowAltCircleDown } from "react-icons/fa";

const VegRes = () => {
  return (
    <section className="veg-bg p-3 p-sm-5">
        <h1 className="veg-title">ASHOK BHAVAN</h1>
        <h2 className="veg-subTitle">HIGH STANDARD VEGETARIANISM</h2>
        <p className="text-center mb-2">Craving Something Tasty? Check Our Menu!</p>
        <div className="veg-downarrow mb-3"><FaArrowAltCircleDown /></div>
       <VegMenu/>
    </section>
  )
}

export default VegRes
