import HeaderComponent from "./components/Header/HeaderComponent";
import ScrollToTop from "./components/ScrollToTop/ScrollToTopComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";


import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import Catalog from "./pages/Catalog/Catalog";

function App() {

  const [cart, setCart] = useState<any[]>([]);

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <ScrollToTop /> 
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/producto/:id" element={<ProductPage cart={cart} setCart={setCart} />}/>  
          <Route path="/catalog" element={<Catalog />} />        
      </Routes>
      
      <FooterComponent></FooterComponent>
    </>
  )
}

export default App
