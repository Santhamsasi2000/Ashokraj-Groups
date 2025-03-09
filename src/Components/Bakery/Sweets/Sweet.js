import CommonCard from "../../Common/Card/CommonCard";
import BackToMenu from "../../Common/BackToMenu";
import { DataSweet } from "./DataSweet";

const Sweet = () => {
  return (
    <section className="bakery-items-bg p-3 p-sm-5">
      <BackToMenu />
      <h1 className="bakery-items-title mb-4">SWEETS</h1>
      <div className="row gx-5 gy-5">
        {DataSweet.map(({ id, image, name, desc, number, which }) => (
          <CommonCard
            key={id}
            image={image}
            name={name}
            desc={desc}
            number={number}
            which={which}
          />
        ))}
      </div>
    </section>
  );
};

export default Sweet;
