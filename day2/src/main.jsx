import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './App.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Projects from './Project.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <About/>
    <Skills/>
    <Projects/>
  </StrictMode>,
)
