import BackToMenu from "../../Common/BackToMenu";
import Maggie from "./Maggie/Maggie";
import Chaats from "./Others/Chaats";
import PaniPuri from "./PaniPuri/PaniPuri";
import PavBhaji from "./PavBhaji/PavBhaji";
import Pizza from "./Pizza/Pizza";
import Sandwich from "./Sandwich/Sandwich";

const Chaat = () => {
  return (
    <section className="bakery-items-bg p-3 p-sm-5">
      <BackToMenu />
      <p className="bakery-items-title mb-4">Pani Puri</p>
      <PaniPuri />
      <hr className="mt-5 bakery-horizontalLine" />
      <p className="bakery-items-title mb-4">Pav Bhaji</p>
      <PavBhaji />
      <hr className="mt-5 bakery-horizontalLine" />
      <p className="bakery-items-title mb-4">Sandwich</p>
      <Sandwich />
      <hr className="mt-5 bakery-horizontalLine" />
      <p className="bakery-items-title mb-4">Maggi</p>
      <Maggie />
      <hr className="mt-5 bakery-horizontalLine" />
      <p className="bakery-items-title mb-4">Pizza</p>
      <Pizza />
      <hr className="mt-5 bakery-horizontalLine" />
      <p className="bakery-items-title mb-4">Others</p>
      <Chaats />
    </section>
  );
};

export default Chaat;
