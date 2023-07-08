import { Message } from '@/utils/types'
import { TbCircleArrowUpFilled } from 'react-icons/tb'
import { AiOutlineClear } from 'react-icons/ai'
import { FC, KeyboardEvent, useEffect, useRef, useState } from 'react'

interface Props {
  onSend: (message: Message) => void
  onReset: () => void
}

export const ChatInput: FC<Props> = ({ onSend, onReset }) => {
  const [content, setContent] = useState<string>()

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    if (value.length > 4000) {
      alert('Message limit is 4000 characters')
      return
    }

    setContent(value)
  }

  const handleSend = () => {
    if (!content) {
      // alert('Please enter a message')
      return
    }
    onSend({ role: 'user', content })
    setContent('')
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = 'inherit'
      textareaRef.current.style.height = `${textareaRef.current?.scrollHeight}px`
    }
  }, [content])

  return (
    <div className="flex min-h-[44px] rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-300 border-2 border-neutral-200 bg-[#3b3b3b]">
      <div className="flex-1">
        <textarea
          ref={textareaRef}
          className=" px-4 py-2 w-full rounded-lg focus:outline-none "
          style={{ resize: 'none' }}
          placeholder="Type a message..."
          value={content}
          rows={1}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="pr-1">
        <button onClick={() => handleSend()}>
          <TbCircleArrowUpFilled className="m-1 h-8 w-8 hover:cursor-pointer rounded-full p-1 bg-blue-500 text-white hover:opacity-80" />
        </button>
        <button onClick={() => onReset()}>
          <AiOutlineClear className="m-1 h-8 w-8 hover:cursor-pointer rounded-full p-1 bg-blue-500 text-white hover:opacity-80" />
        </button>
      </div>
    </div>
  )
}
