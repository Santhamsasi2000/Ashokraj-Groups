import CommonCard from "../../Common/Card/CommonCard";
import BackToRestaurant from "../BackToRestaurant";
import { TiffinData } from "../Data/TiffinData";

const BreakFastNv = () => {
  const tiffin = TiffinData.map((data) => (
    <CommonCard
      key={data.id}
      image={data.image}
      name={data.name}
      desc={data.desc}
      number={data.number}
      timings={data.timings}
      which={data.which}
    />
  ));
  return (
       <section className="p-3 p-sm-5">
          <BackToRestaurant/>
          <h2 className="restaurant-title mb-4">TIFFIN</h2>
          <div className="row gx-5 gy-5">
          {tiffin}
          </div>
       </section>
  );
};

export default BreakFastNv;
