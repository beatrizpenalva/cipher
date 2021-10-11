import React from "react";
import { useStyles } from "./InputNumber.styles";

const InputNumber = ({ label, placeholder, setOffState, value }) => {
  const classes = useStyles();

  return (
    <>
      <label htmlFor="offset" className={classes.label}>
        {label}
        <input
          className={classes.textField}
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
