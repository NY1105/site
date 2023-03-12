import React from 'react'
import RenderContainer from './RenderContainer'

const RenderIntro = () => {
  return (
    <RenderContainer divClassName="flex flex-col justify-center ">
      <div className="pb-5 flex flex-col align-middle ">
        <p className="text-2xl">Hi there</p>
        <br />
        <p className="text-4xl">
          I'm <span className="font-semibold">Nicholas</span>
        </p>
        <br />
        <p className="lg:text-lg">Nice to meet you</p>
        <p className="lg:text-lg">Here are some coding projects I have done</p>
        <p className="lg:text-lg">Feel free to take a tour!</p>
      </div>
    </RenderContainer>
  )
}

export default RenderIntro
