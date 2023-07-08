import { Project } from '@/utils/types'
import router from 'next/router'

export default ({ title, name, description, url, image }: Project) => {
  return (
    <div
      className="flex py-1 sm:px-2 my-1 rounded-md border-2 border-gray-200 bg-gray-200 hover:cursor-pointer hover:border-gray-300 hover:bg-gray-300 dark:hover:border-gray-800 dark:hover:bg-gray-800 dark:border-gray-900 dark:bg-gray-900"
      onClick={(event) => {
        // if (event.detail == 2) {
          router.push(`/projects/${name}`)
        // }
      }}
    >
      <div className="flex m-1 flex-col justify-center h-10 dark:bg-gray-300 rounded-lg ">
        <img src={image} alt="icon" className=" w-10 p-1 "></img>
      </div>
      <div className="flex-1 flex flex-col mx-2 justify-center">
        <p className="text-lg font-semibold sm:text-xl md:pt-1">{title}</p>
        <div className="hidden lg:block text-base indent-8">
          {description.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
        <p className="hidden text-base">{url}</p>
      </div>
    </div>
  )
}
