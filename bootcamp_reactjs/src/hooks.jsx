import React, { useState } from "react";

// Komponen ColorCheck menggunakan functional component dengan hooks useState
function ColorCheck() {
    // State pertama untuk menyimpan warna favorit user
    const [color, setColor] = useState("red");  // "red" adalah warna default

    // State kedua untuk menyimpan detail mobil (brand, model, warna, dan tahun)
    const [car, setCar] = useState({
        brand: "Ford",     // Brand mobil
        model: "Mustang",  // Model mobil
        color: "red",      // Warna mobil
        year: 1964         // Tahun mobil
    });

    // Fungsi updateColor untuk mengganti warna mobil menjadi biru
    const updateColor = () => {
        setCar(previousState => {
            return {
                ...previousState,  // Copy semua properti mobil
                color: "blue"      // Ubah hanya warna mobil
            }
        });
    }
    
    return (
        <div>
            {/* Tampilkan informasi tentang mobil */}
            <h1>My favorite car is {car.model} it is a {car.color} !!!!!!!</h1>
            
            {/* Button untuk mengganti warna mobil menjadi biru */}
            <button type="button" onClick={updateColor}>Ganti warna mobil</button> 
            
            {/* Tampilkan warna favorit user */}
            <h1>My favorite color is {color} !!!!!!!</h1>
            
            {/* Button untuk mengubah warna favorit user */}
            <button onClick={() => setColor("blue")}>Blue</button>
            <button onClick={() => setColor("red")}>Red</button>
            <button onClick={() => setColor("green")}>Green</button>
        </div>
    );
}

// Ekspor komponen agar bisa digunakan di file lain
export default ColorCheck;
