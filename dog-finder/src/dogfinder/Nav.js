import React from "react";
import { Link } from "react-router-dom";
import "./styles/Nav.css";

function Nav({ dogs }) {
  return (
    <nav className="Nav-bar">
      {dogs.map((dog) => (
        <p key={dog.name}>
          <Link className="Nav-link" to={`/dogs/${dog.name}`}>
            {dog.name}
          </Link>
        </p>
      ))}
    </nav>
  );
}

export default Nav;
