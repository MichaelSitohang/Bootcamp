//import logo from './logo.svg';
//import './App.css';

import Navbar from "./nav";
// import Comments from "./comments";
// import Data from "./props";
// import CommentsClass from "./commentsClass";
// import Counting from "./stateCount";
// import RealTimeClock from "./realTimeClock";
// import InputData from "./Input";
// import UnsplashSearch from "./apiRequest";
import YouTubeSearch from "./youtubeAPI";



function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <RealTimeClock /> */}
      {/* <UnsplashSearch/> */}
      {/* <InputData/> */}
      {/* <Comments /> */}
      {/* <Data /> */}
      {/* <CommentsClass /> */}
      {/* <Counting /> */}
      <YouTubeSearch/>
    </div>
  );
}

export default App;
