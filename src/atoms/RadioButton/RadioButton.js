import React from "react";
import { useStyles } from "./RadioButton.styles";

const RadioButton = ({ method, action }) => {
  const classes = useStyles();

  return (
    <>
      <label htmlFor={method}>
        <input
          className={classes.radio}
          type="radio"
          name="method"
          value={method}
          id={method}
          onChange={(e) => action(e.target.value)}
        ></input>

        <span className={classes.radioButton}>{method}</span>
      </label>
    </>
  );
};

export default RadioButton;
