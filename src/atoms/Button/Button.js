import React from "react";
import "./index.css";

const Button = ({ func, action }) => {
  const handleClick = () => {
    action()
  };

  return (
    <>
      <button className="btn-filled" onClick={() => handleClick()}>{func}</button>
    </>
  );
};

export default Button;
