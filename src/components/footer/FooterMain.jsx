import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const FooterMain = () => {
  const { t } = useTranslation();

  const footerLinks = [
    {
      name: t("footer.links.about"),
      section: "about",
    },
    {
      name: t("footer.links.skills"),
      section: "skills",
    },
    {
      name: t("footer.links.experience"),
      section: "experience",
    },
    {
      name: t("footer.links.projects"),
      section: "projects",
    },
  ];

  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-lightGrey ">{t("footer.name")}</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                to={item.section}
                className="hover:text-white transition-all duration-500 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        {t("footer.rights")}
      </p>
    </div>
  );
};

export default FooterMain;
