import React, { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import ColorBox from "./ColorBox"
import PaletteFooter from "./PaletteFooter"
import { withStyles } from "@material-ui/styles"
import styles from "./styles/PaletteStyles"

const SingleColorPalette = ({ palette, colorId, classes }) => {
  const [format, setFormat] = useState("hex")
  const { colors, id, paletteName, emoji } = palette

  const getShades = (singleColor) => {
    let shades = []
    for (let key in colors) {
      shades = shades.concat(
        colors[key].filter((color) => color.id === singleColor)
      )
    }
    return shades.slice(1)
  }

  const colorBoxes = getShades(colorId).map((color) => (
    <ColorBox key={color.name} name={color.name} background={color[format]} />
  ))

  return (
    <div className={classes.Palette}>
      <Navbar showSlider={false} changeFormat={(v) => setFormat(v)} />
      <div className={classes.PaletteColors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${id}`}>
            <div>Go back</div>
          </Link>
        </div>
      </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  )
}

export default withStyles(styles)(SingleColorPalette)
