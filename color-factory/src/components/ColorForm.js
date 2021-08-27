import React, { useState } from "react";
import "./styles/ColorForm.css";

function ColorForm({ addColor }) {
  const INITIAL_STATE = { name: "", value: "#ff0000" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [error, setError] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    for (let data in formData) {
      if (formData[data] === "") {
        return setError(true);
      }
      setError(false);
    }
    addColor({ [formData.name]: formData.value });
    setFormData(INITIAL_STATE);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="ColorForm-form">
      <label htmlFor="name">Color Name: </label>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      ></input>
      <label htmlFor="value">Color Value: </label>
      <input
        type="color"
        id="value"
        name="value"
        value={formData.value}
        onChange={handleChange}
      ></input>
      <span className={error ? "" : "ColorForm-hidden"}>
        Color Name Input is Required!
      </span>
      <button>Add Color</button>
    </form>
  );
}

export default ColorForm;
