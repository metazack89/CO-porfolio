import React from "react";
import { FiDownload } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const FloatingButton = () => {
  const { t, i18n } = useTranslation();

  const cvLink = i18n.language === "es" ? "/cv-Sp.pdf" : "/cv-En.pdf";

  return (
    <a
      href={cvLink}
      download
      target="_blank"
      rel="noopener noreferrer"
      title={t("download_cv")} // Tooltip aquí 👇
      className="fixed top-1/2 right-6 -translate-y-1/2 z-50 flex items-center justify-center w-12 h-12 rounded-full border border-orange/60 bg-gradient-to-r from-orange/60 to-darkbrown/60 backdrop-blur-sm shadow-lg hover:scale-60 hover:border-light hover:shadow-orangeMediumShadow transition-all duration-300 cursor-pointer"
    >
      <FiDownload className="text-xl text-white hover:text-lightOrange transition-all duration-300" />
      <span className="ml-1">{t("download_cv")}</span>
    </a>
  );
};

export default FloatingButton;
