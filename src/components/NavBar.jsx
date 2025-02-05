import { Link } from "react-router-dom"
import Icon from "../assets/logo.png"
import Pdf from "../assets/Annika_Logarta_Resume.pdf"

export default function NavBar({ mouseEnter, mouseLeave }) {
    
    return (
        <>
        <div className="fixed z-50 top-0 left-0 w-screen h-15 m-0 flex text-white bg-[#130C1E] justify-end shadow-md">
            <Link to="/" className="float-left block text-center px-7 py-5 mr-auto glow-logo duration-300" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}><img src={ Icon } alt="Logo"  className="h-6"/></Link>
            <nav>
                <ul className="list-none overflow-hidden mr-8">
                    <div className="">
                    
                    <li className="float-right block text-center px-7 py-5 hover:text-orange text-white-glow duration-300" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}><a href={ Pdf } target="_blank" rel="noopener noreferrer">Resume</a></li>
                    <li className="float-right block text-center px-7 py-5 hover:text-orange text-white-glow duration-300" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}><Link to="/projects">Projects</Link></li>
                    </div>
                </ul>
            </nav>
            
        
        </div></>
    )
};
