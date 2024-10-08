
// props class

import React, { Component } from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

// Komponen berbasis class untuk menerima props
class App extends Component {
  render() {
    return (
      <div>
        <h1> Nama saya {this.props.name}</h1>
        <h2> Pekerjaan saya {this.props.job}</h2>
      </div>
    );
  }
}

// Komponen Data yang juga menggunakan class
class Data extends Component {
  render() {
    return (
      <div>
        <App name="Harry Potter" job="penata kelola pemerintahan" />
        <App name="Higrid" job="pelatih anjing pelacak" />
      </div>
    );
  }
}

export default Data;
