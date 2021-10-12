import React from "react";
import { useStyles } from "./Button.styles";

const Button = ({ func, action, disabled }) => {
  const classes = useStyles();

  const handleClick = () => {
    action();
  };

  return (
    <>
      <button
        className={classes.buttonFilled}
        disabled={disabled}
        onClick={() => handleClick()}
      >
        {func}
      </button>
    </>
  );
};

export default Button;
