import RenderContainer from '@/components/RenderContainer'
import { useRouter } from 'next/router'
import React from 'react'

const wildcard = () => {
  const router = useRouter()
  return (
    <RenderContainer title="Error!">
      <div>
        The page you are looking for could not be found.{' '}
        <span
          className="text-blue-500 underline hover:cursor-pointer"
          onClick={() => {
            router.push('/')
          }}
        >
          Return to Home
        </span>{' '}
      </div>
    </RenderContainer>
  )
}

export default wildcard
