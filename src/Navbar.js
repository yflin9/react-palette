import React, { useState } from "react"
import { Link } from "react-router-dom"
import Slider from "rc-slider"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Snackbar from "@material-ui/core/Snackbar"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import { withStyles } from "@material-ui/styles"

import styles from "./styles/NavbarStyles"
import "rc-slider/assets/index.css"

const Navbar = ({
  level,
  handleLevelChange,
  changeFormat,
  showSlider,
  classes,
}) => {
  const [format, setFormat] = useState("hex")
  const [open, setOpen] = useState(false)

  const handleFormatChange = (e) => {
    changeFormat(e.target.value)
    setFormat(e.target.value)
    setOpen(true)
  }

  return (
    <nav className={classes.Navbar}>
      <div className={classes.logo}>
        <Link to="/">Colorlogo</Link>
      </div>
      {showSlider && (
        <div>
          <span>Brightness Level: {level}</span>
          <div className={classes.slider}>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={handleLevelChange}
            />
          </div>
        </div>
      )}
      <div className={classes.selectContainer}>
        <Select value={format} onChange={handleFormatChange}>
          <MenuItem value="hex">HEX - #000000</MenuItem>
          <MenuItem value="rgb">RGB - (0, 0, 0)</MenuItem>
          <MenuItem value="rgba">RGBA - (0, 0, 0, 1)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={3000}
        message={<span>Format Changed to {format.toUpperCase()}!</span>}
        onClose={() => setOpen(false)}
        action={[
          <IconButton
            key="close"
            color="inherit"
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </nav>
  )
}

export default withStyles(styles)(Navbar)
