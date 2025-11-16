import React from "react";
import grooming from "../../src/components/assets/grooming.jpg"
import petclinic from "../../src/components/assets/petclinic.jpg"
import pethotel from "../../src/components/assets/pethotel.jpg"
function Layanan(){
    return(
        <div className = "bg-primary-subtle text-black p-5 min-vh-100" >
            <h1 className="container text-center">Selamat Datang di Halaman Layanan Kimi Petshop</h1>
            <br></br>
            <br></br>
            <div className="row">

  <div className="col-md-4">
    <div className="card" style={{ width: "18rem" }}>
      <img src={grooming} className="card-img-top" alt="Foto" />
      <div className="card-body">
        <h5 className="card-title">Grooming</h5>
        <p>Grooming membantu peliharaan tetap sehat, bersih, dan tampil cantik/rapi.</p>
        <br></br>
        <a href="/contact" class="btn btn-primary">Booking</a>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card" style={{ width: "18rem" }}>
      <img src={petclinic} className="card-img-top" alt="Foto" />
      <div className="card-body">
        <h5 className="card-title">Pet Clinic</h5>
        <p>Pet clinic membantu peliharaan tetap sehat, terlindungi, dan mendapatkan perawatan medis yang tepat.</p>
        <a href="/contact" class="btn btn-primary">Booking</a>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card" style={{ width: "18rem" }}>
      <img src={pethotel} className="card-img-top" alt="Foto" />
      <div className="card-body">
        <h5 className="card-title">Pet Hotel</h5>
        <p>Pet hotel memberikan tempat aman, nyaman, dan terawasi untuk hewan peliharaan ketika ditinggal.</p>
        <br></br>
        <a href="/contact" class="btn btn-primary">Booking</a>
      </div>
    </div>
  </div>

</div>

        </div>
    );
};

export default Layanan;
