import React from "react";
function Contact(){
    return(
        <div className = "bg-primary-subtle text-black p-5 min-vh-100" >
            <h1>Selamat Datang di Halaman Contact</h1>
            <h4>Anda dapat menghubungi kami untuk memesan produk/ konsultasi terkait pelayanan kami disini.</h4>
            <br></br>
            <br></br>
            <br></br>
            <a href="https://wa.me/628812881241" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-whatsapp"> Whatsapp kami</i></a>
            <br></br>
            <br></br>
            <a href="https://www.instagram.com/esyauliatrian?igsh=MWs2NzV3bWRnaWRiZg==" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"> Instagram kami</i></a>
            
            
        </div>
    );
};

export default Contact;
