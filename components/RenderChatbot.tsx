import React, { useEffect, useRef, useState } from 'react'
import RenderContainer from './RenderContainer'
import { Message } from '@/utils/types'
import { Chat } from './Chat/Chat'

const RenderChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [chatHistory, setChatHistory] = useState<String[][]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const handleSend = async (message: Message) => {
    const updatedMessages = [...messages, message]
    const updatedChatHistory = [...chatHistory, [message.content, '']]
    setMessages(updatedMessages)
    setLoading(true)
    setChatHistory(updatedChatHistory)

    // non edge

    const response = await fetch(String(process.env.NEXT_PUBLIC_API_PATH), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': String(process.env.NEXT_PUBLIC_API_KEY)
      },
      body: JSON.stringify({
        question: message.content,
        chat_history: chatHistory,
      }),
    })
    //  // langchain
    // const response = await fetch('/api/langchain', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     messages: updatedChatHistory,
    //   }),
    // })
    // // chat
    // const response = await fetch('/api/chat', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     messages: updatedMessages,
    //   }),
    // })
    if (!response.ok) {
      setLoading(false)
      alert('Something went wrong. Please try again later.')
    }

    const data = response.body

    if (!data) {
      return
    }

    setLoading(false)

    const reader = data.getReader()
    const decoder = new TextDecoder()
    let done = false
    let isFirst = true

    while (!done) {
      const { value, done: doneReading } = await reader.read()
      done = doneReading
      const chunkValue = decoder.decode(value)

      if (isFirst) {
        isFirst = false
        setMessages((messages) => [
          ...messages,
          {
            role: 'assistant',
            content: chunkValue,
          },
        ])
      } else {
        setMessages((messages) => {
          const lastMessage = messages[messages.length - 1]
          const updatedMessage = {
            ...lastMessage,
            content: lastMessage.content + chunkValue,
          }
          return [...messages.slice(0, -1), updatedMessage]
        })
      }
      setChatHistory((chatHistory) => {
        const lastChat = chatHistory[chatHistory.length - 1]
        const updatedChat = [lastChat[0], chunkValue]
        return [...chatHistory.slice(0, -1), updatedChat]
      })
    }
  }

  const handleReset = () => {
    setMessages([
      {
        role: 'assistant',
        content: `Hi there! I'm Nicholas. Nice to meet you! \nHere are some coding projects I have done. \nFeel free to take a tour, or Chat with me!`,
      },
    ])
    setChatHistory([
      [
        '',
        `Hi there! I'm Nicholas. Nice to meet you! \nHere are some coding projects I have done. \nFeel free to take a tour, or Chat with me!`,
      ],
    ])
  }

  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        content: `Hi there! I'm Nicholas. Nice to meet you! \nHere are some coding projects I have done. \nFeel free to take a tour, or Chat with me!`,
      },
    ])
    setChatHistory([
      [
        '',
        `Hi there! I'm Nicholas. Nice to meet you! \nHere are some coding projects I have done. \nFeel free to take a tour, or Chat with me!`,
      ],
    ])
  }, [])

  return (
    <RenderContainer divClassName="flex flex-col justify-center md:max-w-[50%] lg:max-w-[40%] ">
      <div className=" flex flex-col align-middle ">
        <Chat
          messages={messages}
          loading={loading}
          onSend={handleSend}
          onReset={handleReset}
        />
      </div>
    </RenderContainer>
  )
}

export default RenderChatbot
