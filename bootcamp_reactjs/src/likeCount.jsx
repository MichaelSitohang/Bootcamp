import React from "react";

class likeCount extends React.Component {
  render() {
    return <h1>Jumlah Like {this.props.count}</h1>;
  }
}

export default likeCount;
