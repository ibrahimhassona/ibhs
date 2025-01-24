"use client";

import { FaGithub } from "react-icons/fa";
import { TbWorldUp } from "react-icons/tb";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import fetchProjects from "@/lib/fetchProjects";
import { useDarkMode } from "@/lib/DarkModeContext";
import Loader from "@/app/componentes/2025/ui/Loader";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ProjectsSection = () => {
  const t = useTranslations("Sidebar");
  const [projects, setProjects] = useState<any[]>([]);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const extractTheData = async () => {
      const data = await fetchProjects();
      setProjects(data?.map((project) => project.data));
    };
    extractTheData();
  }, []);

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

  return (
    <section
      className={`${isDarkMode ? "light" : "dark"} p-4 overflow-hidden`}
      id="projects"
    >
      {projects.length > 0 ? (
        <>
      <h1 className="sectionHead uppercase">{t("projects")}</h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 max-sm:gap-4 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 my-10"
          >
          {projects.map((project: any) => (
            <motion.div
            key={project.id}
            variants={itemVariants}
            className="group"
            >
              <div className={`shadow-lg rounded-sm overflow-hidden cust-trans hover:shadow-xl border ${!isDarkMode?' border-slate-700':'border-gray-300'}`}>
                <Link href={`projects/${project.id}`}>
                  <div className="relative h-48 max-sm:h-36 overflow-hidden">
                    <Image
                      className="w-full h-full object-cover transform cust-trans transition-transform duration-300 group-hover:scale-110"
                      src={project.img}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={90}
                      loading="lazy"
                      />
                  </div>
                </Link>

                <div className="p-4 flex justify-between items-center max-sm:flex-col gap-1">
                  <h2 className="text-lg font-bold line-clamp-1 max-sm:text-sm ">
                    {project.title}
                  </h2>
                  <span
                    className={`px-2 py-1 text-xs h-fit  rounded-sm  text-primary  ${
                      !isDarkMode
                        ? "bg-gray-800/70 border-gray-700 "
                        : "bg-white/70 border-gray-100 "
                    }`}
                  >
                    Frontend
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
          </>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default ProjectsSection;
