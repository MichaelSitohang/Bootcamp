import React from "react";
import ReactDOM from "react-dom";

//Buat css navigasi
const styleNav = {
  backgroundColor: "#C5B358" /* Warna latar belakang gelap */,
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" /* Bayangan bawah */,
  padding: "10px 20px" /* Padding dalam navbar */,
  color: "white" /* Warna teks */,
  textDecoration: "none" /* Menghilangkan garis bawah */,
  transition: "background-color 0.3s, color 0.3s" /* Efek transisi */,
  borderRadius: "5px" /* Membuat sudut bulat */,
};

// buat css Text berwarna putih
const styleNavT = {
  color: "white" /* Warna teks */,
  textDecoration: "none" /* Menghilangkan garis bawah */,
  padding: "10px 15px" /* Jarak dalam tautan */,
  transition: "background-color 0.3s, color 0.3s" /* Efek transisi */,
  borderRadius: "5px" /* Membuat sudut bulat */,
};

// Buat menampilkan elemen
const element = (
  <div>
    <nav style={styleNav}>
      <a href="/" style={styleNavT}>
        Index
      </a>
      <a href="/about" style={styleNavT}>
        About
      </a>
      <a href="/contact" style={styleNavT}>
        Contact
      </a>
    </nav>

    <h1>This is React</h1>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
