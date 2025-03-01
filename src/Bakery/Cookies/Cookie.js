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
      <div className="bg-white p-3 p-sm-5 d-flex flex-wrap justify-content-center gap-5">
        {cookies}
      </div>
    </>
  );
};

export default Cookie;
