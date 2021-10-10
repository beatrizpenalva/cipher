import React from "react";
import "./index.css";

const Button = ({ action }) => {
  const handleClick = () => {
    console.log("clicou");
  };

  return (
    <>
      <button className="btn-filled" onClick={() => handleClick()}>{action}</button>
    </>
  );
};

export default Button;
