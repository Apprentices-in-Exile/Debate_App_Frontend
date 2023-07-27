import React, { createContext, useEffect, useState, useContext } from "react";

interface WebSocketContextType extends WebSocket {
  send: (data: string) => void
}
const WebSocketContext = createContext<WebSocketContextType | null>(null);


interface WebSocketProviderProps {
  value: WebSocket
  children: React.ReactNode
}

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({
  value,
  children
}) => {

  const [webSocket, setWebSocket] = useState<WebSocketContextType|null>(null)

  useEffect(() => {
    if (value) {
      setWebSocket({
        ...value,
        send: (data) => value.send(data)
      })

      // Close the WebSocket connection when the provider unmounts
      return () => {
        value.close()
      }
    }
  }, [value])

  useEffect(() => {
    if (webSocket) {
      // WebSocket onmessage event handler
      webSocket.onmessage = (event) => {
        // Handle the received message here
        console.log('Received message:', event.data)
      }
    }
  }, [webSocket])

  const sendMessage = (data: string) => {
  if (webSocket) {
    webSocket.send(data)
  }

}
  return (
    <WebSocketContext.Provider value={webSocket}>
      {children}
    </WebSocketContext.Provider>
  );
};


export const useWebSocket = (): WebSocketContextType|null => {
  return useContext(WebSocketContext);
};
