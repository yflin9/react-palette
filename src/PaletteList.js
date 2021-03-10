import React from "react"
import { Link } from "react-router-dom"
import MiniPalette from "./MiniPalette"
import AddBoxIcon from "@material-ui/icons/AddBox"
import { CSSTransition, TransitionGroup } from "react-transition-group"
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

        <TransitionGroup className={classes.palettes}>
          {palettes.map((palette) => (
            <CSSTransition
              key={palette.id}
              timeout={350}
              classNames="miniPalettes"
            >
              <MiniPalette
                {...palette}
                key={palette.id}
                paletteId={palette.id}
                handleClick={() => history.push(`/palette/${palette.id}`)}
                deletePalette={deletePalette}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  )
}

export default withStyles(styles)(PaletteList)
