import React, { Component } from 'react';
import axios from 'axios';
import './YoutubeSearch.css'; // Impor file CSS

class YouTubeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      currentVideo: null,
      relatedVideos: [],
    };
  }

  searchVideo = async () => {
    const apiKey = 'AIzaSyAZoz3_3HAv8WfcKjtL0cFGhJpkGgyaQYw'; // Ganti dengan API Key YouTube Anda
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${this.state.query}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      const videos = response.data.items;
      this.setState({
        currentVideo: videos[0], // Set video pertama sebagai video utama
        relatedVideos: videos.slice(1), // Set video sisanya sebagai related
      });
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  render() {
    return (
      <div className="container">
        {/* Input untuk query pencarian */}
        <div className="input-container">
          <input
            type="text"
            placeholder="Search video..."
            value={this.state.query}
            onChange={(e) => this.setState({ query: e.target.value })}
          />
          <button onClick={this.searchVideo}>Search</button>
        </div>

        {/* Main Video Player */}
        {this.state.currentVideo && (
          <div className="video-player">
            <iframe
              title="Main Video"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${this.state.currentVideo.id.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* Related Videos */}
        <div className="related-videos">
          {this.state.relatedVideos.map((video) => (
            <div
              key={video.id.videoId}
              className="related-video"
              onClick={() => this.setState({ currentVideo: video })}
            >
              <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
              <p>{video.snippet.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default YouTubeSearch;
