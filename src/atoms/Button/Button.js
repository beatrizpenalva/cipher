import React from "react";
import { useStyles } from "./Button.styles";

const Button = ({ func, action }) => {
  const classes = useStyles();

  const handleClick = () => {
    action();
  };

  return (
    <>
      <button className={classes.buttonFilled} onClick={() => handleClick()}>
        {func}
      </button>
    </>
  );
};

export default Button;
