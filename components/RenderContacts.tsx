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
      <div className="flex flex-col justify-center pb-3 ">
        {contacts.map((contact) => (
          <div
            className="flex flex-col justify-center border-b-2 border-gray-300 pb-3 dark:border-gray-800"
            key={contact.label}
          >
            <div className=" my-1 flex justify-center py-1 ">
              <div className="mx-2 p-1">
                <img
                  src={contact.image}
                  alt={contact.label}
                  className="aspect-square w-12 rounded-xl bg-white hover:cursor-pointer md:w-20"
                  onClick={contact.function}
                ></img>
              </div>
              <div className=" mx-1 flex grow flex-col justify-center overflow-hidden hover:cursor-pointer">
                <div
                  className={`${
                    contact.label == copying ? 'bg-green-300' : ''
                  } rounded-md p-1 text-center font-semibold sm:bg-transparent sm:text-left md:text-lg lg:text-xl`}
                  onClick={contact.function}
                >
                  {contact.label}
                </div>
                <div className="flex max-h-6">
                  <div
                    className="md:text-md hidden h-4 text-sm text-gray-900 underline hover:cursor-pointer dark:text-gray-100 sm:block lg:text-lg"
                    onClick={contact.function}
                  >
                    {contact.url}
                  </div>

                  <img
                    className={
                      contact.label == copying
                        ? 'm-0 ml-2 hidden aspect-square w-6 rounded-md bg-green-300 p-1 hover:cursor-pointer sm:block'
                        : 'm-0 ml-2 hidden aspect-square w-6 rounded-md bg-gray-200 p-1 hover:cursor-pointer hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-800 sm:block'
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
