import React from "react";
import "./App.css";
import Header from "./Header.js";
// import Pencalc from "./Pencalc";
import Critcalc from "./Critcalc";

function App() {
  return (
    <div className="container">
    <Header/>
    {/* <Pencalc/> */}
    <Critcalc/>

    </div>
  );
}

export default App;