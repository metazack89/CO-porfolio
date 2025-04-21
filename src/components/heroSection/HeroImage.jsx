import { PiHexagonThin } from "react-icons/pi";

const HeroImage = () => {
  return (
    <div className="relative self-end h-full w-full items-center justify-center">
      <div className=" h-full w-full">
        <img
          src="/me.png"
          alt="Cristian Ortiz"
          className="w-auto h-auto md:max-w-[380px] sm:max-w-[380px] absolute bottom-[0px] z-10 left-[80%] -translate-x-[80%] hover:scale-105 transition-all duration-500 ease-in-out rounded-full shadow-lg shadow-cyan/50"
        />
        <div className="w-full h-full absolute  bottom-[-20%] -z-10 flex justify-center items-center rotate-90">
          <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-orange opacity-70  animate-[spin_20s_linear_infinite] " />
        </div>
        <div className="w-full h-full absolute  bottom-[-20%] -z-10 flex justify-center items-center rotate-90">
          <PiHexagonThin className=" md:h-[90%] sm:h-[120%] blur-lg min-h-[600px] w-auto text-orange opacity-70  animate-[spin_20s_linear_infinite] " />
        </div>
        <div className="w-full h-full absolute  bottom-[-20%] -z-10 flex justify-center items-center">
          <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan opacity-70  animate-[spin_20s_linear_infinite] " />
        </div>
        <div className="w-full h-full absolute  bottom-[-20%] -z-10 flex justify-center items-center">
          <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan opacity-70 blur-lg  animate-[spin_20s_linear_infinite] " />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
