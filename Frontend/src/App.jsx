import './App.css'
import './pages/landingPage'
import LandingPage from './pages/landingPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/loginPage'
import SignUpPage from './pages/signupPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import MyFirmsPage from './pages/MyFirmsPage'

function App() {
  /* create homepage */
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<LandingPage />} />
          <Route path="/login" element = {<LoginPage />} />
          <Route path="/signup" element = {<SignUpPage />} />
          <Route path="/home" element = {<HomePage />} />
          <Route path="/profile" element = {<ProfilePage />} />
          <Route path="/firms" element = {<MyFirmsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
