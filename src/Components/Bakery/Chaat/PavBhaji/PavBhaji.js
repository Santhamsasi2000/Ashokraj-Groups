import React from "react";
import CommonCard from "../../../Common/Card/CommonCard";
import { DataPavBhaji } from "./DataPavBhaji";

const PavBhaji = () => {
  const pavBhaji = DataPavBhaji.map((data) => (
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
        {pavBhaji}
      </div>
    </>
  );
};

export default PavBhaji;
