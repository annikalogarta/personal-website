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
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    }
  }

  return (
    <>
      
      <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Router>
        

      <motion.div
      className='cursor z-[100]'
      variants={variants}
      animate={"default"}
      />
        
    </>
  )
}
