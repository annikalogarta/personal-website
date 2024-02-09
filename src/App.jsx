import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from "./pages/About"
import Projects from "./pages/Projects"
import Footer from "./pages/Footer"
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"

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
        <NavBar />
      <div className='space-y-80'>

  
        <Home />
        <About />
        <Projects />
        <Footer />
      </div>

      <motion.div
      className='cursor z-[100]'
      variants={variants}
      animate={"default"}
      />
        
    </>
  )
}
