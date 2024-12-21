import BfCard from "../../../Common/Card/BfCard";
import BreakFastVeg from "../../AshokBavan/Foods/BreakFastVeg";
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
      <div className="d-flex flex-wrap justify-content-center gap-5 my-5">
        <BreakFastVeg />
        {mainDishes}
      </div>
    </>
  );
};

export default BreakFastNv;
