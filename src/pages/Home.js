import React from "react";

function Home() {
    return ( 
        <div className = "bg-primary-subtle text-black p-5 min-vh-100 " >
            
        <h1 className="container mb-1"> Halo!Selamat datang di Kimi PetShop</h1> 
        <p className="container py-3">Kimi Petshop adalah toko perlengkapan hewan peliharaan yang menyediakan berbagai kebutuhan untuk kucing, anjing, dan hewan kesayangan lainnya. Mulai dari makanan, vitamin, mainan, hingga layanan perawatan, Kimi Petshop hadir untuk membantu pemilik hewan merawat peliharaannya dengan produk berkualitas dan harga terjangkau. Dengan pelayanan ramah dan pilihan lengkap, Kimi Petshop menjadi tempat terpercaya untuk memenuhi segala kebutuhan hewan peliharaan Anda.</p>
        <div className="container py-5">
            <h2 className="text-center mb-4">Mengapa harus Kimi Petshop?</h2>
            <br></br>
            <div className="row text-center">
                <div className="col-md-4 mb-3">
                    <div className="p-3 shadow rounded bg-white">
                        <h5 className="fw-bold">Kualitas Produk</h5>
                        <p>Produk yang kami tawarkan tentu saja sudah teruji dan melalui QC yang ketat.</p>
                        <br></br>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="p-3 shadow rounded bg-white">
                        <h5 className="fw-bold">Layanan Ramah</h5>
                        <p>Tidak perlu khawatir saat akan bepergian jauh, Pet hotel Kimi siap menjadi solusi yang aman dan nyaman!</p>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="p-3 shadow rounded bg-white">
                        <h5 className="fw-bold">Terpercaya</h5>
                        <p>Kimi Petshop sudah terpercaya oleh ribuan customer setia kami, sehingga dapat terjamin!</p>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
        
        
        

        </div>
    );
};

export default Home;