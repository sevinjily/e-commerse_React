import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/ProductDetail";
import Error from "../pages/Error";
const Routers = () => {
  return (
    <Routes>
      <Route path=" /" element={<Navigate to="/home" />} />
      <Route path="/" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetail />} />
      <Route path="cart" element={<Cart />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routers;
