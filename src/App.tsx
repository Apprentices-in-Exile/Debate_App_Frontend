import './index.css'
import { Routes, Route } from 'react-router-dom'
import FeedPage from './pages/FeedPage/FeedPage'
import AccountPage from './pages/AccountPage/AccountPage'
import HomePage from './pages/HomePage/HomePage'
import NavBar from './components/NavBar/NavBar'

function App (): JSX.Element {
  
  return (

        <div className='bg-primary min-h-screen'>
          <NavBar />
          <Routes>
            <Route path='/feed' element={<FeedPage />} />
            <Route path='/account' element={<AccountPage />} />
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
      
  )
}

export default App
