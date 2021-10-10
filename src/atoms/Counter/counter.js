import React from "react";
import "./index.css";

const Counter = ({ value, maxValue }) => {
  return (
    <p className="counter">
      {value}/{maxValue}
    </p>
  );
};

export default Counter;
