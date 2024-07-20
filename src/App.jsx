import { useState } from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import About from './components/Pages/About'
import Home from './components/Pages/Home'
import Contact  from './components/Pages/Contact'
import viteLogo from '/vite.svg'

import './App.css'



function App() {
  

  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/react" element={<Contact />} />
    </Routes>
    </div>
  )
}

export default App
