import React from "react";
import { useNavigate } from "react-router-dom";
function Produk(){
    const navigate = useNavigate();

    function goTambahData() {
        navigate('/produk/add');
    }
    return(
        <div>
            <button class="btn btn-sm btn-primary" onClick={goTambahData}>Tambah data</button>
            <h1>Selamat Datang di Halaman Produk</h1>
        </div>
    );
};

export default Produk;
