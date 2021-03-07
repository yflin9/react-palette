import React, { useState } from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import PaletteFormNav from "./PaletteFormNav"
import Drawer from "@material-ui/core/Drawer"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import DraggableColorList from "./DraggableColorList"
import { ChromePicker } from "react-color"
import { arrayMove } from "react-sortable-hoc"

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))

const NewPaletteForm = ({ history, palettes, savePalette, maxColor }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [currentColor, setCurrentColor] = useState("black")
  const [colors, setColors] = useState(palettes[0].colors)
  const [name, setName] = useState("black")
  const [validation, setValidation] = useState({
    error: false,
    label: "Name",
    helperText: "Enter Color Name",
  })
  const paletteIsFull = colors.length >= maxColor

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const updateColor = (newColor) => {
    setCurrentColor(newColor.hex)
  }

  const addNewColor = () => {
    if (
      colors.find((color) => color.name.toLowerCase() === name.toLowerCase())
    ) {
      setValidation({
        error: true,
        label: "Error",
        helperText: "Color name must be unique",
      })
    } else if (colors.find((color) => color.color === currentColor)) {
      setValidation({
        error: true,
        label: "Error",
        helperText: "Color must be unique",
      })
    } else {
      const newColor = { color: currentColor, name }
      setColors([...colors, newColor])
      setValidation({
        error: false,
        label: "Name",
        helperText: "Enter Color Name",
      })
    }
  }

  const addRandomColor = () => {
    const allColors = palettes.map((p) => p.colors).flat()
    const randomColor = allColors[Math.floor(Math.random() * allColors.length)]
    colors.find(
      (color) => color.name.toLowerCase() === randomColor.name.toLowerCase()
    )
      ? addRandomColor()
      : setColors([...colors, randomColor])
  }

  const removeColor = (colorName) => {
    setColors(colors.filter((color) => color.name !== colorName))
  }

  const clearPalette = () => {
    setColors([])
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleSavePalette = (newPalette) => {
    savePalette(newPalette)
    history.push("/")
  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex))
  }

  return (
    <div className={classes.root}>
      <PaletteFormNav
        palettes={palettes}
        history={history}
        colors={colors}
        open={open}
        drawerWidth={drawerWidth}
        handleDrawerOpen={handleDrawerOpen}
        handleSavePalette={handleSavePalette}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h4">Design your Palette</Typography>

        <Button variant="contained" color="secondary" onClick={clearPalette}>
          Clear Palette
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={paletteIsFull}
          onClick={addRandomColor}
        >
          Random Color
        </Button>
        <ChromePicker color={currentColor} onChangeComplete={updateColor} />

        <TextField
          error={validation.error}
          label={validation.label}
          value={name}
          helperText={validation.helperText}
          onChange={handleNameChange}
          variant="outlined"
        />

        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: paletteIsFull ? "#eee" : currentColor }}
          disabled={paletteIsFull}
          onClick={addNewColor}
        >
          {paletteIsFull ? "Palette Full" : "Add Color"}
        </Button>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        <DraggableColorList
          colors={colors}
          removeColor={removeColor}
          axis="xy"
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  )
}

NewPaletteForm.defaultProps = {
  maxColor: 20,
}

export default NewPaletteForm
