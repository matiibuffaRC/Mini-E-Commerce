// import React from 'react'
import CaruselComponent from "../Carusel/CaruselComponent";
import CaruselTextsComponent from "../CaruselTexts/CaruselTextsComponent";
import CaruselProductsComponent from "../CaruselProducts/CaruselProductsComponent";
import casaBuffa from "../../assets/imgs/casaBuffaLogo.png"
import { CaruselImages } from "../../assets/data/CaruselImages.ts";
import { products } from "../../assets/data/Products.ts";
import { texts } from "../../assets/data/TextsCarusel.ts";
import "../Animations/animations.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


function MainComponent() {
    
    const [visible, setVisible] = useState(false);
    const productsRef = useRef<HTMLDivElement>(null); {/* Con esto estamos haciendo referencia a una DIV que todavía no existe */}

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (productsRef.current) {
            observer.observe(productsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    function printProducts(){
        return products.filter((product:any)=>product.outstanding)
                .map((product:any)=>{
                    return (
                        <div key={product.id} className="product-container max-w-70 md:max-w-60 bg-[#eee] p-2">
                            <div className="w-50 h-50 md:h-35 md:w-35 lg:w-45 lg:h-45 flex flex-row justify-center items-center">
                                <img src={product.img} alt="Product image" className="w-full h-full object-cover hover:scale-105 duration-100 ease-in"/>
                            </div>
                            <div className="text-black p-1">
                                <Link to={`/producto/${product.id}`}>
                                    <h3 className="text-[1.1rem] md:text-[.9rem] py-1">{product.productName}</h3>
                                </Link>
                                <p className="text-[.9rem] md:text-[.8rem] text-[#333]">Desde:</p>
                                <p className="text-[.8rem] md:text-[.8rem]">${product.price}</p>
                            </div>
                        </div>
                )
            })
        
    }
    
    const productosDestacados = products.filter((product)=>product.outstanding);

    return (
        <div className="pt-18 bg-black w-full min-h-screen flex flex-col items-center text-white">
            <div className="py-1 h-8 w-full bg-[#FF8904]">
                <CaruselTextsComponent texts={texts}></CaruselTextsComponent>
            </div> {/* Franja naranja pensada para carusel de textos */}
            <div className="bg-[url('/imgs/gondola.jpg')] bg-cover bg-center w-full h-100 md:h-150 relative">
                <div className="absolute inset-0 bg-orange-500/40">

                </div>
            </div>
            <div className="my-5 md:my-10 flex flex-col justify-center items-center md:flex-row lg:w-5xl">
                <div className="md:flex-1 flex flex-row justify-center items-center md:ml-10 lg:ml-25">
                    <img src={casaBuffa} alt="Casa Buffa logo" className="hidden md:inline w-50 md:w-75"/>
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
            
            <div className="my-10 flex flex-col justify-center items-center md:max-w-3xl lg:w-5xl ">
                <h2 className="bg-orange-400 max-w-70 md:max-w-200 text-center text-[1.3rem] md:text-[1.5rem] py-1 px-5 m-2 md:m-3 text-wrap">Nuestros destacados del momento</h2>
                <div className="md:hidden">
                    <CaruselProductsComponent products={productosDestacados}></CaruselProductsComponent>
                </div>
                
                <div ref={productsRef}className={`hidden md:flex flex-row justify-center items-center gap-1 md:gap-3 md:m-4 ${visible ? "fade-down" : "opacity-0"}`}> 
                    {printProducts()}
                </div>
                
            </div>
        </div>
    )
}

export default MainComponent