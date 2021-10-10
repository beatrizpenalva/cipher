import React from "react";
import "./index.css";

const RadioButton = ({ method }) => {
  return (
    <>
      <label htmlFor={method} class="radio-button">
        <input type="radio" name="method" value={method} id={method}></input>
        <span>{method}</span>
      </label>
    </>
  );
};

export default RadioButton;
