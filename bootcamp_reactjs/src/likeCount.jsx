import React from "react";

class likeCount extends React.Component {
  render() {
    return <p>Jumlah Like {this.props.count}</p>;
  }
}

export default likeCount;
