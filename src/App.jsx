import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import BackTopBtn from './components/BackTopBtn'

function App() {
  return (
    <div>
    <NavBar/>
    <Hero/>
    <About/>
    <Contact/>
    <BackTopBtn/>
    </div>
    
  )
}

export default App
