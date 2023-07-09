import { Message } from '@/utils/types'
import { FC } from 'react'
import ReactMarkdown from 'react-markdown'

interface Props {
  message: Message
}

export const ChatMessage: FC<Props> = ({ message }) => {
  return (
    <div
      className={`flex flex-col ${
        message.role === 'assistant' ? 'items-start' : 'items-end'
      }`}
    >
      <div
        style={{wordBreak: "break-word"}}
        className={`flex items-center ${
          message.role === 'assistant'
            ? 'bg-white dark:bg-neutral-200 text-neutral-900'
            : 'bg-blue-500 text-white'
        }  rounded-2xl px-3 py-2 max-w-[85%] md:max-w-[67%]`}
        // style={{ overflowWrap: "anywhere" }}
      >
        <ReactMarkdown>{message.content}</ReactMarkdown>
      </div>
    </div>
  )
}
