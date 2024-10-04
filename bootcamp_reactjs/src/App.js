//import logo from './logo.svg';
//import './App.css';

import Navbar from "./nav";
// import Comments from "./comments";
import Data from "./props";
import CommentsClass from "./commentsClass";
import Counting from "./stateCount";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Comments /> */}
      <Data />
      <CommentsClass />
      <Counting />
    </div>
  );
}

export default App;
