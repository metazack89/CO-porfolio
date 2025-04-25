import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";
import { useTranslation } from "react-i18next"; // Asegúrate de tener esto importado

const NavbarBtn = () => {
  const { t } = useTranslation(); // Hook de traducción

  return (
    <button className="px-1 py-2 rounded-full text-xl font-bold font-body text-white border-darkCyan border flex items-center gap-1 bg-gradient-to-r from-cyan/60 to-darkOrange/60 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:border-lightOrange cursor-pointer hover:shadow-cyanShadow">
      <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
        {t("contactMe")} {/* Aquí usamos la traducción */}
      </Link>
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
