import CommonCard from "../../Common/Card/CommonCard";
import BackToMenu from "../../Common/BackToMenu";
import { DataOther } from "./DataOther";

const Other = () => {
  const others = DataOther.map((data) => (
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
    <section className="bakery-items-bg p-3 p-sm-5">
      <BackToMenu />
      <h1 className="bakery-items-title mb-4">OTHER ITEMS</h1>
      <div className="row gx-5 gy-5">{others}</div>
    </section>
  );
};

export default Other;
