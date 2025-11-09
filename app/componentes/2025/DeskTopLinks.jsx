"use client";
import { useDarkMode } from "@/lib/DarkModeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DeskTopLinks = ({ data }) => {
  const { isDarkMode } = useDarkMode();
  const pathName = usePathname();
  const currentPathSegment = pathName.split("/")[2]; // تقسيم المسار واستخراج الفهرس الثاني
  const palette = isDarkMode
    ? {
        baseBg: "bg-[#171717]/70",
        baseText: "text-gray-100",
        hover: "hover:bg-gray-100 hover:text-slate-900",
        activeBg: "bg-gray-100",
        activeText: "text-slate-900",
      }
    : {
        baseBg: "bg-gray-100/70",
        baseText: "text-slate-900",
        hover: "hover:bg-slate-900 hover:text-white",
        activeBg: "bg-slate-900",
        activeText: "text-gray-100",
      };
  return (
    <div className="flex flex-col gap-2 ">
      {data.map((link, index) => {
        const isActive =
          currentPathSegment === link.href.split("/")[1] ||
          (currentPathSegment === undefined && link.main === true);
        const backgroundClass = isActive ? palette.activeBg : palette.baseBg;
        const textClass = isActive ? palette.activeText : palette.baseText;
        return (
          <Link
            key={index}
            className={`flex items-center gap-2 cust-trans w-full px-2 py-1 rounded-sm border border-transparent ${backgroundClass} ${textClass} ${palette.hover} ${
              isActive ? "shadow-lg ring-1 ring-primary/40" : ""
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
