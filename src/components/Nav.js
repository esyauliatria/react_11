import React from "react";

function Navbar(){
    return (
       <nav className="nav justify-content-center bg-light py-3">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
        <a class="nav-link" href="/produk">Produk</a>
        <a class="nav-link" href="/layanan">Layanan</a>
        <a class="nav-link" href="/contact">Contact</a>
       </nav>
    );

};

export default Navbar;