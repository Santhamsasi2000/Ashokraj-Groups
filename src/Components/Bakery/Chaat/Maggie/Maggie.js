import React from "react";
import  CommonCard from "../../../Common/Card/CommonCard";
import { DataMaggie } from "./DataMaggie";

const Maggie = () => {
  const maggie = DataMaggie.map((data) => (
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
        {maggie}
      </div>
    </>
  );
};

export default Maggie;
