import React from "react";
import { FiDownload } from "react-icons/fi";

const FloatingButton = () => {
  return (
    <a
      href="/cven.pdf"
      download
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-1/2 right-6 -translate-y-1/2 z-50 flex items-center justify-center w-12 h-12 rounded-full border border-orange/60 bg-gradient-to-r from-orange/60 to-darkOrange/60 backdrop-blur-sm shadow-lg hover:scale-110 hover:border-lightOrange hover:shadow-orangeMediumShadow transition-all duration-500 cursor-pointer"
    >
      <FiDownload className="text-xl text-white hover:text-lightOrange transition-all duration-300" />
      CV
    </a>
  );
};

export default FloatingButton;
