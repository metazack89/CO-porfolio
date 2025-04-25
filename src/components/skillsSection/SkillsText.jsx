import { useTranslation } from "react-i18next";

const SkillsText = () => {
  const { t } = useTranslation(); // Hook para traducciones

  return (
    <div className="flex flex-col items-center mt-[100px]">
      <h2 className="text-6xl text-cyan mb-10">
        {t("skillsSection.title")} {/* Título traducido */}
      </h2>
      <p className="text-lg text-center hover:text-cyan transition duration-300 ease-in-out">
        {t("skillsSection.description")} {/* Descripción traducida */}
      </p>
    </div>
  );
};

export default SkillsText;
