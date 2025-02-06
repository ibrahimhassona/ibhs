"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { getProjects } from "@/lib/getProjects";
import { useLocale, useTranslations } from "next-intl";
import { useDarkMode } from "@/lib/DarkModeContext";
import Loader from "./2025/ui/Loader";
import TubeVideoRender from '@/app/componentes/2025/TubeVideoRender'
import { TbLabel } from "react-icons/tb"
import { MdLabelOutline } from "react-icons/md";

function ProjectDetails({ projectSlug }) {
  const { isDarkMode } = useDarkMode();
  const [projectData, setProjectData] = useState(null);
  const locale = useLocale();
  const t = useTranslations("projects");

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const projects = await getProjects(`projects-${locale}`);
        const selectedProject = projects?.find(
          (project) => project.slug === projectSlug
        );
        setProjectData(selectedProject);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    fetchProjectDetails();
  }, [projectSlug, locale]);

  if (!projectData) return <Loader />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-20 min-h-screen overflow-hidden"
    >
      <div className="grid md:grid-cols-1 gap-10 items-center">
        {/* Project Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="rounded-xl overflow-hidden shadow-2xl max-w-[600px]"
        >
          <div className="relative w-[600px] h-[400px]">
            <Image
              src={projectData?.image}
              alt={projectData?.title}
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="space-y-6"
        >
          <div className="flex justify-between max-w-[600px] items-center max-sm:flex-col">
            <h1 className="text-3xl font-bold text-primary mb-4">
              {projectData?.title}
            </h1>
            <span className=" font-semibold text-primary border-b-2 border-primary py-1">
              {projectData?.status == "Full" ? t("full") : t("shared")}
            </span>
          </div>

          {/* Technologies */}
          <div className="flex flex-col gap-2 items-start max-sm:items-center">
            <span className="font-semibold">{t("technologies")}:</span>
            <div
              className={`${`
                 ${!isDarkMode
                  ? "bg-gray-800/60 text-gray-200"
                  : "bg-gray-100 text-gray-800"
                }
                `} grid xl:grid-cols-5 lg:grid-cols-4 grid-cols-3 gap-2 p-4 rounded-md shadow max-sm:grid-cols-2 max-w-[700px] max-lg:m-auto`}
            >
              {projectData.technologies?.map((tech) => (
                <span
                  key={tech}
                  className={`
                  text-center flex items-center gap-1
                  py-1 px-2 text-sm rounded-md capitalize
                  ${!isDarkMode
                      ? "bg-gray-800 text-gray-200"
                      : "bg-gray-200 text-gray-800"
                    }
                `}
                >
               <MdLabelOutline className={`text-primary ${locale=='ar'?'rotate-180':''}`} size={15}/>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Publication Date */}
          <div>
            <span className="font-semibold">{t("publish_date")}: </span>
            {projectData?.date}
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {projectData?.description}
          </p>

          {/* Project Links */}
          {/* Project Links */}
          <div
            className={`flex ${projectData?.links?.repo && projectData?.links?.live
              ? ` items-center gap-2`
              : "flex-col"
              }`}
          >
            {projectData?.links?.repo ? (
              <Link
                href={`${projectData.links.repo}`}
                target="_blank"
                className="flex items-center gap-2 px-4 py-1 bg-primary text-white rounded-md hover:opacity-90 transition"
              >
                <FaGithub />
                {t("repo")}
              </Link>
            ) : (
              <span className="">{t("no_repo_available")}</span>
            )}

            {projectData?.links?.live ? (
              <Link
                href={`${projectData.links.live}`}
                target="_blank"
                className="flex items-center gap-2 px-4 py-1 cust-trans border border-primary text-primary rounded-md hover:bg-primary hover:text-white"
              >
                <FaExternalLinkAlt />
                {t("live")}
              </Link>
            ) : (
              <span className="">{t("no_live_available")}</span>
            )}
          </div>
        </motion.div>
      </div>
      {/* ------------ Video ---------- */}
      {projectData?.video && <div className="my-8">
        <h2 className=" font-semibold my-4 text-primary border-b-2 border-primary max-sm:m-auto py-1 w-fit">
          فيديو
        </h2>
        <TubeVideoRender data={projectData?.video}/>
      </div>}
    </motion.div>
  );
}

export default ProjectDetails;
