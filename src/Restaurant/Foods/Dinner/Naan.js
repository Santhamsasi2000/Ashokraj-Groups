import CommonCard from "../../../Common/Card/CommonCard";
import { NaanData } from "../Data/Dinner/NaanData";

const Naan = () => {
  const naanVarieties = NaanData.map((data) => (
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
        {naanVarieties}
      </div>
    </>
  );
};

export default Naan;
