import ContactSection from "../componentes/ContactSection";
import HomeSection from "../componentes/HomeSection";
import ProjectsSection from "../componentes/ProjectsSection";

 

export default async function Home() {
  return (
    <main className="w-full max-w-[1440px] mx-auto overflow-hidden bg-white ">
      <HomeSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
