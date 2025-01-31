import Project from "@/app/componentes/Project";
import { getProjects } from "@/lib/getProjects";

export async function generateMetadata({ params }) {
  const projects = await getProjects(`projects-${params.locale}`);
  const projectData = projects?.find(
    (project) => project.slug === params.project
  );

  return {
    title: projectData?.title,
    description: projectData
      ? `${projectData?.description}  ${
          projectData?.technologies ? projectData?.technologies.join(", ") : ""
        }`
      : "Frontend Project Details",
  };
}

const ProjectPage = ({ params }) => {
  return <Project projectSlug={params.project} />;
};

export default ProjectPage;
