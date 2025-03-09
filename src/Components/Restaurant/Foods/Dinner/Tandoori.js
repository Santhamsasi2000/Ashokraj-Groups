import CommonCard from "../../../Common/Card/CommonCard";
import { TandooriData } from "../../Data/Dinner/TandooriData";

const Tandoori = () => {
  const tandooriVarieties = TandooriData.map((data) => (
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
        {tandooriVarieties}
      </div>
    </>
  );
};

export default Tandoori;
