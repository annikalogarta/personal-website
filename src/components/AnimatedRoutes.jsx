import Home from "../pages/Home";
import Projects from "../pages/Projects";
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes({textEnter, textLeave}) {
    const location = useLocation();
    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home mouseEnter={textEnter} mouseLeave={textLeave} />} />
          <Route path='/projects' element={<Projects mouseEnter={textEnter} mouseLeave={textLeave} />} />
        </Routes>
        </AnimatePresence>
    )
}