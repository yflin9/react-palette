import React from "react"
import DeleteIcon from "@material-ui/icons/Delete"
import styles from "./styles/MiniPaletteStyles"
import { withStyles } from "@material-ui/styles"

const MiniPalette = ({
  classes,
  colors,
  paletteName,
  emoji,
  handleClick,
  paletteId,
  deletePalette,
}) => {
  const miniColorBoxes = colors.map((color) => (
    <div
      key={color.name}
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
    ></div>
  ))

  const handleDelete = (e) => {
    e.stopPropagation()
    deletePalette(paletteId)
  }

  return (
    <div className={classes.root} onClick={handleClick}>
      <DeleteIcon className={classes.deleteIcon} onClick={handleDelete} />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  )
}

export default withStyles(styles)(MiniPalette)
