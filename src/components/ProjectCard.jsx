import Placeholder from "../assets/placeholder-img-600.jpg";
import ProjectModal from "./ProjectModal";
import ToolsClosed from "./ToolsClosed";
import { useState } from "react";

export default function ProjectCard( { title = "Lorem ipsum", img =  Placeholder , tools = ["React"], description = "Dolor sit amet", link = "https://github.com/annikalogarta", mouseEnter, mouseLeave } ) {
    
    const [openModal, setOpenModal] = useState(false)

    return (
        <>
        <button onClick={() => { setOpenModal(true); }} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className='relative mx-[0.125rem] my-[0.125rem] h-[17.5rem] w-[23rem] bg-white text-midnight duration-500 hover:bg-midnight'>
        
            <img src={ img }  alt="" className="block object-cover h-full w-full hover:opacity-0" />
            <div className="absolute top-0 bottom-0 left-0 right-0 w-full bg-[#000000]/[0.50] opacity-0 hover:opacity-100 project-card duration-300 p-6 text-white">
                <div className="text-left">
                    <p className="text-white font-bold text-md">{title}</p>
                    <p className="underline"><a href={link}>Link</a></p>
                    <p className="mt-2">{description}</p>
                </div>
                
            </div>
         {/*   <div className="mt-2">
                <span className="float-right underline"><a href={ link }>Link</a></span>
                <h3 className="text-left font-bold">{ title }</h3>
            </div>
            
            <div className="flex space-x-1 text-sm my-1 ml-[-0.25rem] truncate">
                {
                    tools.map((oneTool) => {
                        <ToolsClosed
                        tool={oneTool} />
                    })
                }

            </div>

            <span className="mt-0 truncate float-left">{ description }</span> */}

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