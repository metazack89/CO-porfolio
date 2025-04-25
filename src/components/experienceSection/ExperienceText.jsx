import { useTranslation } from "react-i18next";

const ExperienceText = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center mt-[100px] ">
      <h2 className="text-6xl text-cyan mb-10">{t("experience.title")}</h2>
    </div>
  );
};

export default ExperienceText;
