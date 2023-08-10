import { useWebSocket } from '../contexts/WebSocketContext'
import type { Persona } from '../pages/FeedPage/FeedPage'

type SendMessageFunction = (
  topic: string | null,
  persona1: Persona | null,
  persona2: Persona | null
) => void

export const useSendMessage = (): SendMessageFunction => {
  const webSocket = useWebSocket()

  const sendMessage = (
    topic: string | null,
    persona1: Persona | null,
    persona2: Persona | null
  ): void => {
    const persona1string = persona1 ? `${persona1?.name}, who is ${persona1?.description}` : 'random persona'
    const persona2string = persona2 ? `${persona2?.name}, who is ${persona2?.description}` : 'random persona'
    const message = {
      action: 'conversation',
      message: [topic, persona1string, persona2string]
    }
    if (webSocket !== null) {
      webSocket.send(JSON.stringify(message))
    } else {
      console.log('WebSocket connection not established.')
    }
  }
  return sendMessage
}
