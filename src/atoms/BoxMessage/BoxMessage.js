import React from "react";
import "./index.css";

const BoxMessage = ({ label, placeholder }) => {
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
        spellCheck="true"
      ></textarea>
    </section>
  );
};

export default BoxMessage;
