import React, { useState } from "react"
import ColorBox from "./ColorBox"
import Navbar from "./Navbar"
import PaletteFooter from "./PaletteFooter"
import { withStyles } from "@material-ui/styles"
import styles from "./styles/PaletteStyles"

const Palette = ({ palette, classes }) => {
  const { id, colors, paletteName, emoji } = palette
  const [level, setLevel] = useState(400)
  const [format, setFormat] = useState("hex")

  const colorBoxes = colors[level].map((color) => (
    <ColorBox
      key={color.id}
      name={color.name}
      background={color[format]}
      fullPalette={true}
      moreURL={`${id}/${color.id}`}
    />
  ))

  return (
    <>
      <div className={classes.Palette}>
        <Navbar
          level={level}
          setLevel={setLevel}
          changeFormat={(v) => setFormat(v)}
          showSlider={true}
        />
        <div className={classes.PaletteColors}>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    </>
  )
}

export default withStyles(styles)(Palette)
