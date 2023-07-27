import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import FeedPage from './pages/FeedPage/FeedPage'
import AccountPage from './pages/AccountPage/AccountPage'
import HomePage from './pages/HomePage/HomePage'
import NavBar from './components/NavBar/NavBar'
import { WebSocketProvider } from './contexts/WebSocketContext'

function App (): JSX.Element {
  // Create the WebSocket connection when the provider mounts
  const ws = new WebSocket(
    'wss://a0ppckpw77.execute-api.us-east-2.amazonaws.com/development'
  )
  return (
    <WebSocketProvider value={ws}>
      <div className='bg-primary min-h-screen'>
        <NavBar />
        <Routes>
          <Route path='/feed' element={<FeedPage />} />
          <Route path='/account' element={<AccountPage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </WebSocketProvider>
  )
}

export default App
