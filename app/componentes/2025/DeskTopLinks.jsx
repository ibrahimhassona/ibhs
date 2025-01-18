"use client";
import { useDarkMode } from "@/lib/DarkModeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DeskTopLinks = ({ data }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const pathName = usePathname();
  const currentPathSegment = pathName.split("/")[2]; // تقسيم المسار واستخراج الفهرس الثاني
  console.log(currentPathSegment);
  const active = !isDarkMode
    ? "text-slate-900 bg-gray-100"
    : "bg-slate-900 text-gray-100";

  return (
    <div className="flex flex-col gap-1 ">
      {data.map((link, index) => {
        console.log(link.href.split("/")[1]);
        return (
          <Link
            key={index}
            className={`flex items-center gap-2 cust-trans w-full  px-2 py-1 rounded-sm border border-transparent  
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
