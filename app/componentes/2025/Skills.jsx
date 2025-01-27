"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useDarkMode } from "@/lib/DarkModeContext";
import Loader from "@/app/componentes/2025/ui/Loader";
import { getData } from "@/lib/getData";
import { GrTechnology } from "react-icons/gr";

const Skills = () => {
  const locale = useLocale();
  const { isDarkMode } = useDarkMode();
  const t = useTranslations("skills");
  const [skills, setSkills] = useState(null);

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

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const fetchedData = await getData("skills", locale); // Renaming to avoid conflict
        setSkills(fetchedData[0]); // Assuming `fetchedData` is an array
      } catch (error) {
        console.error("Error fetching skills:", error);
      } finally {
      
      }
    };
  
    fetchSkills();
  }, [locale]);

  if (!skills) return <Loader />; 
  // General styles for item cards
  const cardStyles = `flex hover:shadow-md cust-trans cursor-pointer flex-col items-center text-center px-2 py-[10px] rounded-sm h-full gap-1 justify-center border ${
    !isDarkMode ? "border-slate-700" : "border-gray-300"
  }`;

  return (
    <div className="p-4 overflow-hidden">
      {/* Soft Skills */}
      <h1 className="sectionHead uppercase">{t("soft_skills")}</h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-3 justify-center items-center gap-4 max-sm:grid-cols-1 flex-col max-sm:px-[50px] my-10"
      >
        {skills.dataSoft.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={cardStyles}
          >
            <h2 className="capitalize font-semibold text-primary">{skill.title}</h2>
            <p className="text-[14px]">{skill.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Technical Skills */}
      <div className="pt-10">
        <h1 className="sectionHead uppercase">{t("technical_skills")}</h1>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 max-sm:grid-cols-2 gap-2 my-10">
          {skills.dataTech.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
              className={`rounded-sm mytransition py-3 cursor-pointer flex flex-col justify-center items-center gap-2 border ${
                !isDarkMode ? "border-slate-700" : "border-gray-300"
              }`}
            >
              <h1 className="text-2xl text-primary">
                <GrTechnology size={18}/>
              </h1>
              <h2 className="text-sm ">{item}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
