import React from "react";
import "./index.css";

const RadioButton = ({ method }) => {
  return (
    <>
      <label htmlFor={method}>
        <input type="radio" name="method" value={method} id={method}></input>
        <span class="radio-button">{method}</span>
      </label>
    </>
  );
};

export default RadioButton;
