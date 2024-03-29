import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import React from 'react';
import Pdf from "../assets/Annika_Logarta_Resume.pdf"

export default function Home() {

    return (
        <>
            <div className=" mx-4 px-24 pt-64 text-white">
                <p className="text-2xl pb-3 px-2">hi, i'm</p>
                <h1 className="text-white text-shadow-name text-7xl text-BlackHanSans inline-block pt-2 mb-3 duration-500">Annika Logarta</h1>
                <ul className="flex space-x-6 px-2 text-4xl mt-1">
                    <li className="icon-shadow hover:text-orange duration-300"><a href="https://www.linkedin.com/in/annikalogarta/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
                    <li className="hover:text-orange duration-300"><a href="https://github.com/annikalogarta" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
                    <li className="hover:text-orange duration-300"><a href="https://devpost.com/annikalogarta" target="_blank" rel="noopener noreferrer"><SiDevpost /></a></li>
                    <li><button type="button" className="bg-transparent border-2 rounded-lg mt-[-0.25em] py-2 px-4 text-lg float-right hover:text-orange hover:border-orange duration-300"><a href={ Pdf } target="_blank" rel="noopener noreferrer">Resume</a></button></li>
                    
                </ul>
            </div>
            
        </>
    )
}
