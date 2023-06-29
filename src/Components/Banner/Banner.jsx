import "./Banner.css";
import cover1 from "../../assets/images/mmmmmmmmmmmmm.png";

const Banner = () => {
  return (
    <div className="bg w-full h-[100vh]">
      <div className="min-h-screen">
        <div className="md:flex md:flex-row-reverse justify-between h-[700px] items-center">
          <div className="w-full  text-center">
            <img src={cover1} className="md:w-full md:h-[90vh] bg-transparent rounded-lg mx-auto" />
          </div>
          <div className="w-full pl-16">
            <h1 className="text-5xl font-bold">Dog House</h1>
            <p className="py-6 text-2xl">
              Find your best companion. Let them attach to your affection. Also
              find them their own house to gather around.
            </p>
            <button className="btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
