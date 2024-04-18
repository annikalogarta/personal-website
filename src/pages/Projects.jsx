import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

import VitalWatch1 from "../assets/project_images/vital_watch_1.jpg"
import Moodify1 from "../assets/project_images/moodify_1.jpg"
import BmsCarrier1 from "../assets/project_images/bms_carrier_1.png"
import BmsCarrier2 from "../assets/project_images/bms_carrier_2.png"
import CreditCrimes1 from "../assets/project_images/credit_crimes_1.png"

const proj = [
    {
        id: 6,
        title: 'BMS Carrier',
        tools: ['Altium', 'LT Spice', 'Schematic Design', 'Component selection'],
        img: BmsCarrier2,
        description: 'Midnight Sun project - schematics and PCB layout for a batter management system (BMS) carrier, which serves as the main logic board that monitors and balance cells and their temperature by controlling AFEs and current sense.',
        link: ''
    },
    
    { 
        id: 4,
        title: 'Vital Watch',
        tools: ['C', 'STM32', 'I2C', 'UART'],
        img: VitalWatch1,
        description: 'Heart rate sensor with an STM',
        link: 'https://github.com/annikalogarta/vital_watch'
    },
    {
        id: 3, title: 'Moodify',
        tools: ['Python', 'Keras'],
        img: Moodify1,
        description: 'Convolutional neural network (CNN) model that recognizes and classifies human faces into 6 different emotions',
        link: 'https://colab.research.google.com/drive/1MiVHmjHOCt4BmHf9R4J8g7Roe5YXqJPG'
    },
    {
        id: 2,
        title: 'Credit Crimes',
        tools: ['C', 'STM32'],
        img: CreditCrimes1,
        description: 'Detective game helping players identify tax fraud',
        link: 'https://devpost.com/software/papers-please-clone'
    },
    
]
{/*
        id: 5,
        title: 'KuMahjong',
        tools: ['Javasript','React', 'Vite', 'Axios', 'Tailwind'],
        description: 'Mahjong but with a twist; modified to make studying fun.',
        link: 'https://github.com/annikalogarta/vital_watch'
*/}
{/* 
        id: 1, 
        title: 'PIARU',
        tools: ['C', 'STM32'],
        description: 'Lorem ipsum',
        link: 'https://github.com/annikalogarta/vital_watch'
*/}

export default function Projects({ mouseEnter, mouseLeave }) {

    return(
        <>
        <motion.div className=""
        
        initial={{ width: 0}} 
        animate={{ width: "100%" }} 
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}>
        <div className="text-white mb-96 sm:mx-24 px-6 sm:py-16 py-10 max-w-[85rem] mx-auto">
            <a id="projects" className="anchor"></a>
            <h2 className="inline-block duration-500 text-white text-shadow-name text-5xl  text-BlackHanSans mb-2">projects</h2>
            <p className="ml-3 mt-3">Some things that I've done or contributed to.</p>

            <div className="py-10 flex flex-wrap justify-center">
                {
                    proj.map((project) => {

                        return <ProjectCard
                        key={project.id}
                        title={project.title}
                        img={project.img}
                        link={project.link}
                        tools={project.tools}
                        description={project.description}
                        mouseEnter={mouseEnter}
                        mouseLeave={mouseLeave} />

                    }
                    )
                }

            </div>
            
        </div>
        <Footer />
        </motion.div>
        </>
    )
}