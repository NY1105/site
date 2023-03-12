import { Project } from '@/utils/types'
import router from 'next/router'
import React from 'react'
import RenderContainer from './RenderContainer'

const ProjectDetails = (props: Project) => {
  const { title, name, description, url, image } = props

  return (
    <RenderContainer divClassName="" childrenClassName=" ">
      <div className="lg:px-8 lg:pb-8">
        <div className="flex flex-col md:flex-row m-2 h-fit">
          <div className="flex flex-col justify-center">
            <div className="mb-4 pb-4 text-xl md:text-4xl">{title}</div>
          </div>
          <div className="flex-1"></div>
          <div className="h-full flex flex-col m-1 items-center ">
            <img
              src={`/projects/${image}`}
              alt={name}
              className="h-20 md:h-28 object-scale-down bg-gray-200 rounded-lg p-1 aspect-square"
            ></img>
            <div
              className="my-2 px-2 py-1 w-2/3 md:w-full text-center text-sm md:text-base bg-gray-100 dark:bg-gray-600 rounded-md border-2 border-black dark:border-white hover:cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700"
              onClick={() => router.push(url)}
            >
              Visit the project
            </div>
          </div>
        </div>
        <div className="px-2 md:px-6">
          {description.map((line) => (
            <div className="mb-2" key={line}>
              {line}
            </div>
          ))}
        </div>
      </div>
    </RenderContainer>
  )
}

export default ProjectDetails
