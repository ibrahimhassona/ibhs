"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDarkMode } from "@/lib/DarkModeContext";
import { useLocale, useTranslations } from "next-intl";
import { getProjects } from "@/lib/getProjects";
import Loader from "./2025/ui/Loader";
import ProjectCard from './ProjectCard'
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

  if (!projects) return <Loader />;

  // Separate featured and regular projects
  const featuredProjects = projects.filter((project) => project?.isFeature);
  const regularProjects = projects.filter((project) => !project?.isFeature);

  const renderProjects = (projectList: any[]) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-6 max-sm:gap-2 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 my-10"
    >
      {projectList?.map((project: any) => (
        <motion.div key={project?.id} variants={itemVariants} className="group">
          <ProjectCard project={project} isDark={isDarkMode} style="h-full"/>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section
      className={`${isDarkMode ? "light" : "dark"} p-4 overflow-hidden`}
      id="projects"
    >
      {featuredProjects?.length > 0 && (
        <>
          <h1 className="sectionHead uppercase">{t("latest")}</h1>
          {renderProjects(featuredProjects)}
        </>
      )}

      <h1 className="sectionHead uppercase">{t("projects")}</h1>
      {renderProjects(regularProjects)}
    </section>
  );
};

export default ProjectsSection;
