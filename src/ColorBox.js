import React from "react";
import "./ColorBox.css";

const ColorBox = ({ background, name }) => {
  return (
    <div style={{ background }} className="ColorBox">
      <div className="copy-container">
        <div className="box-content">
          <span className="color-name">{name}</span>
        </div>
        <button className="copy-btn">Copy</button>
      </div>
      <span className="more">More</span>
    </div>
  );
};

export default ColorBox;
