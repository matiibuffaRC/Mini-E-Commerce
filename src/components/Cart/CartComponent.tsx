import type { Dispatch, SetStateAction } from 'react';
import { useEffect } from 'react';
import closeMenuIcon from "../../icons/crossIcon.svg";
import { useParams, useNavigate } from "react-router-dom";
// import { stringify } from 'querystring';

type CartComponentProps = {
    handleClick: () => void;
    openCart: boolean;
    setOpenCart: Dispatch<SetStateAction<boolean>>;
    cart:any;
    setCart:any;
    total:any;
    setTotal:any;
}

function CartComponent({ handleClick, openCart, cart, setCart, total, setTotal}: CartComponentProps) {

    const navigate = useNavigate();

    let sumaTotal = 0;
    useEffect(()=>{

        cart.forEach((item:any)=>{
            sumaTotal += item.total;
        })
        
        setTotal(sumaTotal);

        console.log("El total cambió: ", sumaTotal);

    },[cart])

    const changeQuantity = (signe:string, idProduct:number) => {
        setCart(
            (prevCart:any[])=>{ {/* Trabajamos el carrito con el item seleccionado */}
                const updatedCart = prevCart.map((item)=>{
                    if (item.id !== idProduct) return item; {/* Si el producto no es el buscado, seguimos */}
                    
                    {/* Else.. */}

                    const max = item.stock;
                    const current = Number(item.quantity) ?? 1; {/* Si no tiene cantidad definida, es 1 automaticamente */}
                    let action = signe === "add" ? current + 1 : current - 1;
                    if (action > max) action = max;
                    return {
                        ...item,
                        quantity: action,
                        total: Number(item.price) * action,
                    };
                })
                return updatedCart.filter(item => item.quantity > 0); {/* Devolvemos los items con al menos un pedido */}
            }
        )
        
    }

    const printProductsCart = () =>{
        if(cart.length === 0){
            return(
                <div className='text-white flex flex-col gap-2 justify-center items-center'>
                    <h3 className='text-center'>No hay productos seleccionados!</h3>
                    <div className='border border-white flex flex-row justify-center' onClick={()=>{navigate("/catalog"), handleClick()}}>
                        <a href="#" className='bg-[#FF8904] py-2 px-4 rounded-[20px] hover:bg-[#e97c00]'>
                            Catálogo
                        </a>
                    </div>
                </div>
            )
        }
        return(
            cart.map((productCart:any) =>{ 
                return(
                    <div key={productCart.id} className='bg-[#232323] p-2 flex flex-row gap-1 flex-1'> {/* Este es cada producto elegido INDIVIDUAL*/}
                        <div>
                            <img src={productCart.img} alt={`${productCart.productName} image`} className='h-30 w-30' />
                        </div>
                        <div className='flex-1 p-2 text-[1.1rem] flex flex-col gap-1'>
                            <h3>{productCart.productName}</h3>
                            <div className='flex flex-row items-center gap-1'>
                                <div className='border border-gray-500 hover:bg-gray-500 px-2 pb-1 rounded-[10px] flex flex-row justify-center items-center select-none cursor-pointer' onClick={()=>{changeQuantity('remove', productCart.id)}}>-</div>
                                <div className='text-[.9rem] flex flex-row justify-center items-center px-1 py-1.5 select-none'>{productCart.quantity}</div>
                                <div className='border border-gray-500 hover:bg-gray-500 px-2 pb-1 rounded-[10px] flex flex-row justify-center items-center select-none cursor-pointer' onClick={()=>{changeQuantity('add',productCart.id)}}>+</div>
                            </div>
                            <h4 className='text-[.8rem]'>${productCart.total}</h4>
                        </div>
                    </div>
                )
            })
        )
    }
    
    return (
        <>
            {/* Overlay */}
            <div 
                className={`fixed inset-0 z-30 h-full w-full bg-[#0004] top-0 left-0 ${openCart ? " " : "hidden"}`}
                onClick={handleClick}>
            </div>
            
            {/* Panel del carrito */}
            <div className={`h-screen w-80 bg-black fixed top-0 right-0 z-40 transition-transform duration-300 ease-in-out border-l border-[#666] ${openCart ? "translate-x-0" : "translate-x-full"} flex flex-col justify-between`}>
                <div className="flex justify-between items-center p-5 border-b border-[#666] ">
                    <h2 className="text-white text-[1.2rem]">Carrito</h2>
                    <div className="invert cursor-pointer" onClick={handleClick}>
                        <img src={closeMenuIcon} alt="Cerrar" className="w-5 h-5"/>
                    </div>
                </div>
                
                {/* Cart Items */}
                <div className={`p-5 text-white flex flex-col gap-1 h-full overflow-y-auto ${cart.length === 0 ? "justify-center" : "justify-start" }`}>
                    <div className='flex flex-col gap-2 overflow-auto pr-2'>
                        {printProductsCart()}
                    </div>
                </div>
                <div className='border border-white text-white py-5 px-3'>
                    <div className='border-t border-gray-300 flex justify-between'>
                        <h3 className='pt-1 px-1'>Total: </h3>
                        <h3 className='pt-1 px-1'>${total}</h3>
                        </div>
                </div>
            </div>
        </>
    )
}

export default CartComponent
