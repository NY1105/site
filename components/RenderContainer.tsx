import { RenderContainerChildProps } from '@/utils/types'
import React from 'react'

const RenderContainer = ({
  children,
  title,
  divClassName,
  childrenClassName,
}: RenderContainerChildProps) => {
  return (
    <div
      className={`m-1 rounded-md border-2 border-gray-400 bg-gray-200 py-3 px-5 dark:border-gray-700 dark:bg-gray-900 ${
        divClassName || ''
      }`}
    >
      {title && <div className="px-1 py-2 text-2xl">{title}</div>}
      <div className={`${childrenClassName || 'flex justify-center'} `}>
        {children}
      </div>
    </div>
  )
}

export default RenderContainer
