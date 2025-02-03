// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Location from "./components/Location";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="container">
          <img
            className="header-img"
            src="/src/assets/icons8-google-scholar-50.png"
            alt=""
          />
          <Header />
        </div>
        <Location />
      </div>
    </>
  );
}

export default App;
