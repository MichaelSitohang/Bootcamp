import React from "react";
// import CommentsClass from "./commentsClass";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./counter";

const Home = () => {
  return (
    <div>
      <h1> Halaman Home </h1>
      <p> rumah </p>

      <Provider store={store}>
        <Counter />
      </Provider>

    </div>
  );
};

export default Home;
