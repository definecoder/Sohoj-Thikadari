import './App.css'
import './pages/landingPage'
import LandingPage from './pages/landingPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/loginPage'
import SignUpPage from './pages/signupPage'
import HomePage from './pages/HomePage'

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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
