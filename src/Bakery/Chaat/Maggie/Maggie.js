import React from "react";
import AnotherCard from "../../../Common/Card/CommonCard";
import { MaggieData } from "./MaggieData";

const Maggie = () => {
  const maggie = MaggieData.map((data) => (
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
      <div className="d-flex flex-wrap justify-content-center gap-5 py-5">
        {maggie}
      </div>
    </>
  );
};

export default Maggie;
