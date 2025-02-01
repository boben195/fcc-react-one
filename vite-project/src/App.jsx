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
      {/* <img src={reactLogo} />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originaly creted by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by META</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
        <li>test</li>
      </ul> */}
    </>
  );
}

export default App;
