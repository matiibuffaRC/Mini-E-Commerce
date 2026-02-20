import { useState, useEffect } from 'react';
import crossIcon from "../../icons/crossIcon.svg";
import threeDotsIcon from "../../icons/threeDots.svg";
import { products } from "../../assets/data/Products.ts";
import { Link } from 'react-router-dom';

function Catalog() {

    const [selected, setSelected] = useState<number | null>(null); {/* Esto se hace porque cuando no hay nada seleccionado, va un false */}
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [productsSelected, setProductsSelected] = useState<string | null>(null);

    const arrayItems = [
        {
            id: 1,
            title: "Panificación",
            items: ["Margarinas", "Dulces", "Premezclas", "Harinas"]
        },{
            id: 2,
            title: "Repostería",
            items: ["Cremas", "B", "C"]
        },{
            id: 3,
            title: "Descartables",
            items: ["Bandejas plasticas", "B", "C"]
        },{
            id: 4,
            title: "Cotillón",
            items: ["A", "B", "C"]
        }
    ]



    useEffect(()=>{
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
            if (window.innerWidth < 1024 === false){ 
                setMenuOpen(false);
            }
        }
        addEventListener("resize", handleResize);
        return () => removeEventListener("resize", handleResize);

    },[]);
    
    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
        console.log("Menu abierto:", !menuOpen);
    }


    const printMenu = () => {
        return(
            <div className={`${isMobile ? "relative" : ""}`}>
                <div onClick={()=>toggleMenu()}>
                    <img src={crossIcon} alt="Close Menu" className={`invert ${!isMobile ? "absolute right-1 top-1" : "hidden"}`}/>
                </div>
                <h3 className='pl-1 md:px-3 pt-3 text-[1.2rem] lg:pt-0'>Categorías</h3>
                {
                    arrayItems.map((item)=>{
                        return (
                            <div key={item.id} >
                                <p onClick={()=>handleClick(item.id)} className={`p-4 py-1 text-[1rem] select-none cursor-pointer hover:text-[#FF8904] ${selected === item.id ? "text-[#ff8800]" : "text-white"}`}>{item.title}</p>
                                <ul className={`overflow-hidden transition-all duration-300 ${selected === item.id ? "max-h-40 opacity-100 text-[#FF8904]" : "max-h-0 opacity-0 text-white"} `}>
                                    {item.items.map((subItem)=>{
                                        return (
                                            <li key={subItem} onClick={()=>{toggleMenu(); handleProductClick(subItem)}} className={` transition-all  duration-250 select-none cursor-pointer text-[.9rem] px-5 ${selected === item.id ? "opacity-100" : "opacity-0"} ${productsSelected === subItem  ? "text-[#b96300] font-semibold" : "text-gray-300 hover:text-[#FF8904]"}`}>{subItem}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }


    const handleClick = (indice: number) => {
        setSelected(prev => prev === indice ? null : indice);
    };

    const handleProductClick = (productType: string) => {
        setProductsSelected(prev => prev === productType ? prev : productType);
        console.log("Producto seleccionado:", productType); 
    }

    useEffect(() => {
        console.log("Selected cambió:", selected);
    }, [selected]);

    
    const printProducts = (type: string | null) => {

        const filteredProducts = type === null
            ? products
            : products.filter(product => product.type === type);

            if(filteredProducts.length === 0){
                return (
                    <div className="col-span-full flex items-center justify-center min-h-75 text-center">
                        <p className="text-lg text-gray-300">
                            ¡Lo lamentamos! Por ahora no hay nada disponible.
                        </p>
                    </div>
                    )
            }else{
                return filteredProducts.map(product => (
                <div
                    key={product.id}
                    className="bg-[#eee] transition-all duration-200 fade-down rounded-lg overflow-hidden hover:scale-101 shadow-md hover:shadow-lg"
                    >
                    <div className="w-full h-48 overflow-hidden">
                        <img
                        src={product.img}
                        alt="Product image"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    <div className="text-black p-4">
                        <Link to={`/producto/${product.id}`}>
                        <h3 className="text-[1rem] font-semibold transition-colors">
                            {product.productName}
                        </h3>
                        </Link>

                        <p className="text-sm text-gray-600 mt-2 select-none">Desde:</p>
                        <p className="text-sm font-medium select-none">${product.price}</p>
                    </div>
                </div>
            ));
            }
    }

    return (
        <div className='pt-18 bg-black min-h-screen text-white flex flex-col lg:flex-row gap-4 pb-2'>
            
            <div className='mx-4 lg:mx-0 lg:ml-4 lg:mr-0 my-4 lg:my-0 lg:border lg:border-[#666] py-3'>

                <div className="bg-[#111] p-2 relative lg:hidden flex flex-row justify-start items-center gap-1 m-2 border border-white">
                    <img src={threeDotsIcon} alt="Three dots" className='invert h-3 w-3'/>
                    <h3 onClick={toggleMenu} className='select-none cursor-pointer hover:text-[#FF8904]'>Categorías</h3>
                </div>
                
                <section className={`transition-translate duration-350 h-full border border-[#666] lg:border-none absolute lg:inline bg-black z-5 ${menuOpen ? "-translate-x-5 top-18" : "-translate-x-90 top-18"} lg:translate-x-0 lg:static`}>
                    <div className='px-3 lg:px-0'>
                        {printMenu()}
                    </div>
                </section>
                
            </div>

            <div className="flex-1 mx-4 lg:mr-5 lg:ml-0 my-4 p-5 border border-[#666]">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {printProducts(productsSelected)}
                </div>
            </div>
        </div>
    )
}

export default Catalog