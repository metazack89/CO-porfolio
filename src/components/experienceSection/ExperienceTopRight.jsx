import { useTranslation } from "react-i18next";

const ExperienceTopRight = () => {
  const { t } = useTranslation();

  const formatText = (text) =>
    text.replace(
      /<bold>(.*?)<\/bold>/g,
      '<span class="font-bold text-white">$1</span>'
    );

  return (
    <div className="xl:w-[25%] lg:w-[30%] p-4 rounded-xl">
      <p
        className="text-lg text-center text-lightGrey"
        dangerouslySetInnerHTML={{
          __html: formatText(t("experienceTopRight.description")),
        }}
      />
    </div>
  );
};

export default ExperienceTopRight;
