import './App.css'
import './pages/landingPage'
import LandingPage from './pages/landingPage'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

function App() {
  /* create homepage */
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<LandingPage />} />
          <Route path="/login" element = {<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
