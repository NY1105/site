import { Experience } from '@/utils/types'
import router from 'next/router'

export default ({ title, organization, shortname, url, image }: Experience) => {
  return (
    <div
      className="flex w-full justify-center m-2 hover:cursor-pointer "
      onClick={() => {
        router.push(url)
      }}
    >
      <div className="mr-2 w-12 h-12 md:w-20 md:h-20">
        <img
          src={image}
          alt={shortname}
          className="h-full object-scale-down aspect-square rounded-full bg-neutral-100 dark:bg-white"
        ></img>
      </div>
      <div className="flex-1 flex flex-col justify-center mx-1 grow">
        <p className="font-semibold md:text-lg lg:text-xl">{title}</p>
        <p className="text-gray-900 text-sm md:text-md lg:text-lg dark:text-gray-100 ">
          {organization}
        </p>
      </div>
    </div>
  )
}
