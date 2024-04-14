import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })
  console.log(mousePosition);
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15
    },
    text: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      height: 10,
      width: 10
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      
      <Router>
      <NavBar mouseEnter={textEnter} mouseLeave={textLeave} />
        <Routes>
          <Route path='/' element={<Home mouseEnter={textEnter} mouseLeave={textLeave} />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Router>
        

      <motion.div
      className='cursor z-[100]'
      variants={variants}
      animate={cursorVariant}
      />
        
    </>
  )
}
