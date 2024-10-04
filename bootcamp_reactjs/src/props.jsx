import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

function App(props) {
  return (
    <div>
      <h1> Nama saya {props.name}</h1>
      <h2> Pekerjaan saya {props.job}</h2>
    </div>
  );
}

function Data() {
  return (
    <div>
      <App name="Harry Potter" job="penata kelola pemerintahan" /> 
      <App name="Higrid" job="pelatih anjing pelacak" />

    </div>
  );
}

export default Data;
