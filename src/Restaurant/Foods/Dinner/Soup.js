import CommonCard from "../../../Common/Card/CommonCard";
import { SoupData } from "../../AshokRaj/Data/Dinner/SoupData";

const Soup = () => {
  const soup = SoupData.map((data) => (
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
        {soup}
      </div>
    </>
  );
};

export default Soup;
