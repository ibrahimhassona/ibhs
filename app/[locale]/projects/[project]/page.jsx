import Project from "@/app/componentes/Project";
import { getProjects } from "@/lib/getProjects";

// export async function generateMetadata({ params }) {
//   const projects = await getProjects(`projects-${params.locale}`);
//   const projectData = projects?.find(
//     (project) => project.slug === params.project
//   );

//   return {
//     title: projectData?.title,
//     description: projectData
//       ? `${projectData?.description}  ${
//           projectData?.technologies ? projectData?.technologies.join(", ") : ""
//         }`
//       : "Frontend Project Details",
//   };
// }
export async function generateMetadata({ params }) {
  const projects = await getProjects(`projects-${params.locale}`);
  const projectData = projects?.find(
    (project) => project.slug === params.project
  );

  const title = projectData?.title || "Frontend Project";
  const description = projectData
    ? `${projectData.description} ${projectData.technologies ? projectData.technologies.join(", ") : ""
    }`
    : "Frontend Project Details";

  const imageUrl = projectData?.image;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://hassouna.vercel.app/ar/projects/${params.project}`,
      images: imageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl,
    },
  };
}

const ProjectPage = ({ params }) => {
  return <Project projectSlug={params.project} />;
};

export default ProjectPage;
