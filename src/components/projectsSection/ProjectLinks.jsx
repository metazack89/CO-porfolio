import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const ProjectLinks = ({ viewLink, githubLink }) => {
  return (
    <div className="flex gap-4 mt-1">
      <a
        href={viewLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan hover:text-orange flex items-center gap-2 text-sm transition-colors duration-300"
      >
        View <BsFillArrowUpRightCircleFill />
      </a>

      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan hover:text-orange flex items-center gap-2 text-sm transition-colors duration-300"
      >
        GitHub <BsFillArrowUpRightCircleFill />
      </a>
    </div>
  );
};

ProjectLinks.propTypes = {
  viewLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default ProjectLinks;
