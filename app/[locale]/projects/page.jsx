import ProjectsSection from '@/app/componentes/ProjectsSection'
import React from 'react'

export async function generateMetadata({ params }) {
  
  const data =params.locale=='ar'?'مشاريع':"Projects"

  return {
    title: data,
  };
}
const page = () => {
  return (
    <ProjectsSection />
  )
}

export default page