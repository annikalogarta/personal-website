import './App.css'
import NavBar from "/components/NavBar"
import Home from "/pages/Home"
import About from "/pages/About"
import Projects from "/pages/Projects"
import Footer from "/pages/Footer"

function App() {

  return (
    <>
        <NavBar />
      <div className='space-y-80'>

  
        <Home />
        <About />
        <Projects />
        <Footer />
      </div>
        
    </>
  )
}

export default App
