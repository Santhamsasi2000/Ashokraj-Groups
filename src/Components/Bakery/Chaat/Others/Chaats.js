import React from "react";
import CommonCard from "../../../Common/Card/CommonCard";
import { DataChaats } from "./DataChaats";

const Chaats = () => {
  const chaats = DataChaats.map((data) => (
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
        {chaats}
      </div>
    </>
  );
};

export default Chaats;
