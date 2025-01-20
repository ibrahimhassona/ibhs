"use client";
import { useDarkMode } from "@/lib/DarkModeContext";
import { Home, FolderKanban, Code, FileText, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import ModeSwitcher from "./2025/ModeSwitcher";
import LanguageSwitcher from "./2025/LanguageSwitcher";
import { IoClose } from "react-icons/io5";

const MobileNavBar = () => {
  const navItems = [
    { icon: <Home size={20} />, url: "/", label: "Home", main: true },
    {
      icon: <FolderKanban size={20} />,
      url: "/projects",
      label: "Projects",
      main: false,
    },
    { icon: <Code size={20} />, url: "/skills", label: "Skills", main: false },
    {
      icon: <FileText size={20} />,
      url: "/posts",
      label: "Posts",
      main: false,
    },
    {
      icon: <Mail size={20} />,
      url: "/contact",
      label: "Contact",
      main: false,
    },
  ];
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPathSegment = pathName.split("/")[2];
  const active = "text-emerald-500";
  return (
    <nav
      className={`fixed -bottom-1 left-0 right-0  hidden max-md:block  ${
        !isDarkMode ? "dark" : "light"
      }`}
    >
      <div
        className={`${
          !isDarkMode ? "shadow-slate-700" : " shadow-gray-300"
        }  shadow flex justify-around items-center h-16 `}
      >
        {navItems.map((item) => (
          <Link
            key={item.url}
            href={item.url}
            className={`flex flex-col items-center justify-center hover:text-emerald-500 cust-trans
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
          <div className={`absolute bottom-full end-4 border border-black `}>
            <ModeSwitcher/>
            <LanguageSwitcher/>
          </div>
        <button onClick={()=>setIsMenuOpen(!isMenuOpen)} className={`flex flex-col cust-trans items-center justify-center ${isMenuOpen?'':active}`}>
          {/* ----- Menu ------ */}
          {isMenuOpen ? <CiMenuKebab  size={20}/>:<IoClose size={20} />}
          <span className="text-xs mt-1">Options</span>
        </button>
      </div>
    </nav>
  );
};

export default MobileNavBar;
