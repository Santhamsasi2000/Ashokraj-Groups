import CommonCard from "../../../Common/Card/CommonCard";
import { RiceData } from "../../Data/Dinner/RiceData";

const Rice = () => {
  const riceVarieties = RiceData.map((data) => (
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
    <>
      <div className="row gx-5 gy-5">
        {riceVarieties}
      </div>
    </>
  );
};

export default Rice;
