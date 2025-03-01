import AnotherCard from "../../Common/Card/CommonCard";
import { CakeData } from "./CakeData";

const Cake = () => {
  const cakes = CakeData.map((data) => (
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
      <div className="bg-white d-flex flex-wrap justify-content-center gap-5 p-3 p-sm-5">
        {cakes}
      </div>
      {/* <ul style={{marginLeft:"300px"}}>
              <li>Cakes are available for birthdays.</li>
              <li>For Plum Cake on Normal Days, you need to order one day in advance.</li>
            </ul> */}
    </>
  );
};

export default Cake;
