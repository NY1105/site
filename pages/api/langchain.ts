import { Message } from '@/utils/types'
import { langchainStream } from '@/utils'

export const config = {
  runtime: 'edge',
}

const handler = async (req: Request): Promise<Response> => {
  try {
    const { messages } = (await req.json()) as {
      messages: Message[]
    }

    const charLimit = 12000
    const charCount = String(messages).length
    if (charCount > charLimit) {
      return new Response('Character limit exceeded', { status: 403 })
    }

    const res = await langchainStream(messages)

    return res
  } catch (error) {
    return new Response('Error', { status: 500 })
  }
}

export default handler
