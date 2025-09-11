import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpForm from './components/Login'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<SignUpForm />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
