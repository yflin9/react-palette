import React from "react"
import { Link } from "react-router-dom"
import MiniPalette from "./MiniPalette"
import AddBoxIcon from "@material-ui/icons/AddBox"
import { withStyles } from "@material-ui/styles"
import styles from "./styles/PaletteListStyles"

const PaletteList = ({ classes, palettes, deletePalette, history }) => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>Colorlogo</h1>
          <Link to="/palette/new">
            <AddBoxIcon className={classes.addIcon} />
          </Link>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => (
            <MiniPalette
              {...palette}
              key={palette.id}
              paletteId={palette.id}
              handleClick={() => history.push(`/palette/${palette.id}`)}
              deletePalette={deletePalette}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(PaletteList)
