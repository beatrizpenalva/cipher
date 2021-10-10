import React from "react";
import "./index.css";

const RadioButton = ({ method }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <label htmlFor={method}>
        <input
          type="radio"
          name="method"
          value={method}
          id={method}
          onChange={(e) => handleChange(e)}
        ></input>
        <span className="radio-button">{method}</span>
      </label>
    </>
  );
};

export default RadioButton;
