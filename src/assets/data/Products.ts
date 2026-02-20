import product1Img from "../imgs/Harina000.png";
import product2Img from "../imgs/levadura.png";
import product3Img from "../imgs/CremaIndividual.png";
import product4Img from "../imgs/Micro105.jpg";

type Product = {
    id: number;
    productName: string;
    price: number;
    stock: number;
    img: string;
    type:string;
    outstanding: boolean;
}


const products: Product[] = [
    {
        id: 1,
        productName: "Harina 000",
        price: 13700,
        stock: 45,
        img: product1Img,
        type:"Harinas",
        outstanding: true
    },
    {
        id: 2,
        productName: "Levadura",
        price: 3200,
        stock: 20,
        img: product2Img,
        type:"Levaduras",
        outstanding: true
    },
    {
        id: 3,
        productName: "Crema ledevit",
        price: 9700,
        stock: 8,
        img: product3Img,
        type:"Cremas",
        outstanding: true
    },
    {
        id: 4,
        productName: "Bandeja Micro 105",
        price: 65,
        stock: 9999,
        img: product4Img,
        type:"Bandejas plasticas",
        outstanding: true
    }
    ,{
        id: 5,
        productName: "Harina 0000",
        price: 13700,
        stock: 45,
        img: product1Img,
        type:"Harinas",
        outstanding: true
    },
    {
        id: 6,
        productName: "Leudante",
        price: 13700,
        stock: 45,
        img: product1Img,
        type:"Harinas",
        outstanding: true
    },{
        id: 7,
        productName: "Harina terminada",
        price: 13700,
        stock: 45,
        img: product1Img,
        type:"Harinas",
        outstanding: true
    },{
        id: 8,
        productName: "Harina premezcla",
        price: 13700,
        stock: 45,
        img: product1Img,
        type:"Harinas",
        outstanding: true
    }
]

export { products }
export type { Product }

