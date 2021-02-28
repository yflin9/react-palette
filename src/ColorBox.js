import React from "react";
import "./ColorBox.css";

const ColorBox = ({ background, name }) => {
  return (
    <div style={{ background: background }} className="ColorBox">
      <span>{name}</span>
      <span>MORE</span>
    </div>
  );
};

export default ColorBox;
