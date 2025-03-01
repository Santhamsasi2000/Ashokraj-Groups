import CommonCard from "../../../Common/Card/CommonCard";
import { ParottaData } from "../../AshokRaj/Data/Dinner/ParottaData";

const Parotta = () => {
  const parotta = ParottaData.map((data) => (
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
        {parotta}
      </div>
    </>
  );
};

export default Parotta;
