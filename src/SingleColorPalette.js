import React, { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import ColorBox from "./ColorBox"
import PaletteFooter from "./PaletteFooter"

const SingleColorPalette = ({ palette, colorId }) => {
  const [format, setFormat] = useState("hex")
  const { colors, id, paletteName, emoji } = palette

  const getShades = (palette, singleColor) => {
    let shades = []
    for (let key in colors) {
      shades = shades.concat(
        colors[key].filter((color) => color.id === singleColor)
      )
    }
    return shades.slice(1)
  }

  const colorBoxes = getShades(palette, colorId).map((color) => (
    <ColorBox key={color.name} name={color.name} background={color[format]} />
  ))

  return (
    <div className="Palette SingleColorPalette">
      <Navbar showSlider={false} changeFormat={(v) => setFormat(v)} />
      <div className="Palette-colors">
        {colorBoxes}
        <div className="go-back ColorBox">
          <Link to={`/palette/${id}`}>
            <div className="back-btn">Go back</div>
          </Link>
        </div>
      </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  )
}

export default SingleColorPalette
