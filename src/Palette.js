import React, { useState } from "react"
import ColorBox from "./ColorBox"
import Navbar from "./Navbar"
import PaletteFooter from "./PaletteFooter"

import "./Palette.css"

const Palette = ({ palette }) => {
  const { id, colors, paletteName, emoji } = palette
  const [level, setLevel] = useState(400)
  const [format, setFormat] = useState("hex")

  const colorBoxes = colors[level].map((color) => (
    <ColorBox
      key={color.id}
      name={color.name}
      background={color[format]}
      showLink={true}
      moreURL={`${id}/${color.id}`}
    />
  ))

  return (
    <>
      <div className="Palette">
        <Navbar
          level={level}
          setLevel={setLevel}
          changeFormat={(v) => setFormat(v)}
          showSlider={true}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    </>
  )
}

export default Palette
