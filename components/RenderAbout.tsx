import React, { useState } from 'react'
import Tools from '@/data/tools.json'
import RenderContainer from './RenderContainer'

const RenderAbout = () => {
  const tools = Tools
  return (
    <RenderContainer title="About">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col px-4 pb-3 ">
          <p className="text-sm md:text-lg lg:text-xl">
            Here are the frameworks and tools I used writing this website
          </p>
        </div>
        <div className="grid items-stretch justify-center pb-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {tools &&
            tools.map((tool) => (
              <div
                className="m-1 flex flex-col justify-center rounded-2xl border-2 border-gray-300 p-2 pb-3 dark:border-gray-800 dark:bg-gray-300"
                key={tool.appName}
              >
                <div className=" my-1 flex justify-center py-1 ">
                  <div className="mr-2 p-1">
                    <img
                      src={tool.appLogo}
                      alt={tool.appName}
                      className="h-12 hover:cursor-pointer md:h-20 "
                      onClick={() => window.open(tool.appOfficialSiteURL)}
                    ></img>
                  </div>
                  {/* <div className=" flex flex-col justify-center mx-1 grow overflow-hidden ">
										<p className="font-semibold md:text-lg lg:text-xl">
											<Link href={tool.appOfficialSiteURL}>
												{tool.appName}
											</Link>
										</p>
										<div className="flex max-h-6">
											<Link
												className="hidden sm:block text-gray-900 text-sm h-4 underline md:text-md lg:text-lg dark:text-gray-100"
												href={tool.appOfficialSiteURL}
											>
												{tool.appOfficialSiteURL}
											</Link>
										</div>
									</div> */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </RenderContainer>
  )
}

export default RenderAbout
