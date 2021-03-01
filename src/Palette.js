import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";

import "./Palette.css";

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(400);

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox key={color.name} background={color.hex} name={color.name} />
  ));

  return (
    <>
      <div className="Palette">
        <Navbar level={level} setLevel={setLevel} />
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    </>
  );
};

export default Palette;
