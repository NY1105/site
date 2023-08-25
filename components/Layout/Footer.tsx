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
    <div className=" z-20 flex w-full items-center justify-center  border-t-2 border-gray-400 bg-white px-6 py-4 text-black dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:justify-start sm:px-12 md:px-16 lg:px-20">
      <div
        className=" hidden text-sm underline hover:cursor-pointer sm:block"
        onClick={() => {
          router.push('/versions')
        }}
      >
        Version {currentVersion}
      </div>
      <div className="flex flex-col items-center sm:grow sm:items-end ">
        <div className=" justify-middle flex ">
          {buttons.map((button) => (
            <div
              key={button.label}
              className="mx-1 rounded-md px-3 py-2 text-sm decoration-1 sm:underline  "
            >
              <Link href={button.link} className="hover:cursor-pointer">
                {button.label}
              </Link>
            </div>
          ))}
        </div>
        <div
          className="text-xs text-gray-500 underline hover:cursor-pointer sm:hidden"
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
