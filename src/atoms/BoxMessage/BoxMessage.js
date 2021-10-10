import React from "react";
import "./index.css";

const BoxMessage = ({ label, placeholder }) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <textarea
        id={label}
        placeholder={placeholder}
        className="box-message"
        maxLength='2000'
        spellCheck='true'
      ></textarea>
    </>
  );
};

export default BoxMessage;
