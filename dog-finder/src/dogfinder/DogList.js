import React from "react";
import "./styles/DogList.css";

function DogList({ dogs }) {
  return (
    <div className="DogList-container">
      {dogs.map((dog) => (
        <img
          className="DogList-image"
          key={dog.name}
          src={dog.src}
          alt={dog.name}
        />
      ))}
    </div>
  );
}

export default DogList;
