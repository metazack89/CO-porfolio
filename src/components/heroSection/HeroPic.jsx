import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';
import { PiHexagonThin } from 'react-icons/pi';
const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn('left', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
      {' '}
      <div className="p-[4px] rounded-full bg-gradient-to-br from-cyan to-darkOrange inline-block transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange/80">
        {' '}
        <img
          src="/HexaPic.png"
          alt="Cristian Ortiz"
          className="max-h-[380px] w-auto border-4 border-transparent rounded-full shadow-lg transition-all duration-300 ease-in-out hover:border-lightOrange"
        />{' '}
      </div>{' '}
      <div className=" absolute z-10 flex justify-center items-center animate-pulse bottom-[-20%] rotate-90">
        {' '}
        <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-lightOrange blur-md animate-[spin_15s_linear_infinite] " />{' '}
      </div>{' '}
    </motion.div>
  );
};
export default HeroPic;
