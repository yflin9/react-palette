import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

const Navbar = ({ level, setLevel }) => {
  return (
    <nav className="Navbar">
      <div className="logo">Colorlogo</div>
      <div className="slider-container">
        <span>Brightness Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={setLevel}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
