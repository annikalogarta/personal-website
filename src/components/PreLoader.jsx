import { useEffect } from "react"

export default function PreLoader() {
    
    
    
    return (
        <div className="preloader w-screen h-screen bg-[#130C1E] text-white fixed bottom-0 left-0 right-0 flex z-50 justify-center items-center overflow-hidden">
            <div className="blinder-container">
                <div className="blinder"></div>
                <div className="blinder"></div>
                <div className="blinder"></div>
                <div className="blinder"></div>
                <div className="blinder"></div>
            </div>

            <svg className="" viewBox="0 0 95 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M63.0164 36.2506C63.0164 16.2296 49.5653 0 32.9754 0C16.3855 0 2.93436 16.2296 2.93436 36.2506V90.2935C2.93436 91.2354 3.66185 92 4.55809 92H15.1386C16.6499 92 17.8761 90.7112 17.8761 89.123V36.5856C17.8761 25.4223 24.6373 17.5519 32.9754 17.5519C41.3135 17.5519 48.0747 25.4223 48.0747 36.5856V88.8707H92.2625C93.7737 88.8707 95 87.582 95 85.9937V76.0443C95 74.456 93.7737 73.1672 92.2625 73.1672H63.0164V36.2506Z" fill="#C79400"/>
            <path d="M60.0821 39.3779C60.0821 19.3569 46.6328 3.1273 30.041 3.1273C13.4493 3.1273 0 19.3569 0 39.3779V89.121C0 90.7093 1.22624 91.998 2.73748 92H12.2043C13.7155 92 14.9418 90.7112 14.9418 89.123V39.7129C14.9418 28.5496 21.703 20.6792 30.041 20.6792C38.3791 20.6792 45.1403 28.5496 45.1403 39.7129L45.1403 91.998H89.3281C90.8394 91.998 92.0656 90.7093 92.0656 89.121V79.1716C92.0656 77.5833 90.8394 76.2946 89.3281 76.2946H60.0821V39.3779Z" fill="#B72D1B"/>
            </svg>


        </div>
        
    )
}