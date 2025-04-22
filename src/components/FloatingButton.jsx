import React from "react";
import { FiDownload } from "react-icons/fi";

const FloatingButton = () => {
  return (
    <a
      href="/cven.pdf"
      download
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-1/2 translate-x-1/2 md:right-6 md:translate-x-0 z-50 flex items-center gap-2 px-1 py-2 rounded-full font-bold text-sm border border-orange/60 bg-gradient-to-r from-orange/60 to-darkOrange/60 backdrop-blur-sm shadow-lg hover:scale-110 hover:border-lightOrange hover:shadow-orangeMediumShadow transition-all duration-500 cursor-pointer"
    >
      <FiDownload className="text-lg text-white hover:text-lightOrange transition-all duration-300" />
      <span className="hidden sm:inline text-white hover:text-lightOrange transition-all duration-300">
        Download
      </span>
    </a>
  );
};

export default FloatingButton;
