import React from "react";
import "./index.css";

const BoxMessage = ({
  label,
  placeholder,
  spellCheck,
  readOnly,
  action,
  value
}) => {
  
  const handleChange = (message) => {
    if (label === "Input") action(message);
  };

  return (
    <>
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
        onChange={(e) => handleChange(e.target.value)}
        value={value}
      ></textarea>
    </>
  );
};

export default BoxMessage;
