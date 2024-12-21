import AnotherCard from "../../Common/Card/CommonCard";
import { CookieData } from "./CookieData";

const Cookie = () => {
  const cookies = CookieData.map((data) => (
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
        {cookies}
      </div>
    </>
  );
};

export default Cookie;
