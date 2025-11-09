"use client";
import { useDarkMode } from "@/lib/DarkModeContext";
import { Home, FolderKanban, Code, FileText, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

const MobileNavBar = () => {
  const t = useTranslations("MobileNav");
  const navItems = [
    { icon: <Home size={20} />, url: "/", label: t("home"), main: true },
    {
      icon: <FolderKanban size={20} />,
      url: "/projects",
      label: t("projects"),
      main: false,
    },
    {
      icon: <Code size={20} />,
      url: "/skills",
      label: t("skills"),
      main: false,
    },
    {
      icon: <FileText size={20} />,
      url: "/posts",
      label: t("posts"),
      main: false,
    },
    {
      icon: <Mail size={20} />,
      url: "/contact",
      label: t("contact"),
      main: false,
    },
  ];

  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPathSegment = pathName.split("/")[2];
  const active = "text-primary ";
  const router = useRouter();
  const locale = useLocale();
  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    const newPathname = pathName.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPathname);
    setIsMenuOpen(false);
  };
  // Framer Motion Variants for the menu
  const menuVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
    exit: { y: "100%", opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <nav
      className={`fixed -bottom-1 left-0 right-0 hidden max-md:block ${
        isDarkMode ? "dark" : "light"
      }`}
    >
      <div
        className={`${
          isDarkMode ? "shadow-slate-700" : "shadow-gray-300"
        } shadow flex justify-around items-center h-16`}
      >
        {navItems.map((item) => (
          <Link
            key={item.url}
            href={item.url}
            className={`flex flex-col items-center justify-center hover:text-primary cust-trans
              ${
                currentPathSegment === item.url.split("/")[1]
                  ? active
                  : currentPathSegment == undefined && item.main == true
                  ? active
                  : ""
              }
              `}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}

        {/* Toggle Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`flex flex-col cust-trans items-center justify-center ${
            isMenuOpen ? active : ""
          }`}
        >
          {isMenuOpen ? (
            <IoClose size={20} className="cust-trans animate-fade-up" />
          ) : (
            <CiMenuKebab size={20} className="cust-trans animate-fade-up" />
          )}
          <span className="text-xs mt-1">{t("options")}</span>
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className={` absolute end-4 bottom-16  shadow-[0px_-4px_10px_rgba(0,0,0,0.1)] rounded-sm w-fit ${
            isDarkMode ? "dark" : "light"
          } p-4 shadow-lg `}
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex w-full gap-4 items-center justify-center">
            <span
              onClick={() => {
                toggleDarkMode(), setIsMenuOpen(false);
              }}
              className={` cursor-pointer hover:text-primary cust-trans text-xs`}
            >
              {t("theme")}
            </span>
            <span
              onClick={toggleLanguage}
              className={` cursor-pointer hover:text-primary cust-trans text-xs`}
            >
              {t("lang")}
            </span>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default MobileNavBar;
