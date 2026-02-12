// import React from 'react'
import CaruselComponent from "../Carusel/CaruselComponent";

function MainComponent() {
    return (
        <div className="pt-18 bg-black w-full h-screen">
            <div className="h-6 w-screen border border-orange-400 bg-[#F16022]">

            </div>
            <div className="my-2.5 p-5 z-10">
                <CaruselComponent></CaruselComponent>
            </div>
            
        </div>
    )
}

export default MainComponent