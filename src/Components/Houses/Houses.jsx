import "./Houses.css";
import house1 from "../../assets/images/houses/house1.jpg";

import house3 from "../../assets/images/houses/house3.jpg";

import house6 from "../../assets/images/houses/house6.jpg";

const Houses = () => {
  return (
    <div>
    <h2 className="text-center my-24 text-3xl font-bold capitalize border-b-4 border-red-500 w-64 mx-auto">Breeds we Got</h2>
      <div className="pt-5 grid grid-cols-3 gap-4 my-12">
        <div>
          <img src={house1} alt="" />
        </div>
        <div>
          <img src={house6} alt="" />
        </div>
        <div>
          <img src={house3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Houses;
