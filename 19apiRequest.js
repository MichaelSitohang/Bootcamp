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

  // Set all images to have the same height
  setImageHeight = () => {
    this.imageRefs.forEach((img) => {
      if (img) {
        img.style.height = '200px'; // Set uniform height
        img.style.objectFit = 'cover'; // Keep aspect ratio
      }
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search image..."
          value={this.state.query}
          onChange={(e) => this.setState({ query: e.target.value })}
        />
        <button
          onClick={() => {
            this.searchImage();
            setTimeout(this.setImageHeight, 1000); // Apply height after images load
          }}
        >
          Search
        </button>

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {this.state.images.map((image, index) => (
            <img
              key={image.id}
              src={image.urls.small}
              alt={image.alt_description}
              ref={(el) => (this.imageRefs[index] = el)} // Assign ref to each image
              style={{ margin: '10px', width: 'auto' }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default UnsplashSearch;
