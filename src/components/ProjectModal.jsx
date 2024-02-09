
export default function ProjectModal({closeModal, titleM, imgM, toolsM, descriptionM, linkM}) {
    
    
    return (
        <>
        <div id="modal-semi-transparent-bg" className="text-white bg-[#000000] font-bold bg-opacity-75 h-full w-full p-10 fixed left-0 top-0 z-[1]">
                <div id="project-modal" className="bg-midnight m-auto py-8 px-10 w-4/5 rounded-xl">
                    <div>
                        <button id="close-modal" onClick={() => closeModal(false)} className="text-3xl float-right">X</button>
                        <h1 className="text-3xl">{ titleM }</h1>
                    </div>
                

                <span className="m-5 h-64 overflow-x-hidden overflow-y-auto inline-block align-bottom">{ descriptionM }</span>

                {/* Insert Details */}
                
                </div>
                
            </div>
        </>
    )
}