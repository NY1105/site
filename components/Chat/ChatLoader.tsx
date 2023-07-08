import { TbDots } from 'react-icons/tb'
import { FC } from 'react'

interface Props {}

export const ChatLoader: FC<Props> = () => {
  return (
    <div className="flex flex-col flex-start">
      <div
        className={`flex items-center bg-neutral-200 text-neutral-900 rounded-2xl px-4 py-2 w-fit`}
        style={{ overflowWrap: 'anywhere' }}
      >
        <TbDots className="animate-pulse" />
      </div>
    </div>
  )
}
