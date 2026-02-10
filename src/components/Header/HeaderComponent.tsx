import menuIcon from "../../icons/barsIcon.svg";
import closeMenuIcon from "../../icons/crossIcon.svg";
import { useEffect, useState } from "react";

function HeaderComponent() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false); {/**Determinamos si el menú hamburguesa estará disponible */}
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); {/* Trabajamos con un booleano */}


    const openMenu = () => {
        if (isMobile === false) return;
        setMenuOpen(prev => !prev);

        // if (menuOpen === false){
        //     console.log("Se abrió el menú");
        // }else{
        //     console.log("El menú se cerró");
        // }
    }

    useEffect(()=>{
        const handleWindowResize = () => {
            const mobile = window.innerWidth < 1024;
            setIsMobile(mobile);
            
            if(!mobile){
                setMenuOpen(false);
            }
        }
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    },[])

    return (
        <div className=" h-17.5 w-screen flex flex-row items-center justify-between px-2.5 bg-white shadow-md">
            
            {/* Capa de opacidad */}
            <div 
                className={`absolute h-full w-full bg-[#0004] top-0 left-0 ${menuOpen ? " " : "hidden"}`}
                onClick={openMenu}>

            </div>
            
            {/* Title container */}
            <div className="">
                <h2 className="uppercase text-[1.2rem]">Casa Buffa</h2>
            </div>
            
            {/* Buttons container */}
            <div className="flex flex-row">
                
                <div className=" h-5 w-5">
                    <img 
                        src={menuIcon} 
                        alt="menuIcon"
                        onClick={openMenu}/>
                </div>
                <nav className={`absolute bg-white h-full w-70 left-0 top-0 border border-red-500 transition-transform duration-300 ease-in-out px-5 flex flex-row justify-between ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <ul>
                        <li className="py-0 my-5 pl-2 text-[1.2rem] border-l-3 border-black" onClick={openMenu}><a href="#">Home</a></li>
                        <li className="py-0 my-5 pl-2 text-[1.2rem] border-l-3 border-black" onClick={openMenu}>
                            <a href="#">
                                Products
                            </a>
                        </li>
                        <li className="py-0 my-5 pl-2 text-[1.2rem] border-l-3 border-black" onClick={openMenu}><a href="#">Cart</a></li>
                    </ul>
                    <div className=" py-6" onClick={openMenu}>
                        <img src={closeMenuIcon} alt="crossIcon" className="w-6 h-6"/>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default HeaderComponent