import CommonCard from "../../Common/Card/CommonCard";
import { BreakDinDataVeg } from "../Data/BreakDinDataVeg";

const BreakFastVeg = () => {
  const morningFoods = BreakDinDataVeg.map((data) => (
    <CommonCard
      key= {data.id}
      image= {data.image}
      name= {data.name}
      desc= {data.desc}
      timings= {data.timings}
      number= {data.number}
      which= {data.which}
    />
  ));

  return (
    <div className="row gx-5 gy-5">
      {morningFoods}
    </div>
  );
};

export default BreakFastVeg;
