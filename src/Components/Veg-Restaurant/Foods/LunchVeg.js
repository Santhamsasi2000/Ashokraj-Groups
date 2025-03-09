import React, { useEffect, useState } from "react";
import { LunchDataVeg } from "../Data/LunchDataVeg";
import CommonCard from "../../Common/Card/CommonCard";

const LunchVeg = () => {
  const lunchFoods = LunchDataVeg.map((data) => (
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
    <div className="row gx-5 gy-5">
        {lunchFoods}
    </div>
  );
};

export default LunchVeg;
