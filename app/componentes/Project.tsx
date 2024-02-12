"use client";
import { useEffect, useState } from "react";
import CustomBtn from "./CustomBtn";
import Link from "next/link";
import { IoReturnUpBackSharp } from "react-icons/io5";
import Loading from "./Loading";

function Project(project: any) {
  const id = project.project;
  const [dataOfProject, setDataOfProject] = useState<any | []>([]);
  const fetchHandler = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}`);
    const data = await response.json();
    return setDataOfProject(data);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const mapedData = dataOfProject
    .filter((item: { id: number }) => item.id == id)
    .map((item: { data: any }) => item.data);
  // Access to the first object
  const finalData = mapedData[0];
  //   Check the data to render
  if (finalData?.length <= 0) {
    return <Loading />;
  }

  return finalData ? (
    <div className="py-20 container min-h-[100vh] flex flex-col gap-10 relative ">
      <Link
        href={`/#${finalData.title}`}
        className="text-3xl fixed bg-sky text-white px-3 rounded-sm z-15 hover:bg-black transition-all duration-300 right-[120px] max-lg:right-10  top-20"
      >
        <IoReturnUpBackSharp />
      </Link>
      <h1 className="font-bold capitalize font-roboto text-2xl max-md:text-lg max-md:text-center">
        {finalData.title}
      </h1>
      <div className="flex flex-col gap-7 max-sm:gap-4 max-md:px-[20px]">
        <img
          src={`/${id}.png`}
          alt={finalData.title}
          className="rounded-md border-2 border-gray-200 w-[600px] h-[400px]  max-md:m-auto max-md:w-[90%] max-md:h-auto"
        />
        {/* Technologies */}
        <div className="flex max-md:flex-col max-md:justify-center items-center">
          <h2 className="font-semibold text-lg mb-4">Technologies: </h2>
          <p className="mx-5 flex flex-wrap gap-2">
            {finalData.tech.map((tech: any) => (
              <span
                key={tech}
                className="bg-sky text-white px-[5px] py-[1px] rounded-sm"
              >
                #{tech}
              </span>
            ))}
          </p>
        </div>
        {/* Date Creating */}
        <div>
          <h2 className="font-semibold text-lg max-md:text-center">
            Publish Date:{" "}
            <span className="font-normal">{finalData.create_at}</span>
          </h2>
        </div>
        {/* Description */}
        <div className="flex flex-col gap-1 max-md:text-center">
          <h2 className="capitalize font-semibold text-lg">Description: </h2>
          <p className="mx-5 text-wrap">{finalData.desc}</p>
        </div>
      </div>
      {/* Links */}
      <div className="flex gap-5 max-md:items-center justify-center items-center ">
        <CustomBtn
          content="Project Repo"
          style="bg-sky hover:bg-black transition-all duration-300 text-white py-[5px] px-4 rounded-sm tracking-0 capitalize"
          to={finalData.repo as string}
          target="_blank"
        />
        <CustomBtn
          content={`${finalData.id !== "3" ? "Project Live" : "Backend Repo"}`}
          style="bg-sky hover:bg-black transition-all duration-300 text-white py-[5px] px-4 rounded-sm tracking-0 capitalize"
          to={finalData.live as string}
          target="_blank"
        />
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Project;
