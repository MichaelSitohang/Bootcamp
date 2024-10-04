import React from "react";
import ReactDOM from "react-dom/client";

class Counting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>Jumlah Like {this.state.count}</h1>
        <button
          onClick={() => this.setState({count: this.state.count + 1,})} > {" "} Like
        </button>
      </div>
    );
  }
}

export default Counting;
