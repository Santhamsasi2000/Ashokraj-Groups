import CommonCard from "../../../Common/Card/CommonCard";
import { NoodlesData } from "../../Data/Dinner/NoodlesData";

const Noodles = () => {
  const noodlesVarieties = NoodlesData.map((data) => (
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
        {noodlesVarieties}
      </div>
    </>
  );
};

export default Noodles;
