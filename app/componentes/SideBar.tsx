"use client";
import { useDarkMode } from "@/lib/DarkModeContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaCode,
  FaFolder,
  FaEnvelope,
  FaPen,
} from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { RiOrganizationChart } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import ModeSwitcher from "./2025/ModeSwitcher";
import DeskTopLinks from "./2025/DeskTopLinks";
import LanguageSwitcher from "./2025/LanguageSwitcher";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { getData } from "@/lib/getData";
import SkilltonSideBarSkeleton from "@/app/componentes/2025/skiltons/SkilltonSideBarSkeleton";
const SideBar = () => {
  const t =useTranslations("Sidebar")
  const locale = useLocale();
  const [data, setData] = useState<any[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("Personal_information", locale);
      setData(data);
    };
    
    fetchData();
  }, [locale]);
  console.log(data);
  
  // ------- theme -----
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const links = [
    {
      title: t("profile"),
      href: "/",
      icon: FaUser,
      iconColor: "text-emerald-400",
      main: true,
    },
    {
      title: t("projects"),
      href: "/projects",
      icon: FaFolder,
      iconColor: "text-purple-400",
      main: false,
    },
    {
      title: t("skills"),
      href: "/skills",
      icon: FaCode,
      iconColor: `text-sky-400`,
      border: `border-sky-400`,
      main: false,
    },
    {
      title: t("posts"),
      href: "/posts",
      icon: FaPen,
      iconColor: "text-yellow-400",
      main: false,
    },
    {
      title: t("contact"),
      href: "/contact",
      icon: FaEnvelope,
      iconColor: "text-red-400",
      main: false,
    },
  ]; 
  return (
    <>
      {data ? (
        <aside
          className={`flex flex-col gap-6 w-full h-screen max-md:hidden drop-shadow-xl p-2 ${
            !isDarkMode ? "dark" : "light"
          }`}
        >
          {/* Profile Section */}
          <div className="flex flex-col items-start justify-start">
            {/* ------- Cover And Image ------- */}
            <div className="w-full relative">
              <Image
                width={400}
                height={400}
                src={data[0].cover}
                alt="cover"
                className="w-full h-[200px] object-fill rounded-lg"
              />
              <div className="w-20 h-20 absolute overflow-hidden -bottom-2 border-2 border-emerald-400 left-1/2 transform -translate-x-1/2 z-10 bg-slate-700 rounded-full flex items-center justify-center">
                <Image
                  width={400}
                  height={400}
                  src={data[0].image}
                  alt="personal"
                  className=""
                />
              </div>

              {/* --------- Mode Button --------- */}
              <ModeSwitcher style={"w-8 h-8 absolute bottom-2 z-20 start-2"} />

              {/* --------- Language Switcher -------- */}
              <LanguageSwitcher
                style={"absolute bottom-12 z-20 start-2 w-8 h-8"}
              />

              {/* OverLay */}
              <div className="absolute h-full w-full top-0 right-0 bg-black/40 rounded-b-2xl" />
            </div>

            {/* --------- Personal Data --------- */}
            <div className="w-full my-4">
              <div className="flex flex-col items-start gap-2">
                {/* Name And Cv */}
                <div className="flex items-center justify-between w-full grid-cols-2 gap-2">
                  <h2 className="text-xl font-bold max-lg:text-sm">
                    {data[0].name}
                  </h2>
                  <Link
                    href={data[0].cv_link} // ضع هنا رابط ملف الـ CV
                    download
                    className="bg-primary rounded-md w-fit flex items-center p-2 hover:bg-emerald-600 cust-trans"
                  >
                    <FaDownload size={14} />
                  </Link>
                </div>
                <p className="text text-sm">{data[0].job_title}</p>

                {/* Grid items */}
                <div className="grid grid-cols-1 gap-2 justify-between w-full">
                  {/* ------ Addresses ------ */}
                  <div className="flex items-center gap-2">
                    <Lable
                      style={""}
                      iconColor=""
                      icon={FaMapMarkerAlt}
                      text={data[0].addresses[0]}
                      type={"location"}
                    />
                    <Lable
                      style={""}
                      iconColor=""
                      icon={FaMapMarkerAlt}
                      text={data[0].addresses[1]}
                      type={"location"}
                    />
                  </div>
                  <Lable
                    style={""}
                    iconColor=""
                    icon={RiOrganizationChart}
                    text={`${t("work_for")} "${data[0].current_company}"`}
                    type={"company"}
                  />
                  <Lable
                    style={""}
                    iconColor=""
                    icon={FaWhatsapp}
                    text={data[0].phone_numbers[0]}
                    type={"whatsapp"}
                  />
                  <Lable
                    style={""}
                    iconColor=""
                    icon={MdOutlineAlternateEmail}
                    text={data[0].email}
                    type={"email"}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ------- Links --------- */}
          <DeskTopLinks data={links} />
        </aside>
      ) : (
        <SkilltonSideBarSkeleton />
      )}
    </>
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
        return `https://wa.me/${text}`;
      case "email":
        return `mailto:${text}`;
      default:
        return text;
    }
  };

  return (
    <div
      className={`flex items-center justify-start gap-1 text-sm ${
        type == "email" ? "max-lg:flex-wrap" : ""
      }`}
    >
      <Icon size={14} className={iconColor} />
      <Link
        href={getLink()}
        className={`${style} font-bold ${
          type == "email" ? "max-lg:text-xs" : ""
        }`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </Link>
    </div>
  );
};
