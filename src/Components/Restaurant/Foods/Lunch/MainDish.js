import CommonCard from "../../../Common/Card/CommonCard";
import { MainDishData } from "../../Data/Lunch/MainDishData";

const MainDish = () => {
  const mainDishes = MainDishData.map((data) => (
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
      <div className="row gx-5 gy-5">
        {mainDishes}
      </div>
  );
};

export default MainDish;
