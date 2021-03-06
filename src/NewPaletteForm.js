import React, { useState } from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
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
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
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

const NewPaletteForm = ({ history, palettes, savePalette }) => {
  const classes = useStyles()
  // const theme = useTheme()
  const [open, setOpen] = useState(false)
  const [currentColor, setCurrentColor] = useState("black")
  const [colors, setColors] = useState([])
  const [name, setName] = useState("black")
  const [validation, setValidation] = useState({
    error: false,
    label: "Name",
    helperText: "Enter Color Name",
  })
  const [pname, setPname] = useState("Palette Name")
  const [pvalidation, setPvalidation] = useState({
    error: false,
    label: "Name",
    helperText: "Enter Palette Name",
  })

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

  const removeColor = (colorName) => {
    setColors(colors.filter((color) => color.name !== colorName))
  }

  const addNewPalette = () => {
    if (
      palettes.find(
        (palette) => palette.paletteName.toLowerCase() === pname.toLowerCase()
      )
    ) {
      setPvalidation({
        error: true,
        label: "Error",
        helperText: "Palette name must be unique",
      })
    } else if (pname.toLowerCase().replace(/ /g, "") === "") {
      setPvalidation({
        error: true,
        label: "Error",
        helperText: "Palette name must not be empty",
      })
    } else {
      handleSavePalette()
    }
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleSavePalette = () => {
    const newPalette = {
      paletteName: pname,
      id: pname.toLowerCase().replace(/ /g, "-"),
      emoji: "🎨",
      colors: colors,
    }
    savePalette(newPalette)
    history.push("/")
  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex))
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
          <TextField
            error={pvalidation.error}
            label={pvalidation.label}
            helperText={pvalidation.helperText}
            onChange={(e) => setPname(e.target.value)}
            variant="outlined"
          />
          <Button variant="contained" color="primary" onClick={addNewPalette}>
            Save Palette
          </Button>
        </Toolbar>
      </AppBar>
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

        <Button variant="contained" color="secondary">
          Clear Palette
        </Button>
        <Button variant="contained" color="primary">
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
          style={{ backgroundColor: currentColor }}
          onClick={addNewColor}
        >
          Add Color
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

export default NewPaletteForm
