import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  Routes,Route, Link } from 'react-router-dom'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import NavBar from './components/NavigationBar/NavBar'

 
function App() {
  

  return (
    <>
    <NavBar />
    
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    
      
    </>
  )
}

export default App
