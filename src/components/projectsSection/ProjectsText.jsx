import { useTranslation } from "react-i18next";

const ProjectsText = () => {
  const { t } = useTranslation(); // Hook para traducciones

  return (
    <div className="flex flex-col items-center mt-[100px]">
      <h2 className="text-6xl text-cyan mb-10">
        {t("projectsSection.title")} {/* Título traducido */}
      </h2>
      <p className="text-lg text-center">
        {t("projectsSection.description")} {/* Descripción traducida */}
      </p>
    </div>
  );
};

export default ProjectsText;
