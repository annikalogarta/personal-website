import Placeholder from "../assets/placeholder-img-600.jpg"
import ProjectModal from "./ProjectModal";
import { useState } from "react";

export default function ProjectCard( { title = "Lorem ipsum", img =  Placeholder , tools = ["React"], description = "Dolor sit amet", link = "https://github.com/annikalogarta"} ) {
    
    const [openModal, setOpenModal] = useState(false)

    return (
        <>
        <button onClick={() => { setOpenModal(true); }} className='my-8 h-[17rem] w-72 bg-white rounded-3xl shadow-2 text-midnight p-6'>

            <img src={ img }  alt="" className="h-36 w-full" />
            <div className="mt-2">
                <span className="float-right underline"><a href={ link }>Link</a></span>
                <h3 className="font-bold">{ title }</h3>
            </div>
            
            <ul className="flex space-x-1 over text-sm my-1 ml-[-0.25rem] truncate">
                <li className="bg-midnight text-white rounded-xl py-0.5 px-2">Vite</li>
                <li className="bg-midnight text-white rounded-xl py-0.5 px-2">ReactJS</li>
                <li className="bg-midnight text-white rounded-xl py-0.5 px-2">TailwindCSS</li>
                <li className="bg-midnight text-white rounded-xl py-0.5 px-2">JavaScript</li>
                <li className="bg-midnight text-white rounded-xl py-0.5 px-2">Axios</li>
            </ul>

            <span className="mt-2 truncate float-left">{ description }</span>

        </button>
            
        {openModal && <ProjectModal
            closeModal={ setOpenModal }
            titleM={ title }
            imgM={ img }
            toolsM={ tools }
            descriptionM={ description }
            linkM={ link }  />}
        </>
    )
}