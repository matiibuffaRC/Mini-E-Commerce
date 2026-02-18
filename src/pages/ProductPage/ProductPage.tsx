// import React from 'react'
import { useParams } from "react-router-dom";
import { products } from "../../assets/data/Products";


function ProductPage() {
    const { id } = useParams();
    
    const product = products.find(
        product => product.id === Number(id)
    )

    console.log(product);

    if (!product){
        return(
            <div className="pt-18 h-200 bg-red-500">
                <p>Producto no encontrado</p>
            </div>
        )
    }
    
    return (
        <div className="min-h-screen pt-18 h-200 bg-black flex flex-col items-center justify-center text-white">
            <div className="border border-white flex flex-col md:flex-row mx-5 bg-[#222]">
                <div className="border border-red-500 md:max-h-100 md:max-w-100">
                    <img src={product.img} alt={product.productName} />
                </div>
                <div className="md:w-80 p-4">
                    <h2 className="text-[1.4rem] md:text-[1.6rem]">{product.productName}</h2>
                    <h3 className="text-[.9rem] pl-1">Stock: {product.stock} unidades</h3>
                    <h3 className="text-[1.1rem] md:text-[1.6rem] pl-1">${product.price}</h3>
                </div>
            </div>
        </div>
    )
}

export default ProductPage