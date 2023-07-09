import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import RenderContainer from './RenderContainer'

const RenderContact = () => {
  const [copying, setCopying] = React.useState('')
  const contacts = [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nicholasyanwaiyin/',
      image: '/contacts/linkedin.png',
      function: () => {
        window.open('https://www.linkedin.com/in/nicholasyanwaiyin/')
      },
    },
    {
      label: 'Github',
      url: 'https://github.com/NY1105/',
      image: '/contacts/github.png',
      function: () => {
        window.open('https://github.com/NY1105/')
      },
    },
    {
      label: 'Email',
      url: 'https://yanwaiyin1105@gmail.com',
      image: '/contacts/gmail.png',
      function: () => {
        navigator.clipboard.writeText('https://yanwaiyin1105@gmail.com')
        setCopying('Email')
      },
    },
  ]
  return (
    <RenderContainer title="Contact">
      <div className="pb-3 flex flex-col justify-center ">
        {contacts.map((contact) => (
          <div
            className="border-b-2 border-gray-300 dark:border-gray-800 pb-3 flex flex-col justify-center"
            key={contact.label}
          >
            <div className=" flex justify-center my-1 py-1 ">
              <div className="mx-2 p-1">
                <img
                  src={contact.image}
                  alt={contact.label}
                  className="w-12 md:w-20 hover:cursor-pointer bg-white rounded-xl aspect-square"
                  onClick={contact.function}
                ></img>
              </div>
              <div className=" flex flex-col justify-center mx-1 grow overflow-hidden hover:cursor-pointer">
                <div
                  className={`${contact.label == copying?'bg-green-300':''} sm:bg-transparent text-center sm:text-left rounded-md p-1 font-semibold md:text-lg lg:text-xl`}
                  onClick={contact.function}
                >
                  {contact.label}
                </div>
                <div className="flex max-h-6">
                  <div
                    className="hidden sm:block text-gray-900 text-sm h-4 underline md:text-md lg:text-lg dark:text-gray-100 hover:cursor-pointer"
                    onClick={contact.function}
                  >
                    {contact.url}
                  </div>

                  <img
                    className={
                      contact.label == copying
                        ? 'hidden sm:block w-6 m-0 ml-2 rounded-md p-1 bg-green-300 hover:cursor-pointer aspect-square'
                        : 'hidden sm:block w-6 m-0 ml-2 rounded-md p-1 bg-gray-200 dark:bg-gray-500 hover:bg-gray-300 dark:hover:bg-gray-800 hover:cursor-pointer aspect-square'
                    }
                    src="/utils/copy.svg"
                    onClick={() => {
                      navigator.clipboard.writeText(contact.url)
                      setCopying(contact.label)
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </RenderContainer>
  )
}

export default RenderContact
