import product1Img from "../imgs/Harina000.png";
import product2Img from "../imgs/levadura.png";
import product3Img from "../imgs/CremaIndividual.png";
import product4Img from "../imgs/Micro105.jpg";

const products: object[] = [
    {
        id:1,
        productName: "Harina 000",
        price: 13700,
        stock: 45,
        img: product1Img,
        outstanding: true
    },
    {
        id:2,
        productName: "Levadura",
        price: 3200,
        stock: 20,
        img: product2Img,
        outstanding: true
    },
    {
        id:3,
        productName: "Crema ledevit",
        price: 9700,
        stock: 8,
        img: product3Img,
        outstanding: true
    },
    {
        id:4,
        productName: "Bandeja Micro 105",
        price: 65,
        stock: 9999,
        img: product4Img,
        outstanding: true
    },
]

export { products }