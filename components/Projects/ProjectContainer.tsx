import { Project } from '@/utils/types'
import router from 'next/router'

export default ({ title, name, description, url, image }: Project) => {
  return (
    <div
      className="my-1 flex rounded-md border-2 border-gray-200 bg-gray-200 py-1 hover:cursor-pointer hover:border-gray-300 hover:bg-gray-300 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-800 dark:hover:bg-gray-800 sm:px-2"
      onClick={(event) => {
        // if (event.detail == 2) {
        router.push(`/projects/${name}`)
        // }
      }}
    >
      <div className="m-1 flex h-10 flex-col justify-center rounded-lg bg-white dark:bg-gray-300 ">
        <img src={image} alt="icon" className=" w-10 p-1 "></img>
      </div>
      <div className="mx-2 flex flex-1 flex-col justify-center">
        <p className="text-lg font-semibold sm:text-xl md:pt-1">{title}</p>
        <div className="hidden indent-8 text-base lg:block">
          {description.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
        <p className="hidden text-base">{url}</p>
      </div>
    </div>
  )
}
