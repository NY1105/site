import React, { useState } from 'react'
import Tools from '@/data/tools.json'
import RenderContainer from './RenderContainer'

const RenderAbout = () => {
	const tools = Tools
	return (
		<RenderContainer title="About">
			<div className="flex justify-center flex-col">
				<div className="pb-3 px-4 flex flex-col ">
					<p className="text-sm md:text-lg lg:text-xl">
						Here are the frameworks and tools I used writing this website
					</p>
				</div>
				<div className="pb-3 grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center items-stretch">
					{tools &&
						tools.map((tool) => (
							<div
								className="dark:bg-gray-300 rounded-2xl border-2 m-1 p-2 border-gray-300 dark:border-gray-800 pb-3 flex flex-col justify-center"
								key={tool.appName}
							>
								<div className=" flex justify-center my-1 py-1 ">
									<div className="mr-2 p-1">
										<img
											src={tool.appLogo}
											alt={tool.appName}
											className="h-12 md:h-20 hover:cursor-pointer "
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
