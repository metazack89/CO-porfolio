import { useTranslation } from "react-i18next";
import { useState } from "react";
import enIcon from "../../assets/uk.png";
import esIcon from "../../assets/spain.png";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");

  const toggleLanguage = () => {
    const newLang = language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  return (
    <button onClick={toggleLanguage} className="fixed top-4 right-4 z-50">
      <img
        src={language === "en" ? esIcon : enIcon}
        alt="language icon"
        className="w-8 h-8 rounded-full shadow-lg hover:scale-105 transition"
      />
    </button>
  );
};

export default LanguageSwitcher;
