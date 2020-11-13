import React from "react";
import "./button.css";

export const Button = ({ label, handleClick, item }) => {
  return (
    <button className="btn" onClick={() => handleClick(item ? item : {})}>
      {label}
    </button>
  );
};
