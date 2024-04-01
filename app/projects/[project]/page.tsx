import type { Metadata } from "next";
import Project from "@/app/componentes/Project";
import { Params, Props } from "@/app/type";
import fetchProjects from "@/lib/fetchProjects";


// Dynamic meta data 
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = params.project;
  // fetch data
  const product= await fetchProjects()
  let filteredData = product?.filter((item: any) => item.id == project)[0]?.data;
  return {
    title: filteredData?.title  || 'front end project' ,
    description: filteredData?.desc + filteredData?.tech.join(" , ")+['مبرمج مصرى','ابراهيم حسونه','مبرمج ويب',' تفاصيل مواقع الكترونيه بسعر جيد '].join(" , ")|| 'front end project',
  };
}

// Start The Main Function
const page: React.FC<{ params: Params }> = ({ params }) => {
  const { project } = params;
  return (
    <>
       <Project project={project} /> {/*the client component for distribute the data */}
    </>
  );
};

export default page;
