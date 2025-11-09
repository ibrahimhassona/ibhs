import React from "react";
import Image from "next/image";
import BottomOfCard from "./BottomOfCard";
import { RiTeamFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ProjectCard = ({ project, isDark, style }) => {
  const t = useTranslations("Sidebar");

  return (
    <div
      key={project.id}
      className={`p-4 rounded-lg shadow-lg flex flex-col justify-between border custom-border relative ${style}`}
    >
      <Link href={`projects/${project?.slug}`}>
        <Image
          src={project.image}
          alt={project.title}
          priority
          height={300}
          width={300}
          className="w-full h-40 max-md:h-32 object-cover rounded-md"
        />

        <div
          className={`absolute top-1 start-1 text-sm text-nowrap px-2 py-[3px] rounded-md border shadow-sm ${
            isDark
              ? "bg-[#171717]/90 border-white/20 text-gray-100"
              : "bg-white/90 border-gray-300 text-slate-900"
          }`}
        >
          {project.status === "Full" ? (
            <div className="flex items-center gap-1">
              <FaUserAlt size={14} className="text-primary" />
              <span className="text-[10px] font-semibold text-primary">
                {t("full")}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <RiTeamFill size={16} className="text-yellow-500" />
              <span className="text-[10px] font-semibold text-yellow-500">
                {t("shared")}
              </span>
            </div>
          )}
        </div>

        <h3 className="text-lg max-md:text-sm font-semibold my-2 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-xs">{project.date}</p>
        <p className="text-sm my-1 max-md:hidden">
          {project.description.slice(0, 60) + " ..."}
        </p>
      </Link>
      <BottomOfCard project={project} />
    </div>
  );
};

export default ProjectCard;
