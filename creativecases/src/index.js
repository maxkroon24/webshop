import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ItemInfo from "./pages/ItemInfo";
import React from "react";
import CartContextProvider from './CartContext'
export default function App() {
  return (
  <CartContextProvider>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/products/:slug" element={<ItemInfo />} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);