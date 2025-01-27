"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useDarkMode } from "@/lib/DarkModeContext";
const LanguageSwitcher = ({style}) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale || "en";
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  // Define colors for dark and light mode for easier customization
  const modeStyles = {
    dark: "bg-slate-900 text-yellow-400 ",
    light: "bg-slate-900 text-yellow-400",
    iconDark: "text-white",
    iconLight: "text-yellow-400",
  };
  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    const newPathname = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPathname);
  };

  return (

      <div onClick={toggleLanguage} className={`
       ${isDarkMode ? modeStyles.dark : modeStyles.light} 
        cust-trans group cursor-pointer  rounded-full flex items-center justify-center  ${style}`}>
       <span className={` ${isDarkMode ? modeStyles.dark : modeStyles.light}  `}>
       {locale == "en" ? "ع" : "En"}
       </span>
      </div>

  );
};

export default LanguageSwitcher;
