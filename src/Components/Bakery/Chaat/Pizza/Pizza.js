import React from "react";
import CommonCard from "../../../Common/Card/CommonCard";
import { DataPizza } from "./DataPizza";

const Pizza = () => {
  const pizza = DataPizza.map((data) => (
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
        {pizza}
      </div>
    </>
  );
};

export default Pizza;
