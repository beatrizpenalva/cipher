import React from "react";
import "./index.css";

const TextField = ({ label, placeholder }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

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
          onChange={(e) => handleChange(e)}
        ></input>
      </label>
    </>
  );
};

export default TextField;
