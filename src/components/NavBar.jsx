import { Link } from "react-router-dom"
import Icon from "../assets/logo.png"
import Pdf from "../assets/Annika_Logarta_Resume.pdf"

export default function NavBar() {
    
    return (
        <>
        <div className="fixed top-0 left-0 w-screen h-15 m-0 flex text-white bg-[#130C1E] justify-end shadow-md">
            <Link to="/" className="float-left block text-center px-7 py-5 mr-auto"><img src={ Icon } alt="Logo"  className="h-6"/></Link>
            <nav>
                <ul className="list-none overflow-hidden mr-8">
                    <div className="">
                    
                    <li className="float-right block text-center px-7 py-5 hover:text-orange text-white-glow duration-300"><a href={ Pdf } target="_blank" rel="noopener noreferrer">Resume</a></li>
                    <li className="float-right block text-center px-7 py-5 hover:text-orange text-white-glow duration-300"><Link to="/projects">Projects</Link></li>
                    </div>
                </ul>
            </nav>
            
        
        </div></>
    )
};
