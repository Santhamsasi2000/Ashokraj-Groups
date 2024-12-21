import React from "react";
import AnotherCard from "../../../Common/Card/CommonCard";
import { PavBhajiData } from "./PavBhajiData";

const PavBhaji = () => {
  const pavBhaji = PavBhajiData.map((data) => (
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
        {pavBhaji}
      </div>
    </>
  );
};

export default PavBhaji;
