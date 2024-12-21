import AnotherCard from "../../Common/Card/CommonCard";
import { OtherData } from "./OtherData";

const Cookie = () => {
  const others = OtherData.map((data) => (
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
        {others}
      </div>
    </>
  );
};

export default Cookie;
