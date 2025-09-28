import ProjectsText from './ProjectsText';
import SingleProject from './SingleProject';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState, useRef, useCallback } from 'react';
import { fadeIn } from '../../framerMotion/variants';

const projects = [
  {
    name: 'AIdly',
    year: 'September2025',
    align: 'left',
    image: '/aidly.jpg',
    link: 'https://rescate-digital.emergent.host/',
    githubLink: 'https://github.com/metazack89/AIdly',
  },
  {
    name: 'Gemini.AI',
    year: 'October2024',
    align: 'left',
    image: '/Gemini-AI.jpg',
    link: 'https://gemin-ia.netlify.app/',
    githubLink: 'https://github.com/metazack89/Gemin.IA',
  },
  {
    name: 'Derali.AI',
    year: 'January2025',
    align: 'left',
    image: '/Derali.AI.jpg',
    link: 'https://derali.netlify.app/',
    githubLink: 'https://github.com/metazack89/derali.ai',
  },
  {
    name: 'Fortune Cookie',
    year: 'March2025',
    align: 'right',
    image: '/website-img-1.jpg',
    link: 'https://gallet.netlify.app/',
    githubLink: 'https://github.com/metazack89/Galleta-jendercris',
  },
  {
    name: 'Develop School',
    year: 'March2025',
    align: 'left',
    image: '/website-img-2.webp',
    link: 'https://developschools.netlify.app/',
    githubLink: 'https://github.com/metazack89/CRUD2.0',
  },
  {
    name: 'Mega Poke App',
    year: 'April2025',
    align: 'right',
    image: '/website-img-3.jpg',
    link: 'https://megaa.netlify.app/',
    githubLink: 'https://github.com/metazack89/POKEAPP',
  },
  {
    name: 'PWA Rick and Morty',
    year: 'March2025',
    align: 'left',
    image: '/website-img-4.jpg',
    link: 'https://rymap.netlify.app/',
    githubLink: 'https://github.com/metazack89/RickandMorty',
  },

  {
    name: 'Chrisecom',
    year: 'April2025',
    align: 'left',
    image: '/chriscom.jpg',
    link: 'https://acommer.netlify.app/',
    githubLink: 'https://github.com/metazack89/ecomm',
  },
];

const ProjectsMain = () => {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);
  const currentProgress = useRef(0);
  const animationStartTime = useRef(Date.now());

  const startScroll = useCallback(
    (fromProgress = 0) => {
      const remainingDistance = 50 - fromProgress * 50;
      const remainingDuration = 15 * (remainingDistance / 50);

      animationStartTime.current = Date.now();

      controls.start({
        x: [`-${fromProgress * 50}%`, '-50%'],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: remainingDuration,
            ease: 'linear',
          },
        },
      });
    },
    [controls]
  );

  const pauseScroll = useCallback(() => {
    const elapsed = (Date.now() - animationStartTime.current) / 1000;
    const cycleProgress = (elapsed % 15) / 15;
    currentProgress.current = cycleProgress;
    controls.stop();
  }, [controls]);

  const resumeScroll = useCallback(() => {
    startScroll(currentProgress.current);
  }, [startScroll]);

  useEffect(() => {
    startScroll();
  }, [startScroll]);

  useEffect(() => {
    if (isPaused) {
      pauseScroll();
    } else {
      resumeScroll();
    }
  }, [isPaused, pauseScroll, resumeScroll]);

  const duplicatedProjects = [...projects, ...projects];

  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-6">
      <motion.div
        variants={fadeIn('top', 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="overflow-visible"
      ></motion.div>

      <ProjectsText />

      <div className="overflow-x-hidden overflow-y-visible mt-8 py-6">
        <motion.div
          animate={controls}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-28 min-w-max px-8"
        >
          {duplicatedProjects.map((project, index) => (
            <div key={index} className="shrink-0 w-[320px] transition-transform hover:scale-[1.02]">
              <SingleProject
                name={project.name}
                year={project.year}
                align={project.align}
                image={project.image}
                link={project.link}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default ProjectsMain;
