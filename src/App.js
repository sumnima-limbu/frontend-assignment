import React from "react";
import NavBar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import NoMatchPage from "./pages/NoMatch";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import SearchPage from "./pages/SearchPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product/:productId" element={<ProductDetail />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
