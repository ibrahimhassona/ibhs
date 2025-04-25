import { PencilIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaVideo } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { GoStarFill } from "react-icons/go";

const BottomOfCard = ({ project }) => {

  const style =
    "flex items-center gap-1 text-sm hover:underline cust-trans justify-center w-6 h-6 rounded-sm "
  return (
    <div className="flex items-center justify-between max-sm:flex-wrap gap-4 mt-2">
      {/* -------- Links -------- */}
      <div className="flex gap-3">
        {project.links?.repo && (
          <Link
            href={project.links?.repo}
            target="_blank"
            className={`text-white bg-blue-400 ${style} `}
          >
            <FaGithub size={14} />
          </Link>
        )}
        {project.links?.live && (
          <Link
            href={project.links?.live}
            target="_blank"
            className={` text-white bg-green-400 ${style} `}
          >
            <FaExternalLinkAlt size={14} />
          </Link>
        )}
        {project.video && (
          <Link
            href={project.video}
            target="_blank"
            className={`text-white bg-red-400 ${style} `}
          >
            <FaVideo size={14} />
          </Link>
        )}
         {/* ------- IsFeature ------- */}
      {project.isFeature && 
      <span className=" text-yellow-500 px-1 py-[2px] rounded-md">
        <GoStarFill size={20} className=""/>
      </span>}
      </div>
    </div>
  );
};

export default BottomOfCard;
