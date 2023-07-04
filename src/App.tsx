// import { useState } from 'react'
import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import FeedPage from './pages/FeedPage/FeedPage'
import AccountPage from './pages/AccountPage/AccountPage'
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/feed' element={<FeedPage />} />
      <Route path='/account' element={<AccountPage />} />
    </Routes>
  )
}

export default App
