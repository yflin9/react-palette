import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import "./Palette.css";

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(400);

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox key={color.name} background={color.hex} name={color.name} />
  ));

  return (
    <>
      <div className="Palette">
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={setLevel}
          />
        </div>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    </>
  );
};

export default Palette;
