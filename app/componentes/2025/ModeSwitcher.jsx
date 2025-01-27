"use client";

import React from "react";
import { useDarkMode } from "@/lib/DarkModeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ModeSwitcher = ({ style }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  // Define colors for dark and light mode for easier customization
  const modeStyles = {
    dark: "bg-slate-900 text-white ",
    light: "bg-slate-900 text-black",
    iconDark: "text-white",
    iconLight: "text-yellow-400",
  };

  return (
    <button
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={` rounded-full flex items-center justify-center cust-trans 
          ${isDarkMode ? modeStyles.dark : modeStyles.light} 
          ${style}`}
    >
      {/* Render the appropriate icon based on the current mode */}
      {isDarkMode ? (
        <FaMoon size={20} className={modeStyles.iconDark} />
      ) : (
        <FaSun size={20} className={modeStyles.iconLight} />
      )}
    </button>
  );
};

export default ModeSwitcher;
