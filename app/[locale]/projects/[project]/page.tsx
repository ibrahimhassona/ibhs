import type { Metadata } from "next";
import Project from "@/app/componentes/Project";
import { getProjects } from "@/lib/getProjects";

interface Params {
  locale: string;
  project: string;  // Explicitly define as string
}

interface Props {
  params: Params;
}

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