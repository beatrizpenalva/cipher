import React from "react";
import "./index.css";

const RadioButton = ({ method, action }) => {
  return (
    <>
      <label htmlFor={method}>
        <input
          type="radio"
          name="method"
          value={method}
          id={method}
          onChange={(e) => action(e.target.value)}
        ></input>
        <span className="radio-button">{method}</span>
      </label>
    </>
  );
};

export default RadioButton;
