import React, { useState } from "react"
import ColorBox from "./ColorBox"
import Navbar from "./Navbar"

import "./Palette.css"

const Palette = ({ palette }) => {
  const { colors, paletteName, emoji } = palette
  const [level, setLevel] = useState(400)
  const [format, setFormat] = useState("hex")

  const colorBoxes = colors[level].map((color) => (
    <ColorBox key={color.id} background={color[format]} name={color.name} />
  ))

  return (
    <>
      <div className="Palette">
        <Navbar
          level={level}
          setLevel={setLevel}
          changeFormat={(v) => setFormat(v)}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="Palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    </>
  )
}

export default Palette
