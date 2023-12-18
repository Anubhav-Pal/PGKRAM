import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homePage/HomePage'
import User from './pages/userSide/User'
import Analytics from './pages/Analytics'
import ApplyJob from './pages/userSide/ApplyJob'
import Company from './pages/userSide/Company'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/user' element={<User />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/apply' element={<ApplyJob/>}/>
          <Route path='/company' element={<Company/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
