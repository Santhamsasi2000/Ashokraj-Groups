import CommonCard from "../../../Common/Card/CommonCard";
import { VegSideDishData } from "../../Data/Lunch/VegSideDishData";

const VegSideDish = () => {
  const sideDishes = VegSideDishData.map((data) => (
    <CommonCard
      key={data.id}
      image={data.image}
      name={data.name}
      desc={data.desc}
      number={data.number}
      which={data.which}
    />
  ));

  return (
    <div className="row gx-5 gy-5">
      {sideDishes}
    </div>
  );
};

export default VegSideDish;
