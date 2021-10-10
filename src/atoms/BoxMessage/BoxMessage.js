import React from "react";
import "./index.css";

const BoxMessage = ({ label, placeholder, spellCheck, readOnly }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  
  return (
    <section className="box-message">
      <label className="input-label" htmlFor={label}>
        {label}
      </label>
      <textarea
        id={label}
        placeholder={placeholder}
        className="text-area"
        maxLength="2000"
        spellCheck={spellCheck}
        readOnly={readOnly}
        onChange={(e) => handleChange(e)}
      ></textarea>
    </section>
  );
};

export default BoxMessage;
