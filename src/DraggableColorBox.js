import React from "react"
import { makeStyles } from "@material-ui/styles"
import { SortableElement } from "react-sortable-hoc"
import DeleteIcon from "@material-ui/icons/Delete"

const useStyles = makeStyles(() => ({
  root: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    position: "relative",
    margin: "0 auto",
    marginBottom: "-3.5px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)",
      transition: "0.25s ease-in",
    },
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    bottom: "0",
    left: "0",
    padding: "10px",
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    color: "rgba(0, 0, 0, 0.5)",
    transform: "scale(1)",
    transition: "0.25s ease-out",
    "&:hover": {
      cursor: "pointer",
    },
  },
}))

const DraggableColorBox = SortableElement(({ name, color, handleClick }) => {
  const classes = useStyles()
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
      </div>
    </div>
  )
})

export default DraggableColorBox
