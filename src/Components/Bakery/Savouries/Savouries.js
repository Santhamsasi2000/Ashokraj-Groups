import CommonCard from "../../Common/Card/CommonCard";
import BackToMenu from "../../Common/BackToMenu";
import { DataSavouries } from "./DataSavouries";

const Savouries = () => {
  const savouries = DataSavouries.map((data) => (
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
      <h1 className="bakery-items-title mb-4">Savouries (Kara Varities)</h1>
      <div className="row gx-5 gy-5">{savouries}</div>
    </section>
  );
};

export default Savouries;
