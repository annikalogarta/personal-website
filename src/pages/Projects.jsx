import ProjectCard from "../components/ProjectCard"

export default function Projects() {
    return(
        <>
        <div id="projects" className="text-white mb-96 sm:px-12 px-6 sm:py-16 py-10 max-w-[85rem] mx-auto">
            <h2 className="text-white text-5xl  text-BlackHanSans mb-2">projects</h2>
            
            <div className="my-3 ml-4 space-y-2 text-lg">
                <p>check out some of my projects</p>
                <ProjectCard />
            </div>
            
        </div>
        </>
    )
}