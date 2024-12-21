import CommonCard from "../../../../Common/Card/CommonCard";
import AnotherCard from "../../../../Common/Card/CommonCard";
import { TandooriData } from "../../Data/Dinner/TandooriData";

const Tandoori = () => {
  const tandooriVarieties = TandooriData.map((data) => (
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
        {tandooriVarieties}
      </div>
    </>
  );
};

export default Tandoori;
