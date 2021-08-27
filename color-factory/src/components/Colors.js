import React from "react";
import { Link } from "react-router-dom";
import "./styles/Colors.css";

function Colors({ colors }) {
  const links = Object.keys(colors).map((color) => (
    <li className="Colors-links" key={color}>
      <Link className="Colors-links" to={`/colors/${color}`}>
        {color}
      </Link>
    </li>
  ));
  return (
    <div className="Colors-container">
      <h1>Welcome to Color Factory</h1>
      <button className="Colors-btn">
        <Link className="Colors-link" to="colors/new">
          Add a Color
        </Link>
      </button>
      <ul>{links}</ul>
    </div>
  );
}

export default Colors;
