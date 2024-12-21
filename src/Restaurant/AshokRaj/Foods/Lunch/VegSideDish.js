import React, { useEffect, useState } from "react";
import { VegSideDishData } from "../../Data/Lunch/VegSideDishData";
import AnotherCard from "../../../../Common/Card/CommonCard";
import CommonCard from "../../../../Common/Card/CommonCard";

const VegSideDish = () => {
  const sideDishes = VegSideDishData.map((data) => (
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
        {sideDishes}
      </div>
    </>
  );
};

export default VegSideDish;
