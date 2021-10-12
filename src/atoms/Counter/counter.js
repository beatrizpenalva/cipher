import React from "react";
import { useStyles } from "./Counter.styles";

const Counter = ({ value, maxValue }) => {
  const classes = useStyles();

  return (
    <p className={classes.label}>
      {value}/{maxValue}
    </p>
  );
};

export default Counter;
