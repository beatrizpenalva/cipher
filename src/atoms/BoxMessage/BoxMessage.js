import React from "react";
import { useStyles } from "./BoxMessage.styles";

const BoxMessage = ({
  label,
  placeholder,
  spellCheck,
  readOnly,
  action,
  value,
}) => {
  const classes = useStyles();

  const handleChange = (message) => {
    if (label === "Input") action(message);
  };

  return (
    <>
      <label className={classes.label} htmlFor={label}>
        {label}
      </label>
      <textarea
        id={label}
        placeholder={placeholder}
        className={classes.textArea}
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
