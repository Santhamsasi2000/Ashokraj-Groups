import BfCard from "../../Common/Card/BfCard";
import BreakFastVeg from "../../Veg-Restaurant/Foods/BreakFastVeg";
import { ExtraTiffinData } from "../Data/ExtraTiffinData";

const BreakFastNv = () => {
  const mainDishes = ExtraTiffinData.map((data) => (
    <BfCard
      key={data.id}
      image={data.image}
      name={data.name}
      desc={data.desc}
      number={data.number}
      timings={data.timings}
    />
  ));

  return (
    <>
      <div className="bg-white p-3 p-sm-5 d-flex flex-wrap justify-content-center gap-5">
        <BreakFastVeg />
        {mainDishes}
      </div>
    </>
  );
};

export default BreakFastNv;
