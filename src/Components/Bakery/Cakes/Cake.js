import CommonCard from "../../Common/Card/CommonCard";
import BackToMenu from "../../Common/BackToMenu";
import { DataCake } from "./DataCake";

const Cake = () => {
  const cakes = DataCake.map((data) => (
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
      <h1 className="bakery-items-title">CAKES</h1>
      <p className="text-center">Cakes are available for birthdays.</p>
      <p className="text-center mb-4">
        For Plum Cake on Normal Days, you need to order 2 days in advance.
      </p>
      <div className="row gx-5 gy-5">{cakes}</div>
    </section>
  );
};

export default Cake;
