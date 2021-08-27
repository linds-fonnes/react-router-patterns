import React from "react";
import "./styles/Color.css";

function Color({ name, value }) {
  return (
    <div style={{ backgroundColor: value }}>
      <h1 className="Color-background">This is {name}</h1>
    </div>
  );
}

export default Color;
