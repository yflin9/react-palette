import React, { useState } from "react"
import { Link } from "react-router-dom"
import Slider from "rc-slider"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Snackbar from "@material-ui/core/Snackbar"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"

import "rc-slider/assets/index.css"
import "./Navbar.css"

const Navbar = ({ level, setLevel, changeFormat, showSlider }) => {
  const [format, setFormat] = useState("hex")
  const [open, setOpen] = useState(false)

  const handleFormatChange = (e) => {
    changeFormat(e.target.value)
    setFormat(e.target.value)
    setOpen(true)
  }

  return (
    <nav className="Navbar">
      <div className="logo">
        <Link to="/">Colorlogo</Link>
      </div>
      {showSlider && (
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
      )}
      <div className="select-container">
        <Select value={format} onChange={handleFormatChange}>
          <MenuItem value="hex">HEX - </MenuItem>
          <MenuItem value="rgb">RGB - </MenuItem>
          <MenuItem value="rgba">RGBA - </MenuItem>
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

export default Navbar
