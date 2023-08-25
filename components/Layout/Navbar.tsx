import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { FiSun, FiMoon } from 'react-icons/fi'

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
    return currentTheme === 'light' ? (
      <FiMoon
        className="m-1 aspect-square h-6 object-scale-down"
        onClick={() => setTheme('dark')}
      />
    ) : (
      <FiSun
        className="m-1 aspect-square h-6 object-scale-down"
        onClick={() => setTheme('light')}
      />
    )
  }
  let router = useRouter()
  const buttons = [
    { label: 'Home', link: '/', priority: 1 },
    { label: 'Projects', link: '/projects', priority: 0 },
    { label: 'About', link: '/about', priority: 0 },
    { label: 'Contact', link: '/contact', priority: 0 },
  ]
  return (
    <nav className="flex w-full items-center justify-center bg-white py-4 text-black drop-shadow-md dark:bg-gray-800 dark:text-white sm:justify-start sm:px-12 md:px-16 lg:px-20">
      <div
        className="px-2 hover:cursor-pointer"
        onClick={() => {
          router.push('/')
        }}
      >
        <img
          className="aspect-square h-8 object-scale-down"
          alt="kb"
          src="/utils/kb.svg"
        ></img>
      </div>
      <div
        className="hidden px-2 text-xl text-gray-700 hover:cursor-pointer hover:text-black dark:text-gray-300 dark:hover:text-white sm:flex"
        onClick={() => {
          router.push('/')
        }}
      >
        <h1>Nicholas Yan</h1>
      </div>
      <div className=" justify-middle flex sm:grow sm:justify-end ">
        {buttons.map((button) => (
          <div
            key={button.label}
            className={`${
              button.priority === 0 ? 'block' : 'hidden sm:block'
            } mx-1 rounded-md px-3 py-2 text-sm decoration-1 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 sm:text-base sm:underline`}
            onClick={() => {
              router.push(button.link)
            }}
          >
            {button.label}
          </div>
        ))}
      </div>
      <div className="items-center justify-center rounded-md p-1 hover:cursor-pointer hover:bg-gray-100  dark:hover:bg-gray-700">
        {renderThemeChanger()}
      </div>
    </nav>
  )
}

export default Navbar
