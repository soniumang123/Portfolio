import React from 'react'
import Home from './pages/Home.jsx'
import Navbar from './pages/Navbar.jsx'
import About from './pages/About.jsx'
import TechSkill from './pages/TechSkill.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'


const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <TechSkill/>
    <Projects/>
    <Contact/>
    
   
    </>
  )
}

export default App