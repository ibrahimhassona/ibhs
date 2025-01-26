import type { Metadata } from "next";
import Project from "@/app/componentes/Project";
import { Params, Props } from "@/app/[locale]/type";
import { getProjects } from "@/lib/getProjects";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const projects = await getProjects(`projects-${params.locale}`);
  const projectData = projects?.find((project: any) => project.slug === params.project);

  return {
    title: projectData?.title || 'Frontend Project',
    description: projectData 
      ? `${projectData.description || ''} | Technologies: ${projectData.technologies ? projectData.technologies.join(", ") : ''}`
      : 'Frontend Project Details'
  };
}

const ProjectPage: React.FC<{ params: Params }> = ({ params }) => {
  return <Project projectSlug={params.project} />;
};

export default ProjectPage;