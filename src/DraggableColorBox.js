import React from "react"
import { withStyles } from "@material-ui/styles"

const styles = {
  root: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    position: "relative",
    margin: "0 auto",
    marginBottom: "-3.5px",
  },
}

const DraggableColorBox = ({ name, color, classes }) => {
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div>{color}</div>
      <div>{name}</div>
    </div>
  )
}

export default withStyles(styles)(DraggableColorBox)
