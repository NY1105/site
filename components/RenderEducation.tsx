import Link from 'next/link'
import React from 'react'
import RenderContainer from './RenderContainer'

const RenderEducation = () => {
  return (
    <RenderContainer
      title="Education"
      childrenClassName="flex justify-center py-3 h-max"
    >
      <div className="flex justify-center ">
        <div className="mr-2 h-12 w-12 md:h-20 md:w-20">
          <img
            src="/organisations/cityu.svg"
            alt="cityu"
            className="aspect-square h-full rounded-full bg-white object-scale-down hover:cursor-pointer dark:bg-neutral-100"
            onClick={() => window.open('https://www.cs.cityu.edu.hk/')}
          ></img>
        </div>
        <div className="mx-1 flex flex-1 grow flex-col justify-center">
          <Link
            href="https://www.cs.cityu.edu.hk/"
            className="font-semibold hover:cursor-pointer md:text-lg lg:text-xl"
          >
            BSc in Computer Science
          </Link>
          <Link
            href="https://www.cityu.edu.hk/"
            className="md:text-md text-sm text-gray-900 hover:cursor-pointer dark:text-gray-100 lg:text-lg"
          >
            City University of Hong Kong
          </Link>
        </div>
      </div>
    </RenderContainer>
  )
}

export default RenderEducation
