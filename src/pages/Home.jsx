import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Pdf from "../assets/AnnikaLogarta_Resume_Test.pdf"

const Home = () => {
    
    return (
        <>
            <div className=" mx-4 px-24 pt-64 pb-80 text-white">
                <p className="text-2xl pb-3 px-2">hi, i'm</p>
                <h1 className="text-white text-7xl pt-2 text-BlackHanSans">Annika Logarta</h1>
                <ul className="flex space-x-6 px-2 text-4xl mt-1">
                    <li className="hover:text-red duration-300"><a href="https://www.linkedin.com/in/annikalogarta/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
                    <li className="hover:text-red duration-300"><a href="https://github.com/annikalogarta" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
                    <li className="hover:text-red duration-300"><a href="https://devpost.com/annikalogarta" target="_blank" rel="noopener noreferrer"><SiDevpost /></a></li>
                    <li><button type="button" className="bg-transparent border-2 rounded-lg mt-[-0.25em] py-2 px-4 text-lg float-right hover:text-red hover:border-red duration-300"><a href={ Pdf } target="_blank" rel="noopener noreferrer">Resume</a></button></li>
                    
                </ul>
            </div>
            
        </>
    )
}

export default Home