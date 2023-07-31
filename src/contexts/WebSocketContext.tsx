import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'

interface WebSocketContextType extends WebSocket {
  send: (data: string) => void
  messages: string[] // State to hold received messages
  isConnected: boolean // State to track WebSocket connection status
}

const WebSocketContext = createContext<WebSocketContextType | null>(null)

interface WebSocketProviderProps {
  url: string
  children: React.ReactNode
}

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({
  url,
  children
}) => {
  const [webSocket, setWebSocket] = useState<WebSocketContextType | null>(null)
  const [messages, setMessages] = useState<string[]>([]) // State to hold received messages
  const [isConnected, setIsConnected] = useState<boolean>(false) // State to track WebSocket connection status

  useEffect(() => {
    const ws = new WebSocket(url)

    ws.onopen = () => {
      console.log('WebSocket connection is open.')
      setWebSocket({
        ...ws,
        send: (data: string) => ws.send(data),
        messages: [],
        isConnected: true
      })
      setIsConnected(true)
    }
    
    let saveMessages = false
    let newMessage = false
    ws.onmessage = (event) => {
      const messageData = event.data
      if (messageData === '***') {
        setMessages([])
      } else if (messageData === '[') {
        saveMessages = false
      } else if (messageData === ']:') {
        saveMessages = true
        newMessage = true
      } else {
        if (saveMessages === true && !newMessage) {
          setMessages((prevMessages) => {
            const lastMessage = prevMessages[prevMessages.length - 1]
            const updatedLastMessage = lastMessage + messageData
            return [
              ...prevMessages.slice(0, prevMessages.length - 1),
              updatedLastMessage
            ]
          })
        } else if (saveMessages && newMessage) {
          setMessages((prevMessages) => [...prevMessages, messageData])
          newMessage = false
        }
      }
    }

    ws.onclose = () => {
      console.log('WebSocket connection is closed.')
      setWebSocket(null)
      setIsConnected(false)
    }

    ws.onerror = (error) => {
      console.error('WebSocket error:', error)
      setWebSocket(null)
      setIsConnected(false)
    }


    return () => {
      ws.close()
    }
  }, [url])

  // Create a new object with the required properties
  const contextValue: WebSocketContextType | null = webSocket
    ? {
        ...(webSocket as WebSocketContextType),
        messages,
        isConnected
      }
    : null

  return (
    <WebSocketContext.Provider value={contextValue}>
      {children}
    </WebSocketContext.Provider>
  )
}

export const useWebSocket = (): WebSocketContextType | null => {
  return useContext(WebSocketContext)
}
