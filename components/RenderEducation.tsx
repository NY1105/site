import Link from 'next/link'
import React from 'react'
import RenderContainer from './RenderContainer'

const RenderEducation = () => {
  return (
    <RenderContainer title="Education" childrenClassName="flex justify-center py-3">
      <div className="flex justify-center ">
        <div className="mr-2 w-12 h-12 md:w-20 md:h-20">
          <img
            src="/organisations/cityu.svg"
            alt="cityu"
            className="h-full hover:cursor-pointer object-scale-down aspect-square"
            onClick={() => window.open('https://www.cs.cityu.edu.hk/')}
          ></img>
        </div>
        <div className="flex-1 flex flex-col justify-center mx-1 grow">
          <Link
            href="https://www.cs.cityu.edu.hk/"
            className="font-semibold md:text-lg lg:text-xl hover:cursor-pointer"
          >
            BSc in Computer Science
          </Link>
          <Link
            href="https://www.cityu.edu.hk/"
            className="text-gray-900 text-sm md:text-md lg:text-lg dark:text-gray-100 hover:cursor-pointer"
          >
            City University of Hong Kong
          </Link>
        </div>
      </div>
    </RenderContainer>
  )
}

export default RenderEducation
