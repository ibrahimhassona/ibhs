"use client";
// react icons
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiStrapi } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { CiServer } from "react-icons/ci";
import { motion } from "framer-motion";
import { FadeIn } from "@/app/[locale]/variants";
import { RiSupabaseFill } from "react-icons/ri";
import { SiJest } from "react-icons/si";
import supabase from "@/lib/supabase";
import { useEffect, useState } from "react";
import Loader from "@/app/componentes/2025/ui/Loader";
import { useDarkMode } from "@/lib/DarkModeContext";
import { useTranslations } from "next-intl";

let skillsIcons = [
  <IoLogoJavascript />,
  <SiTypescript />,
  <CiServer />,
  <FaCss3Alt />,
  <FaHtml5 />,
  <SiNextdotjs />,
  <FaReact />,
  <SiRedux />,
  <SiStrapi />,
  <SiTailwindcss />,
  <FaBootstrap />,
  <RiSupabaseFill />,
  <SiJest />,
];

const Skills = () => {
  const { isDarkMode } = useDarkMode();
  interface typeSkills {
    adaptability: string;
    attention_to_detail: string;
    collaboration: string;
    communication: string;
    critical_thinking: string;
    proplem_solving: string;
  }
  interface skillsProps {
    id: number;
    tite: string;
    type_skills: typeSkills;
  }
  [];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Skills Data comming from DB
  const [skills, setSkills] = useState<any>();
  const t = useTranslations("skills");
  const fetchSkills = async () => {
    let { data, error } = await supabase.from("ibhs-skills").select("*");
    try {
      if (error) {
        throw error;
      }
      setSkills(data);
    } catch (error) {
      console.error("Error fetching projects:");
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  //if data ready or not
  if (!skills) {
    return <Loader />;
  }
  return (
    <div className="p-4 overflow-hidden ">
      {/* Soft Skills */}
      <h1 className="sectionHead uppercase">{t("soft_skills")}</h1>
      <div className="">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 justify-center items-center gap-4 max-sm:grid-cols-1 flex-col max-sm:px-[50px] my-10"
        >
          {Object.entries(skills[0].type_skills).map(([key, desc], index) => (
            <motion.div
              variants={itemVariants}
              key={key}
              className={`flex hover:shadow-md  cursor-text flex-col items-center text-center px-2 py-[10px] rounded-sm h-full gap-1 justify-center border  ${
                !isDarkMode ? " border-slate-700" : "border-gray-300"
              }`}
            >
              <h2 className="capitalize font-semibold text-primary">
                {key.replaceAll("_", " ")}
              </h2>
              <p className="text-[14px] leading-4  ">{desc as string}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Technical skills */}
      <div className="pt-10">
        <h1 className="sectionHead uppercase">{t("technical_skills")}</h1>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 max-sm:grid-cols-2 gap-2  my-10">
          {Object.entries(skills[1].type_skills).map(([key, desc], index) => (
            <motion.div
              variants={FadeIn("", index / 10)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.4 }}
              key={key}
              className={` rounded-sm mytransition py-3 cursor-pointer  flex flex-col justify-center  items-center gap-2 border ${
                !isDarkMode ? " border-slate-700" : "border-gray-300"
              }`}
            >
              <h1 className="text-2xl text-primary">{skillsIcons[index]}</h1>
              <h2 className=" uppercase text-sm">{desc as string}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
