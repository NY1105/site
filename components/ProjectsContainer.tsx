import React from 'react'
import { Project } from '@/utils/types'
import ProjectContainer from './ProjectContainer'
import ProjectData from '@/data/projects.json'

const ProjectsContainer = () => {
  const projects = ProjectData.projects
  return (
    <div className="pb-3 overflow-auto ">
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
