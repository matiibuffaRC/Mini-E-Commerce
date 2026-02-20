import { useState, useEffect } from 'react';
import crossIcon from "../../icons/crossIcon.svg";
import threeDotsIcon from "../../icons/threeDots.svg"

function Catalog() {

    const [selected, setSelected] = useState<number | null>(null); {/* Esto se hace porque cuando no hay nada seleccionado, va un false */}
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

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


    const arrayItems = [
        {
            id: 1,
            title: "Panificación",
            items: ["Margarinas", "Dulces", "Premezclas"]
        },{
            id:2,
            title: "Repostería",
            items: ["A", "B", "C"]
        },{
            id: 3,
            title: "Descartables",
            items: ["A", "B", "C"]
        },{
            id: 4,
            title: "Cotillón",
            items: ["A", "B", "C"]
        }
    ]

    const printMenu = () => {
        return(
            <div className={`${isMobile ? "relative" : ""}`}>
                <div onClick={()=>toggleMenu()}>
                    <img src={crossIcon} alt="Close Menu" className={`invert ${isMobile ? "absolute right-1 top-1" : "hidden"}`}/>
                </div>
                <h3 className='px-3 pt-3 text-[1.2rem]'>Categorías</h3>
                {
                    arrayItems.map((item)=>{
                        return (
                            <div key={item.id} >
                                <p onClick={()=>handleClick(item.id)} className={`p-4 py-1 text-[1rem] select-none cursor-pointer hover:text-[#FF8904] ${selected === item.id ? "text-[#b96300]" : "text-white"}`}>{item.title}</p>
                                <ul className={`overflow-hidden transition-all duration-300 ${selected === item.id ? "max-h-40 opacity-100 text-[#FF8904]" : "max-h-0 opacity-0 text-white"} `}>
                                    {item.items.map((subItem)=>{
                                        return (
                                            <li key={subItem} className={`pl-5 transition-all text-gray-300 duration-250 select-none cursor-pointer text-[.9rem] ${selected === item.id ? "opacity-100" : "opacity-0"}`}>{subItem}</li>
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

    useEffect(() => {
        console.log("Selected cambió:", selected);
    }, [selected]);

    return (
        <div className='pt-18 bg-black min-h-screen text-white'>
            <div>
                <div className="p-2 relative lg:hidden flex flex-row justify-start items-center gap-1 m-2">
                    <img src={threeDotsIcon} alt="Three dots" className='invert h-3 w-3'/>
                    <h3 onClick={toggleMenu} className='select-none cursor-pointer hover:text-[#FF8904]'>Categorías</h3>
                </div>
                <section className={`transition-translate duration-350 h-screen w-50 border border-[#666] bg-black z-5 ${menuOpen ? "translate-x-0 absolute top-18" : "-translate-x-90 absolute top-18"} lg:translate-x-0`}>
                    <div>
                        {printMenu()}
                    </div>
                </section>
            </div>
            <div className='border border-white h-20 mx-5'>

            </div>
        </div>
    )
}

export default Catalog