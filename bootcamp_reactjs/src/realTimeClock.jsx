import React, { Component } from 'react';

class RealTimeClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  // Lifecycle method untuk memulai interval saat komponen di-mount
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000); // Update setiap 1 detik
  }

  // Lifecycle method untuk membersihkan interval sebelum komponen di-unmount
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h2>{this.state.time}</h2>
      </div>
    );
  }
}

export default RealTimeClock;
