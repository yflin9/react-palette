import React from "react"
import MiniPalette from "./MiniPalette"
import { withStyles } from "@material-ui/styles"

const styles = {
  root: {
    backgroundColor: "pink",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    color: "white",
  },
  palettes: {
    width: "100%",
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
}
const PaletteList = ({ classes, palettes, history }) => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>Colorlogo</h1>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => (
            <MiniPalette
              {...palette}
              key={palette.id}
              handleClick={() => history.push(`/palette/${palette.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(PaletteList)
