import HeaderComponent from "./components/Header/HeaderComponent";
// import MainComponent from "./
import FooterComponent from "./components/Footer/FooterComponent";
import { Routes, Route } from "react-router-dom";


import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/producto/:id" element={<ProductPage />} />          
      </Routes>
      
      <FooterComponent></FooterComponent>
    </>
  )
}

export default App
