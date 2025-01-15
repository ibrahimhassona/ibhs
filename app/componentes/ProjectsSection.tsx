"use client";
import { FaGithub } from "react-icons/fa";
import { TbWorldUp } from "react-icons/tb";
import Link from "next/link";
import CustomBtn from "./CustomBtn";
import { motion } from "framer-motion";
import { FadeIn } from "../[locale]/variants";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import fetchProjects from "@/lib/fetchProjects";

const ProjectsSection = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const extractTheData = async () => {
      const data = await fetchProjects();
      setProjects(data?.map((project) => project.data));
    };

    extractTheData();
  }, []);

  return (
    <section className="container" id="projects">
      <h1 className="text-2xl font-bold uppercase font-roboto max-sm:text-xl max-md:text-center">
        My Projects
      </h1>

      {/* projects Map */}
      {projects.length > 0 ? (
        <div className="grid gap-5 mt-16 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-sm:flex max-sm:flex-col max-md:px-[35px]">
          {projects.map((project: any, index: number) => (
            <motion.div
              key={project.id}
              id={project.title}
              className="bg-gray-100 shadow-md p-2"
              variants={FadeIn("down", index / 10 + 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="overflow-hidden cursor-pointer h-[207px]">
                <img
                  className="h-full w-full opacity-80 duration-300 transition-all hover:opacity-100 hover:scale-105"
                  src={project.img}
                  alt={project.title}
                />
              </div>
              {/* content of project */}
              <div className="h-[100px] flex flex-col gap-2 justify-between py-2">
                <h1 className="text-lg capitalize line-clamp-1">
                  {project.title}
                </h1>
                {/* Buttons */}
                <div className="flex justify-between items-center">
                  <CustomBtn
                    style="bg-sky text-white px-3 py-[8px] rounded-sm hover:bg-black capitalize tracking-[0px]"
                    content="Show Details"
                    to={`projects/${project.id}`}
                  />
                  <div className="text-3xl flex gap-4 text-sky">
                    {/* github link */}
                    <Link
                      className="hover:text-black duration-300 transition-all"
                      href={project.repo}
                      target="_blank"
                    >
                      <FaGithub />
                    </Link>
                    {/* live link */}
                    <Link
                      className="hover:text-black duration-300 transition-all"
                      href={project.live}
                      target="_blank"
                    >
                      <TbWorldUp />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default ProjectsSection;
