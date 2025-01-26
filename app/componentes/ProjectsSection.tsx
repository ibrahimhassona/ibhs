"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDarkMode } from "@/lib/DarkModeContext";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { getProjects } from "@/lib/getProjects";
import Loading from "./Loading";

const ProjectsSection = () => {
  const t = useTranslations("Sidebar");
  const [projects, setProjects] = useState<any[] | null>([]);
  const { isDarkMode } = useDarkMode();
  const locale = useLocale();

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const data = await getProjects(`projects-${locale}`);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    
    fetchProjectsData();
  }, [locale]);

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

  if (!projects) return <Loading />;

  // Separate featured and regular projects
  const featuredProjects = projects.filter(project => project.isFeature);
  const regularProjects = projects.filter(project => !project.isFeature);

  const renderProjects = (projectList: any[]) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-6 max-sm:gap-4 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 my-10"
    >
      {projectList?.map((project: any) => (
        <motion.div
          key={project.id}
          variants={itemVariants}
          className="group"
        >
          <div
            className={`shadow-lg rounded-sm overflow-hidden cust-trans hover:shadow-xl border h-full flex flex-col ${
              !isDarkMode ? "border-slate-700" : "border-gray-300"
            }`}
          >
            <Link href={`projects/${project.slug}`} className="block">
              <div className="relative h-48 max-sm:h-36 overflow-hidden">
                <Image
                  className="w-full h-full object-cover transform cust-trans transition-transform duration-300 group-hover:scale-105"
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={90}
                  loading="lazy"
                />
              </div>
            </Link>
            <div className="p-4 flex flex-col gap-2 mt-auto">
              <div className="flex justify-between items-center max-md:flex-col gap-1">
                <h2 className="font-semibold line-clamp-1 max-sm:text-sm">
                  {project.title.slice(0, 15)}
                </h2>
                <span
                  className={`px-2 py-1 text-xs rounded-sm text-primary ${
                    !isDarkMode
                      ? "bg-gray-800/70 border-gray-700"
                      : "bg-white/70 border-gray-100"
                  }`}
                >
                  {project.status == "Full" ? t("full") : t("shared")}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section
      className={`${isDarkMode ? "light" : "dark"} p-4 overflow-hidden`}
      id="projects"
    >
      {featuredProjects.length > 0 && (
        <>
          <h1 className="sectionHead uppercase">{t("featuredProjects")}</h1>
          {renderProjects(featuredProjects)}
        </>
      )}

      <h1 className="sectionHead uppercase">{t("projects")}</h1>
      {renderProjects(regularProjects)}
    </section>
  );
};

export default ProjectsSection;