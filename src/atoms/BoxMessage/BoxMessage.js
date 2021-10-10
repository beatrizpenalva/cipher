import React from "react";
import "./index.css";

const BoxMessage = ({ label, placeholder, spellCheck, readOnly }) => {
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
      ></textarea>
    </section>
  );
};

export default BoxMessage;
