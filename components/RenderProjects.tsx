import router from 'next/router'
import React from 'react'
import ProjectsContainer from './ProjectsContainer'
import RenderContainer from './RenderContainer'

const RenderProjects = () => {
  return (
    // <div className="flex-1 m-1 py-2 px-4 rounded-md border-2 border-gray-400 bg-gray-200 dark:border-gray-700 dark:bg-gray-900">
    <RenderContainer divClassName="flex-1">
      <div className="flex flex-col">
        <div className="flex">
          <div className="text-2xl px-1 py-2">Projects</div>
          <div className="flex-1"></div>
          <div
            className="flex flex-col justify-center py-1 px-2 mx-4 my-2 text-sm bg-gray-300 dark:bg-gray-800 rounded-md hover:cursor-pointer hover:bg-gray-100"
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
