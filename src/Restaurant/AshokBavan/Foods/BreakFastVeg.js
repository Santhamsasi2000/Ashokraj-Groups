import React, { useEffect, useState } from "react";
import { BreakDinDataVeg } from "../Data/BreakDinDataVeg";
import BfCard from "../../../Common/Card/BfCard";
import "../../../Common/Card/CommonCard.css";

const BreakFastVeg = () => {
  const morningFoods = BreakDinDataVeg.map((data) => (
    <BfCard
      key={data.id}
      image={data.image}
      name={data.name}
      desc={data.desc}
      timings={data.timings}
      number={data.number}
    />
  ));

  return (
    <>
      <div className="d-flex flex-wrap justify-content-center gap-5">
        {morningFoods}
      </div>
    </>
  );
};

export default BreakFastVeg;
