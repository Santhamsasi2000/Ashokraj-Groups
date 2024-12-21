import React from "react";
import AnotherCard from "../../../Common/Card/CommonCard";
import { ChaatsData } from "./ChaatsData";

const Chaats = () => {
  const chaats = ChaatsData.map((data) => (
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
        {chaats}
      </div>
    </>
  );
};

export default Chaats;
