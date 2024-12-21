import React from "react";
import AnotherCard from "../../../Common/Card/CommonCard";
import { PizzaData } from "./PizzaData";

const Pizza = () => {
  const pizza = PizzaData.map((data) => (
    <AnotherCard
      key={data.id}
      image={data.image}
      name={data.name}
      desc={data.desc}
      number={data.number}
    />
  ));

  return (
    <>
      <div className="d-flex flex-wrap justify-content-center gap-5 my-5">
        {pizza}
      </div>
    </>
  );
};

export default Pizza;
