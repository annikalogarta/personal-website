import Placeholder from "../assets/placeholder-img-600.jpg"
import ProjectModal from "./ProjectModal";
import ToolsClosed from "./ToolsClosed";
import { useState } from "react";

export default function ProjectCard( { title = "Lorem ipsum", img =  Placeholder , tools = ["React"], description = "Dolor sit amet", link = "https://github.com/annikalogarta" } ) {
    
    const [openModal, setOpenModal] = useState(false)

    return (
        <>
        <button onClick={() => { setOpenModal(true); }} className='mx-[0.125rem] my-[0.125rem] h-[17rem] w-[25rem] bg-white text-midnight p-6'>

            <img src={ img }  alt="" className="h-36 w-full" />
            <div className="mt-2">
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

            <span className="mt-0 truncate float-left">{ description }</span>

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