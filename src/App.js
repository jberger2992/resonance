import React, { useState } from "react";
import "./App.css";
import Header from "./Header.js";
import Pencalc from "./Pencalc";
import Critcalc from "./Critcalc";
import Homepage from "./Homepage";

function App() {

  const [page, setPage] = useState("HomePage");

  const displayPage = () => {
    if (page === "HomePage"){
      return <Homepage/>;
    }if (page === "PenCalc"){
      return <Pencalc/>;
    }if (page === "CritCalc"){
      return <Critcalc/>;
    }
  }

  return (
    <div className="container">
    <Header page = {page} setPage = {setPage}/>
    {displayPage()}
    </div>
  );
}

export default App;