import React, { useState } from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import SavePaletteDialog from "./SavePaletteDialog"

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
  toolBar: {
    justifyContent: "space-between",
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  navBtns: {
    display: "flex",
    alignItems: "center",
    "&>*": {
      marginLeft: "1rem",
    },
  },
}))

const PaletteFormNav = ({
  palettes,
  history,
  colors,
  open,
  handleDrawerOpen,
  handleSavePalette,
}) => {
  const [name, setName] = useState("Palette Name")
  const [validation, setValidation] = useState({
    error: false,
    label: "Name",
    helperText: "Enter Palette Name",
  })
  const [showEmoji, setShowEmoji] = useState(false)
  const classes = useStyles()

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const resetForm = () => {
    setValidation({
      error: false,
      label: "Name",
      helperText: "Enter Palette Name",
    })
  }

  const addNewPalette = () => {
    if (
      palettes.find(
        (palette) => palette.paletteName.toLowerCase() === name.toLowerCase()
      )
    ) {
      setValidation({
        error: true,
        label: "Error",
        helperText: "Palette name must be unique",
      })
    } else if (name.toLowerCase().replace(/ /g, "") === "") {
      setValidation({
        error: true,
        label: "Error",
        helperText: "Palette name must not be empty",
      })
    } else {
      setShowEmoji(true)
    }
  }

  const handleSaveEmoji = (emoji) => {
    handleSavePalette({
      paletteName: name,
      id: name.toLowerCase().replace(/ /g, "-"),
      emoji: emoji,
      colors: colors,
    })
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
        <Toolbar className={classes.toolBar}>
          <div className={classes.title}>
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
              Create a palette
            </Typography>
          </div>
          <div className={classes.navBtns}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => history.push("/")}
            >
              Go Back
            </Button>
            <SavePaletteDialog
              validation={validation}
              handleChange={handleChange}
              addNewPalette={addNewPalette}
              resetForm={resetForm}
              showEmoji={showEmoji}
              handleSaveEmoji={handleSaveEmoji}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default PaletteFormNav
