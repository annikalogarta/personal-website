import Headshot from "../assets/headshot.jpg"

const About = () => {
    return (
        <>
        <div id="about" className="mx-24 mb-96 text-white">
        <img src={ Headshot } alt="headshot" className="h-96 float-right" />
            <h2 className="text-white text-5xl  text-BlackHanSans mb-2">about me :&#41;</h2>
            
            <div className="my-3 ml-4  pr-[40em] space-y-2 text-lg">
                <p>Hello there! My name is Annika, and I'm a computer engineering student at the University of Waterloo!</p>
                <p>As I progress through university and co-ops, I've started to gain an interest in firmware and embedded systems. Feel free to check out some of my projects below.</p>
            </div>
            
        </div>
            
        </>
    )
}

export default About