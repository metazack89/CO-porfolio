import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import enIcon from "../../assets/uk.png";
import esIcon from "../../assets/spain.png";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const initialLang =
    i18n.language || localStorage.getItem("i18nextLng") || "es";
  const [language, setLanguage] = useState(initialLang);

  const toggleLanguage = () => {
    const newLang = language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
    setLanguage(newLang);
  };

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={toggleLanguage}
        className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-1 shadow-lg transition duration-300"
      >
        <div className="relative w-10 h-8">
          <div
            className={`absolute top-0 left-0 w-8 h-8 bg-white rounded-full transform transition-transform duration-500 flex items-center justify-center ${
              language === "en" ? "translate-x-2" : "translate-x-0"
            }`}
          >
            <img
              src={language === "en" ? enIcon : esIcon}
              alt="language icon"
              className="w-5 h-5 rounded-full"
            />
          </div>
        </div>
        <div className="ml-3 text-sm font-bold text-gray-700 dark:text-white">
          {language.toUpperCase()}
        </div>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
