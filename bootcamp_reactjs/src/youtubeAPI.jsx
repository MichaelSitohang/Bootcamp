import React, { useState } from "react";
import axios from "axios";
import "./YoutubeSearch.css";

const YouTubeSearch = () => {
  const [query, setQuery] = useState("");
  const [currentVideo, setCurrentVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  const searchVideo = async () => {
    const apiKey = "AIzaSyAZoz3_3HAv8WfcKjtL0cFGhJpkGgyaQYw";
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${query}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      const videos = response.data.items;
      setCurrentVideo(videos[0]); // Set video pertama sebagai video utama
      setRelatedVideos(videos.slice(1)); // Set video sisanya sebagai related videos
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div className="container">
      {/* Input untuk query pencarian */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Search video..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input"
        />
        <button className="button-youtube" onClick={searchVideo}>
          Search
        </button>
      </div>

      {/* Main Video Player */}
      {currentVideo && (
        <div className="video-player">
          <iframe
            title="Main Video"
            className="iframe"
            src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Related Videos */}
      <div className="related-videos">
        {relatedVideos.map((video) => (
          <div
            key={video.id.videoId}
            className="related-video"
            onClick={() => setCurrentVideo(video)}
          >
            <img
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
              className="related-video-image"
            />
            <p className="related-video-title">{video.snippet.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeSearch;
