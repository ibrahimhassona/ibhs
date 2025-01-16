"use client";
import { useDarkMode } from "@/lib/DarkModeContext";
import Link from "next/link";
import React from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaCode,
  FaBook,
  FaFolder,
} from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { RiOrganizationChart } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const SideBar = () => {
  const skills = ["React", "Next.js", "JavaScript", "CSS", "HTML"];
  const courses = ["Advanced React", "Frontend Masters", "CSS Mastery"];
  const projects = [
    { name: "Portfolio Website", link: "#" },
    { name: "E-commerce Store", link: "#" },
    { name: "Blog Platform", link: "#" },
  ];
  // ------- theme -----
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  console.log(isDarkMode);
  return (
    <aside
      className={`flex flex-col gap-6 w-full h-screen ${
        !isDarkMode ? "dark" : "light"
      } p-6 `}
    >
      {/* Profile Section */}
      <div className="flex flex-col items-start justify-start ">
        <div className="w-24 h-24 mx-auto bg-slate-700 rounded-full flex items-center justify-center">
          <FaUser size={40} className="text-slate-300" />
        </div>
        {/* Data */}
        <div className=" w-full my-4">
          <div className="flex flex-col items-start gap-2">
            {/* Name And Cv */}
            <div className="flex items-center justify-between w-full grid-cols-2 gap-2">
              <h2 className="text-xl font-bold">ابراهيم حسونة</h2>
              <Link
                href="/path/to/your/cv.pdf" // ضع هنا رابط ملف الـ CV
                download
                className=" bg-emerald-500 rounded-md w-fit  flex items-center p-2 hover:bg-emerald-600 cust-trans"
              >
                <FaDownload size={18} />
              </Link>
              <ModeToggleButton />
            </div>
            <p className="text text-sm">مطور واجهات أمامية</p>
            {/* Grid items */}
            <div className="grid grid-cols-2 gap-2 justify-between w-full">
              <Lable
                style={"text-emerald-500"}
                iconColor="text-emerald-500"
                icon={FaMapMarkerAlt}
                text={`مصر , القاهرة`}
                type={"location"}
              />
              <Lable
                style={"text-purple-500"}
                iconColor="text-purple-500"
                icon={RiOrganizationChart}
                text={`مصر , القاهرة`}
                type={"company"}
              />
              <Lable
                style={"text-emerald-500"}
                iconColor="text-emerald-500"
                icon={FaWhatsapp}
                text={`01001705917`}
                type={"whatsapp"}
              />
              <Lable
                style={"text-purple-500"}
                iconColor="text-purple-500"
                icon={MdOutlineAlternateEmail}
                text={`ibrahim.m.hassouna@gmail.com`}
                type={"email"}
              />
            </div>
            {/* ------ */}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <FaCode size={18} className="text-sky-400" />
          <h3 className="font-semibold text-lg">المهارات</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-slate-800 rounded-full text-sm text-sky-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Courses Section */}
      <div className="space-y-4"></div>
      {/* Projects Section */}

      <div className="flex flex-col gap-4">
        <Link
          className="flex items-center gap-2 cust-trans hover:bg-white"
          href={"/"}
        >
          <FaFolder size={18} className="text-purple-400" />
          <h3 className="font-semibold text-lg">المشاريع</h3>
        </Link>
        <Link className="flex items-center gap-2" href={"/"}>
          <FaBook size={18} className="text-emerald-400" />
          <h3 className="font-semibold text-lg">الدورات</h3>
        </Link>
      </div>

      {/* CV Section */}
    </aside>
  );
};

export default SideBar;

const Lable = ({ style, iconColor, icon: Icon, text, type }: any) => {
  const getLink = () => {
    switch (type) {
      case "location":
        return text;
      case "company":
        return text;
      case "whatsapp":
        return `https://wa.me/2${text}`;
      case "email":
        return `mailto:${text}`;
      default:
        return text;
    }
  };

  return (
    <div className="flex items-center justify-start gap-1 text-sm">
      <Icon size={14} className={iconColor} />
      <a
        href={getLink()}
        className={`${style}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </div>
  );
};

const ModeToggleButton = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode(); // Access dark mode state and toggle function

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-full transition-colors duration-300 
        ${isDarkMode ? "bg-gray-800 text-white" : "bg-yellow-500 text-black"}`}
    >
      {/* Icon or text depending on the mode */}
      {isDarkMode ? (
        <span role="img" aria-label="Dark Mode">
          🌙
        </span> // Dark Mode Icon
      ) : (
        <span role="img" aria-label="Light Mode">
          🌞
        </span> // Light Mode Icon
      )}
    </button>
  );
};

ModeToggleButton;
