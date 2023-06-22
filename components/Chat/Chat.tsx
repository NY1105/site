import { Message } from '@/utils/types'
import { FC } from 'react'
import { ChatInput } from './ChatInput'
import { ChatLoader } from './ChatLoader'
import { ChatMessage } from './ChatMessage'
import React, { useEffect, useRef } from 'react'

interface Props {
  messages: Message[]
  loading: boolean
  onSend: (message: Message) => void
  onReset: () => void
}

export const Chat: FC<Props> = ({ messages, loading, onSend, onReset }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: 'smooth' })
  }
  useEffect(() => {
    scrollToBottom()
  }, [messages])
  return (
    <>
      <div className="flex flex-col rounded-lg sm:px-2 sm:p-4 sm:border border-neutral-300 " >
        <div className="overflow-y-scroll h-[30rem] scroll-smooth rounded-md">
          {messages.map((message, index) => (
            <div key={index} className="my-1 sm:my-1.5" >
              <ChatMessage message={message} />
            </div>
          ))}

          {loading && (
            <div className="my-1 sm:my-1.5">
              <ChatLoader />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        {/* <div className="mt-4 sm:mt-8 bottom-[56px] left-0 w-full"> */}
        <div className="flex-1"></div>
        <div className="">
          <ChatInput onSend={onSend} onReset={onReset} />
        </div>
      </div>
    </>
  )
}
