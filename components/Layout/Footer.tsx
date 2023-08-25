import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Footer = () => {
  const currentVersion = '2.2.2'
  let router = useRouter()
  const buttons = [
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/nicholasyanwaiyin/',
    },
    { label: 'Github', link: 'https://github.com/NY1105/site' },
    { label: 'Contact', link: '/contact' },
  ]
  return (
    <div className=" px-6 py-4 sm:px-12 md:px-16 lg:px-20  w-full z-20 justify-center sm:justify-start flex border-t-2 border-gray-400 dark:border-gray-700 dark:bg-gray-800 bg-white dark:text-white text-black items-center">
      <div
        className=" hidden underline text-sm hover:cursor-pointer sm:block"
        onClick={() => {
          router.push('/versions')
        }}
      >
        Version {currentVersion}
      </div>
      <div className="flex flex-col items-center sm:grow sm:items-end ">
        <div className=" flex justify-middle ">
          {buttons.map((button) => (
            <div
              key={button.label}
              className="mx-1 px-3 py-2 text-sm sm:underline decoration-1 rounded-md  "
            >
              <Link href={button.link} className="hover:cursor-pointer">
                {button.label}
              </Link>
            </div>
          ))}
        </div>
        <div
          className="underline text-xs text-gray-500 hover:cursor-pointer sm:hidden"
          onClick={() => {
            router.push('/versions')
          }}
        >
          Version {currentVersion}
        </div>
      </div>
    </div>
  )
}

export default Footer
