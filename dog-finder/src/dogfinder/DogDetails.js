import React from "react";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./styles/DogDetails.css";

function DogDetails({ dogs }) {
  const { name } = useParams();
  const [dog] = dogs.filter((dog) => {
    if (dog.name === name) return dog;
    else return null;
  });
  return (
    <div className="DogDetails-container">
      <h1 className="DogDetails-name">{dog.name}</h1>
      <p className="DogDetails-text">Age: {dog.age}</p>
      <ul className="DogDetails-text">
        {dog.facts.map((fact) => (
          <li key={uuid()}>{fact}</li>
        ))}
      </ul>
      <img className="DogDetails-image" src={dog.src} alt={dog.name} />
    </div>
  );
}

export default DogDetails;
