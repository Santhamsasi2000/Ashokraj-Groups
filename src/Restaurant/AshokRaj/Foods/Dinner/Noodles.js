import CommonCard from "../../../../Common/Card/CommonCard";
import { NoodlesData } from "../../Data/Dinner/NoodlesData";

const Noodles = () => {
  const noodlesVarieties = NoodlesData.map((data) => (
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
        {noodlesVarieties}
      </div>
    </>
  );
};

export default Noodles;
