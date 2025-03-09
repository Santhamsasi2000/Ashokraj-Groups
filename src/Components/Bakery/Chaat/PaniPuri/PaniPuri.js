import CommonCard from "../../../Common/Card/CommonCard";
import { DataPani } from "./DataPani";

const PaniPuri = () => {
  const panipuri = DataPani.map((data) => (
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
        {panipuri}
      </div>
    </>
  );
};

export default PaniPuri;
