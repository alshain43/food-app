import React from "react";
import { Route, Routes, Navigate } from "react-router";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";

const Routers = () => {
  return (
    <Routes>
   
    <Route path="/" element={<Navigate to="/home" />} />
    
      <Route path="/home" element={<Home/>} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    
  
    <Route path="/login" element={<Login/>}/>
    </Routes>
  );
};

export default Routers;
