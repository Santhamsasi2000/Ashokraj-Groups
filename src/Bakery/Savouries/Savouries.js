import AnotherCard from "../../Common/Card/CommonCard";
import { SavouriesData } from "./SavoriesData";

const Savouries = () => {
  const savouries = SavouriesData.map((data) => (
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
        {savouries}
      </div>
    </>
  );
};

export default Savouries;
