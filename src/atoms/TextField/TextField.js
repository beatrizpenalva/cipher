import React from "react";
import "./index.css";

const TextField = ({ label, placeholder }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  
  return (
    <>
      <label htmlFor="offset">
        {label}
        <input
          id="offset"
          type="number"
          placeholder={placeholder}
          maxLength="1"
          minLength="999"
          onChange={(e) => handleChange(e)}
        ></input>
      </label>
    </>
  );
};

export default TextField;
