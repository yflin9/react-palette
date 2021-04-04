import React from "react"
import { SortableElement } from "react-sortable-hoc"
import DeleteIcon from "@material-ui/icons/Delete"
import useStyles from "./styles/DraggableColorBoxStyles"

const DraggableColorBox = SortableElement(({ name, color, handleRemove }) => {
  const classes = useStyles()
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleRemove} />
      </div>
    </div>
  )
})

export default DraggableColorBox
