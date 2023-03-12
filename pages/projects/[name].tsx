import { useRouter } from 'next/router'
import React from 'react'
import ProjectData from '@/data/projects.json'
import { Project } from '@/utils/types'
import ProjectDetails from '@/components/ProjectDetails'

const ProjectDetail = () => {
  const router = useRouter()
  const { name } = router.query
  const projects = ProjectData.projects
  return (
    <>
      {projects
        .filter((project: Project) => project.name === name)
        .map((project) => (
          <div key={project.id}>
            <ProjectDetails
              title={project.title}
              name={project.name}
              id={project.id}
              description={project.description}
              image={project.image}
              url={project.url}
            />
          </div>
        ))}
    </>
  )
}

export default ProjectDetail
