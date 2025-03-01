import CommonCard from "../../../Common/Card/CommonCard";
import { RiceData } from "../../AshokRaj/Data/Dinner/RiceData";

const Rice = () => {
  const riceVarieties = RiceData.map((data) => (
    <CommonCard
      key={data.id}
      image={data.image}
      name={data.name}
      desc={data.desc}
      number={data.number}
    />
  ));

  return (
    <>
      <div className="d-flex flex-wrap justify-content-center gap-5">
        {riceVarieties}
      </div>
    </>
  );
};

export default Rice;
