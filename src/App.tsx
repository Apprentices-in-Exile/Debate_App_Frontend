import './index.css'
import { Routes, Route } from 'react-router-dom'
import FeedPage from './pages/FeedPage/FeedPage'
import AccountPage from './pages/AccountPage/AccountPage'
import HomePage from './pages/HomePage/HomePage'

function App (): JSX.Element {
  return (
      <Routes>
        <Route path="/feed" element={<FeedPage/>}/>
        <Route path="/account" element={<AccountPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
  )
}

export default App
