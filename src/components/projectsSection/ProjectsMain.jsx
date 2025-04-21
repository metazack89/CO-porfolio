import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Fortune Cookie",
    year: "March2024",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "https://galleta-jenderlucris.netlify.app",
  },
  {
    name: "Develop School",
    year: "March2024",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "https://developschool.netlify.app",
  },

  {
    name: "Mega Poke App",
    year: "April2024",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "https://megapokeapp.netlify.app",
  },
  {
    name: "PWA Rick and Morty",
    year: "March2024",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "https://appriymo.netlify.app",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
