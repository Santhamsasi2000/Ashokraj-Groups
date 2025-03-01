import VegMenu from "./VegMenu";
import "./VegRes.css";

const VegRes = () => {
  return (
    <section className="common-bg p-3 p-sm-5">
       <div className="">
        <p className="common-title">ASHOK BHAVAN</p>
        <p className="text-center fw-bold mb-2 text-success">HIGH STANDARD VEGETARIANISM</p>
        <p className="text-center mb-2">CLick and Explore - Our Menu</p>
       </div>
       <VegMenu/>
    </section>
  )
}

export default VegRes
