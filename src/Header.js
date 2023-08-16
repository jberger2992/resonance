import React, { useState } from "react";

function Header(props) {
  return (
    <header>
      <h1>Resonance</h1>
      <button className="btn btn-secondary" onClick={() => props.setPage("CritCalc")}>Crit</button>
      <button className="btn btn-secondary" onClick={() => props.setPage("PenCalc")}>Pen</button>
    </header>
  );
}

export default Header;
