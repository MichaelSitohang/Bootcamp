import React, { Component } from 'react';
import axios from 'axios';

class UnsplashSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      images: [],
    };
    this.imageRefs = []; // Array to store refs for each image
  }

  // Fungsi untuk mencari gambar berdasarkan query
  searchImage = async () => {
    const accessKey = 'lNa2gb8H2lkFzs7aC7w_P8IlrfmCqT4K9bkolqP7OXY';
    const url = `https://api.unsplash.com/search/photos?query=${this.state.query}&client_id=${accessKey}`;

    try {
      const response = await axios.get(url);
      this.setState({ images: response.data.results });
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  // Fungsi untuk mengatur tinggi gambar yang seragam
  setImageHeight = () => {
    this.imageRefs.forEach((img) => {
      if (img) {
        img.style.height = '200px'; // Mengatur tinggi gambar yang seragam
        img.style.objectFit = 'cover'; // Menjaga rasio aspek gambar
      }
    });
  };

  render() {
    return (
      <div>
        {/* Input untuk query pencarian */}
        <input
          type="text"
          placeholder="Search image..."
          value={this.state.query}
          onChange={(e) => this.setState({ query: e.target.value })}
        />
        {/* Button untuk memulai pencarian */}
        <button
          onClick={() => {
            this.searchImage();
            setTimeout(this.setImageHeight, 1000); // Mengatur tinggi gambar setelah gambar dimuat
          }}
        >
          Search
        </button>

        {/* Div container yang menggunakan CSS Grid untuk merapikan gambar */}
        <div style={styles.gridContainer}>
          {this.state.images.map((image, index) => (
            <img
              key={image.id}
              src={image.urls.small}
              alt={image.alt_description}
              ref={(el) => (this.imageRefs[index] = el)} // Memberikan ref untuk setiap gambar
              style={styles.imageStyle}
            />
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  gridContainer: {
    display: 'grid', // Menggunakan CSS Grid
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', // Grid dengan kolom dinamis, min 200px per kolom
    gridGap: '10px', // Jarak antar gambar
    padding: '10px', // Memberikan padding di sekitar grid
  },
  imageStyle: {
    width: '100%', // Lebar gambar 100% dari grid colomnya
    height: 'auto', // Tinggi otomatis (akan diatur di setImageHeight)
    borderRadius: '8px', // Memberikan border radius pada gambar agar tampak lebih menarik
  },
};

export default UnsplashSearch;
