// import React from 'react'
import CaruselComponent from "../Carusel/CaruselComponent";
import casaBuffa from "../../assets/imgs/casaBuffaLogo.png"
import { CaruselImages } from "../../assets/data/CaruselImages.ts";

function MainComponent() {
    return (
        <div className="pt-18 bg-black w-full h-screen flex flex-col items-center text-white">
            <div className="h-6 w-screen border border-orange-400 bg-[#F16022]">

            </div>
            <div className="my-5 md:my-10 flex flex-col justify-center items-center md:flex-row lg:w-5xl">
                <div className="md:flex-1 flex flex-row justify-center items-center md:ml-10 lg:ml-25">
                    <img src={casaBuffa} alt="Casa Buffa logo" className="w-50 md:w-75"/>
                </div>
                <div className="p-5 md:flex-2 md:mr-10 lg:mr-25">
                    <h2 className="text-[1.6rem] md:text-[2rem] font-bold">Casa Buffa</h2>
                    <h3 className="text-[.9rem]  md:text-[1.1rem] text-[#ccc]">
                        Somos un comercio dedicado a la materia prima de panificación, desacartables y cotillón. Con nuestras dos sucursales ubicadas en la ciudad de San Francisco y distruimos a la zonas atraves de los transportes y comisionistas de tu confianza.
                    </h3>
                </div>
            </div>
            <div className="w-screen mx-4 md:my-2.5 py-5 z-5 lg:w-5xl flex flex-row justify-center items-center">
                <CaruselComponent images={CaruselImages}></CaruselComponent> 
                {/* Estamos pasando un arreglo[] como props */}
            </div>
            
        </div>
    )
}

export default MainComponent