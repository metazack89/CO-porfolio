import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

const AboutMeText = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">{t("about.title")}</h2>
      <p className="text-lg text-center hover:text-cyan transition duration-300 ease-in-out">
        {t("about.description")}
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
          {t("about.button")}
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
