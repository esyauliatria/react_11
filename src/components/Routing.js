import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Produk from "../pages/Produk";
import Layanan from "../pages/Layanan";
import Contact from "../pages/Contact";
import Add from "../pages/produk/Add";
function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/produk" element={<Produk/>}/>
            <Route path="/produk/add" element={<Add/>}/>
            <Route path="/layanan" element={<Layanan/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    );
} 
export default Routing;