import { useWebSocket } from '../contexts/WebSocketContext'
import { Persona } from '../pages/FeedPage/FeedPage'
export const useSendMessage = () => {
  const webSocket = useWebSocket()

  const sendMessage = (
    topic: string | null,
    persona1: Persona | null,
    persona2: Persona | null
  ) => {
    const persona1string = `${persona1?.name}, who is ${persona1?.description}`
    const persona2string = `${persona2?.name}, who is ${persona2?.description}`
    const message = {
      action: 'conversation',
      message: [topic, persona1string, persona2string]
    }
    if (webSocket) {
      webSocket.send(JSON.stringify(message))
    } else {
      console.log('WebSocket connection not established.')
    }
  }
  return sendMessage
}
