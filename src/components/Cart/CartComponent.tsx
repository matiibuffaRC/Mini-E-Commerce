import type { Dispatch, SetStateAction } from 'react';
import closeMenuIcon from "../../icons/crossIcon.svg";

type CartComponentProps = {
    handleClick: () => void;
    openCart: boolean;
    setOpenCart: Dispatch<SetStateAction<boolean>>;
    cart:any;
    setCart:any;
}

function CartComponent({ handleClick, openCart, cart, setCart}: CartComponentProps) {
    const changeQuantity = (signe:string, idProduct:number) => {
        setCart((prevCart:any[]) => {
            return prevCart.map(item => {
                if (item.id !== idProduct) return item;

                const max = item.stock ?? Infinity;
                const current = Number(item.quantity) ?? 1;

                let next = signe === 'add' ? current + 1 : current - 1;
                if (next < 1) next = 1;
                if (next > max) next = max;

                return {
                    ...item,
                    quantity: next,
                    total: Number(item.price) * next,
                };
            });
        });
    }

    const printProductsCart = () =>{
        return(
            cart.map((productCart:any) =>{ 
                return(
                    <div key={productCart.id} className='border border-white p-1 flex flex-row gap-1 flex-1'>
                        <div className='border border-white'>
                            <img src={productCart.img} alt={`${productCart.productName} image`} className='h-30 w-30' />
                        </div>
                        <div className='border border-white flex-1 p-2 text-[1.1rem] flex flex-col gap-1'>
                            <h3>{productCart.productName}</h3>
                            <div className='flex flex-row items-center gap-1'>
                                <div className='border border-white px-2 rounded-[10px] flex flex-row justify-center items-center select-none cursor-pointer' onClick={()=>{changeQuantity('remove', productCart.id)}}>-</div>
                                <div className='text-[.8rem] flex flex-row justify-center items-center px-1 py-1.5 '>{productCart.quantity}</div>
                                <div className='border border-white px-2 rounded-[10px] flex flex-row justify-center items-center select-none cursor-pointer' onClick={()=>{changeQuantity('add',productCart.id)}}>+</div>
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
            
            {/* Cart Panel */}
            <div className={`h-screen w-80 bg-black fixed top-0 right-0 z-40 transition-transform duration-300 ease-in-out border-l border-[#666] ${openCart ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-between items-center p-5 border-b border-[#666]">
                    <h2 className="text-white text-[1.2rem]">Carrito</h2>
                    <div className="invert cursor-pointer" onClick={handleClick}>
                        <img src={closeMenuIcon} alt="Cerrar" className="w-5 h-5"/>
                    </div>
                </div>
                
                {/* Cart Items */}
                <div className="p-5 text-white flex flex-col gap-2">
                    {printProductsCart()}
                </div>
            </div>
        </>
    )
}

export default CartComponent