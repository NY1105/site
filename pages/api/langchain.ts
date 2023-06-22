import { Message } from '@/utils/types'
import { langchainStream } from '@/utils'

export const config = {
  runtime: 'edge',
}

const handler = async (req: Request): Promise<String> => {
  try {
    const { messages } = (await req.json()) as {
      messages: Message[]
    }

    // const charLimit = 12000
    // let charCount = 0
    // let messagesToSend = []

    // for (let i = 0; i < messages.length; i++) {
    //   const message = messages[i]
    //   if (charCount + message.content.length > charLimit) {
    //     break
    //   }
    //   charCount += message.content.length
    //   messagesToSend.push(message)
    // }

    const res = await langchainStream(messages)

    return res.text()
  } catch (error) {
    console.error(error)
    return String(error)
  }
}

export default handler
