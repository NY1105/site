import { Project } from '@/utils/types'
import router from 'next/router'
import React from 'react'
import RenderContainer from '../RenderContainer'

const ProjectDetails = (props: Project) => {
  const { title, name, description, url, image } = props

  return (
    <RenderContainer divClassName="" childrenClassName=" ">
      <div className="lg:px-8 lg:pb-8">
        <div className="m-2 flex h-fit flex-col md:flex-row">
          <div className="flex flex-col justify-center">
            <div className="mb-4 pb-4 text-xl md:text-4xl">{title}</div>
          </div>
          <div className="flex-1"></div>
          <div className="m-1 flex h-full flex-col items-center ">
            <img
              src={`/projects/${image}`}
              alt={name}
              className="aspect-square h-20 rounded-lg bg-gray-200 object-scale-down p-1 md:h-28"
            ></img>
            <div
              className="my-2 w-2/3 rounded-md border-2 border-black bg-gray-100 px-2 py-1 text-center text-sm hover:cursor-pointer hover:bg-gray-300 dark:border-white dark:bg-gray-600 dark:hover:bg-gray-700 md:w-full md:text-base"
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
