"use client";
import { useDarkMode } from "@/lib/DarkModeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DeskTopLinks = ({ data }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const pathName = usePathname();
  const currentPathSegment = pathName.split("/")[2]; // تقسيم المسار واستخراج الفهرس الثاني
  const active = !isDarkMode
    ? "text-slate-900 bg-gray-100"
    : "bg-[#171717] text-gray-100";
    const hover = isDarkMode 
    ? 'hover:bg-[#171717]/40 hover:text-gray-100' 
    : 'hover:text-slate-900 hover:bg-gray-100/40';
  return (
    <div className="flex flex-col gap-2 ">
      {data.map((link, index) => {
        return (
          <Link
            key={index}
            className={`flex items-center gap-2 cust-trans w-full ${`${ currentPathSegment !== link.href.split("/")[1] ? hover:''}`}  px-2 py-1 rounded-sm border border-transparent  
            ${
              currentPathSegment === link.href.split("/")[1]
                ? active
                : currentPathSegment === undefined && link.main == true
                ? active
                : ""
            }`}
            href={link.href}
          >
            {React.createElement(link.icon, {
              size: 14,
              className: link.iconColor,
            })}
            {link.title}
          </Link>
        );
      })}
    </div>
  );
};

export default DeskTopLinks;
