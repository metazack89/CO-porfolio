import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, image, link }) => {
  return (
    <div className="inline-block w-[300px] md:w-[400px] shrink-0">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative max-w-[300px] md:max-w-[400px] h-[220px] rounded-xl overflow-hidden border border-white group cursor-pointer"
      >
        {/* Imagen de fondo */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-500"
        />

        {/* Capa de texto encima */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
          <h2 className="text-orange font-bold text-xl">{name}</h2>
          <p className="text-sm font-light">{year}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan hover:text-orange flex items-center gap-2 text-sm mt-1 transition-colors duration-300"
          >
            View <BsFillArrowUpRightCircleFill />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SingleProject;
