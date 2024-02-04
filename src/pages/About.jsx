import Headshot from "../assets/headshot.jpg"

export default function About() {
    return (
        <>
        
        <div className="text-white mb-96 sm:px-12 px-6 sm:py-16 py-10 max-w-[85rem] mx-auto">
        <a id="about" class="anchor"></a>
        <img src={ Headshot } alt="headshot" className="h-96 mb-8 md:float-right md:mx-4 lg:mx-20" />
            <h2 className="text-white text-5xl  text-BlackHanSans mb-2">about me :&#41;</h2>
            
            <div className="my-3 ml-4 space-y-2 text-lg">
                <p>Hello there! My name is Annika, and I'm a computer engineering student at the University of Waterloo!</p>
                <p>As I progress through university and co-ops, I've started to gain an interest in firmware and embedded systems. Feel free to check out some of my projects below.</p>
            </div>
            
        </div>
            
        </>
    )
}
