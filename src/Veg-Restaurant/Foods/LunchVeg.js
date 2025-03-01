import React, { useEffect, useState } from "react";
import { LunchDataVeg } from "../Data/LunchDataVeg";
import CommonCard from "../../Common/Card/CommonCard";
import "../../Common/Card/CommonCard.css";

const LunchVeg = () => {
  const lunchFoods = LunchDataVeg.map((data) => (
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
      <div className="bg-white p-3 p-sm-5 d-flex flex-wrap justify-content-center gap-5">
        {lunchFoods}
      </div>
    </>
  );
};

export default LunchVeg;
