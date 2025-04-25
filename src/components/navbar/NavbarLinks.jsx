import { Link } from "react-scroll";
import { useTranslation } from "react-i18next"; // Asegúrate de tener esto importado

const links = [
  { link: "footer.links.about", section: "about" },
  { link: "footer.links.skills", section: "skills" },
  { link: "footer.links.experience", section: "experience" },
  { link: "footer.links.projects", section: "projects" },
  { link: "footer.links.contact", section: "contact" },
];

const NavbarLinks = () => {
  const { t } = useTranslation(); // Hook de traducción

  return (
    <ul className="flex lg:flex-row sm:flex-col gap-4 text-white font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-3">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            >
              {t(link.link)} {/* Aquí usamos la traducción */}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
