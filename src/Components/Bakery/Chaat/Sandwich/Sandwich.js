import CommonCard from "../../../Common/Card/CommonCard";
import { DataSandwich } from "./DataSandwich";

const Sandwich = () => {
  const sandwich = DataSandwich.map((data) => (
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
        {sandwich}
      </div>
    </>
  );
};

export default Sandwich;
