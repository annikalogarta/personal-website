import ProjectCard from "../components/ProjectCard"

const proj = [
    { id: 1, title: 'Vital Watch', tools: ['C', 'STM32'], description: 'Lorem ipsum', link: 'https://github.com/annikalogarta/vital_watch'}
]

export default function Projects() {

    return(
        <>
        <div className="space-y-80">
        <div className="text-white mb-96 sm:px-12 px-6 sm:py-16 py-10 max-w-[85rem] mx-auto">
            <a id="projects" className="anchor"></a>
            <h2 className="text-white text-shadow-headline text-5xl  text-BlackHanSans mb-2">projects</h2>
            
            <div className="my-3 ml-4 text-lg">
                <p></p>
            </div>

            <div className="grid grid-cols-4 gap-8">
                {
                    proj.map((project) => {

                        return <ProjectCard
                        key={project.id}
                        title={project.title}
                        link={project.link}
                        tools={project.tools}
                        description={project.description} />

                    }
                    )
                }

            </div>
            
        </div>
        <Footer />
        </div>
        </>
    )
}