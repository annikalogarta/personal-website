import Placeholder from "../assets/placeholder-img-600.jpg"

export default function ProjectCard( { title = "Lorem ipsum", img =  Placeholder , tools = "N/A", description = "Dolor sit amet", link = "https://github.com/annikalogarta"} ) {
    return (
        <>
        <div className='my-8 h-[17rem] w-72 bg-white rounded-3xl shadow-2 text-midnight p-6'>
            <img src={ img }  alt="" className="h-36 w-full" />
            <div className="mt-2">
                <span className="float-right underline"><a href={ link }>Link</a></span>
                <h3 className=" font-bold">{ title }</h3>
            </div>
            
            
            <span className="mt-2 truncate">{ description }</span>
        </div>
        </>
    )
}