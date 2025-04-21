import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-lg text-center hover:text-cyan transition duration-300 ease-in-out">
        I'm Cristian, a web developer passionate about building modern, dynamic,
        and user-focused applications. I have a solid background in computer
        science and hands-on experience in frontend development. I specialize in
        React, Next.js, HTML, CSS, JavaScript, Tailwind CSS, and TypeScript. I
        enjoy bringing ideas to life through clean, efficient, and responsive
        interfaces. I'm always looking to learn more and apply best practices
        that make development smoother for both users and fellow developers.
      </p>
      <button
        className="border-2 border-l-lightCyan 
        border-r-lightCyan border-t-lightCyan border-b-lightCyan
        text-lightCyan bg-transparent px-6 py-2 mt-10
        rounded-full hover:bg-darkGrey hover:text-white transition-all duration-500"
      >
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
