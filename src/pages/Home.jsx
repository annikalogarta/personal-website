import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import React from 'react';
import Pdf from "../assets/Annika_Logarta_Resume.pdf"
import MyThree from "../components/MyThree";
import Footer from "../components/Footer";

export default function Home() {

    return (
        <>
        <div className="space-y-80">
            <div className="relative">
            <MyThree />
            <div className="mx-4 px-24 pt-64 text-white">
                
                <div className="xl:float-left xl:pr-24 pt-20">
                    <p className="text-2xl pb-3 px-2">hi, i'm</p>
                    <h1 className="text-white text-shadow-name text-7xl text-BlackHanSans inline-block pt-2 mb-3 duration-500">Annika Logarta</h1>
                    <ul className="flex space-x-6 px-2 text-4xl mt-1">
                        <li className="icon-shadow hover:text-orange duration-300"><a href="https://www.linkedin.com/in/annikalogarta/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
                        <li className="hover:text-orange duration-300"><a href="https://github.com/annikalogarta" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
                        <li className="hover:text-orange duration-300"><a href="https://devpost.com/annikalogarta" target="_blank" rel="noopener noreferrer"><SiDevpost /></a></li>
                        <li><button type="button" className="bg-transparent border-2 rounded-lg mt-[-0.25em] py-2 px-4 text-lg float-right hover:text-orange hover:border-orange duration-300"><a href={ Pdf } target="_blank" rel="noopener noreferrer">Resume</a></button></li>
                    </ul>
                </div>
                <div className="xl:mt-0 mt-10 my-3 space-y-2 text-lg">
                    <p>I'm a computer engineering student at the University of Waterloo!</p>
                    <p>Currently just exploring, but I have an interest in embedded systems and robotics. In my free time, I love shooting videos and taking photos, especially when travelling. Feel free to look around. Reach me by shooting an email to <u><a href="mailto:alogarta@uwaterloo.ca">alogarta@uwaterloo.ca</a></u>.</p>

                </div>
            </div>
            </div>
            <Footer />
        </div>
        </>
    )
}
