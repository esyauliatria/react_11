import React from "react";
import { useNavigate } from "react-router-dom";
function Produk(){
    const navigate = useNavigate();

    function goTambahData() {
        navigate('/produk/add');
    }
    return(
        <div className = "bg-primary-subtle text-black p-5 min-vh-100" >
            <h1 className="container text-center">Selamat Datang di Halaman Produk Kami</h1>
            <br></br>
            <bt></bt>
            <p className="container text-center">Kimi Petshop menyediakan berbagai kebutuhan hewan peliharaan dengan kualitas terjamin. Mulai dari makanan, perawatan, hingga perlengkapan harian—semuanya dipilih dengan teliti agar hewan kesayanganmu tetap sehat, nyaman, dan bahagia. Belanja mudah, harga bersahabat, dan produk selalu ready. Temukan yang terbaik untuk peliharaanmu di sini!</p>
            <br></br>
             <button className="container text-center btn btn-sm btn-primary" onClick={goTambahData}>Lihat katalog kami</button>
        </div>
    );
};

export default Produk;
