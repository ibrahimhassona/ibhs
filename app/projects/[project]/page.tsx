import CustomBtn from "@/app/componentes/CustomBtn";
import { projects } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { Metadata } from "next";
// Generate Meta Data
export const generateMetadata = ({
  params,
}: {
  params: { project: number };
}): Metadata => {
  return {
    title: projects[params.project - 1].title,
    description: projects[params.project - 1].desc,
  };
};
// Start The Main Function
const page = ({ params }: { params: { project: number } }) => {
  const param = params.project;
  const project = projects[param - 1];

  return (
    <div className="py-20 container min-h-[100vh] flex flex-col gap-10 relative ">
      <Link
        href={`/#${project.title}`}
        className="text-3xl fixed bg-sky text-white px-3 rounded-sm z-15 hover:bg-black transition-all duration-300 right-[120px] max-lg:right-10  top-20"
      >
        <IoReturnUpBackSharp />
      </Link>
      <h1 className="font-bold capitalize font-roboto text-2xl max-md:text-lg max-md:text-center">
        {project.title}
      </h1>
      <div className="flex flex-col gap-7 max-sm:gap-4 max-md:px-[20px]">
        <Image
          src={project.img}
          alt={project.title}
          width={400}
          height={280}
          className="rounded-md border-2 border-gray-200 w-[600px] h-[400px]  max-md:m-auto max-md:w-[90%] max-md:h-auto"
        />
        {/*techonologies  */}
        <div className="flex max-md:flex-col max-md:justify-center items-center">
          <h2 className="font-semibold text-lg">Technologies: </h2>
          <p className="mx-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
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
            Puplish Date:{" "}
            <span className="font-normal">{project.create_at}</span>
          </h2>
        </div>
        {/* description */}
        <div className="flex flex-col gap-1 max-md:text-center">
          <h2 className="capitalize font-semibold text-lg">description: </h2>
          <p className=" mx-5 text-wrap">{project.desc}</p>
        </div>
      </div>
      {/* Links */}
      <div className="flex gap-5 max-md:items-center justify-center items-center ">
        <CustomBtn
          content="project repo"
          style="bg-sky hover:bg-black transitin-all duration-300 text-white py-[5px] px-4 rounded-sm tracking-0 capitalize"
          to={project.repo}
          target="_blank"
        />
        <CustomBtn
          content={`${project.id != "3" ? "project live" : "backend repo"}`}
          style="bg-sky hover:bg-black transitin-all duration-300 text-white py-[5px] px-4 rounded-sm tracking-0 capitalize"
          to={project.live}
          target="_blank"
        />
      </div>
    </div>
  );
};

export default page;
