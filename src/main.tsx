import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { WebSocketProvider, useWebSocket } from './contexts/WebSocketContext.tsx'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <WebSocketProvider url='wss://a0ppckpw77.execute-api.us-east-2.amazonaws.com/development'  >
    <React.StrictMode>
      <Router>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Router>
    </React.StrictMode>
  </WebSocketProvider>
)
