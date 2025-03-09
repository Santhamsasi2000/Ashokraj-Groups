import CommonCard from "../../Common/Card/CommonCard";
import BackToMenu from "../../Common/BackToMenu";
import { DataCookie } from "./DataCookie";

const Cookie = () => {
  const cookies = DataCookie.map((data) => (
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
      <h1 className="bakery-items-title mb-4">COOKIES</h1>
      <div className="row gx-5 gy-5">{cookies}</div>
    </section>
  );
};

export default Cookie;
