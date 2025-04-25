import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Fortune Cookie",
    year: "March2024",
    align: "right",
    image: "/website-img-1.jpg",
    link: "https://github.com/metazack89/Galleta-jendercris",
  },
  {
    name: "Develop School",
    year: "March2024",
    align: "left",
    image: "/website-img-2.webp",
    link: "https://github.com/metazack89/CRUD2.0",
  },
  {
    name: "Mega Poke App",
    year: "April2024",
    align: "right",
    image: "/website-img-3.jpg",
    link: "https://github.com/metazack89/POKEAPP",
  },
  {
    name: "PWA Rick and Morty",
    year: "March2024",
    align: "left",
    image: "/website-img-4.jpg",
    link: "https://github.com/metazack89/RickandMorty",
  },
];

const ProjectsMain = () => {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  const startScroll = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    });
  };

  useEffect(() => {
    startScroll();
  }, []);

  useEffect(() => {
    if (isPaused) {
      controls.stop();
    } else {
      startScroll();
    }
  }, [isPaused]);

  const duplicatedProjects = [...projects, ...projects];

  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-6">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="overflow-visible"
      ></motion.div>

      <ProjectsText />

      <div className="overflow-hidden mt-12">
        <motion.div
          animate={controls}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-10 min-w-max px-4"
        >
          {duplicatedProjects.map((project, index) => (
            <div
              key={index}
              className="shrink-0 max-w-[320px] transition-transform hover:scale-[1.02]"
            >
              <SingleProject
                name={project.name}
                year={project.year}
                align={project.align}
                image={project.image}
                link={project.link}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsMain;
