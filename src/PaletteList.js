import React from "react"
import MiniPalette from "./MiniPalette"
import { withStyles } from "@material-ui/styles"
import styles from "./styles/PaletteListStyles"

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
