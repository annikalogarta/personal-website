import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const proj = [
    { id: 1, title: 'Vital Watch', tools: ['C', 'STM32'], description: 'Lorem ipsum', link: 'https://github.com/annikalogarta/vital_watch'},
    { id: 2, title: 'Vital Watch', tools: ['C', 'STM32'], description: 'Lorem ipsum', link: 'https://github.com/annikalogarta/vital_watch'},
    { id: 3, title: 'Vital Watch', tools: ['C', 'STM32'], description: 'Lorem ipsum', link: 'https://github.com/annikalogarta/vital_watch'},
    { id: 4, title: 'Vital Watch', tools: ['C', 'STM32'], description: 'Lorem ipsum', link: 'https://github.com/annikalogarta/vital_watch'},
    { id: 5, title: 'Vital Watch', tools: ['C', 'STM32'], description: 'Lorem ipsum', link: 'https://github.com/annikalogarta/vital_watch'},
    { id: 6, title: 'Vital Watch', tools: ['C', 'STM32'], description: 'Lorem ipsum', link: 'https://github.com/annikalogarta/vital_watch'}
]

export default function Projects({ mouseEnter, mouseLeave }) {

    return(
        <>
        <motion.div className="space-y-80"
        
        initial={{ width: 0}} 
        animate={{ width: "100%" }} 
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}>
        <div className="text-white mb-96 sm:mx-24 px-6 sm:py-16 py-10 max-w-[85rem] mx-auto">
            <a id="projects" className="anchor"></a>
            <h2 className="inline-block duration-500 text-white text-shadow-name text-5xl  text-BlackHanSans mb-2">projects</h2>
            
            <div className="my-3 ml-4 text-lg">
                <p></p>
            </div>

            <div className="">
                {
                    proj.map((project) => {

                        return <ProjectCard
                        key={project.id}
                        title={project.title}
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