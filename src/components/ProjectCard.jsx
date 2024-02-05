import Placeholder from "../assets/placeholder-img-600.jpg"

export default function ProjectCard( { title = "Lorem ipsum", img =  Placeholder , tools = "N/A", description = "Dolor sit amet"} ) {
    return (
        <>
        <div className='my-8 h-[17rem] w-72 bg-white rounded-3xl shadow-2 text-midnight p-6'>
            <div className="">
                <img src={ img }  alt="" className="h-32 w-full" />
                <h3 className=" font-bold mt-2">{ title }</h3>
            </div>
            <span className="mt-2 truncate">{ description }</span>
        </div>
        </>
    )
}