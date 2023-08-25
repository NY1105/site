import React from 'react'
import { Project } from '@/utils/types'
import ProjectContainer from './ProjectContainer'
import ProjectData from '@/data/projects.json'

const ProjectsContainer = () => {
  const projects = ProjectData.projects
  projects.sort((a: Project, b: Project) => {
    return b.id - a.id
  })
  return (
    <div className="h-[30rem] overflow-y-scroll pb-3">
      {projects.map((project: Project) => (
        <ProjectContainer
          key={`${project}-${project.id}`}
          id={project.id}
          title={project.title}
          name={project.name}
          description={project.description}
          url={project.url}
          image={`/projects${project.image}`}
        />
      ))}
    </div>
  )
}

export default ProjectsContainer
