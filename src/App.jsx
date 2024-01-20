import './App.css'
import NavBar from "./components/navBar"
import Home from "./pages/Home"
import About from "./pages/About"
import Footer from "./pages/Footer"

function App() {

  return (
    <>
      <p id="top">top</p>
      <div className="flex">
        <NavBar />
        
      </div>
      <Home />
      <About />
      <Footer />
    </>
  )
}

export default App
