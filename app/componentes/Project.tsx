"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoReturnUpBackSharp } from "react-icons/io5";
import Loading from "./Loading";
import CustomBtn from "./CustomBtn";
import { getProjects } from "@/lib/getProjects";
import { useLocale } from "next-intl";

interface ProjectProps {
  projectSlug: string;
}

function Project({ projectSlug }: ProjectProps) {
  const [projectData, setProjectData] = useState<any | null>(null);
  const locale = useLocale();

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const projects = await getProjects(`projects-${locale}`);
        const selectedProject = projects?.find((project: any) => project.slug === projectSlug);
        setProjectData(selectedProject);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    fetchProjectDetails();
  }, [projectSlug, locale]);

  if (!projectData) return <Loading />;

  return (
    <div className="py-20 container min-h-screen flex flex-col gap-10 relative">
      <Link
        href="/projects"
        className=" absolute text-3xl  bg-sky text-white px-3 rounded-sm z-15 hover:bg-black transition-all duration-300 right-[120px] max-lg:right-10 top-20"
      >
        <IoReturnUpBackSharp />
      </Link>

      <h1 className="font-bold capitalize font-roboto text-2xl max-md:text-lg max-md:text-center">
        {projectData.title}
      </h1>

      <div className="flex flex-col gap-7 max-sm:gap-4 max-md:px-[20px]">
        <img
          src={projectData.image}
          alt={projectData.title}
          className="rounded-md border-2 border-gray-200 w-[600px] h-[400px] max-md:m-auto max-md:w-[90%] max-md:h-auto"
        />

        <div className="flex max-md:flex-col max-md:justify-center items-center">
          <h2 className="font-semibold text-lg mb-4">Technologies: </h2>
          <p className="mx-5 flex flex-wrap gap-2">
            {projectData.technologies?.map((tech: string) => (
              <span
                key={tech}
                className="bg-sky text-white px-[5px] py-[1px] rounded-sm"
              >
                #{tech}
              </span>
            ))}
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg max-md:text-center">
            Publish Date: <span className="font-normal">{projectData.date}</span>
          </h2>
        </div>

        <div className="flex flex-col gap-1 max-md:text-center">
          <h2 className="capitalize font-semibold text-lg">Description: </h2>
          <p className="mx-5 text-wrap">{projectData.description}</p>
        </div>
      </div>

      <div className={`flex ${!projectData.repo ? 'flex-col' : 'flex-row'} gap-5 max-md:items-center justify-center items-center`}>
        {projectData.repo && (
          <CustomBtn
            content="Project Repo"
            style="bg-sky hover:bg-black transition-all duration-300 text-white py-[5px] px-4 rounded-sm tracking-0 capitalize"
            to={projectData.repo}
            target="_blank"
          />
        )}

        {!projectData.repo && (
          <span>There is no URL to the project because it is for sale</span>
        )}

        <CustomBtn
          content={projectData.id !== "3" ? "Project Live" : "Backend Repo"}
          style="bg-sky hover:bg-black transition-all duration-300 text-white py-[5px] px-4 rounded-sm tracking-0 capitalize"
          to={projectData.live || '/#projects'}
          target="_blank"
        />
      </div>
    </div>
  );
}

export default Project;