import { SideDishData } from "../../Data/Lunch/SideDishData";
import CommonCard from "../../../Common/Card/CommonCard";

const SideDish = () => {
  const sideDishes = SideDishData.map((data) => (
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

export default SideDish;
