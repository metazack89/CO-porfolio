import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import ProjectsText from './ProjectsText';
import SingleProject from './SingleProject';
import { fadeIn } from '../../framerMotion/variants';

const projects = [
  {
    name: 'Portfolio V2',
    year: 'September2025',
    align: 'left',
    image: '/projects/Portfolio.jpg',
    link: 'https://potfoliocristian.netlify.app/',
    githubLink: 'https://github.com/metazack89/New-Portafolio',
  },
  {
    name: 'Lumicore',
    year: 'October2025',
    align: 'left',
    image: '/projects/Lumicore.jpg',
    link: 'https://lumicore-tau.vercel.app/',
    githubLink: 'https://github.com/metazack89/Lumicore',
  },
  {
    name: 'Rent a Car',
    year: 'November2025',
    align: 'left',
    image: '/projects/Rent_a_Car.jpg',
    link: 'https://rent-car-orpin.vercel.app/',
    githubLink: 'https://github.com/metazack89/Rent_a_Car',
  },
  {
    name: 'Gemini.AI',
    year: 'October2024',
    align: 'left',
    image: '/projects/Gemini-AI.jpg',
    link: 'https://gemin-ia.netlify.app/',
    githubLink: 'https://github.com/metazack89/Gemin.IA',
  },
  {
    name: 'Derali.AI',
    year: 'January2025',
    align: 'left',
    image: '/projects/Derali.AI.jpg',
    link: 'https://derali.netlify.app/',
    githubLink: 'https://github.com/metazack89/derali.ai',
  },
  {
    name: 'Fortune Cookie',
    year: 'March2025',
    align: 'right',
    image: '/projects/fortune.jpg',
    link: 'https://gallet.netlify.app/',
    githubLink: 'https://github.com/metazack89/Galleta-jendercris',
  },
  {
    name: 'Develop School',
    year: 'March2025',
    align: 'left',
    image: '/projects/develop.webp',
    link: 'https://developschools.netlify.app/',
    githubLink: 'https://github.com/metazack89/CRUD2.0',
  },
  {
    name: 'Netflix Clone',
    year: 'April2025',
    align: 'left',
    image: '/projects/Netflixclone.jpg',
    link: 'https://cinetv-d4fd2.web.app/',
    githubLink: 'https://github.com/metazack89/cineapp',
  },
  {
    name: 'Mega Poke App',
    year: 'April2025',
    align: 'right',
    image: '/projects/pokeapp.jpg',
    link: 'https://megaa.netlify.app/',
    githubLink: 'https://github.com/metazack89/POKEAPP',
  },
  {
    name: 'PWA Rick and Morty',
    year: 'March2025',
    align: 'left',
    image: '/projects/rickandmorty.jpg',
    link: 'https://rymap.netlify.app/',
    githubLink: 'https://github.com/metazack89/RickandMorty',
  },
  {
    name: 'Chrisecom',
    year: 'April2025',
    align: 'left',
    image: '/projects/chriscom.jpg',
    link: 'https://acommer.netlify.app/',
    githubLink: 'https://github.com/metazack89/ecomm',
  },
];

const ProjectsMain = () => {
  const controls = useAnimation();
  const [paused, setPaused] = useState(false);

  const duration = 25;

  const duplicatedProjects = [...projects, ...projects];

  useEffect(() => {
    if (paused) {
      controls.stop();
    } else {
      controls.start({
        x: ['0%', '-50%'],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            duration,
          },
        },
      });
    }
  }, [paused, controls]);

  return (
    <div id="projects" className="w-full px-0">
      {/* animación de entrada */}
      <motion.div
        variants={fadeIn('top', 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      />

      <ProjectsText />

      {/* CONTENEDOR DEL CARRUSEL */}
      <div className="overflow-x-hidden mt-10 py-10 relative">
        {/* GRADIENTES LATERALES TIPO MARQUEE */}
        <div className="absolute inset-y-0 left-0 w-24 pointer-events-none bg-gradient-to-r from-[#0B0B0F] to-transparent z-20"></div>
        <div className="absolute inset-y-0 right-0 w-24 pointer-events-none bg-gradient-to-l from-[#0B0B0F] to-transparent z-20"></div>

        {/* CARRUSEL ANIMADO */}
        <motion.div
          animate={controls}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          className="flex gap-28 min-w-max px-8 marquee-smooth"
        >
          {duplicatedProjects.map((project, index) => (
            <div key={index} className="shrink-0 w-[320px] transition-transform hover:scale-[1.03]">
              <SingleProject {...project} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsMain;
