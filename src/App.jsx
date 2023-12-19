import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homePage/HomePage'
import User from './pages/userSide/User'
import Analytics from './pages/Analytics'
import ApplyJob from './pages/userSide/ApplyJob'
import Company from './pages/userSide/Company'
import JobDetails from './components/JobDetails'
import RetentionRate from './components/analytics/RetentionRate'
import TrafficSource from './components/analytics/TrafficSource'
import ActiveUser from './components/analytics/ActiveUser'
import UserDemo from './components/analytics/UserDemo'
import DeviceType from './components/analytics/DeviceType'
import SuccessFailure from './components/analytics/SuccessFailure'
import JobAvail from './components/analytics/JobAvail'
import UserInteraction from './components/analytics/UserInteraction'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/user' element={<User />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/apply' element={<ApplyJob />} />
          <Route path='/apply/:id' element={<JobDetails />} />
          <Route path='/company' element={<Company />} />
          <Route path='/analytics/retention-rate' element={<RetentionRate />} />
          <Route path='/analytics/traffic-source' element={<TrafficSource />} />
          <Route path='/analytics/active-user' element={<ActiveUser />} />
          <Route path='/analytics/user-demo' element={<UserDemo />} />
          <Route path='/analytics/device-type' element={<DeviceType />} />
          <Route path='/analytics/success-failure' element={<SuccessFailure />} />
          <Route path='/analytics/job-avail' element={<JobAvail />} />
          <Route path='/analytics/user-interaction' element={<UserInteraction />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
