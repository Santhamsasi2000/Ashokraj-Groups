import CommonCard from "../../../Common/Card/CommonCard";
import AnotherCard from "../../../Common/Card/CommonCard";
import { MainDishData } from "../../AshokRaj/Data/Lunch/MainDishData";

const MainDish = () => {
  const mainDishes = MainDishData.map((data) => (
    <CommonCard
      key={data.id}
      image={data.image}
      name={data.name}
      desc={data.desc}
      number={data.number}
    />
  ));

  return (
    <>
      <div className="d-flex flex-wrap justify-content-center gap-5">
        {mainDishes}
      </div>
    </>
  );
};

export default MainDish;
