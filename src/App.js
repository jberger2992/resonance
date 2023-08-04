import React, { useState } from "react";
import "./App.css";
import Header from "./Header.js";
import Pencalc from "./Pencalc";

function App() {
  return (
    <div className="container">
    <Header/>
    <Pencalc/>

    </div>
  );
}

export default App;