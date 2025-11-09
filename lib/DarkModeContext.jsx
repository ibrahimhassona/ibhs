"use client";

import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", newMode);
    }
  };

  // Use useEffect to access localStorage on the client
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode !== null) {
        setIsDarkMode(savedMode === "true");
      }
    }
  }, []);

  // Apply dark mode to the body element
  useEffect(() => {
    if (typeof window !== "undefined") {
      const body = document.body;
      if (isDarkMode) {
        body.classList.add("dark");
        body.classList.remove("light");
      } else {
        body.classList.add("light");
        body.classList.remove("dark");
      }
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
