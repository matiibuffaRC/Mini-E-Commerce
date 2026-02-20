import { useState, useEffect } from 'react';


function Catalog() {

    const [selected, setSelected] = useState<number | null>(null); {/* Esto se hace porque cuando no hay nada seleccionado, va un false */}
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
            arrayItems.map((item)=>{
            return (
                <div key={item.id} >
                    <p onClick={()=>handleClick(item.id)} className={`p-1 pb-0 select-none cursor-pointer ${selected === item.id ? "text-[#FF8904]" : "text-white"}`}>{item.title}</p>
                    <ul className={`overflow-hidden transition-all duration-300 ${selected === item.id ? "max-h-40 opacity-100 text-[#FF8904]" : "max-h-0 opacity-0 text-white"} `}>
                        {item.items.map((subItem)=>{
                            return (
                                <li key={subItem} className={`pl-3 transition-all text-gray-300 duration-250 select-none cursor-pointer ${selected === item.id ? "opacity-100" : "opacity-0"}`}>{subItem}</li>
                            )
                        })}
                    </ul>
                </div>
            )
        })
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
            {printMenu()}
        </div>
    )
}

export default Catalog