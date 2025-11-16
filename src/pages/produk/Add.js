import React from "react";
import Pet1 from "../../components/assets/pet1.jpg";
import Pet2 from "../../components/assets/pet2.jpg";
import Pet3 from "../../components/assets/pet3.jpg";

function Add(){
    return(
        <div className = "bg-primary-subtle text-black p-5 min-vh-100" >
            <h1 className="container text-center">Halaman Katalog Produk</h1>
            <h3 className="container text-center">Ini adalah data produk yang kami tawarkan untuk anabul kamu.</h3>

            <br></br>
            <br></br>
            <div className="row text-center">

  <div className="col-md-4">
    <div className="card" style={{ width: "18rem" }}>
      <img src={Pet1} className="card-img-top" alt="Foto" />
      <div className="card-body">
        <h5 className="card-title">Whiskas</h5>
        <p>Makanan untuk anak kucing usia 2- 12 bulan.</p>
        <a href="/contact" class="btn btn-primary">Beli sekarang</a>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card" style={{ width: "18rem" }}>
      <img src={Pet2} className="card-img-top" alt="Foto" />
      <div className="card-body">
        <h5 className="card-title">Royal Canin</h5>
        <p>Makanan anak kucing yang sudah Immune System Support.</p>
        <a href="/contact" class="btn btn-primary">Beli sekarang</a>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card" style={{ width: "18rem" }}>
      <img src={Pet3} className="card-img-top" alt="Foto" />
      <div className="card-body">
        <h5 className="card-title">Thankful Dog</h5>
        <p>Shampo khusus Anjing kesayangan kamu!</p>
        <a href="/contact" class="btn btn-primary">Beli sekarang</a>
      </div>
    </div>
  </div>

</div>
</div>
        
        
        
    );
}
export default Add;