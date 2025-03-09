import CommonCard from "../../Common/Card/CommonCard";
import BackToMenu from "../../Common/BackToMenu";
import { DataFruits } from "./DataFruits";

const Fruit = () => {
  const fruits = DataFruits.map((data) => (
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
      <h1 className="bakery-items-title mb-4">FRUITS AND Juices</h1>
      <div className="row gx-5 gy-5">{fruits}</div>
    </section>
  );
};

export default Fruit;
