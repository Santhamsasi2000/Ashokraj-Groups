import CommonCard from "../../../Common/Card/CommonCard";
import { GravyData } from "../../Data/Dinner/GravyData";

const Gravy = () => {
  const gravyVarieties = GravyData.map((data) => (
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
        {gravyVarieties}
      </div>
  );
};

export default Gravy;
