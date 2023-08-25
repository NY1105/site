import { Experience } from '@/utils/types'
import router from 'next/router'

export default ({ title, organization, shortname, url, image }: Experience) => {
  return (
    <div
      className="m-2 flex w-full justify-center hover:cursor-pointer "
      onClick={() => {
        router.push(url)
      }}
    >
      <div className="mr-2 h-12 w-12 md:h-20 md:w-20">
        <img
          src={image}
          alt={shortname}
          className="aspect-square h-full rounded-full bg-neutral-100 object-scale-down dark:bg-white"
        ></img>
      </div>
      <div className="mx-1 flex flex-1 grow flex-col justify-center">
        <p className="font-semibold md:text-lg lg:text-xl">{title}</p>
        <p className="md:text-md text-sm text-gray-900 dark:text-gray-100 lg:text-lg ">
          {organization}
        </p>
      </div>
    </div>
  )
}
