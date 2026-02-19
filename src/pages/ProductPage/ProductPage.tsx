// import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../assets/data/Products";
import { useState } from "react";
import arrowIcon from "../../icons/arrowIcon.svg";


    type productPageProps = {
        cart:any[];
        setCart: React.Dispatch<React.SetStateAction<any[]>>;
    }

function ProductPage({ cart, setCart }: productPageProps){

    const navigate = useNavigate();

    // Para navegar con los productos 
    const { id } = useParams();
    const product = products.find(
        product => product.id === Number(id)
    )
    
    // Trabajamos con el estado del producto para el carrito
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (signe: string) => {
        if (signe === "add" && product){ //Validamos que exista el producto y que hayan seleccionado el "agregar"
            if (quantity < product.stock){ //Que quede stock
                setQuantity(prev => prev + 1);
            }else if(quantity === product.stock){ //No dejamos agregar más si ya se alcanzó el stock disponible
                return;
            }
        }else{
            
            if (quantity === 1) return;
            
            setQuantity(prev => prev - 1);
        }
    }
    // Si no existe/no se encuentra:
    if (!product){
        return(
            <div className="pt-18 h-200 bg-red-500">
                <p>Producto no encontrado</p>
            </div>
        )
    }

    function addProductToCart(product: typeof products[0], quantity:number){
        const productToAddToCart = {
            ...product,
            quantity: quantity,
            total: quantity * product.price,
        }
        setCart(prevCart => [...prevCart, productToAddToCart]);
        console.log("Carrito: ", [...cart, productToAddToCart]);
    }
    
    return (
        <div className="min-h-screen pt-18 h-200 bg-[#111] flex flex-col items-center justify-center text-white">
            <div className="flex flex-col md:flex-row mx-5 bg-[#232323] md:w-xl lg:w-3xl p-3 gap-3 relative">
                <div className="absolute -top-6 left-0 flex flex-row justify-center items-center p-0.5 select-none cursor-pointer" onClick={()=>navigate(-1)}>
                    <img src={arrowIcon} alt="Volver" className="invert h-4 w-4"/>
                    <p className="text-[.7rem]">Volver</p>
                </div>
                <div className="md:max-h-100 md:max-w-100">
                    <img src={product.img} alt={product.productName} />
                </div>
                <div className="flex flex-col justify-around">
                    
                    <div className="md:w-80 px-4 pt-4">
                        <h2 className="text-[1.5rem] md:text-[1.6rem] border-b border-gray-400 mb-1">{product.productName}</h2>
                        <h3 className="text-[.9rem] pl-1 text-gray-400">Stock: {product.stock} unidades</h3>
                        <h3 className="text-[1.4rem] md:text-[1.6rem] pl-1 py-3 ">${product.price}</h3>
                    </div>
                    
                    <div className=" p-3 m-3 flex flex-row justify-center items-center gap-4">
                        <div className="border border-white flex flex-row gap-2 rounded-[25px]">
                            <div className="px-2 py-1 border border-white rounded-l-[25px] select-none cursor-pointer" onClick={()=>handleQuantityChange("remove")}>-</div>
                            <div className="px-2 py-1">{quantity}</div>
                            <div className="px-2 py-1 border border-white rounded-r-[25px] select-none cursor-pointer" onClick={()=>handleQuantityChange("add")}>+</div>
                        </div>
                        <div className="border border-[#FF8904] py-1 px-4 rounded-[25px] bg-[#FF8904] select-none cursor-pointer hover:bg-[#e97c00]" onClick={()=>addProductToCart(product, quantity)}>
                            Añadir al carrito
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default ProductPage