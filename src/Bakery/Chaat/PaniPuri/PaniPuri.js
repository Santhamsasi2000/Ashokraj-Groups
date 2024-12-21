import React from "react";
import { PaniPuriData } from "./PaniPuriData";
import AnotherCard from "../../../Common/Card/CommonCard";

const PaniPuri = () => {
  const panipuri = PaniPuriData.map((data) => (
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
        {panipuri}
      </div>
    </>
  );
};

export default PaniPuri;
