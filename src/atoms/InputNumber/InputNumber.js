import React from "react";
import "./index.css";

const InputNumber = ({ label, placeholder, setOffState, value }) => {
  return (
    <>
      <label htmlFor="offset" className="input-sm-label">
        {label}
        <input
          className="text-field"
          id="offset"
          type="number"
          placeholder={placeholder}
          maxLength="999"
          minLength="1"
          onChange={(e) => setOffState(e.target.value)}
          value={value}
        ></input>
      </label>
    </>
  );
};

export default InputNumber;
