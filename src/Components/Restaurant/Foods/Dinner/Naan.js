import CommonCard from "../../../Common/Card/CommonCard";
import { NaanData } from "../../Data/Dinner/NaanData";

const Naan = () => {
  const naanVarieties = NaanData.map((data) => (
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
        {naanVarieties}
      </div>
    </>
  );
};

export default Naan;
