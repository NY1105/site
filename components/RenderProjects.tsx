import router from 'next/router'
import React from 'react'
import ProjectsContainer from './Projects/ProjectsContainer'
import RenderContainer from './RenderContainer'

const RenderProjects = () => {
  return (
    // <div className="flex-1 m-1 py-2 px-4 rounded-md border-2 border-gray-400 bg-gray-200 dark:border-gray-700 dark:bg-gray-900">
    <RenderContainer divClassName="flex-1">
      <div className="flex flex-col">
        <div className="flex">
          <div className="px-1 py-2 text-2xl">Projects</div>
          <div className="flex-1"></div>
          <div
            className="mx-4 my-2 flex flex-col justify-center rounded-md bg-gray-300 py-1 px-2 text-sm hover:cursor-pointer hover:bg-gray-100 dark:bg-gray-800"
            onClick={() => {
              router.push('/projects')
            }}
          >
            View All
          </div>
        </div>

        <ProjectsContainer />
      </div>
    </RenderContainer>
  )
}

export default RenderProjects
