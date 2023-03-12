import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const renderThemeChanger = () => {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
      setMounted(true)
    }, [])
    if (!mounted) {
      return null
    }
    const currentTheme = theme === 'system' ? systemTheme : theme
    if (currentTheme === 'light') {
      return (
        <img
          className="m-1 object-scale-down h-6 aspect-square"
          src="/utils/moon.svg"
          alt="moon"
          onClick={() => {
            setTheme('dark')
          }}
        />
      )
    } else {
      return (
        <img
          className="m-1 object-scale-down h-6 aspect-square"
          src="/utils/sun.svg"
          alt="sun"
          onClick={() => {
            setTheme('light')
          }}
        />
      )
    }
  }
  let router = useRouter()
  const buttons = [
    { label: 'Home', link: '/', priority: 1 },
    { label: 'Projects', link: '/projects', priority: 0 },
    { label: 'About', link: '/about', priority: 0 },
    { label: 'Contact', link: '/contact', priority: 0 },
  ]
  return (
    <nav className="sm:px-12 md:px-16 lg:px-20 py-4 w-full justify-center sm:justify-start flex drop-shadow-md dark:bg-gray-800 bg-white dark:text-white text-black items-center">
      <div
        className="px-2 hover:cursor-pointer"
        onClick={() => {
          router.push('/')
        }}
      >
        <img
          className="object-scale-down h-8 aspect-square"
          alt="kb"
          src="/utils/kb.svg"
        ></img>
      </div>
      <div
        className="px-2 hidden dark:text-gray-300 text-gray-700 sm:flex text-xl hover:cursor-pointer dark:hover:text-white hover:text-black"
        onClick={() => {
          router.push('/')
        }}
      >
        <h1>Nicholas Yan</h1>
      </div>
      <div className=" flex justify-middle sm:grow sm:justify-end ">
        {buttons.map((button) => (
          <div
            key={button.label}
            className={`${
              button.priority === 0 ? 'block' : 'hidden sm:block'
            } mx-1 px-3 py-2 text-sm sm:underline decoration-1 rounded-md dark:hover:bg-gray-700 hover:bg-gray-100 sm:text-base hover:cursor-pointer`}
            onClick={() => {
              router.push(button.link)
            }}
          >
            {button.label}
          </div>
        ))}
      </div>
      <div className="items-center justify-center hover:cursor-pointer rounded-md dark:hover:bg-gray-700 light:hover:bg-gray-200 p-1">
        {renderThemeChanger()}
      </div>
    </nav>
  )
}

export default Navbar
