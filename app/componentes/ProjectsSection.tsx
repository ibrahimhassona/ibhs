"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDarkMode } from "@/lib/DarkModeContext";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { getProjects } from "@/lib/getProjects";
import Loader from "./2025/ui/Loader";

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
      className="grid gap-6 max-sm:gap-4 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 my-10"
    >
      {projectList?.map((project: any) => (
        <motion.div key={project?.id} variants={itemVariants} className="group">
          <div
            className={`shadow-lg rounded-sm overflow-hidden cust-trans hover:shadow-xl border h-full flex flex-col ${
              !isDarkMode ? "border-slate-700" : "border-gray-300"
            }`}
          >
            <Link href={`projects/${project?.slug}`} className="block relative">
              <div className="relative h-48 max-sm:h-36 overflow-hidden">
                <Image
                  className="w-full h-full object-cover transform cust-trans transition-transform duration-300 group-hover:scale-105"
                  src={project?.image}
                  alt={project?.title}
                  height={400}
                  width={400}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={90}
                  priority
                />
              </div>
              <span
                className={`absolute end-0 top-1 px-2 py-1 text-xs rounded-s-sm 
                 bg-yellow-600 text-gray-900 font-semibold border-gray-700
                `}
              >
                {project?.status === "Full" ? t("full") : t("shared")}
              </span>
            </Link>
            <div className="p-4 flex flex-col gap-2 mt-auto">
              <div className="flex justify-between items-center max-md:flex-col gap-1">
                <h2 className="font-semibold line-clamp-1 text-sm">
                  {project?.title.slice(0, 30)}
                </h2>
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
