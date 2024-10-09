import "./App.css";
import Navbar from "./nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import YouTubeSearch from "./youtubeAPI";
import About from "./1about";
import Contact from "./1contact";
import Home from "./1home";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/youtube" element={<YouTubeSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
