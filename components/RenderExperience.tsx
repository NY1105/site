import Link from 'next/link'
import React from 'react'
import RenderContainer from './RenderContainer'

const RenderExperience = () => {
  return (
    <RenderContainer title="Experience" childrenClassName="flex justify-center py-3 ">
      <div className="flex justify-center ">
        <div className="mr-2 w-12 h-12 md:w-20 md:h-20">
          <img
            src="/organisations/ff.png"
            alt="cityu"
            className="h-full hover:cursor-pointer object-scale-down aspect-square"
            onClick={() => window.open('https://forexforest.net/')}
          ></img>
        </div>
        <div className="flex-1 flex flex-col justify-center mx-1 grow">
          <p className="font-semibold md:text-lg lg:text-xl">
            Junior Software Developer
          </p>
          <Link
            href="https://forexforest.net/"
            className="text-gray-900 text-sm md:text-md lg:text-lg dark:text-gray-100 hover:cursor-pointer"
          >
            Forex Forest Algorithmic Trading
          </Link>
        </div>
      </div>
    </RenderContainer>
  )
}

export default RenderExperience
