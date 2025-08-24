import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import ProjectLinks from './ProjectLinks';

const SingleProject = ({ name, year, image, link, githubLink }) => {
  return (
    <div className="inline-block w-[300px] md:w-[400px] shrink-0">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="relative max-w-[300px] md:max-w-[400px] h-[220px] rounded-xl overflow-hidden border border-white group cursor-pointer"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-500"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
          <h2 className="text-orange font-bold text-xl">{name}</h2>
          <p className="text-sm font-light">{year}</p>
          <ProjectLinks viewLink={link} githubLink={githubLink} />
        </div>
      </motion.div>
    </div>
  );
};
SingleProject.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string,
  githubLink: PropTypes.string,
};

export default SingleProject;
